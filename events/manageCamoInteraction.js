const { Events, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

const modes = {
    "Multiplayer": "mp",
    "Zombies": "zm"
}

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

        let userData = await client.GetUser(interaction.user.id);
        let weapon = userData[modes[userSelectReplies.mode]].find(el => el.weaponName == userSelectReplies.weapon);
        let camo = weapon.camos.find(el => el.camoName == userSelectReplies.camo);
        
        if (interaction.customId === 'addcamo') {
            camo.obtained = true;
        } else if (interaction.customId === 'removecamo') {
            camo.obtained = false;
        }

        await client.SaveUser(interaction.user.id, { mp: userData.mp, zm: userData.zm })
    },
};