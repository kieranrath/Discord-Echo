const Discord = require('discord.js');
const config = require('./config.json');

if ( isEmpty(config.token) || isEmpty(config.channelID) || isEmpty(config.webhookURL) ){
    console.log("ensure your config.json fields are filled out properly, view the faq and the config.json.example")
}

var bot = new Discord.Client();
bot.login(config.token);

//v11 of discord.js requires the webhookID and webhookToken to be split instead of passing the complete url
// split contents of the url and use the webhookID and webhookToken to create the webhook, the last two elements of the 
//webhookdata array will be the ID and token

let webhookData = config.webhookURL.split('/')
let webhookToken = webhookData.splice(webhookData.length -1)
let webhookID = webhookData.splice(webhookData.length -1)

const webhook = new Discord.WebhookClient(webhookID, webhookToken);

bot.on('ready', function() 
{
    console.log('Connected as ' + bot.user.tag + ', awaiting messages...');
});

bot.on('message', function (message) {

    if (message.channel.id == config.channelID &&  !message.author.bot ){
        
        console.log(`#${message.channel.name} ${message.author.username}: ${message.content}`);
        var contents = `${message.content}`;

        // Check for attachments - Iterate through the attachment array and add the url to the content
        // then sends the webhook of the message contents to the channel you've provided the webhook ID for
        var attachArray = message.attachments.array();
        if (attachArray.length > 0) {
            attachArray.forEach(element => contents += '\n' + element.url);
        }

        webhook.send(contents, {
            username: message.member.user.tag,
            avatarURL: message.member.user.avatarURL
        });   
    }
});

bot.on('error', function (error) {
    console.log(error);
});

function isEmpty(str){
    return (!str || str.length === 0);
}