const Discord = require('C:/Users/Jannik/node_modules/discord.js');
const client = new Discord.Client();

client.on('ready', () =>{
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg =>{
  validateInput(msg.content);
});

function validateInput(strMessage){
  if(strMessage){
    if(strMessage.search(/^\!kick/i) || strMessage.search(/^\!k/i)){
      kickMember();
    } else if(strMessage.search(/^\!ban/i) || strMessage.search(/^\!b/i)){
      banMember();
    } else if(strMessage.search(/^\!channelkick/i) || strMessage.search(/^\!cb/i)){
      channelkickMember();
    }
  }
}

function kickMember(){

}

function banMember(){

}

function channelkickMember(){

}

client.login('NjUwMTEyMDE1NDMxMzY4NzQ0.XeKhCw.KFRiFACw1UGYBD_MyqKQmJlhEu4');
