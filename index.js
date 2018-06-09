const Discord = require('discord.js');

exports.dice = function(author) {
    let diceresult = Math.floor(Math.random() * 6) + 1;

    var eb = new Discord.RichEmbed()
        .setTitle("Dice", author.avatarURL)
        .setDescription('You rolled out: ' + diceresult)
        .setAuthor(author.tag)
        .setColor('RED');

    message.channel.send(eb);
}