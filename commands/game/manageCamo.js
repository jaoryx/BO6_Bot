const { SlashCommandBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ActionRowBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('managecamo')
		.setDescription('Shows a select menu to update your camos for a certain weapon'),
	async execute(interaction) {
        let selectWeaponMenu = new StringSelectMenuBuilder()
			.setCustomId('weaponSelect')
			.setPlaceholder('Select a weapon you want to change camos from');
		
		for (let index = 0; index < interaction.client.weapons.length; index++) {
			selectWeaponMenu.addOptions(new StringSelectMenuOptionBuilder()
				.setLabel(interaction.client.weapons[index].weaponName)
				.setValue(interaction.client.weapons[index].weaponName)
				.setDescription(interaction.client.weapons[index].weaponType)
			);
		}

		const row = ActionRowBuilder().addComponents(selectWeaponMenu);

		await interaction.reply({ components: [row] });
	},
};