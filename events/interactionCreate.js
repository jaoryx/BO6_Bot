const { Events } = require('discord.js');
 
module.exports = {
	name: Events.InteractionCreate,
	once: false,
	async execute(interaction, client) {
		if (!interaction.isChatInputCommand()) return;

        const command = client.commands.get(interaction.commandName);

        if (!command) return;

        try {     
            await command.execute(interaction);
        } catch (error) {
            console.log(error)
            client.Log(`[ERROR]: Error in interactionCreate (while executing ${interaction.commandName}): \n${error}`);
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
            } else {
                await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
            }
        }
	},
};