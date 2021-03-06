const search = (prefix, botName, ownerName) => {
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
┷┯ *〈 SEARCH 〉*
   ╽
   ┠≽ *${prefix}wait
   ┃ *Desc* : Send Name Anime & Short Scene
   ┠──────────────╼
   ┠≽ *${prefix}ytsearch <query>
   ┃ *Desc* : Search YouTube Video
   ┠──────────────╼
   ┠≽ *${prefix}trendtwit
   ┃ *Desc* : Search Trending Twitter Video
   ╿ *${JayDarkNet}*,
   ╰╼≽ *Developer © ${JayBot}`
}
exports.search = search
