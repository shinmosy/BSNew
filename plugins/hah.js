exports.run = {

   usage: ['bot'],

   async: async (m, {

      client,
      body,
      args,

      isPrefix,

      command

   }) => {
       
       m.reply('Avaan Coeg')

client.sendSticker(m.chat, 'https://filezone.my.id/file/8b64aa222beeed2623be.webp', m, {

   packname: 'Welcome to',

   author: '© BotShin'

})
},
 
 error: false
}