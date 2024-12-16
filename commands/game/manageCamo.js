const { SlashCommandBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('managecamo')
		.setDescription('Shows a select menu to update your camos for a certain weapon'),
	async execute(interaction) {
		let components = [];

        let selectWeaponMenu = new StringSelectMenuBuilder()
			.setCustomId('weaponSelect1')
			.setPlaceholder('Select a weapon you want to change camos from');
		
		let limit = 25;
		if (interaction.client.weapons.length <= 25) limit = interaction.client.weapons.length;

		for (let index = 0; index < limit; index++) {
			selectWeaponMenu.addOptions(new StringSelectMenuOptionBuilder()
				.setLabel(interaction.client.weapons[index].weaponName)
				.setValue(interaction.client.weapons[index].weaponName)
				.setDescription(interaction.client.weapons[index].weaponType)
			);
		}

		components.push(new ActionRowBuilder().addComponents(selectWeaponMenu));

		if (interaction.client.weapons.length > limit)
		{
			components.push(new ActionRowBuilder().addComponents(new ButtonBuilder().setCustomId('weaponsPage2').setLabel('Page 2').setStyle(ButtonStyle.Primary)));
		}

		await interaction.reply({ components });
	},
};