exports.run = {
    usage: ['point'],
    hidden: ['points', 'saldo'],
    category: 'user info',
    async: async (m, {
       client,
       isPrefix,
       Func
    }) => {
       let user = global.db.users.find(v => v.jid == m.sender)
       if (user.point < 1) return client.reply(m.chat, `🚩 Kamu tidak memiliki poin, untuk mendapatkan poin kirim *${isPrefix}claim*`, m)
       client.reply(m.chat, Func.texted('bold', `🚩 Kamu punya ${Func.h2k(user.point)} (${Func.formatNumber(user.point)}) points.`), m)
    },
    error: false
 }