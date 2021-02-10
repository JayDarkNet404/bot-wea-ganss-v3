const kerang = (prefix, botName, ownerName) => {
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
┷┯ *〈 KERANG AJAIB 〉*
   ╽
   ┠≽ *${prefix}apakah* <optional>
   ┃ *Desc* : Asking Is
   ┠──────────────╼
   ┠≽ *${prefix}bisakah* <optional>
   ┃ *Desc* : Ask Can
   ┠──────────────╼
   ┠≽ *${prefix}kapankah* <optional>
   ┃ *Desc* : Ask When
   ┠──────────────╼
   ┠≽ *${prefix}watak*
   ┃ *Desc* : Transmitting Characters at Random
   ┠──────────────╼
   ┠≽ *${prefix}hobby*
   ┃ *Desc* : Randomly Sending Hobbies
   ┠──────────────╼
   ┠≽ *${prefix}gantengcek*
   ┃ *Desc* : How Handsome
   ┠──────────────╼
   ┠≽ *${prefix}cantikcek*
   ┃ *Desc* : How Beautiful
   ╿ *${JayDarkNet}*,
   ╰╼≽ *Developer © ${JayBot}`
}
exports.kerang = kerang
