const dotenv = require("dotenv");
const axios = require("axios");
const { getUser } = require("./getUser.js");

dotenv.config();

var liveObject;

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
            // console.log(response.data.data[0]);
            // isLive = response.data.data[0] != undefined ? true : false;
            // if (isLive == undefined) {
            //     isLive = false;
            // }
            liveObject = response.data.data[0];
            // // console.log(isLive);
            // // return response.data.data[0];
        });
    });
    return liveObject;
};

module.exports.checkIfLive = checkIfLive;
