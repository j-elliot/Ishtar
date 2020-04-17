var Discord = require('discord.io');
var logger = require('winston');
var auth = require('../../offline/auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);

logger.add(new logger.transports.Console, {
    colorize: true
});

logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});

function wait(ms)
{
var d = new Date();
var d2 = null;
do { d2 = new Date(); }
while(d2-d < ms);
}

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt){
    logger.info('Running message subroutine with ' + message);
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (true)
    {
        logger.info('Responding... ' + message);
        var args = message.split(' ');
        var cmd = args[0];
        wait(2000);
        args = args.splice(1);
        if(message != "Kyle? I heard that guy's a bitch!")
        {
          if(message.toLowerCase().search("kyle") > -1)
          {
            bot.sendMessage({
                to: channelID,
                message: "Kyle? I heard that guy's a bitch!"
            });
          }
        }
        if(message != "Ardjen? You've got to be kidding me! Don't talk to me about Ardjen.")
        {
          if(message.toLowerCase().search("ardjen") > -1)
          {
            bot.sendMessage({
                to: channelID,
                message: "Ardjen? You've got to be kidding me! Don't talk to me about Ardjen."
            });
          }
        }
        switch(message.toLowerCase())
        {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: message.substring(1).split(' ')
                });
            break;
            case 'hello':
                bot.sendMessage({
                    to: channelID,
                    message: 'Hi!'
                });
            break;
            case 'how are you?':
                bot.sendMessage({
                    to: channelID,
                    message: 'same as always.'
                });
            break;
            // Just add any case commands if you want to..
         }

     }

});
