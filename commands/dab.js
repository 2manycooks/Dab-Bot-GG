
module.exports = {
    excecute(msg, counter) {
        client.on("message", msg => {
            if (msg.content === "!dab") {
              msg.reply("Praise the Square, You have Dabbed!")
              msg.reply("Total Dab Count:" + counter)
              counter++;
            }
          })
    }
}