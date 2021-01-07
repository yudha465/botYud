exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) => {
	return `*MENU ${BotName}*
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

╔════════════════════
║ *Info ${BotName}*
╠════════════════════
║├≽️⚜ *AUTOR* : _AchYud_
║├≽️⚜ *DESIGNER* : _WiKo_
║├≽️⚜ *OWNER* : _AchYud_
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Youtube <subscribe>*
║│ _${youtube}_
║│2. *instagram <Follow>*
║│ _${instagram}_
║│3. *Creator ${BotName}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ _*BY ach.yud*_
╠════════════════════
║ゞ📆 *${tampilTanggal}*
║ゞ⏱️ *${tampilWaktu}*
║ゞ📢 Bot Aktif ; *${aktif}*
╚════════════════════`
}
