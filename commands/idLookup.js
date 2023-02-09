const { SlashCommandBuilder } = require("discord.js");
const { getUser } = require("../functions/getUser.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("idlookup")
        .setDescription("Looks up the ID of a Twitch account given its username.")
        .addStringOption((option) => option.setName("username").setDescription("The username of the Twitch channel you want to look up.").setRequired(true)),
    async execute(interaction) {
        const username = interaction.options.getString("username");
        console.log("Looking up ID for user: " + username);
        try {
            await getUser(username)
                .then((user) => {
                    console.log(user);
                    const userId = user;
                    interaction.reply(`${userId}`);
                    return userId;
                })
                .then((userId) => {
                    console.log(`User ID: ${userId}`);
                });
        } catch (error) {
            console.error(error);
            await interaction.reply("An error occurred while looking up the user ID.");
        }
    },
};
