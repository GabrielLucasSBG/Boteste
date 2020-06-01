const fs = require('fs');

const Discord = require("discord.js");

const { prefix, token } = require('./config.json');

// Criar um nov Discord client
const client = new Discord.Client();

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}


client.once("ready", () => {
    console.log("Ready!");
});

//TESTE DE MENSAGEM
client.on("message", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (message.content === `${prefix}biro`) {
        message.channel.send("O biro é god ou n é?");
    } else if (message.content === `${prefix}birao`) {
        message.channel.send("Brabo.");
    } else if (message.content === `${prefix}membros`) {
        message.channel.send(`Total members: ${message.guild.memberCount}`);
    }

});

client.login(token);