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

        const response = await axios.get("https://api.twitch.tv/helix/users?login=" + username, config).then((response) => {
            return response.data.data[0].id;
            // console.log(userId);
            // handle this promise and return the user ID
            // return Promise.resolve(userId);
        });
    } catch (error) {
        console.log("error " + error);
    }
};

module.exports.getUser = async function (username) {
    await getUser(username);
};
