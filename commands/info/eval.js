const {RichEmbed} = require("discord.js");
const beautify = require("beautify");

module.exports = {
  name: "eval",
  aliases:["e"],
  description: "Evaluates Code you put in",
usage: "<code to eval>",
  run: async (client, message, args) => {
    if (message.author.id == "618029803517509647") {
      return message.channel.send("You are not the owner of this bot!!")
      .then(m => m.delete(5000));
    }
    
    if (!args[0]) {
      message.channel.send("You need to evaluate **Something** , please?")
      .then(m => m.delete(5000));
    }
    
    try {
      if(args.join("").tolowerCase().includes("NjI3MTkwOTIxOTg5MDYyNjc3.Xk_G9g.cYAwNigYs84kMdXz8zKdW0mbHN0")) {
        return;
      }
  const toEval = args.join(" ");
      const evaluated = eval(toEval)
      
      let embed = new RichEmbed()
      .setcolor("#03FF00")
      .setTimestamp()
      .setFooter(client.user.username, client.user.displayAvatarURL)
      .setTitle("To evaluate:", `\`\`\ js\n${beautify(args.join(" "),{format: "js"})}\n\`\`\``)
      .addField("Evaluated:", evaluated)
      .addField("Type of:", typeof(evaluated));
      
      message.channel.send(embed);
    } catch (e) {
      let embed = new RichEmbed()
      .setColor("#FF000")
      .setTitle("\:x: Error!")
      .setDescription(e)
      .setFooter(client.user.username, client.user.displayAvatarURL)
      }
  }
  
  
  
  
}