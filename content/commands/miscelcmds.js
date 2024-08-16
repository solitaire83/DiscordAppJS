module.exports = (cmd, message) => {
    if (cmd === 'hello') {
        message.channel.send("hi, how are you");
    }

    if(cmd === 'sup') {
        message.channel.send("grozav, pbune iti zic.");
    }

    if(cmd === 'author') {
        message.channel.send(`So, the author is ${process.env.AUTHOR}`);
    } else if(cmd === 'authorid') {
        message.channel.send(`yeah, the author id is ${process.env.AUTHORID}`);
    } else if(cmd === 'prefix') {
        message.channel.send(`the prefix is ${process.env.PREFIX}`);
    }
};