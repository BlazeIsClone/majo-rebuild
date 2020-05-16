const Discord = require("discord.js");
const db = require("quick.db");
const prefix = process.env.PREFIX;

module.exports.run = async (client, message, args) => {
  if (message.member.hasPermission("MANAGE_MESSAGES")) {
  let user = message.mentions.members.first();

    if (isNaN(args[1])) message.channel.send({embed: {
                    color: 16734039,
                    title: "Incorrect use! You must provide all arguments. Use " + `${prefix}` + " remove <mention> <money>"
                }})
    db.subtract(`money_${message.guild.id}_${user.id}`, args[1])
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let moneyEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`:white_check_mark: Removed ${args[1]} coins\n\nNew Balance: ${bal}`);
    message.channel.send(moneyEmbed)
    } else {
	message.channel.send({embed: {
                    color: 16734039,
                    title: "You don't have premission to remove money!"
                }})
	}
}


module.exports.help = {
    name: "remove",
    description: "Remove a money from user",
    usage: "remove <mention> <money>",
    type: "Economy"  
}