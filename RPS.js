const { Client } = require('discord.js');
const client = new Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

const prefix = '!';

client.on('message', message => {

    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === 'RPS') {
        const acceptedReplies = ['rock', 'paper', 'scissor'];
        const random = Math.floor((Math.random() * acceptedReplies.length));
        const result = acceptedReplies[random];

        const choice = args[0];
        if (!choice) return message.channel.send(`How to play: \`${prefix}rps <rock|paper|scissors>\``);
        if (!acceptedReplies.includes(choice)) return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
        

        if (result === choice) return message.reply("It's a tie! We had the same choice.");
        
        switch (choice) {
            case 'rock': {
                if (result === 'paper') return message.reply('I won!');
                else return message.reply('You won!');
            }
            case 'paper': {
                if (result === 'scissors') return message.reply('I won!');
                else return message.reply('You won!');        
            }
            case 'scissor': {
                if (result === 'rock') return message.reply('I won!');
                else return message.reply('You won!');
            }
            default: {
                return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
            }
        }
    }
});

client.login('YOUR TOKEN :)');
