module.exports = (client) => {
  client.on('messageCreate', message => {
    if (message.author.bot) return;
    console.log(`${message.author.displayName}: ${message}`);
    console.log(`⬆ GUILD: ${message.guild}(${message.guild.id}) | AUTHORID: ${message.author.id}`);
  });
};