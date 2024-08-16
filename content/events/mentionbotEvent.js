module.exports = (client) => {
    client.on('messageCreate', (message) => {
        const repl = ['yessir yes???', 'what do you want?', 'are you even allowed to mention me???', 'do you really want to talk with discord bots?'];
        const random = Math.floor(Math.random() * repl.length);
        if(message.author.bot) return;
        if(message.content === `<@${process.env.APPID}>`) {
            message.reply(repl[random]);
        };
        if(message.content === 'hello') {
            message.reply('world');
        }
    });
};