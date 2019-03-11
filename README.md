# DiscordDice
An Discord.js extension, used for gambling.
I will add more features like built-in currency system, API for currency and more games.

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

## Documentation
dice(message_author, maximum_number)
    Creates an embed with a red colour and a dice number within your second argument, failure to provide both with make the extention   throw an error.
