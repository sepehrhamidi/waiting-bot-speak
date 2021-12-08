const Discord = require('discord.js');
const bot = new Discord.Client();
let isReady = true;

bot.on('ready', () => {
    console.log('Ready!');
});

bot.on('message', message => {
        if (isReady && message.content === '!new') {
            isReady = false;
            const channel = message.member.voice.channel;
            channel.join()
            .then(connection => {
                const dispatcher = connection.play('1.mp3');
                dispatcher.on("end", end => {
                    channel.leave();
                })
            })
            .catch(err => console.log(err));
            isReady = true;
        }
    }
);


bot.login('TOKEN');
