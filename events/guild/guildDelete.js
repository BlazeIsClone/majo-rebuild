const Discord = require('discord.js');

module.exports = async (client, guild) => {
try {
 console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
} catch(err) {
 console.log(err);
}
}
