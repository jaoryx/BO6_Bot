const { Events } = require('discord.js');
 
module.exports = {
    name: Events.InteractionCreate,
    once: false,
    async execute(interaction, client) {
        if (!interaction.isButton() && !interaction.isStringSelectMenu()) return;

        if (interaction.isButton()) {
            if (interaction.customId === 'weaponsPage2') {
                
            }
        } else {

        }
    },
};