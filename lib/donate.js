exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) => {
	return `
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

╔════════════════════
║ *Donasi Ke ${BotName}*
╠════════════════════
║├≽️⚜ *PULSA* : _0821-4293-9745_
║├≽️⚜ *DANA* : _081555745357_
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${groupwhatsapp}_
║│2. *Instagram <Follow>*
║│ _${instagram}_
║│3. *Creator ${BotName}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ _*BY Yud*_
╠════════════════════
║ゞ📆 *${tampilTanggal}*
║ゞ⏱️ *${tampilWaktu}*
║ゞ📢 Bot Aktif ; *{$aktif}*
╚════════════════════`
}

