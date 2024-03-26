exports.run = {

   usage: ['ujin','rara','bby'],

   async: async (m, {

      client,
      body,
      args,

      isPrefix,

      command

   }) => {
       
       m.reply('Aku disini bby❤️')

client.sendSticker(m.chat, 'https://filezone.my.id/file/69298e4558fc0ac0fe3f.webp', m, {

   packname: 'Welcome to',

   author: '© BotShin'

})
},
 owner: true,
 error: false
}