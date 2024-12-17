const { SlashCommandBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('managecamo')
		.setDescription('Shows a select menu to update your camos for a certain weapon'),
	async execute(interaction) {
		await interaction.deferReply();

		// Buttons Creation
		const prev = new ButtonBuilder()
			.setCustomId('prev')
			.setEmoji('⬅️')
			.setStyle(ButtonStyle.Primary)
			.setDisabled(true);

		const next = new ButtonBuilder()
			.setCustomId('next')
			.setEmoji('➡️')
			.setStyle(ButtonStyle.Primary);

		const buttons = new ActionRowBuilder().setComponents(prev, next);

		// Select menu's creation
        let selectWeaponMenu1 = new StringSelectMenuBuilder()
			.setCustomId('weaponSelect')
			.setPlaceholder('Select a weapon you want to change camos from');

		for (let index = 0; index < 25; index++) {
			selectWeaponMenu1.addOptions(new StringSelectMenuOptionBuilder()
				.setLabel(interaction.client.weapons[index].weaponName)
				.setValue(interaction.client.weapons[index].weaponName)
				.setDescription(interaction.client.weapons[index].weaponType)
			);
		}

		let selectWeaponMenu2 = new StringSelectMenuBuilder()
			.setCustomId('weaponSelect')
			.setPlaceholder('Select a weapon you want to change camos from');
		
		for (let index = 25; index < interaction.client.weapons.length; index++) {
			selectWeaponMenu2.addOptions(new StringSelectMenuOptionBuilder()
				.setLabel(interaction.client.weapons[index].weaponName)
				.setValue(interaction.client.weapons[index].weaponName)
				.setDescription(interaction.client.weapons[index].weaponType)
			);
		}

		let weaponSelectMenuRow1 = new ActionRowBuilder().setComponents(selectWeaponMenu1);
		let weaponSelectMenuRow2 = new ActionRowBuilder().setComponents(selectWeaponMenu2);

		// LOGIC
		let index = 0;

		const msg = await interaction.editReply({ components: [weaponSelectMenuRow1, buttons] });

		interaction.client.stringSelectReplies[interaction.user.id] = { weapon: "", mode: "", camo: "", msg };

		const btnCollector = await msg.createMessageComponentCollector({ componentType: ComponentType.Button, time: 60_000 });

		btnCollector.on('collect', async (i) => {
			if (i.user.id !== interaction.user.id) {
				return i.reply({ content: `You cannot use this button!`, ephemeral: true });
			}

			await i.deferUpdate();

			switch (i.customId) {
				case "prev":
					if (index > 0) index--;
					break;
				case "next":
					if (index < 1) index++;
					break;
			};

			let weaponSelectMenu;

			if (index === 0) {
				prev.setDisabled(true);
				next.setDisabled(false);
				weaponSelectMenu = weaponSelectMenuRow1;
			} else {
				prev.setDisabled(false);
				next.setDisabled(true);
				weaponSelectMenu = weaponSelectMenuRow2;
			}

			await msg.edit({ components: [weaponSelectMenu, buttons] });

			btnCollector.resetTimer();

			btnCollector.on("end", async () => {
				await msg.edit({ content: `Re-run the /managecamo command to add/remove a camo`, components: [] });
			});

			return msg;
		});
	},
};