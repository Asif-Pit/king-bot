let handler = async m => m.reply(`
🛑 *BOT RULES*

🍓 Do not call bot, if you do then you'll get automatically blocked by bot.
    
🍓 Do not spam bot with commands, if bot is not responding then it means either bot is off or there's internet issue at owner's end.
    
🍓 *Do not abuse/disrespect bot and its owner.*
    
🍓 If you see any bug/error in bot then report it to owner with the command !bug/report <problem>.
    
🍓 If you want this bot in your group then contact owner by typing !owner/creator.
    
🍓 Enjoy the bot and have fun.
`.trim()) // Tambah sendiri kalo mau
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^rules$/i

module.exports = handler
