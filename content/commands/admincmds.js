module.exports = async (cmd, message, args) => {
    const modrole = message.member.roles.cache.some(role => role.name === 'Moderator');
    const perms = message.member.permissions.has('ADMINISTRATOR');
    if (!modrole && !perms) {
        return message.reply("sry, you dont have the required role or perms");
    }

    if (cmd === 'clear') {
        try {
            await message.channel.bulkDelete(10, true);
        } catch (err) {
            console.error(err);
        }
    }

    if (cmd === 'giverole') {
        if (!args.length) return message.reply(`Syntax: ${process.env.PREFIX}giverole @mentionuser rolename`);
        
        const user = message.mentions.members.first();
        const role = message.guild.roles.cache.find(r => r.name === args.slice(1).join(' '));
        if (!user) return message.reply('no user specified');
        if (!role) return message.reply("no role specified or i couldnt find it fr fr");

        try {
            await user.roles.add(role);
            message.channel.send(`The ${role.name} role has been assigned to ${user}`);
        } catch (err) {
            console.error(err);
            message.reply('problems with role assignment, probably missing perms idk');
        }
    }

    if(cmd === 'clearconsole') {
        const devrole = message.member.roles.cache.some(role => role.name === 'Developer');
        if(!devrole && message.author.id !== process.env.AUTHORID) return message.reply("you arent my dev lol");
        console.clear();
        message.reply("i cleaned the console")
    }

    if (cmd === 'tellto') {
        if (args.length < 2) return message.reply(`Syntax: ${process.env.PREFIX}tellto <channelname/channelid/@mention> <message>`);

        const firstarg = args.shift();
        const _message = args.join(' ');
        const user = message.mentions.users.first();
        let channel = message.guild.channels.cache.find(ch => ch.name === firstarg || ch.id === firstarg);

        if (user) {
            try {
                await user.send(_message);
                message.reply(`i sent a message to ${user.tag}`);
            } catch (err) {
                // console.error(err);
                message.reply('no way bro, i cant send anything to this guy');
            }
        } else if (channel) {
            try {
                await channel.send(_message);
                if(channel.id !== message.channel.id) {
                    message.reply(`message sent to the channel: ${channel.name}`);
                }
            } catch (err) {
                console.error(err);
                message.reply('nah, i cant send anything to that channel');
            }
        } else {
            message.reply('can you even specify a valid user/channel?');
        }
    }
};