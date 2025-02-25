const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	async execute(client) {
		client.stringSelectReplies = []; // This is for the manageCamo command
		client.weaponDetails = []; // This is for the addWeapon command
		client.weapons = await client.GetWeapons();
		client.Log(`Weapons loaded!`);
		client.Log(`Ready! Logged in as ${client.user.tag}`);
	}
};