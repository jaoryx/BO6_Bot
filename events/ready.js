const { Events } = require('discord.js');
//const initializeCamos = require('../modules/initializeCamos');
//const initializeWeapons = require('../modules/initializeWeapons');

const weaponTypes = [
	"Assault Rifle",
	"SMG",
	"Shotgun",
	"LMG",
	"Marksman Rifle",
	"Sniper Rifle",
	"Pistol",
	"Launcher",
	"Melee",
	"Special"
]

module.exports = {
	name: Events.ClientReady,
	once: true,
	async execute(client) {
		client.stringSelectReplies = [];
		client.weapons = await client.GetWeapons();
		client.weapons.sort((a, b) => {
			let indexA = weaponTypes.findIndex(el => el === a.weaponType);
			let indexB = weaponTypes.findIndex(el => el === b.weaponType);

			return indexA - indexB;
		});
		client.Log(`Weapons loaded!`);
		client.Log(`Ready! Logged in as ${client.user.tag}`);
		// ONLY HAPPENS ONCE THE FIRST TIME THE BOT EVER BOOTS
		//initializeCamos(client);
		//initializeWeapons(client);
	}
};