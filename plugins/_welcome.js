import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://telegra.ph/file/815688eb24c41fea5e664.jpg')
  let img = await (await fetch(`${pp}`)).buffer()
  let chat = global.db.data.chats[m.chat]

  if (chat.bienvenida && m.messageStubType == 27) {
    let bienvenida = `✗ *${botname}* \n│「 Nuevo pendejo 」\n└┬ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │✗ Hol soy Diaz \n   │✗ ${groupMetadata.subject}\n   ﹏﹏﹏﹏﹏✪✭✪﹏﹏﹏﹏﹏⳹`
    
await conn.sendAi(m.chat, botname, textbot, bienvenida, img, img, canal, estilo)
  }
  
  if (chat.bienvenida && m.messageStubType == 28) {
    let bye = `✗ *${botname}* \n│「 Chau 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │✗  Se fue\n   │👋 imbécil \n   ﹏﹏﹏﹏﹏✪✭✪﹏﹏﹏﹏﹏ ⳹`
await conn.sendAi(m.chat, botname, textbot, bye, img, img, canal, estilo)
  }
  
  if (chat.bienvenida && m.messageStubType == 32) {
    let kick = `✗ *${botname}* \n│「 Chau  」\n└┬ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │👋  imbécil \n te eliminó un admi \n    ﹏﹏﹏﹏﹏✪✭✪﹏﹏﹏﹏﹏⳹`
await conn.sendAi(m.chat, botname, textbot, kick, img, img, canal, estilo)
}}
