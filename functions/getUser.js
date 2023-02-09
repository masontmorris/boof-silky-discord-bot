const dotenv = require('dotenv')
const axios = require('axios');
dotenv.config();

(async () => {
    try {
        const config = {
            headers: {
                'Authorization': 'Bearer qtayz84fmjo6ql0oqxotejlfbwo7rl',
                'Client-Id': process.env.TWITCH_CLIENT_ID,
                "Content-Type": "application/json"
                
            }
            
        }

    const response = await axios.get('https://api.twitch.tv/helix/users?login=silkyyy_johnson', config).then(function(response) {
        console.log(response)

    })
    } catch (error) {
        console.log('error ' + error);
    }
})();
