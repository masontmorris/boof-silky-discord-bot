const { SlashCommandBuilder } = require ("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('igotoptions')
        .setDescription('Command that has options!')
        .addUserOption(option => 
            option
                .setName('target')
                .setDescription('The user you want to greet.')
                .setRequired(true))
        .addStringOption(option =>
            option
                .setName('greeting')
                .setDescription('The greeting you want to use.')
                .setRequired(true)),
    async execute(interaction) {
        const user = interaction.options.getUser('target');
        const greeting = interaction.options.getString('greeting');
        await interaction.reply(`${greeting}, ${user.username}!`);
    },
};
