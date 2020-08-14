var Discord = require('discord.io');
var logger = require('winston');
var auth = require('../../offline/auth.json');
var fs = require('fs');
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

function respond(dm)
{

  if(dm.userID != bot.id) {

    fs.writeFileSync('../textCom/input.json', JSON.stringify(dm));

    for(i = 500; i < 3000; i += 500){

      try {
        var rawdata = fs.readFileSync('../textCom/output.json');
        var response = JSON.parse(rawdata);
      }
      catch(err) {
        logger.info('Hesitating...');
        var response = {
          time: new Date()
        }
      }

      if(JSON.parse(JSON.stringify(dm)).time == response.time){

        return response.message;

      }

      wait(i);

    }

    return "I lost my train of thought...";

  }

}

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt){
    logger.info('Running message subroutine with ' + message);
    var discordMessage = {
      user: user,
      userID: userID,
      channelID: channelID,
      message: message,
      evt: evt,
      time: new Date()
    }
    // Our bot needs to know if it will execute a command
    if (true)
    {
      logger.info('Responding... ' + message);
      wait(2000);

      bot.sendMessage({
        to: channelID,
        message: respond(discordMessage)
      });


    }

});
