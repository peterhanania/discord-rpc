

/*

Please read https://github.com/peterhanania/discord-rpc for a detailed tutorial.
If you liked this repository, feel free to leave a star ⭐!

*/


var rpc = require("discord-rpc");
const config = require('./config.json');

const client = new rpc.Client({ transport: 'ipc' });

client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "A simple discord-rpc", // the description shown on your profile
assets : {
large_image : "image", // the image you put in rich presence and which will show on your profile
large_text : "Hover me" // the text that will show once the imaged is hivered
},
buttons : [{label : "Button1" , url : "https://github.com/peterhanania/discord-rpc"},{label : "Button2",url : "https://github.com/peterhanania/discord-rpc"}] // buttons in your profile
}
})
});

client.login({ clientId :  config.client_id});
console.log(' --| Im ready |--')
