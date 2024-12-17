const { Events, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ActionRowBuilder } = require('discord.js');
 
module.exports = {
    name: Events.InteractionCreate,
    once: false,
    async execute(interaction, client) {
        if (!interaction.isStringSelectMenu()) return;

        let userSelectReplies = client.stringSelectReplies[interaction.user.id];

        if (!userSelectReplies || userSelectReplies.msg.id !== interaction.message.id) {
            return interaction.reply({ content: `You cannot interact with someone elses command!`, ephemeral: true });
        }

        await interaction.deferUpdate(); 

        if (interaction.customId === 'weaponSelect') {
            userSelectReplies.weapon = interaction.values[0];

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
            let content = `**Weapon:** ${interaction.values[0]}`;

            userSelectReplies.msg.edit({ content, components });
        } else if (interaction.customId === 'modeSelect') {
            userSelectReplies.mode = interaction.values[0];

            let weapon = client.weapons.find(el => el.weaponName === userSelectReplies.weapon);
            let camos = weapon.camos.filter(el => el.camoType === interaction.values[0]);

            let selectCamo = new StringSelectMenuBuilder()
                .setCustomId('camoSelect')
                .setPlaceholder(`Select a camo for the ${weapon.weaponName}`);

            for (let index = 0; index < camos.length; index++) {
                selectCamo.addOptions(new StringSelectMenuOptionBuilder()
                    .setLabel(camos[index].camoName)
                    .setDescription(camos[index].camoRequirement)
                    .setValue(camos[index].camoName)
                );
            }

            let components = [new ActionRowBuilder().setComponents(selectCamo)];
            let content = `**Weapon:** ${userSelectReplies.weapon}\n**Gamemode:** ${userSelectReplies.mode}`;

            userSelectReplies.msg.edit({ content, components });
        } else if (interaction.customId === 'camoSelect') {
            userSelectReplies.camo = interaction.values[0];

            let content = `**Weapon:** ${userSelectReplies.weapon}\n**Gamemode:** ${userSelectReplies.mode}\n**Camo:** ${userSelectReplies.camo}`;

            userSelectReplies.msg.edit({ content, components: [] });
        }
    },
};