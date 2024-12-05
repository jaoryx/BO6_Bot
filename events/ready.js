const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	async execute(client) {
		client.Log(`Ready! Logged in as ${client.user.tag}`);

		client.AddWeaponType('test');
		client.AddWeaponType('test');
	},
};