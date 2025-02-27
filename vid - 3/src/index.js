const { Client, GatewayIntentBits } = require("discord.js");
const { CommandKit } = require("commandkit");
const path = require("path");
require("dotenv").config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
new CommandKit({
  client,
  commandsPath: path.join(__dirname, "Commands"),
  eventsPath: path.join(__dirname, "Events"),
  devGuildIds: ["1270766321780523060"],
  devUserIds: ["670415544222089277"],
  devRoleIds: ["1335681199166984223"],
});

client.login(process.env.TOKEN);
