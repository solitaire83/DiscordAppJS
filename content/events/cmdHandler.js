const fs = require('fs');
const path = require('path');

module.exports = (client) => {
  client.on('messageCreate', (message) => {
    if (message.author.bot) return;
    const prefix = process.env.PREFIX;
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const cmd = args.shift().toLowerCase();

    const cmdsPath = path.join(__dirname, '../commands');
    const cmdsFiles = fs.readdirSync(cmdsPath).filter(file => file.endsWith('.js'));

    for (const _cmd of cmdsFiles) {
      const command = require(path.join(cmdsPath, _cmd));
      command(cmd, message, args);
    }
  });
};