const { Events } = require('discord.js');

const modes = {
    "Multiplayer": "mp",
    "Zombies": "zm"
}

const camoIndexes = {
    1: [0, 1],
    2: [0, 1, 2],
    3: [0, 1, 2, 3],
    4: [0, 1, 2, 3, 4],
    5: [0, 1, 2, 3, 4, 5],
    6: [0, 1, 2, 3, 4, 5, 6],
    7: [0, 1, 2, 3, 4, 5, 6, 7],
    8: [0, 1, 2, 3, 4, 5, 6, 7, 8], // Unlocks all Military camo's and below
    9: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], // Unlocks Special camo + all Military's
    10: [0, 1, 2, 3, 4, 5, 6, 7, 8, 10], // Unlocks Special camo + all Military's
    11: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Unlocks Gold + all below
    12: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], // Unlocks Diamond + all below
    13: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], // Unlocks Dark Spine + all below
    14: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], // Unlocks Dark Matter + all below
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
        let camoIndex = weapon.camos.findIndex(el => el.camoName == userSelectReplies.camo);
        
        let camoIndexesToUnlock = camoIndexes[camoIndex];

        let msg = ``;

        if (interaction.customId === 'addcamo') {
            camoIndexesToUnlock.forEach(index => {
                weapon.camos[index].obtained = true;
            });
            //camo.obtained = true;
            msg = `The **${userSelectReplies.camo}** camo and the camo's below for the ${weapon.weaponType} **${userSelectReplies.weapon}** has been added to your profile!`;
        } else if (interaction.customId === 'removecamo') {
            camo.obtained = false;
            msg = `The **${userSelectReplies.camo}** camo for the ${weapon.weaponType} **${userSelectReplies.weapon}** has been removed from your profile!`;
        }

        await userSelectReplies.msg.edit({ content: msg, components: [] });
        await client.SaveUser(interaction.user.id, { mp: userData.mp, zm: userData.zm })
    },
};