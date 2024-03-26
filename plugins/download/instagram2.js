const { igdl } = require('btch-downloader')

exports.run = {
  usage: ["ig2"],
  use: "Reply Photo",
  category: "Downloader",
  async: async (m, { 
  client,
  args,
  Func,
  text, 
  isPrefix, 
  command 
  }) => {{
         if (!args || !args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'https://www.instagram.com/p/CK0tLXyAzEI'), m)
         if (!args[0].match(/(https:\/\/www.instagram.com)/gi)) return client.reply(m.chat, global.status.invalid, m)
      try {
        const res = await igdl(args[0])
        for (let i of res) {
            conn.sendFile(m.chat, i.url, null, `*Instagram Downloader*`, m)
        }
    } catch (e) {
        throw `*Server Down!*`
    }}
  },
error: false,
limit: true,
}