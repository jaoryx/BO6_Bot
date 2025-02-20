const { SlashCommandBuilder, ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('addweapon')
		.setDescription('Gives you the ability to add a new weapon to the database')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
	async execute(interaction) {
        const weaponModal = new ModalBuilder()
            .setCustomId('addWeaponModal')
            .setTitle('Add a new weapon');

        const weaponName = new TextInputBuilder()
            .setCustomId('weaponName')
            .setPlaceholder('Enter the weapon name')
            .setLabel('Weapon Name')
            .setRequired(true)
            .setStyle(TextInputStyle.Short);

        const weaponType = new TextInputBuilder()
            .setCustomId('weaponType')
            .setPlaceholder('Enter the weapon type')
            .setLabel('Weapon Type')
            .setRequired(true)
            .setStyle(TextInputStyle.Short);

        const weaponRow = new ActionRowBuilder().addComponents(weaponName);
        const typeRow = new ActionRowBuilder().addComponents(weaponType);

        weaponModal.addComponents(weaponRow, typeRow);

        await interaction.showModal(weaponModal);
    }
}