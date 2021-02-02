let handler = async m => m.reply(`
╭─「 Donasi • Pulsa • Dana/Gopay/Ovo 」
│ • Dana/Gopay[081358614995]
│ • Telkomsel/Ovo [081216563395]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
