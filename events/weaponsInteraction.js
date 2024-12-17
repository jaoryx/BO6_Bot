const { Events, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ActionRowBuilder } = require('discord.js');
 
module.exports = {
    name: Events.InteractionCreate,
    once: false,
    async execute(interaction, client) {
        if (!interaction.isStringSelectMenu()) return;
        await interaction.deferUpdate();

        if (interaction.customId === 'weaponSelect') {
            client.stringSelectReplies[interaction.user.id].weapon = interaction.values[0];

            let selectMode = new StringSelectMenuBuilder()
                .setCustomId('modeSelect')
                .setPlaceholder('Select a gamemode')
                .addOptions(
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Multiplayer')
                        .setDescription('Change a camo for multiplayer')
                        .setValue('Multiplayer'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Zombies')
                        .setDescription('Change a camo for zombies')
                        .setValue('Zombies'),
                        
                );

            let components = [new ActionRowBuilder().setComponents(selectMode)];

            client.stringSelectReplies[interaction.user.id].msg.edit({ components });
        } else if (interaction.customId === 'modeSelect') {
            
        }
    },
};