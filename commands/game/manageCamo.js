const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('manageCamo')
		.setDescription('Shows a little form to update your camos for a certain weapon'),
	async execute(interaction) {
        
	},
};