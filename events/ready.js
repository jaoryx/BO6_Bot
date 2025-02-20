const { Events } = require('discord.js');

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
		client.stringSelectReplies = []; // This is for the manageCamo command
		client.weaponDetails = []; // This is for the addWeapon command
		client.weapons = await client.GetWeapons();
		client.weapons.sort((a, b) => {
			let indexA = weaponTypes.findIndex(el => el === a.weaponType);
			let indexB = weaponTypes.findIndex(el => el === b.weaponType);

			return indexA - indexB;
		});
		client.Log(`Weapons loaded!`);
		client.Log(`Ready! Logged in as ${client.user.tag}`);
	}
};