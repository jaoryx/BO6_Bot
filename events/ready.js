const { Events } = require('discord.js');
//const initializeCamos = require('../modules/initializeCamos');
//const initializeWeapons = require('../modules/initializeWeapons');

module.exports = {
	name: Events.ClientReady,
	once: true,
	async execute(client) {
		client.stringSelectReplies = [];
		client.weapons = await client.GetWeapons();
		client.Log(`Weapons loaded!`);
		client.Log(`Ready! Logged in as ${client.user.tag}`);
		// ONLY HAPPENS ONCE THE FIRST TIME THE BOT EVER BOOTS
		//initializeCamos(client);
		//initializeWeapons(client);
	}
};