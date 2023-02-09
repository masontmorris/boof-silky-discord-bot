const { SlashCommandBuilder } = require ('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hellouser')
        .setDescription('Replies with a message to the user.'),
    async execute(interaction) {
        await interaction.reply('Hello, ' + interaction.user.username + '!');
    },
};