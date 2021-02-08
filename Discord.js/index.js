const Discord = require("discord.js");
const client = new Discord.Client();
const { token, prefix } = require('./config/config')
///By: ᵈᵉᵛZezo#2881
client.on("ready", async () => {

    console.log(`${client.user.tag} is ready`);

    console.log(` --------------------------------------------- `);
    console.log(` || By: ᵈᵉᵛZezo#2881    By: ᵈᵉᵛZezo#2881    || `);
    console.log(` || Servers: ${client.guilds.cache.size}    || `);
    console.log(` || users: ${client.users.cache.size}       || `);
    console.log(` || channels: ${client.channels.cache.size} || `);
    console.log(` --------------------------------------------- `);
    client.user.setActivity(`Hello World`, { type:"WATCHING" });
});
///By: ᵈᵉᵛZezo#2881
client.on("message", async message => {
    if(message.author.bot)return;
    if(message.channel.type == "dm")return;
    if(!message.content.startsWith(prefix))return;
///By: ᵈᵉᵛZezo#2881
    const args = message.content.slice(prefix.length).trim().split(" ");
    const command = args.shift().toLowerCase()

    if(command === "ping"){
        return message.channel.send("Pong..");
    }
});

client.login(token);
///By: ᵈᵉᵛZezo#2881
