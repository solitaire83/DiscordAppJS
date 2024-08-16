require('dotenv').config({ path: './content/app.cfg' });
const TOKEN = process.env.TOKEN;

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const fs = require('fs');
const path = require('path');

const ePath = path.join(__dirname, 'content', 'events');
const eFiles = fs.readdirSync(ePath).filter(e => e.endsWith('.js'));

for (const event of eFiles) {
  const _event = require(path.join(ePath, event));
  _event(client);
}

client.login(TOKEN);