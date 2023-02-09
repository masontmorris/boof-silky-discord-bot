const { SlashCommandBuilder } = require("discord.js");
const { getUser } = require("../functions/getUser.js");

var user;

module.exports = {
    data: new SlashCommandBuilder()
        .setName("idlookup")
        .setDescription("Looks up the ID of a Twitch account given its username.")
        .addStringOption((option) => option.setName("username").setDescription("The username of the Twitch channel you want to look up.").setRequired(true)),
    async execute(interaction) {
        const username = interaction.options.getString("username");
        console.log("Looking up ID for user: " + username);

        var response = await getUser(username);
        console.log(response);

        await interaction.reply("The ID for " + username + " is " + response + ".");
    },
};
