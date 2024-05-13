import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption =  `
╭─[𝐁𝐔𝐌𝐁𝐋𝐄𝐁𝐄𝐄 𝐁𝐎𝐓]───╮
 | 
│╭────────────────────
┴│👋 Hey there, ${conn.getName(m.sender)}!
⬡│🤖 I\'m 🐝𝐁𝐔𝐌𝐁𝐋𝐄𝐁𝐄𝐄 𝐁𝐎𝐓\n⬡│ I\'m up and running! 🚀
│╰────────────────────
┠───[ *BOT INFO* ]────╮
│╭────────────────────
┴│    🐝𝐁𝐔𝐌𝐁𝐋𝐄𝐁𝐄𝐄 𝐁𝐎𝐓🐝
⬡│💻 A WhatsApp bot created by:
⬡│👨‍💻 🐝𝐀𝐧𝐭𝐢𝐬𝐨𝐜𝐢𝐚𝐥 𝐇𝐮𝐦𝐢𝐝𝐢𝐭𝐲🐝
⬡│📞 For any inquiries, contact:
⬡│📱 wa.me/2348022159244
⬡│🙅‍♂️ Don't call the owner or you\'ll be
⬡│ ignored or blocked! 😬
│╰────────────────────
┠───[ *HOW TO USE* ]────⋆
┴│💡 *Some commands you can use:*
⬡│🔸 .menu \n⬡│- Shows a list of available commands
⬡│🔸 .play \n⬡│- Plays a YouTube video or audio.
⬡│🔸 .sticker \n⬡│- Converts an image to a sticker
┬│🔸 .Ai text \n⬡│- Artificial intelligence 
││ 
│╰──────────────
╰────────═┅═───────
*Generated by*🐝𝐁𝐄𝐄 𝐁𝐎𝐓🐝
`.trim()
conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/4eb5807bb8b8457c22b2b.jpg' }, caption: caption, footer: `𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 💫𝗜𝗔𝗠𝗫𝗗𝗔-𝗧𝗵𝗲 𝗷𝗼𝗸𝗲𝗿🐝` }, { quoted: m })
  //m.reply(caption)
}
handler.help = ['alive']
handler.tags = ['bot check']
handler.command = /^(alive|Hi)$/i


export default handler
