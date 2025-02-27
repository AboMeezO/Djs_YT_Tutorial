const { MessageFlags, ApplicationCommandOptionType } = require("discord.js");
module.exports = {
  data: {
    name: "ping",
    description: "Pings the user",
    options: [
      {
        name: "user",
        description: "The user to ping",
        type: 6,
      },
    ],
  },
  run: ({ interaction, client, handler }) => {
    const user = interaction.options.getMember("user");
    interaction.reply({
      content: `Pong! ${user}`,
      flags: MessageFlags.Ephemeral,
    });
  },
  options: {
    deleted: false,
  },
};
