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

		let amountOfStringSelectMenus = Math.ceil(interaction.client.weapons.length / 25);
		let actionRows = [];

		for (let i = 0; i < amountOfStringSelectMenus; i++) {
			let selectMenu = new StringSelectMenuBuilder()
				.setCustomId('weaponSelect')
				.setPlaceholder('Select a weapon you want to change camos from');

			let forLimit = i === (amountOfStringSelectMenus - 1) ? interaction.client.weapons.length : (25 * i) + 25;

			for (let index = 25 * i; index < forLimit; index++) {
				selectMenu.addOptions(new StringSelectMenuOptionBuilder()
					.setLabel(interaction.client.weapons[index].weaponName)
					.setValue(interaction.client.weapons[index].weaponName)
					.setDescription(interaction.client.weapons[index].weaponType)
				);
			}

			actionRows.push(new ActionRowBuilder().setComponents(selectMenu));
		}

		// LOGIC
		let index = 0;

		const msg = await interaction.editReply({ components: [actionRows[0], buttons] });

		interaction.client.stringSelectReplies[interaction.user.id] = { weapon: "", mode: "", camo: "", msg };

		const btnCollector = await msg.createMessageComponentCollector({ componentType: ComponentType.Button, time: 60_000 });

		btnCollector.on('collect', async (i) => {
			if (i.user.id !== interaction.user.id) {
				return i.reply({ content: `You cannot interact with someone elses command!`, ephemeral: true });
			}

			if (i.customId !== 'prev' && i.customId !== 'next') return;

			await i.deferUpdate();

			switch (i.customId) {
				case "prev":
					if (index > 0) index--;
					break;
				case "next":
					if (index < actionRows.length - 1) index++;
					break;
			};

			if (index === 0) {
				prev.setDisabled(true);
				next.setDisabled(false);
			} else if (index == actionRows.length - 1) {
				prev.setDisabled(false);
				next.setDisabled(true);
			}

			await msg.edit({ components: [actionRows[index], buttons] });

			btnCollector.resetTimer();

			btnCollector.on("end", async () => {
				await msg.edit({ content: `Re-run the /managecamo command to add/remove a camo`, components: [] });
			});

			return msg;
		});
	},
};