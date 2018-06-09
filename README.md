# DiscordDice
An Discord.js extension, used for gambling.

## Usage
This is an example of a bot using DiscordDice module:

```js
const Discord = require('discord.js');
const client = new Discord.Client();

var discorddice = require('discorddice');

client.on('message', message => {
    if (message.author.bot) return; //this will stop responding to bots

    if(message.content === '.dice') { // this will check if the message equals with '.dice'
        discorddice.dice(message.author); // the argument needs to be the message autor, because the module is adding author details in the resulting embed.
    }

});

client.login('YourSuperSecretTokenHere-VerySecret');
```