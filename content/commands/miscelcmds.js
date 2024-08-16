module.exports = (cmd, message, AUTHOR, PREFIX, AUTHORID) => {
    if (cmd === 'hello') {
        message.channel.send("hi, how are you");
    }

    if(cmd === 'sup') {
        message.channel.send("grozav, pbune iti zic.");
    }

    if(cmd === 'author') {
        message.channel.send(`So, the author is ${AUTHOR}`);
    } else if(cmd === 'authorid') {
        message.channel.send(`yeah, the author id is ${AUTHORID}`)
    } else if(cmd === 'prefix') {
        message.channel.send(`the prefix is ${PREFIX}`)
    }
};