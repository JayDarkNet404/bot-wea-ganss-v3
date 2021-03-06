const sound = (prefix, botName, ownerName) => {
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
┷┯ *〈 TEXT TO SPEACH 〉*
   ╽
   ┠≽ *${prefix}tts* <language code|text>
   ┃ *Desc* : Google Text To Speach
   ╿ *${JayDarkNet}*,
   ╰╼≽ *Developer © ${JayBot}`
}
exports.sound = sound
