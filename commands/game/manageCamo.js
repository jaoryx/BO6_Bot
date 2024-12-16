const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('managecamo')
		.setDescription('Shows a select menu to update your camos for a certain weapon'),
	async execute(interaction) {
        
	},
};