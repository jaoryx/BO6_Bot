const { Events, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
 
module.exports = {
    name: Events.InteractionCreate,
    once: false,
    async execute(interaction, client) {
        if (!interaction.isButton()) return;

        let userSelectReplies = client.stringSelectReplies[interaction.user.id];

        if (!userSelectReplies || userSelectReplies.msg.id !== interaction.message.id) {
            return interaction.reply({ content: `You cannot interact with someone elses command!`, ephemeral: true });
        }

        await interaction.deferUpdate(); 

        if (interaction.customId === 'addcamo') {
            console.log(userSelectReplies);
        } else if (interaction.customId === 'removecamo') {
            
        }
    },
};