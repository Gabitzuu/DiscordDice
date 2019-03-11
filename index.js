const Discord = require('discord.js');

exports.dice = function(author, maxnumber) {
    let randomnumber = Math.floor(Math.random() * maxnumber) + 1;
    if(!author || !maxnumber) throw Error('Arguments not inputted.');
    var embedroll = new Discord.RichEmbed()
        .setTitle("Dice", author.avatarURL)
        .setDescription('You rolled out: ' + randomnumber)
        .setAuthor(author.tag)
        .setColor(16711680);

    message.channel.send(embedroll);
}
