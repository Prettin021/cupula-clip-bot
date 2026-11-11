
const {
  Client,
  GatewayIntentBits,
  Events
} = require("discord.js");

require("dotenv").config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

client.once(Events.ClientReady, (bot) => {
  console.log(`CUPULA CLIP BOT online: ${bot.user.tag}`);
});

client.login(process.env.DISCORD_TOKEN);
