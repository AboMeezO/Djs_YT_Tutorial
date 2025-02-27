module.exports = async (channel, client) => {
  const logChannel = await client.channels.cache.get("1342268820093407333");
  logChannel.send(`a new channel was created: ${channel}`);
};
