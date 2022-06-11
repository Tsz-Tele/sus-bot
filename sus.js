const keepAlive = require('./server.js');
const Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
keepAlive()
client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("pong");
  }else if (msg.content === "sus") {
    msg.channel.send("Really sus");
    // only "sus" is sus enough for this bot to react
  }
  
})

client.login("TOKEN") //replace TOKEN with your bot's token
