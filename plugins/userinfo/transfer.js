exports.run = {
   usage: ['transfer'],
   hidden: ['tf'],
   use: '@tag amount',
   category: 'user info',
   async: async (m, {
      client,
      args,
      isPrefix,
      command,
      Func
   }) => {
      if (m.quoted) {
         if (m.quoted.isBot) return client.reply(m.chat, Func.texted('bold', `🚩 Tidak dapat melakukan transfer ke bot.`), m)
         if (!args || !args[0]) return client.reply(m.chat, Func.texted('bold', `🚩 Cantumkan nominal saldo yang akan ditransfer.`), m)
         if (isNaN(args[0])) return client.reply(m.chat, Func.texted('bold', `🚩 The balance must be a number.`), m)
         let nominal = parseInt(args[0])
         let ppn = parseInt(((25 / 100) * nominal).toFixed(0))
         let point = global.db.users.find(v => v.jid == m.sender).point
         let target = client.decodeJid(m.quoted.sender)
         if (target == m.sender) return client.reply(m.chat, Func.texted('bold', `🚩 Tidak dapat mentransfer ke diri Anda sendiri.`), m)
         if (nominal > point) return client.reply(m.chat, Func.texted('bold', `🚩 Saldo Anda tidak cukup untuk melakukan transfer.`), m)
         if ((nominal + ppn) > point) return client.reply(m.chat, Func.texted('bold', `🚩 Saldo Anda tidak cukup untuk membayar biaya transfer 25%`), m)
         if (nominal < 10000) return client.reply(m.chat, Func.texted('bold', `🚩 Nominal saldo untuk transfer minimal 10K.`), m)
         global.db.users.find(v => v.jid == m.sender).point -= (nominal + ppn)
         global.db.users.find(v => v.jid == target).point += nominal
         let teks = `乂  *T R A N S F E R*\n\n`
         teks += `“Transfer berhasil ke *@${target.replace(/@.+/g, '')}*”\n\n`
         teks += `➠ *Nominal* : ${Func.h2k(nominal)}\n`
         teks += `➠ *Fee* : ${Func.h2k(ppn)} [25%]\n`
         teks += `➠ *Saldo yang tersisa* : ${Func.h2k(global.db.users.find(v => v.jid == m.sender).point)}`
         client.reply(m.chat, teks, m)
      } else if (m.mentionedJid.length != 0) {
         if (!args || !args[1]) return client.reply(m.chat, Func.texted('bold', `🚩 Cantumkan nominal saldo yang akan ditransfer.`), m)
         if (isNaN(args[1])) return client.reply(m.chat, Func.texted('bold', `🚩 Saldonya harus berupa angka.`), m)
         let nominal = parseInt(args[1])
         let ppn = parseInt(((25 / 100) * nominal).toFixed(0))
         let point = global.db.users.find(v => v.jid == m.sender).point
         let target = client.decodeJid(m.mentionedJid[0])
         if (target == client.decodeJid(client.user.id)) return client.reply(m.chat, Func.texted('bold', `🚩 Tidak dapat melakukan transfer ke bot.`), m)
         if (target == m.sender) return client.reply(m.chat, Func.texted('bold', `🚩 Tidak dapat mentransfer ke diri Anda sendiri.`), m)
         if (nominal > point) return client.reply(m.chat, Func.texted('bold', `🚩 Saldo Anda tidak cukup untuk melakukan transfer.`), m)
         if ((nominal + ppn) > point) return client.reply(m.chat, Func.texted('bold', `🚩 Saldo Anda tidak cukup untuk membayar biaya transfer 25%`), m)
         if (nominal < 10000) return client.reply(m.chat, Func.texted('bold', `🚩 Nominal saldo untuk transfer minimal 10K.`), m)
         global.db.users.find(v => v.jid == m.sender).point -= (nominal + ppn)
         global.db.users.find(v => v.jid == target).point += nominal
         let teks = `乂  *T R A N S F E R*\n\n`
         teks += `“Transfer successfully to *@${target.replace(/@.+/g, '')}*”\n\n`
         teks += `➠ *Nominal* : ${Func.h2k(nominal)}\n`
         teks += `➠ *Fee* : ${Func.h2k(ppn)} [25%]\n`
         teks += `➠ *Remaining Balance* : ${Func.h2k(global.db.users.find(v => v.jid == m.sender).point)}`
         client.reply(m.chat, teks, m)
      } else {
         let teks = `• *Example* :\n\n`
         teks += `${isPrefix + command} @0 10000\n`
         teks += `${isPrefix + command} 10000 (reply chat target)`
         client.reply(m.chat, teks, m)
      }
   },
   error: false,
   group: true
}