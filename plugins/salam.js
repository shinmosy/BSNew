exports.run = {

   usage: ['Assalamualaikum','assalamualaikum'],

   async: async (m, {

      client,
      body,
      args,
      Func,
      isPrefix,

      command

   }) => {
       
       let teks = `Wa'alaikumussalam wa rahmatullahi wa barakatuh.

Semoga salam/kesejahteraan, rahmat dan berkah Allah atas dirimu`
       
       client.reply(m.chat, teks, m)


},
 
 error: false
       
}