const Discord = require("discord.js")
const client = new Discord.Client()
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

var dabCount = 46
var j = []
var k = 2

/* BOT COMMANDS */

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}


client.on("message", msg => {
  if (msg.content === "!rip") {
    msg.reply("Praise the Square, You have taken a rip!")
    msg.reply("Total Rip Count:" + k++)
  }
})
client.login('NzA0ODAxNzI4NTM2NzcyNjA5.XqjWVw.hDH8QdBZBZmbwOPNDk-dYaJe9q0');

