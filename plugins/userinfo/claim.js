exports.run = {
   usage: ['claim'],
   category: 'user info',
   async: async (m, {
      client,
      isPrefix,
      command,
      Func
   }) => {
      let user = global.db.users.find(v => v.jid == m.sender)
      let timeClaim = 86400000
      let claimed = new Date(user.lastclaim + timeClaim)
      let timeout = claimed - new Date()
      if (new Date - user.lastclaim > timeClaim) {
         client.reply(m.chat, `Selamat kamu mendapatkan point 5 juta, dan 20 limit dari mengklaim`, m)
         user.point += 5000000
         user.limit += 20                  
         user.lastclaim = new Date() * 1
         setTimeout(() => {
            m.reply(`${m.pushName} Waktu claim selesai, ayo klaim lagi. ketik *${isPrefix + command}*`)
           }, timeClaim)
      } else {
         client.reply(m.chat, `Yaah... Kamu sudah melakukan klaim sebelumnya silahkan klaim kembali di jam berikutnya\n\n⏳ : ${Func.toTime(timeout)}`, m)
      }
   },
   error: false,
   group: true
}