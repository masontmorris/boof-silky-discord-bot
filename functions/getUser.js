const dotenv = require("dotenv");
const axios = require("axios");
dotenv.config();

var getUser;
var userId;

getUser = async function (username) {
    try {
        const config = {
            headers: {
                Authorization: "Bearer " + process.env.TWITCH_ACCESS_TOKEN,
                "Client-Id": process.env.TWITCH_CLIENT_ID,
                "Content-Type": "application/json",
            },
        };

        const userData = await axios.get("https://api.twitch.tv/helix/users?login=" + username, config);
        // console.log(userData.data.data[0].id);
        return userData.data.data[0].id;
    } catch (error) {
        console.log("error " + error);
    }
};

module.exports.getUser = getUser;
