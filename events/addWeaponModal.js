const { Events, ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ButtonBuilder, ButtonStyle } = require('discord.js');
 
module.exports = {
    name: Events.InteractionCreate,
    once: false,
    async execute(interaction, client) {
        if (!interaction.isModalSubmit() && !interaction.isButton()) return;

        if (interaction.customId === 'addWeaponModal') {
            const weaponName = interaction.fields.getTextInputValue('weaponName');
            const weaponType = interaction.fields.getTextInputValue('weaponType');

            client.weaponDetails[interaction.user.id] = { name: weaponName, type: weaponType };

            const addCamosButton = new ButtonBuilder()
                .setCustomId('addCamosButton')
                .setLabel('Add Special Camos')
                .setStyle(ButtonStyle.Primary);

            const addCamosRow = new ActionRowBuilder().addComponents(addCamosButton);

            await interaction.reply({ content: `Currently adding ${weaponName}!`, components: [addCamosRow], ephemeral: true });
        } else if(interaction.customId === 'addCamosButton') {
            const weaponDetails = client.weaponDetails[interaction.user.id];

            const camoModal = new ModalBuilder()
                .setCustomId('addCamosModal')
                .setTitle(`Add the special camos for ${weaponDetails.name}`);

            let textFields = [];
        
            textFields.push(
                new TextInputBuilder()
                    .setCustomId('camo1name')
                    .setPlaceholder('Enter the first special camo name')
                    .setLabel('Camo name')
                    .setRequired(true)
                    .setStyle(TextInputStyle.Short),
        
                new TextInputBuilder()
                    .setCustomId('camo1desc')
                    .setPlaceholder('Enter the requirement for the first special camo')
                    .setLabel('Camo requirement')
                    .setRequired(true)
                    .setStyle(TextInputStyle.Paragraph),

                new TextInputBuilder()
                    .setCustomId('camo2name')
                    .setPlaceholder('Enter the second special camo name')
                    .setLabel('Camo name')
                    .setRequired(true)
                    .setStyle(TextInputStyle.Short),
        
                new TextInputBuilder()
                    .setCustomId('camo2desc')
                    .setPlaceholder('Enter the second for the first special camo')
                    .setLabel('Camo requirement')
                    .setRequired(true)
                    .setStyle(TextInputStyle.Paragraph)
            );
        
            let rows = [];

            textFields.forEach(txtField => {
                rows.push(new ActionRowBuilder().addComponents(txtField));
            });

            camoModal.addComponents(rows);

            await interaction.showModal(camoModal);
        }
    },
};