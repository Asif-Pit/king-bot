function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '923474187615', '𝗛𝗲𝗮𝗿𝘁 𝗛𝗮𝗰𝗸𝗲𝗿❤️', m)
  this.sendContact(m.chat, '923474187615', '𝗛𝗲𝗮𝗿𝘁 𝗛𝗮𝗰𝗸𝗲𝗿❤️ ', m)
  // F this.sendContact(m.chat, '27671805497', 'DENVIN💙', m)
  this.sendContact(m.chat, '27671805497', 'DENVIN💙 ', m)
  // F this.sendContact(m.chat, '201140012751', 'ADONIS💗, m)
  this.sendContact(m.chat, '201140012751', 'ADONIS💗 ', m)
  // F this.sendContact(m.chat, '265l994198040', 'TREM😹', m)
  this.sendContact(m.chat, '265994198040', 'TREM😹 ', m)
}
handler.help = ['owner/creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
