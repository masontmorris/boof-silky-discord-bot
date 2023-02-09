const dotenv = require("dotenv");
const axios = require("axios");
const { getUser } = require("./getUser.js");

dotenv.config();

var checkIfLive = async function (username) {
    getUser(username).then((userId) => {
        console.log("Looking up if " + username + " is live.");
        const config = {
            headers: {
                Authorization: "Bearer " + process.env.TWITCH_ACCESS_TOKEN,
                "Client-Id": process.env.TWITCH_CLIENT_ID,
                "Content-Type": "application/json",
            },
        };

        axios.get("https://api.twitch.tv/helix/streams?user_id=" + userId, config).then((response) => {
            console.log(response.data.data[0]);
            if (response.data.data[0] == undefined) {
                console.log("User is not live.");
                return false;
            } else {
                console.log("User is live.");
                return true;
            }
        });
    });
};

module.exports.checkIfLive = checkIfLive;
