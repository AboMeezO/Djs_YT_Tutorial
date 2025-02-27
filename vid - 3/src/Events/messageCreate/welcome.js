module.exports = (message, client) => {
  if (message.content === "السلام عليكم") {
    message.reply("السلام عليكم");
    return true;
  }
};
