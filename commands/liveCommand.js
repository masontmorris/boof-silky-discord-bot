const { SlashCommandBuilder } = require("discord.js");
const { checkIfLive } = require("../functions/checkIfLive.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("live")
        .setDescription("Checks if a Twitch channel is live.")
        .addStringOption((option) => option.setName("username").setDescription("The username of the Twitch channel you want to look up.").setRequired(true)),
    async execute(interaction) {
        const username = interaction.options.getString("username");
        console.log("Looking up if " + username + " is live.");

        var response = await checkIfLive(username);
        console.log(response);
        if (response == false) {
            await interaction.reply(username + " is not live.");
        } else {
            await interaction.reply(username + " is live.");
        }
    },
};
