const { Events } = require('discord.js');
const initializeWeapons = require('../modules/initializeWeapons');

module.exports = {
	name: Events.ClientReady,
	once: true,
	async execute(client) {
		client.Log(`Ready! Logged in as ${client.user.tag}`);

		// ONLY HAPPENS ONCE THE FIRST TIME THE BOT EVERY BOOTS
		//initializeWeapons(client);
	}
};