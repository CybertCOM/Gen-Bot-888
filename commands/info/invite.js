const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const Discord = require("discord.js")
module.exports = {
  name: "invite",
  description: "Invites your bot to the server ",
  aliases: ["inv"],
  run: async (client, message, args) => {
    const exampleEmbed = new Discord.RichEmbed()
      .setColor("#6a0dad")
      .setTitle("Invite link:")
      .setThumbnail('https://lh3.googleusercontent.com/proxy/LjX_WMeKEJXsHq3wVJPrOHgLUaUMt5ZC1-SjaMxQuPHLYVlad9b_Ju4yf48IJF1BPg24QCr6AwK_6DMBeXFOZ3kgcSjA-u31xb6nZF1pRzAxonfZrgLdzPU')
      .setDescription("http://gestyy.com/w8ybt2")
      .setTimestamp()
    .setFooter('Thank you for using Cygen!', 'https://i.imgur.com/XuF6vH2.png');

    message.channel.send(exampleEmbed);
  }
};
