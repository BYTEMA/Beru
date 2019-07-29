const helpMessages = require("../helpMessages.json");

module.exports.run = async commandsDTO => {
  const message = commandsDTO.message;
  const args = commandsDTO.args;
  const prefix = commandsDTO.prefixl;
  const helpMessage = helpMessages.ping.replace(/\$prefix/g, `${prefix}`);
  //if help
  if (args[0] === "help") return message.reply(`${helpMessage}`);
  message.channel.send("pong!");
};

module.exports.help = {
  name: "ping",
};
