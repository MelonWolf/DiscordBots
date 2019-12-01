const Discord = require('C:/Users/Jannik/node_modules/discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login('NjUwMTEyMDE1NDMxMzY4NzQ0.XeKhCw.KFRiFACw1UGYBD_MyqKQmJlhEu4');
