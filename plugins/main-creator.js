let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:DiazMod;;\nFN:DiazMod \nORG:DiazMod 🥷🏻\nTITLE:\nitem1.TEL;waid=573234231940:573234231940\nitem1.X-ABLabel:DiazMod 🥷🏻\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:DiazMod  🥷🏻\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'DiazMod.xyz⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
