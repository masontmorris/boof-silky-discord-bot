const dotenv = require('dotenv')
const axios = require('axios');
dotenv.config();


axios.post('https://id.twitch.tv/oauth2/token', {
    client_id: process.env.TWITCH_CLIENT_ID,
    client_secret: process.env.TWITCH_CLIENT_SECRET,
    grant_type: 'client_credentials'
})
  .then(function (response) {
    console.log(response);
})
.catch((e) {
    console.log(e);
});

axios.get('https://api.twitch.tv/helix/search/channels?query=loserfruit', {
    headers: {
      'Client-Id': 'iwnng4cs84csy2v5ueo69y',
      'Authorization': 'Bearer 1n44alq5a9n4e9oz8j4'
}})
  .then(function (response) {
    console.log(response);
})
.catch((e) {
    console.log(e);
});
