const music = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${JayBot} 〉*
╿
┷┯ *〈 BOT INFO 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${JayDarkNet}
   ┠≽ *Version* : 0.0.5
   ╿
┯┷ *〈 ABOUT 〉*
╽
┠≽ *${prefix}info* (error)
┃ *Desc* : Show Bot Details
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : Show Blocked User
┠──────────────╼
┠≽ *${prefix}chatlist* (error)
┃ *Desc* : Show All Chat User
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Show Connection Bot Speed
┠──────────────╼
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : Report Bug To Owner Bot
╿
┷┯ *〈 MUSIC 〉*
   ╽
   ┠≽ *${prefix}play* <music_name>
   ┃ *Desc* : Play Music Audio
   ┠──────────────╼
   ┠≽ *${prefix}joox* <music_name>
   ┃ *Desc* : Play Music Joox
   ┠──────────────╼
   ┠≽ *${prefix}lirik* <music_name>
   ┃ *Desc* : Search Music Lyrics
   ┠──────────────╼
   ┠≽ *${prefix}chord* <music_name>
   ┃ *Desc* : Search Chord Music Lyrics
   ╿ *${JayDarkNet}*,
   ╰╼≽ *Developer © ${JayBot}`
}
exports.music = music
