require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const thiccysapi = require('textmaker-thiccy')
const hx = require("hxz-api")
const maker = require('mumaker')
// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = Zero = async (Zero, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await Zero.decodeJid(Zero.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
	
        // Group
        const groupMetadata = m.isGroup ? await Zero.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = db.data.users[m.sender]
            if (typeof user !== 'object') db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = db.data.chats[m.chat]
            if (typeof chats !== 'object') db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = db.data.settings[botNumber]
        if (typeof setting !== 'object') db.data.settings[botNumber] = {}
	    if (setting) {
	    if (!('anticall' in setting)) setting.anticall = true
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false
		if (!('templateLocation' in setting)) setting.templateLocation = false
	    } else global.db.data.settings[botNumber] = {
	    anticall: true,
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
		templateLocation: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
        // Public & Self
        if (!Zero.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            Zero.readMessages([m.key])
            console.log(chalk.black(chalk.bgWhite('[ Zero ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> FROM'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> IN'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        })
        
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await Zero.updateProfileStatus(`${Zero.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\nYou have been detected sending a group link, sorry you will be kicked !`)
        if (!isBotAdmins) return m.reply(`Eh, the bot is not an admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await Zero.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because you sent the link to this group`)
        if (isAdmins) return m.reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are An Admin Of The Group❤️`)
        if (isCreator) return m.reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are My Owner Hahahahah🤣😘, You Think I Will Betray You Huh⛓️`)
        Zero.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: Zero.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, Zero.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        Zero.ev.emit('messages.upsert', msg)
        }
	    
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game has ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Win!` : isTie ? `Game over` : `turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

When *gives up* to surrender and admit defeat`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await Zero.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await Zero.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    Zero.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} refuse suit, suit cancel`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    Zero.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) Zero.sendText(roof.p, `Please select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) Zero.sendText(roof.p2, `Please select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) Zero.sendText(m.chat, `Both players have no intention of playing,\nSuit is cancelled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    Zero.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} don't choose suit, game over`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /stone/i
	    let k = /paper/i
	    let reg = /^(scissors|stone|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) Zero.sendText(roof.p2, 'Your opponent has chosen\nNow its your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWait lawan memilih` : ''}`)
	    if (!roof.pilih) Zero.sendText(roof.p, 'Your opponent has chosen\nNow its your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    Zero.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lose \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lose \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
            Don't tag him!
            He's AFK ${reason ? 'with reason' + reason : 'without reason'}
            During ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            Zero.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} stop AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
            During ${clockString(new Date - user.afkTime)}`)
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        switch(command) {
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} Already Afk${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'You are still in the game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partners found!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Wait @${room.game.currentTurn.split('@')[0]}

Type *gives up* to give up and admit defeat`
            if (room.x !== room.o) await Zero.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await Zero.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Wait partner' + (text ? ` type the command below ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
            if (!roomnya) throw `You are not in the tickactoe room !`
            delete this.game[roomnya.id]
            m.reply(`Successfully delete session room tictactoe!`)
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Complete your previous suit`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Can't play with myself!`)
            if (!m.mentionedJid[0]) return m.reply(`Who do you want to talk about?_\n Tag the person..\n\n Example : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `The person you are challenging is playing suit with someone else :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} challenge @${m.mentionedJid[0].split`@`[0]} to play suit

Please @${m.mentionedJid[0].split`@`[0]} for Type accept/reject`
            this.suit[id] = {
            chat: await Zero.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) Zero.sendText(m.chat, `_suit time out_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	    //case 'donasi': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
                //Zero.sendMessage(m.chat, { image: { url: 'https://i.ibb.co/2kX3cmc/Chatbot-zero.png' }, caption: `*Hi bro ${m.pushName}*\n\n Bot Rental Prices \n※ $5 Per Group via Paypal 1 Month \n※ 18k via credit 1 Month \n\n
                //Premium Price Bot \n※ $2 per User 1 month \n\n Payment can be via Paypal \n\n For more details, you can chat with the owner \n https://wa.me/6288292024190 (Owner) \n\n Donate For Me : \n\n Paypal : https://www.paypal.me/Cakhaho \n※ Saweria : https://saweria.co/DikaArdnt` }, { quoted: m })
            //}
            //break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    Zero.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    Zero.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    Zero.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    Zero.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    Zero.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    Zero.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    Zero.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "There Are Still Unfinished Sessions!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nUsage example: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                Zero.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    m.reply("Time Out \n Answer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                Zero.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Enter the Group Link!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await Zero.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await Zero.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif has been successfully changed to\n\n※ Packname : ${global.packname}\n※ Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		await Zero.groupParticipantsUpdate(m.chat, users, 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		await Zero.groupParticipantsUpdate(m.chat, users, 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		await Zero.groupParticipantsUpdate(m.chat, users, 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		await Zero.groupParticipantsUpdate(m.chat, users, 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Zero.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Zero.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await Zero.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await Zero.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                let media = await Zero.downloadAndSaveMediaMessage(qmsg)
                await Zero.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                let media = await Zero.downloadAndSaveMediaMessage(qmsg)
                await Zero.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Message : ${q ? q : 'blank'}*\n\n`
                for (let mem of participants) {
                teks += `※ @${mem.id.split('@')[0]}\n`
                }
                Zero.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            Zero.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
               case 'totag': {
               if (!m.isGroup) throw mess.group
               if (!isBotAdmins) throw mess.botAdmin
               if (!isAdmins) throw mess.admin
               if (!m.quoted) throw `Reply message with caption ${prefix + command}`
               Zero.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon Typea limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Enter Query text!'
                let anu = await styletext(text)
                let teks = `Style Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `※ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `There are still votes in this chat!_ \n\n *${prefix}deletevotes* - to delete votes`
            if (!text) throw `Enter the Reason for Vote, Example: *${prefix + command} Who is the best person*`
            m.reply(`Voting begins! \n\n *${prefix}upvote* - for yes \n *${prefix}devote* - for no \n *${prefix}checkvote* - for checking votes \n *${prefix}delete* - for delete vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}delete* - to delete the vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: Zero.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            Zero.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_ \n\n *${prefix}vote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'You have Voted'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delete* - to delete the vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: Zero.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            Zero.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_ \n\n *${prefix}vote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'You have Voted'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*REASON:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delete* - to delete the vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: Zero.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            Zero.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote': case 'checkvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*no voting in this group!*_ \n\n *${prefix}vote* - to start voting`
teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delete* - to delete the vote


©${Zero.user.id}
`
Zero.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_ \n\n *${prefix}vote* - to start voting`
            delete vote[m.chat]
            m.reply('Successfully Delete Vote Session In This Group')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await Zero.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Successfully Closing Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await Zero.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Successfully Opening a Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await Zero.sendButtonText(m.chat, buttons, `Mode Group`, Zero.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await Zero.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Successfully Opened Edit Group Info`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await Zero.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Successfully Close Edit Group Info`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await Zero.sendButtonText(m.chat, buttons, `Mode Edit Info`, Zero.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`Previously Active`)
                db.data.chats[m.chat].antilink = true
                m.reply(`Antilink ACTIVE !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`Previously Inactive`)
                db.data.chats[m.chat].antilink = false
                m.reply(`Antilink Inactive !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await Zero.sendButtonText(m.chat, buttons, `Mode Antilink`, Zero.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Previously Active`)
                db.data.chats[m.chat].mute = true
                m.reply(`${Zero.user.name} has been muted in this group !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Previously Inactive`)
                db.data.chats[m.chat].mute = false
                m.reply(`${Zero.user.name} has been unmuted in this group !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await Zero.sendButtonText(m.chat, buttons, `Mute Bot`, Zero.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await Zero.groupInviteCode(m.chat)
                Zero.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === '1') {
                    await Zero.groupToggleEphemeral(m.chat, 1*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === '7') {
                    await Zero.groupToggleEphemeral(m.chat, 7*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === '90') {
                    await Zero.groupToggleEphemeral(m.chat, 90*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'off') {
                    await Zero.groupToggleEphemeral(m.chat, 0).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else {
                let sections = [
                {
                title: "CHANGE EPHEMERAL GROUP",
                rows: [
                {title: "Ephemeral 1 day", rowId: `ephemeral 1`, description: `Activate the ephemeral group for 1 day`},
                {title: "Ephemeral 7 day's", rowId: `ephemeral 7`, description: `Activate the ephemeral group for 7 day's`},
                {title: "Ephemeral 90 days's", rowId: `ephemeral 90`, description: `Activate the ephemeral group for 90 day's`},
                {title: "Ephemeral Off", rowId: `ephemeral off`, description: `Deactivate this Ephemeral group`}
                ]
                },
                ]
                Zero.sendListMsg(m.chat, `Please select the following Ephemeral Options List !`, Zero.user.name, `Hello Admin ${groupMetadata.subject}`, `Click Here`, sections, m)
                }
            }
            break
            case 'setnamabot': case 'setnamebot': {
            if (!text) throw `Example : ${prefix + command} WhatsApp ✅`
            let name = await Zero.updateProfileName(text)
            m.reply(`Successfully renamed bot to ${name}`)
            }
            break
            case 'setstatus': case 'setbiobot': case 'setbotbio': {
            if (!text) throw `this is a WhatsApp Bot named Zero-Morou`
            let name = await Zero.updateProfileStatus(text)
            m.reply(`Successfully changed bot bio status to ${name}`)
            }
            break
            case 'anticall': {
            if (!isCreator) throw mess.owner
                let ciko = db.data.settings[botNumber].anticall
                if (args[0] === "on") {
                if (ciko) return m.reply(`Previously Active`)
                ciko = true
                m.reply(`AntiCall Aktif !`)
                } else if (args[0] === "off") {
                if (!ciko) return m.reply(`Previously Inactive`)
                ciko = false
                m.reply(`AntiCall Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'anticall on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'anticall off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await Zero.sendButtonText(m.chat, buttons, `Mode AntiCall`, Zero.user.name, m)
                }
             }
             break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'The message was not sent by a bot!'
                Zero.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Which text? \n\n Example : ${prefix + command} fatih-san`
                let getGroups = await Zero.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Send Broadcast To ${anu.length} Group Chat, Finish Time ${anu.length * 1.5} second`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/Daveshvats/zerochatbot'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+917404854406'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      Zero.send5ButImg(i, txt, Zero.user.name, global.thumb, btn)
                    }
                m.reply(`Successfully Sending Broadcast To ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Which text? \n\n Example : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Send Broadcast To ${anu.length} Chat\nFinish Time ${anu.length * 1.5} second`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/Daveshvats/zerochatbot'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+91 7404854406'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      Zero.send5ButImg(yoi, txt, Zero.user.name, global.thumb, btn)
		}
		m.reply('Broadcast Success')
            }
            break
            case 'infochat': {
                if (!m.quoted) m.reply('Reply Message')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'The message was not sent by a bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `※ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━※ *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ※ *Status :* ${read ? 'Be read' : 'Sent'}\n\n`
                }
                Zero.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Message')
		let wokwol = await Zero.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('The message you replied to does not contain a reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 Zero.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await Zero.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Not known'}\n⬡ *ID :* ${metadata.id}\n⬡ *Created :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 Zero.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    Zero.sendText(m.chat, 'List Online:\n\n' + online.map(v => '※ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif':case '/s': case '.s': {
           if (/image/.test(mime)) {
           m.reply(mess.wait)
                let media = await Zero.downloadMediaMessage(qmsg)
                let encmedia = await Zero.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
            m.reply(mess.wait)
                if (qmsg.seconds > 11) return m.reply('Minimum 10 second!')
                let media = await Zero.downloadMediaMessage(qmsg)
                let encmedia = await Zero.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                m.reply(`Please Reply an gif/video with ${prefix + command}\nVideo/Gif duration 1-9 seconds`)
                }
            }
            break
            case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': {
                let [teks1, teks2] = text.split`|`
                if (!teks1) throw `Send/reply image/video with caption ${prefix + command} teks1|teks2`
                if (!teks2) throw `Send/reply image/video with caption ${prefix + command} teks1|teks2`
            	m.m.reply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await Zero.downloadMediaMessage(qmsg)
                    let encmedia = await Zero.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('Minimal 10 second!')
                    let media = await Zero.downloadMediaMessage(qmsg)
                    let encmedia = await Zero.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else {
                    throw `Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 second`
                }
            }
            break
            case 'ebinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
        }
        break
            case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await Zero.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    case 'emojimix2': {
	    if (!text) throw `Example : ${prefix + command} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await Zero.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	        let respond = `Send/reply image/sticker with caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        m.reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await Zero.downloadMediaMessage(qmsg)
	        let { floNime } = require('./lib/uploader')
	        let fatGans = await floNime(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	        let FaTiH = await Zero.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(FaTiH)
            }
	       break     
	        case 'simih': case 'simisimi': {
            if (!text) throw `Example : ${prefix + command} text`
            hm = await fetchJson(api('zenz', '/api/simisimi', { text : text }, 'apikey'))
            m.reply(hm.result.message)
            }
            break
            case 'toimage': case 'toimg': {
                if (!/webp/.test(mime)) throw `Reply sticker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await Zero.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    Zero.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!/webp/.test(mime)) throw `Reply sticker with caption *${prefix + command}*`
                m.reply(mess.wait)
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await Zero.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await Zero.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await Zero.downloadMediaMessage(qmsg)
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            Zero.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await Zero.downloadMediaMessage(qmsg)
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            Zero.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${Zero.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await Zero.downloadMediaMessage(qmsg)
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            Zero.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!/webp/.test(mime)) throw `Reply sticker with caption *${prefix + command}*`
                m.reply(mess.wait)
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await Zero.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await Zero.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await Zero.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await Zero.downloadAndSaveMediaMessage(qmsg, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    Zero.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
        case 'yts': case 'ytsearch': {
            if (!text) return replay(`Example : ${prefix + command} Anime Story Whatsapp`)
            let yts = require("yt-search")
            let search = await yts(text)
            let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
            let no = 1
            for (let i of search.all) {
                teks += `⛓️ No : ${no++}\n⛓️ Type : ${i.type}\n⛓️ Video ID : ${i.videoId}\n⛓️ Title : ${i.title}\n⛓️ Views : ${i.views}\n⛓️ Duration : ${i.timestamp}\n⛓️ Uploaded On : ${i.ago}\n⛓️ Author : ${i.author.name}\n⛓️ Url : ${i.url}\n\n─────────────────\n\n`
            }
            Zero.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
        }
        break
        case 'google': {
            if (!text) return reply(`Example : ${prefix + command} gojo shiba inu`)
            let google = require('google-it')
            google({'query': text}).then(res => {
            let teks = `Google Search Title : ${text}\n\n`
            for (let g of res) {
            teks += `⛓️ *Title* : ${g.title}\n`
            teks += `⛓️ *Description* : ${g.snippet}\n`
            teks += `⛓️ *Link* : ${g.link}\n\n────────────────────────\n\n`
            } 
            reply(teks)
            })
            }
            break
            case 'gimage': case 'googleimage': case 'gi':{
                if (!text) return reply(`Example : ${prefix + command} gojo`)
                let gis = require('g-i-s')
                gis(text, async (error, result) => {
                n = result
                images = n[Math.floor(Math.random() * n.length)].url
                let buttons = [
                            {buttonId: `gimage ${text}`, buttonText: {displayText: '➡️➡️Next Image➡️➡️'}, type: 1}
                        ]
                        let buttonMessage = {
                            image: { url: images },
                            caption: `*-------「 GIMAGE SEARCH 」-------*
        🤠 *Query* : ${text}
        🔗 *Media Url* : ${images}`,
                            footer: Zero.user.name,
                            buttons: buttons,
                            headerType: 4
                        }
                        Zero.sendMessage(m.chat, buttonMessage, { quoted: m })
                })
                }
                break
                case 'play': case 'song': case 'ytplay': {
                    if (!text) return reply(`Example : ${prefix + command} Stay`)
                    let yts = require("yt-search")
                    let search = await yts(text)
                    let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                    let buttons = [
                        {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '🎶Audio🎶'}, type: 1},
                        {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '📽️Video📽️'}, type: 1}
                    ]
                    let buttonMessage = {
                        image: { url: anu.thumbnail },
                        caption: `
    ⛓️ Title : ${anu.title}
    ⛓️ Ext : Search
    ⛓️ ID : ${anu.videoId}
    ⛓️ Duration : ${anu.timestamp}
    ⛓️ Viewes : ${anu.views}
    ⛓️ Uploaded On : ${anu.ago}
    ⛓️ Author : ${anu.author.name}
    ⛓️ Channel : ${anu.author.url}
    ⛓️ Description : ${anu.description}
    ⛓️ Url : ${anu.url}`,
                        footer: Zero.user.name,
                        buttons: buttons,
                        headerType: 4
                    }
                    Zero.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                break
                case 'ytmp3': case 'getmusic': case 'ytaudio': {
                    let { yta } = require('./lib/y2mate')
                    if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
                    let quality = args[1] ? args[1] : '320kbps'
                    let media = await yta(text, quality)
                    if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                    Zero.sendImage(m.chat, media.thumb, `⛓️ Title : ${media.title}\n⛓️ File Size : ${media.filesizeF}\n⛓️ Url : ${isUrl(text)}\n⛓️ Ext : MP3\n⛓️ Resolution : ${args[1] || '320kbps'}`, m)
                    Zero.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
                }
                break
                case 'ytmp4': case 'getvideo': case 'ytvideo': {
                    let { ytv } = require('./lib/y2mate')
                    if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
                    let quality = args[1] ? args[1] : '360p'
                    let media = await ytv(text, quality)
                    if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                    Zero.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⛓️ Title : ${media.title}\n⛓️ File Size : ${media.filesizeF}\n⛓️ Url : ${isUrl(text)}\n⛓️ Ext : MP3\n⛓️ Resolution : ${args[1] || '360p'}` }, { quoted: m })
                }
                break
                case 'getmusicxxx': {
                    let { yta } = require('./lib/y2mate')
            let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                    let quality = args[1] ? args[1] : '128kbps'
                    let media = await yta(urls[text - 1], quality)
                    if (media.filesize >= 100000) return reply('File Over Limit '+util.format(media))
                    Zero.sendImage(m.chat, media.thumb, `⛓️ Title : ${media.title}\n⛓️ File Size : ${media.filesizeF}\n⛓️ Url : ${urls[text - 1]}\n⛓️ Ext : MP3\n⛓️ Resolution : ${args[1] || '128kbps'}`, m)
                    Zero.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
                }
                break
                case 'getvideoxxx': {
                    let { ytv } = require('./lib/y2mate')
                    if (!text) throw `Example : ${prefix + command} 1`
                    if (!m.quoted) throw 'Reply Message'
                    if (!m.quoted.isBaileys) throw `Can Only Reply To Meessages From Bots`
                    let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                    if (!urls) throw`Maybe The Message You Replied Does Not Contain The Video Search Result`
                    let quality = args[1] ? args[1] : '360p'
                    let media = await ytv(urls[text - 1], quality)
                    if (media.filesize >= 100000) return reply('File Over Limit '+util.format(media))
                    Zero.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⛓️ Title : ${media.title}\n⛓️ File Size : ${media.filesizeF}\n⛓️ Url : ${urls[text - 1]}\n⛓️ Ext : MP3\n⛓️ Resolution : ${args[1] || '360p'}` }, { quoted: m })
                }
                break
            case 'pinterest': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                Zero.sendMessage(m.chat, { image: { url: result }, caption: '※ Media Url : '+result }, { quoted: m })
            }
            break
            case 'anime': case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': case 'waifus': case 'nekos': case 'trap': case 'blowjob': {
                m.reply(mess.wait)
                Zero.sendMessage(m.chat, { image: { url: api('zenz', '/api/random/'+command, {}, 'apikey') }, caption: 'Generate Random ' + command }, { quoted: m })
            }
            break
	    case 'couple': {
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                Zero.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                Zero.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
        case 'animewall':  case '/animewall': {
            m.reply(mess.wait)
            let wall = await fetchJson('https://raw.githubusercontent.com/Daveshvats/Zero_Bot/main/animewall.json')
            let random = wall[Math.floor(Math.random() * wall.length)]
            Zero.sendMessage(m.chat, { image: { url: random.wall }, caption: `Android Wallpaper` }, { quoted: m })
        }
        break
        case 'darkjoke':  case '/darkjoke': {
            m.reply(mess.wait)
            let result = await fetchJson('https://raw.githubusercontent.com/Daveshvats/Zero_Bot/main/drak.json')
            let random = result[Math.floor(Math.random() * result.length)]
            Zero.sendMessage(m.chat, { image: { url: random.result }, caption: `DARK MEME` }, { quoted: m })
        }
        break
        case 'randomwallpaper':  case '/randomwallpaper': {
            m.reply(mess.wait)
            let image = await fetchJson('https://raw.githubusercontent.com/thegosa/theme_data/7bcd7b499a3975a5003ccb6be36db76a11e91a79/miui_themes_data/wall_for_miui.json')
            let random = image[Math.floor(Math.random() * image.length)]
            Zero.sendMessage(m.chat, { image: { url: random.image }, caption: `Done` }, { quoted: m })
        }
        break
        
        case 'couplepp':  case 'ppcouple': {
            m.reply(mess.wait)
            let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
            let random = anu[Math.floor(Math.random() * anu.length)]
            Zero.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male🙎🏻‍♂️` }, { quoted: m })
            Zero.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female🙎🏻‍♀️` }, { quoted: m })
        }
    break
    case '/wallpaperscraft': case 'wallpaperscraft': case '.wallpaperscraft': {
        if (!text) return m.reply(`Enter Text, Example : ${prefix + command} Zero`)
        m.reply(mess.wait)
        let anu = await fetchJson(`https://api.violetics.pw/api/media/wallpaperscraft?apikey=beta&query=${text}`)
        Zero.sendMessage(m.chat, { image: { url:anu.result }, caption: `Done` }, { quoted: m})
    }    
    break
        case 'coffeeimg': case 'kopi': {
        let buttons = [
                {buttonId: `coffe`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
            ]
            let buttonMessage = {
                image: { url: 'https://coffee.alexflipnote.dev/random' },
                caption: `☕ Random Coffee`,
                footer: Zero.user.name,
                buttons: buttons,
                headerType: 4
            }
            Zero.sendMessage(m.chat, buttonMessage, { quoted: m })
        }
        break
        case 'wallpaper': {
            if (!text) return reply(`Enter Query Title`)
    let { wallpaper } = require('./lib/scraper')
            anu = await wallpaper(text)
            result = anu[Math.floor(Math.random() * anu.length)]
    let buttons = [
                {buttonId: `wallpaper ${text}`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
            ]
            let buttonMessage = {
                image: { url: result.image[0] },
                caption: `⛓️ Title : ${result.title}\n⛓️ Category : ${result.type}\n⛓️ Detail : ${result.source}\n⛓️ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                footer: Zero.user.name,
                buttons: buttons,
                headerType: 4
            }
            Zero.sendMessage(m.chat, buttonMessage, { quoted: m })
        }
        break
        case 'alphacoders':  case '/alphacoders': {
            if (!text) return m.reply(`Enter Text, Example : ${prefix + command} Zero`)
            m.reply(mess.wait)
         anu = await fetch (`https://api.violetics.pw/api/media/alphacoders?apikey=beta&query=${text}`)
         alpha = anu.result
         result = alpha[Math.floor(Math.random() * alpha.length)]
            Zero.sendMessage(m.chat, { image: { url: result }, caption: `Done` }, { quoted: m })
        }
        break
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `※ Title : ${result.title}\n※ Source : ${result.source}\n※ Media Url : ${result.image}`,
                    footer: Zero.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Zero.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'logo': case 'logo2': case 'logo3': case 'logo4': case 'logogaming': case 'logogirl': case 'logogold': case 'spiderlogo': case 'ffcover': case 'crossfire':  case 'galaxy': case 'glass': case 'neon': case 'beach': case 'sparkling': case 'awan': case 'flower': case 'bohlam': case 'kaligrafi': case 'cokiat': case 'quotes': case 'grafity': case 'grafity3d':  case 'typography': case 'marmer': case 'proyektor': case 'quotesonline': case 'flashlight': case 'yasuologo': case 'starnight2': case 'ruby':{
                if (!text) return m.reply(`Enter Text, Example : ${prefix + command} Zero`)
                m.reply(mess.wait)
                Zero.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m})
	    }
        break
        case 'brainly': {
            m.reply(mess.wait)
            if (!text) throw `Example : ${prefix + command} apa itu wibu`           
            x = await fetchJson(`https://api.violetics.pw/api/media/brainly?apikey=beta&query=${text}`)                       
            ini_txt = '*BRAINLY SEARCH*\n\n'
            for (let i of x.result) {       
            ini_txt += `*QUESTION* : ${i.pertanyaan}\n`
            ini_txt += `*ANSWER* : ${i.jawaban}\n`                     
            }   
            reply(`${ini_txt}`)
            }
            break

        case 'ig': case 'igdl': case 'instagram': {



            if (!text) throw '*Please Enter Instagarm Link*' 
            
            if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw '*The link you provided is not valid*'
            
               
            
                            
            
            let urlnya = text
            
             hx.igdl(urlnya)
            
             .then(async(result) => {	  
            
            
             var halo = 0		
            
            
            Zero.sendMessage(m.chat, { image: { url: result.user.profilePicUrl }, jpegThumbnail: await getBuffer(result.user.profilePicUrl), caption: `*----「 INSTAGRAM DOWNLOADER 」----*\n\n*⬤ Username :* ${result.user.username}\n*⬤ Fullname :* ${result.user.fullName}\n*⬤ Followers :* ${result.user.followers}\n*⬤ Following :* ${result.user.following}\n*⬤ ID :* ${result.user.id}\n*⬤ Filetype :* ${result.medias[0].fileType}\n*⬤ Type :* ${result.medias[0].type}\n*⬤ No. of Media :* ${result.medias.length}\n*⬤ Url :* ${text}\n\n*ZERO*` }, { quoted: m })	                                  	                      	            
            
            
            for(let i of result.medias) {		
            
            
            if(i.url.includes('mp4')){		           			    				
            
            
            let link = await getBuffer(i.url)
            
            Zero.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Instagram ${i.type}*` }, { quoted: m })
            
            } else {
            
            
            let link = await getBuffer(i.url)
            
            Zero.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Instagram ${i.type}*` }, { quoted: m })          
            
            
            }
            
            
             }
            
            })                        
            }		
            
            break
            case 'ig3': case 'igdl3': case 'instagram3': {
            
               ////if 
            if (!text) throw '*Enter a Link Query!*'
            if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw '*The link you provided is not valid*'
               
            let bicil = require('@bochilteam/scraper')
            let urlnya = text
             bicil.instagramdlv4(urlnya)
             .then(async(result) => {
            for(let i of result){
            if(i.url.includes('mp4')){
            let link = await getBuffer(i.url)
            Zero.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.thumbnail), caption: `*${botname}*` }, { quoted: m }) 
            } else {
            let link = await getBuffer(i.url)
            Zero.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.thumbnail), caption: `*${botname}*` }, { quoted: m })                  
            }
            }
            }).catch((err) => reply(`*Failed When Downloading And Sending Media*`))
            }		
            break
            case 'ig2': case 'igdl2': case 'instagram2': {	            
               if (!text) throw '*Enter a Link Query!*'                
               if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw '*The link you provided is not valid*'
               
            anu = await fetchJson(`https://api.akuari.my.id/downloader/igdl?link=${text}`)
            var oi = 1
            for(let i of anu.medias){                
            var txt = `*▊▊▊INSTA DL▊▊▊*\n\n*Username:* ${anu.user.username}\n*Fullname:* ${anu.user.fullName}\n*Followers:* ${anu.user.followers}\n*Type:* ${anu.medias[0].type}\n*Tipe:* ${anu.medias[0].fileType}\n*ID:* ${anu.user.id}\n*Jumlah Media:* ${oi++}\n*Url:* ${text}\n\n*ZERO*`
            var buf = await getBuffer(anu.user.profilePicUrl)        
            Zero.sendMessage(m.chat, { image: { url: anu.user.profilePicUrl }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m }).catch((err) => m.reply('error'))
            Zero.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `${botname}`}, { quoted: m }).catch((err) => m.reply('error'))
            }
            }
            break
            case 'igimage': {	            
            if (!text) throw '*Enter a Link Query!*'
            const { instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
            if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw '*The link you provided is not valid*'
               
            instagramdlv3(`${text}`).then(async (data) => {
            for (let f of data) {                                      
            Zero.sendMedia(m.chat, f.url, '', `Download Url Instagram From ${text}`, m)
            }
            }).catch((err) => {
            reply(`*Failed to download media and send videos*`)
            })
            }
            break
            case 'igs': case 'igstory': case 'instagramstory': {
            
               
            
            if (!text) throw 'Type  Username!' 
            
                             
            
            let urlnya = text
            
             hx.igstory(urlnya)
            
             .then(async(result) => {
            
            var halo = 0		
            
            Zero.sendMessage(m.chat, { image: { url: result.user.profilePicUrl }, jpegThumbnail: await getBuffer(result.user.profilePicUrl), caption: `*----「 INSTAGRAM STORY 」----*\n\n*⬤ Username :* ${result.user.username}\n*⬤ Fullname :* ${result.user.fullName}\n*⬤ Followers :* ${result.user.followers}\n*⬤ Following :* ${result.user.following}\n*⬤ ID :* ${result.user.id}\n*⬤ Filetype :* ${result.medias[0].fileType}\n*⬤ Type :* ${result.medias[0].type}\n*⬤ Media :* ${result.medias.length}\n*⬤ Bio :* ${result.user.biography}\n\n*ZERO*` }, { quoted: m })	                                  	                      	            
            
            for(let i of result.medias) {
            
            if(i.url.includes('mp4')){
            
            let link = await getBuffer(i.url)
            
            Zero.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Story ${i.type}*` }, { quoted: m }) 
            
            } else {
            
            let link = await getBuffer(i.url)
            
            Zero.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Story ${i.type}*` }, { quoted: m })                  
            
            }
            
            }
            
            }).catch((err) => reply(`*Sorry Story Instagram ${text} not found*`))
            
            }		
            
            break
            case 'igs2': case 'igstory2': case 'instagramstory2':{
            ////if you (copy.codes) .then(give a credit)
            if (!text) throw '*Enter a Link Query!*'
            //   if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'
               
            anu = await fetchJson(`https://api.akuari.my.id/downloader/igStory?username=${text}`)        
            for (let i of anu) {
            tummb = await getBuffer(i.preview)         
            Zero.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:tummb, caption: `*${botname}*`}, { quoted: m }).catch((err) => m.reply('*Sorry, the feature is in error*'))
            }
            }
            break
            case 'igs3': case 'igstory3': case 'instagramstory3': {
              
            if (!text) throw 'Enter Username!' 
               
            let bicil = require('@bochilteam/scraper')
            let urlnya = text
            bicil.instagramStoryv2(urlnya)
            .then(async(result) => {	  
            var halo = 1		
            Zero.sendMessage(m.chat, { image: { url: result.user.profilePicUrl }, jpegThumbnail: await getBuffer(result.user.profilePicUrl), caption: `*----「 INSTA DOWNLOADER 」----*\n\n*⬤ Username :* ${result.user.username}\n*⬤ Fullname :* ${result.user.fullName}\n*⬤ Followers :* ${result.user.followers}\n*⬤ Following :* ${result.user.following}\n*⬤ ID :* ${result.user.id}\n*⬤ Jumlah Media :* ${halo++}\n*⬤ Bio :* ${result.user.biography}\n\n*ZERO*` }, { quoted: m })	                                  	                      	            
            for(let i of result.results) {		
            if(i.url.includes('mp4')){		           			    				
            let link = await getBuffer(i.sourceUrl)
            Zero.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.thumbnail), caption: `*Story ${i.type}*` }, { quoted: m })
            } else {
            let link = await getBuffer(i.url)
            Zero.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.thumbnail), caption: `*Story ${i.type}*` }, { quoted: m })          
            }
            }
            }).catch((err) => reply(`*Sorry Story Instagram ${text} Tnot found*`))
            }		
            break
            case 'igtv': {	            
            if (!text) throw '*Enter a Link Query!*'
            const { instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
            if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw '*The link you provided is not valid*'
               
            instagramdlv3(`${text}`).then(async (data) => {            
            var buf = await getBuffer(data[0].thumbnail)        
            Zero.sendMessage(m.chat, { video: { url: data[0].url }, jpegThumbnail:buf, caption: `${botname}`}, { quoted: m })
            }).catch((err) => {
            reply(`*Failed to download media and send videos*`)
            })
            }
            break
case 'cat boy': case '/catboy' : case 'catboy':
        m.reply(mess.wait)
        axios.get(`https://api.catboys.com/img/random`)
        .then(({data}) => {
        Zero.sendImage(m.chat, data.url, mess.success, m)
        })
        break
        case 'cosplayer': case '/cosplayer': case 'cosplay2':
            m.reply(mess.wait)
            Zero.sendMessage(m.chat, { image: { url:"https://zenzapis.xyz/randomimage/cosplay?apikey=7c59f79077"}, caption: `cosplayer` }, { quoted: m})
        break
        
                          
        case 'aesthetic': case '/aesthetic': case 'aestheticimg':
            m.reply(mess.wait)
            Zero.sendMessage(m.chat, { image: { url:"https://zenzapis.xyz/randomimage/aesthetic?apikey=7c59f79077"}, caption: `Aesthetic` }, { quoted: m})
        break
        
        case 'randompp': case '/randompp': case 'profilepic':
            m.reply(mess.wait)
            Zero.sendMessage(m.chat, { image: { url:"https://zenzapis.xyz/randomimage/profil?apikey=7c59f79077"}, caption: `RandomPP` }, { quoted: m})
        break
        
        case 'wall': case '/wall': case 'wallhd': case '/wallhd' :
            m.reply(mess.wait)
            Zero.sendMessage(m.chat, { image: { url:"https://zenzapis.xyz/randomimage/wallhp?apikey=7c59f79077"}, caption: `wallpaper` }, { quoted: m})
        break
        case 'waifuwall': case '/waifuwall': case 'aniwall': case '/aniwall' :
            m.reply(mess.wait)
            Zero.sendMessage(m.chat, { image: { url:"https://zenzapis.xyz/api/anime/sfw/wallpaper?apikey=7c59f79077"}, caption: `wallpaper` }, { quoted: m})
        break
        
        case 'anime': case '/anime': case 'animehd': case '/animeimg' :
            m.reply(mess.wait)
            Zero.sendMessage(m.chat, { image: { url:"https://zenzapis.xyz/randomanime/anime?apikey=7c59f79077"}, caption: `done` }, { quoted: m})
        break
        
        case 'randomminecraft': case '/minecraft': case '/randomminecraft': case 'minecraft' :
            m.reply(mess.wait)
            axios.get(`https://zenzapis.xyz/randomimage/minecraft?apikey=7c59f79077`)
            .then(({data}) => {
            Zero.sendImage(m.chat, data.url,m )})
            break
            
            case 'randompubg': case '/pubg': case '/randompubg': case 'bgmi' : case '/bgmi' :
                m.reply(mess.wait)
                Zero.sendMessage(m.chat, { image: { url:"https://zenzapis.xyz/randomimage/pubg?apikey=7c59f79077"}, caption: `done` }, { quoted: m})
            break
            case '/meme': case'meme':
                m.reply(mess.wait)
                axios.get(`https://meme-api.herokuapp.com/gimme`)
                .then(({data}) => {
                Zero.sendImage(m.chat, data.url, mess.success, m)
                })  
        break
            
          case 'puppy': case '/puppy' : case 'puppyimg':
                m.reply(mess.wait)
                Zero.sendMessage(m.chat, { image: { url:"https://place-puppy.com/1080x1080"}, caption: `Done` }, { quoted: m})
            break
      
             case 'mysoulmate': {
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Your Match Is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
                    await Zero.sendButtonText(m.chat, buttons, jawab, Zero.user.name, m, {mentions: ments})
            }
            break
            case 'couple': {
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Cieeee, What's Going On❤️💖👀`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
                    await Zero.sendButtonText(m.chat, buttons, jawab, Zero.user.name, m, {mentions: menst})
            }
            break
            case 'is':
				if (!text) return replay(`Use Text, Example : ${prefix + command} he married `)
					const apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
					const kah = apa[Math.floor(Math.random() * apa.length)]
Zero.sendMessage(from, { text: `Question : Is ${q}\nAnswer : ${kah}` }, { quoted: m })

					break
					            case 'what':
				if (!text) return replay(`Use Text, Example : ${prefix + command} he married `)
					const lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
					const kahk = lel[Math.floor(Math.random() * lel.length)]
Zero.sendMessage(from, { text: `Question : What ${q}\nAnswer : ${kahk}` }, { quoted: m })

					break
case 'can':
				if (!text) return replay(`Use Text, Example : ${prefix + command} you fuck her lol `)
					const bisa = [`Can`,`Can't`,`Cannot`,`Of Course You Can!!!`]
					const ga = bisa[Math.floor(Math.random() * bisa.length)]
Zero.sendMessage(from, { text: `Question : Can ${q}\nAnswer : ${ga}` }, { quoted: m })

					break
case 'how':
				if (!text) return replay(`Use Text, Example : ${prefix + command} is my face`)
					const gimana = [`It's Okay`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`,`Holy Cow! Really???`,`Dizzy Ah`,`Ohhh I See:(`,`The Patient, Boss:(`,`How Are You?`]
					const ya = gimana[Math.floor(Math.random() * gimana.length)]
Zero.sendMessage(from, { text: `Question : ${q}\nAnswer : How ${ya}` }, { quoted: m })

					break
case 'rate':
				if (!text) return replay(`Use Text, Example : ${prefix + command} My Dp`)
					const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
Zero.sendMessage(from, { text: `Rate : ${q}\nAnswer : *${te}%*` }, { quoted: m })

					break
  case 'handsomecheck':
				if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Zero`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
Zero.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })

					break
case 'beautifulcheck':
				if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Zero`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
Zero.sendMessage(from, { text: `*${command}*\n\nNama : ${q}\nAnswer : *${tik}%*` }, { quoted: m })

					break
case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
				if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Zero`)
					const sangeh = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
Zero.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${sange}%*` }, { quoted: m })
					break
					case 'charactercheck':
					if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Zero`)
					const Zeroy =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = Zeroy[Math.floor(Math.random() * Zeroy.length)]
					Zero.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
				     break
                    case 'stupid':
      case 'foolish':
      case 'smart':
      case 'idiot':
      case 'gay':
      case 'lesbi':
      case 'bastard':
      case 'stubble':
      case 'dog':
      case 'fuck':
      case 'ape':
      case 'noob':
      case 'great':
      case 'horny':
      case 'wibu':
      case 'asshole':
      case 'handsome':
      case 'beautiful':
      case 'cute':
      case 'kind':
      case 'ugly':
      case 'pretty':
      case 'lesbian':
      case 'randi':
      case 'gandu':
      case 'madarchod':
      case 'kala':
      case 'gora':
      case 'chutiya':
      case 'nibba':
      case 'nibbi':
      case 'bhosdiwala':
      case 'chutmarika':
      case 'bokachoda':
      case 'suarerbaccha':
      case 'bolochoda':
      case 'muthal':
      case 'muthbaaz':
      case 'randibaaz':
      case 'topibaaz':
      case 'cunt':
      case 'nerd':
      case 'behenchod':
      case 'behnchoda':
      case 'bhosdika':
      case 'bc':
      case 'nerd':
      case 'mc':
      case 'bsdk':
      case 'bhosdk':
      case 'nigger':
      case 'loda':
      case 'laund':
      case 'nigga':
      case 'sexy':
      case 'hot': {
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `The Most *${command}* Here Is @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '👀', buttonText: { displayText: '👀😂' }, type: 1 }
                    ]
                    await Zero.sendButtonText(m.chat, buttons, jawab, Zero.user.name, m, {mentions: ments})
            }
            break
case 'when':
				if (!text) return replay(`Use Text, Example : ${prefix + command} will i get married `)
					const kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow',`After This Command, You Too ${q}`]
					const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
Zero.sendMessage(from, { text: `Question : ${q}\nAnswer : *${kapankah}*` }, { quoted: m })
					break
case 'wangy':
              if (!text) return replay(`Use Text, Example : ${prefix + command} hinata`)
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaah the smell of hair ${qq} smelly i want to smell the fragrance ${qq} AAAAAAAAH ~ Her hair.... aaah i want to stroke her hair too ~~ AAAAAH ${qq} first time out in anime is cute too ❤️ ❤️ ❤️ so AAAAAAAH ${qq} AAAAAA LUCCUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️what ? ${qq} it's not real ? Just HELL you say ? no, no no no no no no no no no no no no no no no !! I DON'T CARE ABOUT THE REALITY, I DON'T CARE. ❤️ ❤️ ❤️ ${qq} me ... ${qq} on the laptop watching me, ${qq} .. you believe in me ? aaaaaaaaaaah thanks ${q} I don't want to give up ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH I STILL HAVE ${qq} ALSO NOT THE SAME AAAAAAAAAAAAAAH`
             reply(awikwok)
              break
    case 'colorify':case '/colorify':{
        m.reply(mess.wait)
        if (/image/.test(mime)) {
        let dwnld = await quoted.download()
        let { floNime } = require('./lib/uploader')
        let fatGan = await floNime(dwnld)
        buffer = `https://zenzapis.xyz/photoeditor/colorify?url=${fatGan.result.url}&apikey=7c59f79077`
        Zero.sendMessage(m.chat, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})
        }
        }
        break
        case 'photohorny':case '/photohorny':{
            m.reply(mess.wait)
            if (/image/.test(mime)) {
            let dwnld = await quoted.download()
            let { floNime } = require('./lib/uploader')
            let fatGan = await floNime(dwnld)
            buffer = `https://zenzapis.xyz/photoeditor/horny?url=${fatGan.result.url}&apikey=7c59f79077`
            Zero.sendMessage(m.chat, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})
            }
            }
            break
            case '/photogay':case 'photogay':{
                m.reply(mess.wait)
                if (/image/.test(mime)) {
                let dwnld = await quoted.download()
                let { floNime } = require('./lib/uploader')
                let fatGan = await floNime(dwnld)
                buffer = `https://zenzapis.xyz/photoeditor/gay?url=${fatGan.result.url}&apikey=7c59f79077`
                Zero.sendMessage(m.chat, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})
                }
                }
                break
                    case 'contrast':case '/contrast':{
                        m.reply(mess.wait)
                        if (/image/.test(mime)) {
                        let dwnld = await quoted.download()
                        let { floNime } = require('./lib/uploader')
                        let fatGan = await floNime(dwnld)
                        buffer = `https://zenzapis.xyz/photoeditor/contrast?url=${fatGan.result.url}&apikey=7c59f79077`
                        Zero.sendMessage(m.chat, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})
                        }
                        }
                        break
                        case 'pixelate':case '/pixelate':{
                            m.reply(mess.wait)
                            if (/image/.test(mime)) {
                            let dwnld = await quoted.download()
                            let { floNime } = require('./lib/uploader')
                            let fatGan = await floNime(dwnld)
                            buffer = `https://zenzapis.xyz/photoeditor/pixelate?url=${fatGan.result.url}&apikey=7c59f79077`
                            Zero.sendMessage(m.chat, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})
                            }
                            }
                            break
                            case 'sepia':case '/sepia':{
                                m.reply(mess.wait)
                                if (/image/.test(mime)) {
                                let dwnld = await quoted.download()
                                let { floNime } = require('./lib/uploader')
                                let fatGan = await floNime(dwnld)
                                buffer = `https://zenzapis.xyz/photoeditor/sepia?url=${fatGan.result.url}&apikey=7c59f79077`
                                Zero.sendMessage(m.chat, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})
                                }
                                }
                                break
                                case 'brighten':case '/brighten':{
                                    m.reply(mess.wait)
                                    if (/image/.test(mime)) {
                                    let dwnld = await quoted.download()
                                    let { floNime } = require('./lib/uploader')
                                    let fatGan = await floNime(dwnld)
                                    buffer = `https://zenzapis.xyz/photoeditor/brighten?url=${fatGan.result.url}&apikey=7c59f79077`
                                    Zero.sendMessage(m.chat, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})
                                    }
                                    }
                                    break
                                    case 'greyscale':case '/greyscale':{
                                        m.reply(mess.wait)
                                        if (/image/.test(mime)) {
                                        let dwnld = await quoted.download()
                                        let { floNime } = require('./lib/uploader')
                                        let fatGan = await floNime(dwnld)
                                        buffer = `https://zenzapis.xyz/photoeditor/greyscale?url=${fatGan.result.url}&apikey=7c59f79077`
                                        Zero.sendMessage(m.chat, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})
                                        }
                                        }
                                        break
                                        case 'circle':case '/circle':{
                                            m.reply(mess.wait)
                                            if (/image/.test(mime)) {
                                            let dwnld = await quoted.download()
                                            let { floNime } = require('./lib/uploader')
                                            let fatGan = await floNime(dwnld)
                                            buffer = `https://zenzapis.xyz/photoeditor/circle?url=${fatGan.result.url}&apikey=7c59f79077`
                                            Zero.sendMessage(m.chat, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})
                                            }
                                            }
                                            break
                                            
                                            case 'blur':case '/blur':{
                                                m.reply(mess.wait)
                                                if (/image/.test(mime)) {
                                                let dwnld = await quoted.download()
                                                let { floNime } = require('./lib/uploader')
                                                let fatGan = await floNime(dwnld)
                                                buffer = `https://zenzapis.xyz/photoeditor/blur?url=${fatGan.result.url}&apikey=7c59f79077`
                                                Zero.sendMessage(m.chat, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})
                                                }
                                                }
                                                break
                                                case 'invert':case '/invert':{
                                                    m.reply(mess.wait)
                                                    if (/image/.test(mime)) {
                                                    let dwnld = await quoted.download()
                                                    let { floNime } = require('./lib/uploader')
                                                    let fatGan = await floNime(dwnld)
                                                    buffer = `https://zenzapis.xyz/photoeditor/invert?url=${fatGan.result.url}&apikey=7c59f79077`
                                                    Zero.sendMessage(m.chat, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})
                                                    }
                                                    }
                                                    break
                                                    
                                                    case '/2x':case '2x':{
                                                        m.reply(mess.wait)
                                                        if (/image/.test(mime)) {
                                                        let dwnld = await quoted.download()
                                                        let { floNime } = require('./lib/uploader')
                                                        let fatGan = await floNime(dwnld)
                                                        buffer = `https://zenzapis.xyz/photoeditor/2x?url=${fatGan.result.url}&apikey=7c59f79077`
                                                        Zero.sendMessage(m.chat, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})
                                                        }
                                                        }
                                                        break
                                                        case '/2x':case '2x':{
                                                            m.reply(mess.wait)
                                                            if (/image/.test(mime)) {
                                                            let dwnld = await quoted.download()
                                                            let { floNime } = require('./lib/uploader')
                                                            let fatGan = await floNime(dwnld)
                                                            buffer = `https://zenzapis.xyz/photoeditor/2x?url=${fatGan.result.url}&apikey=7c59f79077`
                                                            Zero.sendMessage(m.chat, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})
                                                            }
                                                            }
                                                            break 
                                                            case 'upscale':case '/upscale':{
                                                                m.reply(mess.wait)
                                                                if (/image/.test(mime)) {
                                                                let dwnld = await quoted.download()
                                                                let { floNime } = require('./lib/uploader')
                                                                let fatGan = await floNime(dwnld)
                                                                buffer = `https://zenzapis.xyz/photoeditor/upscale?url=${fatGan.result.url}&apikey=7c59f79077`
                                                                Zero.sendMessage(m.chat, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})
                                                                }
                                                                }
                                                                break
                                                                
                                                                case 'glassedit':case '/glassedit':{
                                                                    m.reply(mess.wait)
                                                                    if (/image/.test(mime)) {
                                                                    let dwnld = await quoted.download()
                                                                    let { floNime } = require('./lib/uploader')
                                                                    let fatGan = await floNime(dwnld)
                                                                    buffer = `https://zenzapis.xyz/photoeditor/glass?url=${fatGan.result.url}&apikey=7c59f79077`
                                                                    Zero.sendMessage(m.chat, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})
                                                                    }
                                                                    }
                                                                    break

        case 'wasted':case '/wasted':{
            m.reply(mess.wait)
            if (/image/.test(mime)) {
                let dwnld = await quoted.download()
                let {
                    floNime
                } = require('./lib/uploader')
                let fatGans = await floNime(dwnld)
            buffer = `https://zenzapis.xyz/photoeditor/wasted?url=${fatGans.result.url}&apikey=7c59f79077`
            Zero.sendMessage(m.chat, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})}  }
            break
         case 'wanted':case '/wanted':{
                m.reply(mess.wait)
                if (/image/.test(mime)) {
                let dwnld = await quoted.download()
                let { floNime } = require('./lib/uploader')
                let fatGan = await floNime(dwnld)
                buffer = `https://zenzapis.xyz/photoeditor/wanted?url=${fatGan.result.url}&apikey=7c59f79077`
                Zero.sendMessage(m.chat, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})}  }
                break
         case 'gun':case '/gun':{
                    m.reply(mess.wait)
                    if (/image/.test(mime)) {
                    let dwnld = await quoted.download()
                    let { floNime } = require('./lib/uploader')
                    let fatGan = await floNime(dwnld)
                    buffer = `https://zenzapis.xyz/photoeditor/gun?url=${fatGan.result.url}&apikey=7c59f79077`
                    Zero.sendMessage(m.chat, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})}  }
                    break
        case 'gun':case '/gun':{
                        m.reply(mess.wait)
                        if (/image/.test(mime)) {
                        let dwnld = await quoted.download()
                        let { floNime } = require('./lib/uploader')
                        let fatGan = await floNime(dwnld)
                        buffer = `https://zenzapis.xyz/photoeditor/gun?url=${fatGan.result.url}&apikey=7c59f79077`
                        Zero.sendMessage(m.chat, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})}  }
                        break
        case '/passed':case 'passed':{
                            m.reply(mess.wait)
                            if (/image/.test(mime)) {
                            let dwnld = await quoted.download()
                            let { floNime } = require('./lib/uploader')
                            let fatGan = await floNime(dwnld)
                            buffer = `https://zenzapis.xyz/photoeditor/passed?url=${fatGan.result.url}&apikey=7c59f79077`
                            Zero.sendMessage(m.chat, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})}  }
                            break               
        case 'comrade':case '/comrade':{
                                m.reply(mess.wait)
                                if (/image/.test(mime)) {
                                let dwnld = await quoted.download()
                                let { floNime } = require('./lib/uploader')
                                let fatGan = await floNime(dwnld)
                                buffer = `https://zenzapis.xyz/photoeditor/comrade?url=${fatGan.result.url}&apikey=7c59f79077`
                                Zero.sendMessage(m.chat, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})}  }
                                break
        case 'pet':case '/pet':{
                                    m.reply(mess.wait)
                                    if (/image/.test(mime)) {
                                    let dwnld = await quoted.download()
                                    let { floNime } = require('./lib/uploader')
                                    let fatGan = await floNime(dwnld)
                                    buffer = `https://zenzapis.xyz/photoeditor/pet?url=${fatGan.result.url}&apikey=7c59f79077`
                                    Zero.sendMessage(m.chat, {video:{url:buffer},gifPlayback: true, caption:"Here you go!"}, {quoted:m})}  }
                                    break                                                                 
                                    case 'photomanipulation':{
                                        m.reply(mess.wait)
                                        if (/image/.test(mime)) {
                                        let dwnld = await quoted.download()
                                        let { floNime } = require('./lib/uploader')
                                        let fatGan = await floNime(dwnld)
                                        axios.get(`https://zenzapis.xyz/photoeditor/photomanipulation?url=${fatGan.result.url}&apikey=7c59f79077`)
                                        .then(({data}) => {
                                             Zero.sendImage(m.chat, data.result, mess.success, m)
                                        })}}
                                       break
                                    case 'toonme':{
                                        m.reply(mess.wait)
                                        if (/image/.test(mime)) {
                                        let dwnld = await quoted.download()
                                        let { floNime } = require('./lib/uploader')
                                        let fatGan = await floNime(dwnld)
                                        axios.get(`https://zenzapis.xyz/photoeditor/toonme/v1?url=${fatGan.result.url}&apikey=7c59f79077`)
                                        .then(({data}) => {
                                             Zero.sendImage(m.chat, data.result, mess.success, m)
                                        })}}
                                       break
                                     
                                       
                                       case 'uncover':{
                                        m.reply(mess.wait)
                                        if (/image/.test(mime)) {
                                        let dwnld = await quoted.download()
                                        let { floNime } = require('./lib/uploader')
                                        let fatGan = await floNime(dwnld)
                                        buffer = `https://api.popcat.xyz/uncover?image=${fatGan.result.url}`
                                        Zero.sendMessage(m.chat, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})
                                        }
                                        }
                                        break
                                        case 'clownmeme':{
                                            m.reply(mess.wait)
                                            if (/image/.test(mime)) {
                                            let dwnld = await quoted.download()
                                            let { floNime } = require('./lib/uploader')
                                            let fatGan = await floNime(dwnld)
                                            buffer = `https://api.popcat.xyz/clown?image=${fatGan.result.url}`
                                            Zero.sendMessage(m.chat, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})
                                            }
                                            }
                                            break 
                                              
                                            case 'drip':{
                                                m.reply(mess.wait)
                                                if (/image/.test(mime)) {
                                                let dwnld = await quoted.download()
                                                let { floNime } = require('./lib/uploader')
                                                let fatGan = await floNime(dwnld)
                                                buffer = `https://api.popcat.xyz/drip?image=${fatGan.result.url}`
                                                Zero.sendMessage(m.chat, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})
                                                }
                                                }
                                                break
                                                
                                         case 'admeme':{
                                                    m.reply(mess.wait)
                                                    if (/image/.test(mime)) {
                                                    let dwnld = await quoted.download()
                                                    let { floNime } = require('./lib/uploader')
                                                    let fatGan = await floNime(dwnld)
                                                    buffer = `https://api.popcat.xyz/ad?image=${fatGan.result.url}`
                                                    Zero.sendMessage(m.chat, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})
                                                    }
                                                    }
                                                    break
                                       
case 'trigger':{
m.reply(mess.wait)
if (/image/.test(mime)) {
let dwnld = await quoted.download()
let { floNime } = require('./lib/uploader')
let fatGan = await floNime(dwnld)
anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${fatGan.result.url}`

Zero.sendMessage(m.chat, {video:{url:anu1},gifPlayback:true}, {quoted: m})
}
}

break                                    
//https://leyscoders-api.herokuapp.com/api/img/trash?url=https://telegra.ph/file/0905206bd17eb6abe2389.jpg&apikey=dappakntlll//  
case 'rip':{
m.reply(mess.wait)
if (/image/.test(mime)) {
let dwnld = await quoted.download()
let { floNime } = require('./lib/uploader')
let fatGan = await floNime(dwnld)
buffer = `https://hardianto.xyz/api/rip?image=${fatGan.result.url}&apikey=hardianto`
Zero.sendMessage(m.chat, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})
}
}
break
case 'hacker2':{
    m.reply(mess.wait)
    if (/image/.test(mime)) {
    let dwnld = await quoted.download()
    let { floNime } = require('./lib/uploader')
    let fatGan = await floNime(dwnld)
    buffer = `https://hardianto.xyz/api/beta/hacker2?apikey=hardianto&pp=${fatGan.result.url}`
    Zero.sendMessage(m.chat, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})
    }
    }
    break 
    case 'spongebob':{
        m.reply(mess.wait)
        if (/image/.test(mime)) {
        let dwnld = await quoted.download()
        let { floNime } = require('./lib/uploader')
        let fatGan = await floNime(dwnld)
        buffer = `https://hardianto.xyz/api/knights/spongebob?apikey=hardianto&pp=${fatGan.result.url}`
        Zero.sendMessage(m.chat, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})
        }
        }
        break
        case 'spongebob2':{
            m.reply(mess.wait)
            if (/image/.test(mime)) {
            let dwnld = await quoted.download()
            let { floNime } = require('./lib/uploader')
            let fatGan = await floNime(dwnld)
            buffer = `https://hardianto.xyz/api/knights/patrick?apikey=hardianto&pp=${fatGan.result.url}`
            Zero.sendMessage(m.chat, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})
            }
            }
            break    
            case 'stonks':{
                m.reply(mess.wait)
                if (/image/.test(mime)) {
                let dwnld = await quoted.download()
                let { floNime } = require('./lib/uploader')
                let fatGan = await floNime(dwnld)
                buffer = `https://hardianto.xyz/api/stonk-up?image=${fatGan.result.url}&apikey=hardianto`
                Zero.sendMessage(m.chat, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})
                }
                }
                break
    case 'hacker3':{
        m.reply(mess.wait)
        if (/image/.test(mime)) {
        let dwnld = await quoted.download()
        let { floNime } = require('./lib/uploader')
        let fatGan = await floNime(dwnld)
        buffer = `https://hardianto.xyz/api/beta/hacker3?apikey=hardianto&pp=${fatGan.result.url}`
        Zero.sendMessage(m.chat, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})
        }
        }
        break                              
case 'trash':{
m.reply(mess.wait)
if (/image/.test(mime)) {
let dwnld = await quoted.download()
let { floNime } = require('./lib/uploader')
let fatGan = await floNime(dwnld)
buffer = `https://leyscoders-api.herokuapp.com/api/img/trash?url=${fatGan.result.url}&apikey=dappakntlll`
Zero.sendMessage(m.chat, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})
}
}
break
case 'affect':{
    m.reply(mess.wait)
    if (/image/.test(mime)) {
    let dwnld = await quoted.download()
    let { floNime } = require('./lib/uploader')
    let fatGan = await floNime(dwnld)
    buffer = `https://leyscoders-api.herokuapp.com/api/img/affect?url=${fatGan.result.url}&apikey=dappakntlll`
    Zero.sendMessage(m.chat, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})
    }
    }
    break 
    case 'hitler':{
        m.reply(mess.wait)
        if (/image/.test(mime)) {
        let dwnld = await quoted.download()
        let { floNime } = require('./lib/uploader')
        let fatGan = await floNime(dwnld)
        buffer = `https://leyscoders-api.herokuapp.com/api/img/hitler?url=${fatGan.result.url}&apikey=dappakntlll`
        Zero.sendMessage(m.chat, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})
        }
        }
        break
        case 'jokeimg':{
            m.reply(mess.wait)
            if (/image/.test(mime)) {
            let dwnld = await quoted.download()
            let { floNime } = require('./lib/uploader')
            let fatGan = await floNime(dwnld)
            buffer = `https://leyscoders-api.herokuapp.com/api/img/joke?url=${fatGan.result.url}&apikey=dappakntlll`
            Zero.sendMessage(m.chat, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})
            }
            }
            break
            case 'angie': 
            case 'aria':
            case 'attic': 
            case 'blackandwhite': 
            case 'chorme1977': 
            case 'constrastbandw':
            case 'creamy': 
            case 'duotone': 
            case 'eva': 
            case 'goldenhour': 
            case 'hana': 
            case 'hdr': 
            case 'japanese':
            case 'lana': 
            case 'lavander': 
            case 'lemonande': 
            case 'lightleak': 
            case 'lisa': 
            case 'lomo': 
            case 'milk': 
            case 'molly':
            case 'monochrome': 
            case 'morning': 
            case 'movie': 
            case 'orton': 
            case 'paretro': 
            case 'perfectbandw': 
            case 'plumy': 
            case 'retrolga': 
            case 'ruby': 
            case 'sand': 
            case 'sapphire': 
            case 'sepia': 
            case 'softsepia': 
            case 'solarize': 
            case 'sphinx':
            case 'venus': 
            case 'viewfinder': 
            case 'warmsunset': {
                m.reply(mess.wait)
if (/image/.test(mime)) {
let dwnld = await quoted.download()
let { floNime } = require('./lib/uploader')
let fatGan = await floNime(dwnld)
buf = (`https://violetics.pw/api/photofilter/${command}?apikey=beta&image=${fatGan.result.url}`)
Zero.sendMessage(m.chat, {image:{url:buf}, caption:"Here you go!"}, {quoted:m})
}
}
            break
            case 'silk':  
case '3dnature': 
case 'bevel': 
case 'birthdaycake': 
case  'burnpaper':  
case 'coffee': 
case 'coffee-heartcup': 
case 'embroiderytext': 
case 'flaming': 
case 'flowertypo': 
case 'funnycup': 
case 'fur': 
case 'gerbang': 
case 'glowrainbow': 
case 'gradientavatar': 
case 'graffititext': 
case 'harrypotter': 
case 'lovemessage': 
case 'luxuryroyal': 
case 'neonlight': 
case 'sweetcandy': 
case 'summertext': 
case 'woodheart': 
case 'woodblock': 
case 'yellowroses': 
case 'wolfmetal': 
case 'underwaterocean': {
m.reply(mess.wait)
if (!text) throw `Example : ${prefix + command} text`
anu = await getBuffer(`https://violetics.pw/api/photooxy/${command}?apikey=beta&text=${text}`)
Zero.sendMessage(m.chat, { image: anu, caption: `*PHOTO OXY ${command}*` , quoted: m})}                       
case 'jail':{
m.reply(mess.wait)
if (/image/.test(mime)) {
let dwnld = await quoted.download()
let { floNime } = require('./lib/uploader')
let fatGan = await floNime(dwnld)
buffer = `https://zenzapis.xyz/photoeditor/jail?url=${fatGan.result.url}&apikey=7c59f79077`
Zero.sendMessage(m.chat, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})
}
}
break
case 'topheadlines':

    // First lets get some search data from News API
  
  // Build the URL we are going request. This will get articles related to Apple and sort them newest first
  let dhongi = 'https://newsapi.org/v2/top-headlines/sources?bbc-news&apiKey=' +
  '306032cefd134ab38660d7db51dd18d1';
  
  // Make the request with axios' get() function
  axios.get(dhongi).then(function(r1) {
  
    // At this point we will have some search results from the API. Take the first search result...
    let firstResult = r1.data.articles[0];
  
    // ...and download the HTML for it, again with axios
    axios.get(firstResult.url).then(function(r2) {
  
      // We now have the article HTML, but before we can use Readability to locate the article content we need jsdom to convert it into a DOM object
      let dom = new JSDOM(r2.data, {
        url: firstResult.url
      });
  
      // now pass the DOM document into readability to parse
      let article = new Readability(dom.window.document).parse();
  
      // Done! The article content is in the textContent property
      console.log(color(article.textContent));
      reply(article.textContent)
    })
  })
    break
    case 'googlenews':
    const request = require('request');
  
  const options = {
    method: 'GET',
    url: 'https://google-news1.p.rapidapi.com/search',
    qs: {
      q: `${text}`,
      country: 'ZW',
      lang: 'en',
      source: 'iharare.com',
      limit: '100',
      when: '30d'
    },
    headers: {
      'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
      'X-RapidAPI-Host': 'google-news1.p.rapidapi.com',
      useQueryString: true
    }
  };
  
  request(options, function (error, response, body) {
      if (error) throw new Error(error);
  
      reply(body);
  });
  break
  case 'hackernews':
  const drips = {
    method: 'GET',
    url: 'https://community-hacker-news-v1.p.rapidapi.com/topstories.json',
    qs: {print: 'pretty'},
    headers: {
      'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
      'X-RapidAPI-Host': 'community-hacker-news-v1.p.rapidapi.com',
      useQueryString: true
    }
  };
  let dhuripi = require('request')
  dhuripi(drips, function (error, response, body) {
      if (error) throw new Error(error);
  reply(body)
      console.log(body);
  });
  break
  case 'gnews':
  m.reply(mess.wait)
  const dripbabe = {
    method: 'GET',
    url: 'https://google-news.p.rapidapi.com/v1/search',//By drips 
    qs: {q: `${text}`, country: 'ZW', lang: 'en'}, //put your country on string: country://
    headers: {
      'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',// 3 request per hour
      'X-RapidAPI-Host': 'google-news.p.rapidapi.com',// if you with more request please visit https://rapidapi.com/newscatcher-api-newscatcher-api-default/api/google-news/pricing
      useQueryString: true
    }
  };
  let gnews = require('request')
  gnews(dripbabe, function (error, response, body) {//removing credits is not an option
      if (error) throw new Error(error);
    reply(body);
      console.log(body);
  });
  break
  
  case 'news2':
    m.reply(mess.wait)
  const luckysure = {
    method: 'GET',
    url: 'https://free-news.p.rapidapi.com/v1/search',//By DRIPS
    qs: {q: `${text}`, lang: 'en'},
    headers: {
      'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',// 1 request per second (unlimited)
      'X-RapidAPI-Host': 'free-news.p.rapidapi.com',//removing credtis is not an option
      useQueryString: true
    }
  };
  let stanto = require('request')
  stanto(luckysure, function (error, response, body) {
      if (error) throw new Error(error);
     reply(body);
      console.log(body);
  });
  break
  case 'ip':
m.reply(mess.wait)
const dripsba = {
method: 'GET',
url: 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation',
qs: {apikey: '873dbe322aea47f89dcf729dcc8f60e8'},
headers: {
'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com',
useQueryString: true
}
};
let bhudhi = require('request')
bhudhi(dripsba, function (error, response, body) {
if (error) throw new Error(error);
reply(body);
console.log(body);
});
break
case 'checknumber':
m.reply(mess.wait)
const dripska = {
method: 'GET',
url: 'https://phonenumbervalidatefree.p.rapidapi.com/ts_PhoneNumberValidateTest.jsp',
qs: {number: `${text}`},
headers: {
'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
'X-RapidAPI-Host': 'phonenumbervalidatefree.p.rapidapi.com',
useQueryString: true
}
};
let dhidhi = require('request')
dhidhi(dripska, function (error, response, body) {
if (error) throw new Error(error);
reply(body);
console.log(body);
});
break
case 'veriphone':
m.reply(mess.wait)
const dripdrop = {
method: 'GET',
url: 'https://veriphone.p.rapidapi.com/verify',
qs: {phone: `${text}`},
headers: {
'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
'X-RapidAPI-Host': 'veriphone.p.rapidapi.com',
useQueryString: true
}
};
let mhati = require('request')
mhati(dripdrop, function (error, response, body) {
if (error) throw new Error(error);
reply(body);
console.log(body);
});
break
case 'weather':
if (!args[0]) throw " please provide place or location name"
try {
const response = axios.get(
`https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`
)
const res = await response
const name = res.data.name
const Country = res.data.sys.country
const Weather = res.data.weather[0].description
const Temperature = res.data.main.temp + "°C"
const Minimum_Temperature = res.data.main.temp_min + "°C"
const Maximum_Temperature = res.data.main.temp_max + "°C"
const Humidity = res.data.main.humidity + "%"
const Wind = res.data.wind.speed + "km/h"
const wea = `*📍PLACE:* ${name}\n*COUNTRY:* ${Country}\n*WEATHER:* ${Weather}\n*TEMPERATURE:* ${Temperature}\nMINIMUM TEMPERATURE: ${Minimum_Temperature}\n*📛MAX TEMPERATURE:* ${Maximum_Temperature}\n*HUMIDITY:* ${Humidity}\n*WIND:* ${Wind}
`

reply(wea)
} catch (e) {
return "Error location not found!!!"
}
break
case 'ytcoment':
if (!text) throw 'No Text'
Zero.sendMessage(m.chat, ('https://some-random-api.ml', '/canvas/youtube-comment', {
avatar: await Zero.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
comment: text,
username: Zero.getName(m.sender)
}), 'error.png', '*Nih Kak*', m)
break
case 'ssweb-hp': {
if(args.length < 1) return reply(`Url link`)
anu = await getBuffer(`https://leyscoders-api.herokuapp.com/api/ssweb-hp?url=${text}&apikey=IkyOgiwara`)
let buttons = [
      {buttonId: `menu`, buttonText: {displayText: 'BACK'}, type: 1}
  ]
  let buttonMessage = {
      image: anu ,
      caption: `*SSWEB URL ( HP )* `,
      footer: `Bot Created by ${global.pengguna}`,
      buttons: buttons,
      headerType: 4
  }
  Zero.sendMessage(m.chat, buttonMessage, { quoted: m })
  }
break
case 'shortlink': {
m.reply(mess.wait)
try {
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${q}`)
reply(`${anu.data}`)
} catch (e) {//https://leyscoders-api.herokuapp.com/api/cuttly?url=https://google.com&apikey=Your_key
emror = String(e)
reply(`${e}`)
}
}
break
case 'shortlinkcuttly': {
m.reply(mess.wait)
try {
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cuttly?url=${text}&apikey=IkyOgiwara`)
hoo = anu.result.title
bhoo = anu.result.hasil

reply(`*TITLE:* ${hoo}\n*RESULT:* ${bhoo}`)
} catch (e) {//https://leyscoders-api.herokuapp.com/api/cuttly?url=https://google.com&apikey=Your_key
emror = String(e)
reply(`${e}`)
}
}
break
case 'shortlinkisgd': {
m.reply(mess.wait)
try {
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/shrturl?url=${text}&apikey=IkyOgiwara`)
hoo = anu.result

reply(`*RESULT:* ${hoo}`)
} catch (e) {//https://leyscoders-api.herokuapp.com/api/cuttly?url=https://google.com&apikey=Your_key
emror = String(e)
reply(`${e}`)
}
}
break
case 'remlogo': {
    if (!text) return m.reply(`Enter Text, Example : ${prefix + command} Zero`)
    m.reply(mess.wait)
    buffer = `https://hardianto.xyz/api/bot/gfx5?apikey=hardianto&text=${text}`
    Zero.sendMessage(m.chat, { image: { url:buffer }}, { quoted: m})
}    
break
case 'gfx2': {
if (!text) return m.reply(`Enter Text, Example : ${prefix + command} Zero`)
m.reply(mess.wait)
buffer = `https://hardianto.xyz/api/bot/gfx2?apikey=hardianto&nama=${text}`
Zero.sendMessage(m.chat, { image: { url:buffer }}, { quoted: m})
}    
break
case 'guralogo': {
if (!text) return m.reply(`Enter Text, Example : ${prefix + command} Zero`)
m.reply(mess.wait)
buffer = `https://hardianto.xyz/api/bot/gura?apikey=hardianto&nama=${text}`
Zero.sendMessage(m.chat, { image: { url:buffer }}, { quoted: m})
}    
break
case 'kanekilogo': {
if (!text) return m.reply(`Enter Text, Example : ${prefix + command} Zero`)
m.reply(mess.wait)
buffer = `https://hardianto.xyz/api/bot/gfx1?apikey=hardianto&nama=${text}`
Zero.sendMessage(m.chat, { image: { url:buffer }}, { quoted: m})
}    
break
////
    case 'trumpmeme': case 'trumptweet': case 'trump': {
        if (!text) return m.reply(`Enter Text, Example : ${prefix + command} Zero`)
        m.reply(mess.wait)
        Zero.sendMessage(m.chat, { image: { url: api('zenz', '/creator/trump',{ text: text }, 'apikey') }, caption: `Done` }, { quoted: m})
}    
break

case 'bidenmeme': case 'bidentweet': case 'joebiden': {
    if (!text) return m.reply(`Enter Text, Example : ${prefix + command} Zero`)
    m.reply(mess.wait)
    Zero.sendMessage(m.chat, { image: { url: api('zenz', '/creator/biden',{ text: text }, 'apikey') }, caption: `Done` }, { quoted: m})
}    
break

case 'oogway': case '/oogway': case 'masteroogway': {
if (!text) return m.reply(`Enter Text, Example : ${prefix + command} Zero`)
m.reply(mess.wait)
buffer = `https://api.popcat.xyz/oogway?text=${text}`
Zero.sendMessage(m.chat, { image: { url:buffer }, caption: `Done` }, { quoted: m})
}    
break
case 'factsmeme': case '/factsmeme': case 'memefacts': {
if (!text) return m.reply(`Enter Text, Example : ${prefix + command} Zero`)
m.reply(mess.wait)
buffer = `https://api.popcat.xyz/facts?text=${text}`
Zero.sendMessage(m.chat, { image: { url:buffer }, caption: `Done` }, { quoted: m})
}    
break

case 'caution': case '/caution': case 'memecaution': {
if (!text) return m.reply(`Enter Text, Example : ${prefix + command} Zero`)
m.reply(mess.wait)
buffer = `https://api.popcat.xyz/caution?text=${text}`
Zero.sendMessage(m.chat, { image: { url:buffer }, caption: `Done` }, { quoted: m})
}    
break
case 'alert': case '/alert': case 'memealert': {
if (!text) return m.reply(`Enter Text, Example : ${prefix + command} Zero`)
m.reply(mess.wait)
buffer = `https://api.popcat.xyz/alert?text=${text}`
Zero.sendMessage(m.chat, { image: { url:buffer }, caption: `Done` }, { quoted: m})
}    
break
case 'alphacoders':  case '/alphacoders': {
if (!text) return m.reply(`Enter Text, Example : ${prefix + command} Zero`)
m.reply(mess.wait)
let anu = await fetchJson(`https://api.violetics.pw/api/media/alphacoders?apikey=beta&query=${text}`)
let random = anu[Math.floor(Math.random() * anu.length)]
Zero.sendMessage(m.chat, { image: { url: random.result }, caption: `Done` }, { quoted: m })
}
break
case '/texttocode': case '/code': case 'code': {
if (!text) return m.reply(`Enter Text, Example : ${prefix + command} Zero`)
m.reply(mess.wait)
buffer = `https://api.violetics.pw/api/media/carbon2?apikey=beta&code=${text}`
Zero.sendMessage(m.chat, { image: { url:buffer }, caption: `Done` }, { quoted: m})
}    
break
case '/texttocode2': case '/code2': case 'code2': {
if (!text) return m.reply(`Enter Text, Example : ${prefix + command} Zero`)
m.reply(mess.wait)
buffer = `https://api.violetics.pw/api/media/carbon?apikey=beta&code=${text}`
Zero.sendMessage(m.chat, { image: { url:buffer }, caption: `Done` }, { quoted: m})
}    
break
case '/texttocode3': case '/code3': case 'code3': {
if (!text) return m.reply(`Enter Text, Example : ${prefix + command} Zero`)
m.reply(mess.wait)
buffer = `https://api.violetics.pw/api/media/carbon3?apikey=beta&code=${text}`
Zero.sendMessage(m.chat, { image: { url:buffer }, caption: `Done` }, { quoted: m})
}    
break
case '/wallpaperscraft': case 'wallpaperscraft': case '.wallpaperscraft': {
if (!text) return m.reply(`Enter Text, Example : ${prefix + command} Zero`)
m.reply(mess.wait)
buffer = `https://api.violetics.pw/api/media/wallpaperscraft?apikey=beta&query=${text}`
Zero.sendMessage(m.chat, { image: { url:buffer }, caption: `Done` }, { quoted: m})
}    
break

case 'toletter': {
if (!Number(args[0])) return replay(`Example:\n${prefix}toletter 956`)
try {
quere = args.join(" ")
convertes = await toHur(quere)
replay(`\`\`\`「 ALPHABET 」\`\`\`\n*•> Number :*\n${quere}\n*•> Alphabet :*\n${convertes}`)
} catch {
replay(`Error!`)
}
}
break


    case 'botmeme': case 'botcomment': case 'commentbot': {
        if (!text) return m.reply(`Enter Text, Example : ${prefix + command} Zero`)
        m.reply(mess.wait)
        Zero.sendMessage(m.chat, { image: { url: api('zenz', '/creator/botcomment',{ text: text }, 'apikey') }, caption: `Done` }, { quoted: m})
}    
        break 
        case 'kannagenmeme': case 'kobayashimeme': case 'girlwithboardmeme': {
            if (!text) return m.reply(`Enter Text, Example : ${prefix + command} Zero`)
            m.reply(mess.wait)
            Zero.sendMessage(m.chat, { image: { url: api('zenz', '/creator/kannagen',{ text: text }, 'apikey') }, caption: `Done` }, { quoted: m})
    }    
            break
        
        
        case 'ytcomment': case 'youtubememe': case 'youtubecomment': {
            if (!text) return m.reply(`Enter Text, Example : ${prefix + command} Zero`)
            m.reply(mess.wait)
            Zero.sendMessage(m.chat, { image:  {url: api('https://zenzapis.xyz/creator/ytcomment?url=https://i.ibb.co/KjSBWx4/Pics-Art-02-07-11-45-03.jpg', {text:text},'apikey')}, caption: `Done` }, { quoted: m})
    }    
            break
     
            case 'changemymind': case 'changemymindmeme': case 'memechangemind': {
                if (!text) return m.reply(`Enter Text, Example : ${prefix + command} Zero`)
                m.reply(mess.wait)
                Zero.sendMessage(m.chat, { image: { url: api('zenz', '/creator/changemymind',{ text: text }, 'apikey') }, caption: `Done` }, { quoted: m})
        }   
            break
            case 'pickachumeme': case '/pickachumeme': case '/memepickachu': {
                if (!text) return m.reply(`Enter Text, Example : ${prefix + command} Zero`)
                m.reply(mess.wait)
                Zero.sendMessage(m.chat, { image: { url: api('zenz', '/creator/pikachu',{ text: text }, 'apikey') }, caption: `Done` }, { quoted: m})
        }   
            break
            case 'animatedtext': case 'animate': case '/animate': case '/attp': case 'attp': {
                if (!text) return m.reply(`Enter Text, Example : ${prefix + command} Zero`)
                m.reply(mess.wait)
                Zero.sendMessage(m.chat, { sticker: { url: api('zenz', '/creator/attp',{ text: text }, 'apikey') }, caption: `Done` }, { quoted: m})
        }   
            break                          
            case 'hoorror':{
                    let link = `https://textpro.me/horror-blood-text-effect-online-883.html`
                     let anui =  await maker.textpro(link, q)
                     reply(`Wait a moment while making the logo about 1 minute`) 
                     console.log(anui)
                    Zero.sendMessage(m.chat, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
                }
                   break
                   case 'neongradient':{
                    
                    let link = `https://textpro.me/create-gradient-neon-light-text-effect-online-1085.html`
                    let anui =  await maker.textpro(link, q)
                    reply(`Wait a moment while making the logo about 1 minute`) 
                    console.log(anui)
                   Zero.sendMessage(m.chat, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
               }
                  break
                   
                      case 'whitebear':{
                    
                         let link = `https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html`
                         let anui =  await maker.textpro(link, q)
                         reply(`Wait a moment while making the logo about 1 minute`) 
                         console.log(anui)
                        Zero.sendMessage(m.chat, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
                    }
                       break
                    case 'thunder2':{
                
                         let link = `https://textpro.me/create-thunder-text-effect-online-881.html`
                         let anui =  await maker.textpro(link, q)
                         reply(`Wait a moment while making the logo about 1 minute`) 
                         console.log(anui)
                        Zero.sendMessage(m.chat, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
                    }
                       break
                    case 'blackpink':{
                
                         let link = `https://textpro.me/create-blackpink-logo-style-online-1001.html`
                         let anui =  await maker.textpro(link, q)
                         reply(`Wait a moment while making the logo about 1 minute`) 
                         console.log(anui)
                        Zero.sendMessage(m.chat, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
                    }
                       break
                    case 'neon':{
                
                         let link = `https://textpro.me/neon-light-text-effect-online-882.html`
                         let anui =  await maker.textpro(link, q)
                         reply(`Wait a moment while making the logo about 1 minute`) 
                         console.log(anui)
                        Zero.sendMessage(m.chat, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
                    }
                       break
                    case 'matrix2':{
                
                         let link = `https://textpro.me/matrix-style-text-effect-online-884.html`
                         let anui =  await maker.textpro(link, q)
                         reply(`Wait a moment while making the logo about 1 minute`) 
                         console.log(anui)
                        Zero.sendMessage(m.chat, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
                    }
                       break
                    case 'sky':{
                
                         let link = `https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html`
                         let anui =  await maker.textpro(link, q)
                         reply(`Wait a moment while making the logo about 1 minute`) 
                         console.log(anui)
                        Zero.sendMessage(m.chat, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
                    }
                       break
                    case 'joker':{
                
                         let link = `https://textpro.me/create-logo-joker-online-934.html`
                         let anui =  await maker.textpro(link, q)
                         reply(`Wait a moment while making the logo about 1 minute`) 
                         console.log(anui)
                        Zero.sendMessage(m.chat, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
                    }
                       break
                    case 'magma':{
                
                         let link = `https://textpro.me/create-a-magma-hot-text-effect-online-1030.html`
                         let anui =  await maker.textpro(link, q)
                         reply(`Wait a moment while making the logo about 1 minute`) 
                         console.log(anui)
                        Zero.sendMessage(m.chat, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
                    }
                       break
                    case 'sand':{
                
                         let link = `https://textpro.me/sand-writing-text-effect-online-990.html`
                         let anui =  await maker.textpro(link, q)
                         reply(`Wait a moment while making the logo about 1 minute`) 
                         console.log(anui)
                        Zero.sendMessage(m.chat, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
                    }
                       break
                    case 'pencil':{
                
                         let link = `https://textpro.me/create-a-sketch-text-effect-online-1044.html`
                         let anui =  await maker.textpro(link, q)
                         reply(`Wait a moment while making the logo about 1 minute`) 
                         console.log(anui)
                        Zero.sendMessage(m.chat, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
                    }
                       break
                    case 'graffiti':{
                
                         let link = `https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html`
                         let anui =  await maker.textpro(link, q)
                         reply(`Wait a moment while making the logo about 1 minute`) 
                         console.log(anui)
                        Zero.sendMessage(m.chat, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
                    }
                       break
                    case 'metallic':{
                
                         let link = `https://textpro.me/create-a-metallic-text-effect-free-online-1041.html`
                         let anui =  await maker.textpro(link, q)
                         reply(`Wait a moment while making the logo about 1 minute`) 
                         console.log(anui)
                        Zero.sendMessage(m.chat, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
                    }
                       break
                    case 'steel':{
                
                         let link = `https://textpro.me/steel-text-effect-online-921.html`
                         let anui =  await maker.textpro(link, q)
                         reply(`Wait a moment while making the logo about 1 minute`) 
                         console.log(anui)
                        Zero.sendMessage(m.chat, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
                    }
                       break
                    case 'harrypotter':{
                
                         let link = `https://textpro.me/create-harry-potter-text-effect-online-1025.html`
                         let anui =  await maker.textpro(link, q)
                         reply(`Wait a moment while making the logo about 1 minute`) 
                         console.log(anui)
                        Zero.sendMessage(m.chat, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
                    }
                       break
                    case 'underwater':{
                
                         let link = `https://textpro.me/3d-underwater-text-effect-generator-online-1013.html`
                         let anui =  await maker.textpro(link, q)
                         reply(`Wait a moment while making the logo about 1 minute`) 
                         console.log(anui)
                        Zero.sendMessage(m.chat, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
                    }
                       break
                    case 'luxury':{
                
                         let link = `https://textpro.me/3d-luxury-gold-text-effect-online-1003.html`
                         let anui =  await maker.textpro(link, q)
                         reply(`Wait a moment while making the logo about 1 minute`) 
                         console.log(anui)
                        Zero.sendMessage(m.chat, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
                    }
                       break
                    case 'glue2':{
                
                         let link = `https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html`
                         let anui =  await maker.textpro(link, q)
                         reply(`Wait a moment while making the logo about 1 minute`) 
                         console.log(anui)
                        Zero.sendMessage(m.chat, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
                    }
                       break
                    case 'fabric':{
                
                         let link = `https://textpro.me/fabric-text-effect-online-964.html`
                         let anui =  await maker.textpro(link, q)
                         reply(`Wait a moment while making the logo about 1 minute`) 
                         console.log(anui)
                        Zero.sendMessage(m.chat, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
                    }
                       break
                    case 'neonlight':{
                
                         let link = `https://textpro.me/neon-light-glitch-text-generator-online-1063.html`
                         let anui =  await maker.textpro(link, q)
                         reply(`Wait a moment while making the logo about 1 minute`) 
                         console.log(anui)
                        Zero.sendMessage(m.chat, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
                    }
                       break
                    case 'lava':{
                
                         let link = `https://textpro.me/lava-text-effect-online-914.html`
                         let anui =  await maker.textpro(link, q)
                         reply(`Wait a moment while making the logo about 1 minute`) 
                         console.log(anui)
                        Zero.sendMessage(m.chat, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
                    }
                       break
                    case 'toxic':{
                
                         let link = `https://textpro.me/toxic-text-effect-online-901.html`
                         let anui =  await maker.textpro(link, q)
                         reply(`Wait a moment while making the logo about 1 minute`) 
                         console.log(anui)
                        Zero.sendMessage(m.chat, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
                    }
                       break
                    case 'ancient':{
                
                         let link = `https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html`
                         let anui =  await maker.textpro(link, q)
                         reply(`Wait a moment while making the logo about 1 minute`) 
                         console.log(anui)
                        Zero.sendMessage(m.chat, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
                    }
                       break
                    case 'christmas2':{
                
                         let link = `https://textpro.me/sparkles-merry-christmas-text-effect-1054.html`
                         let anui =  await maker.textpro(link, q)
                         reply(`Wait a moment while making the logo about 1 minute`) 
                         console.log(anui)
                        Zero.sendMessage(m.chat, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
                    }
                       break
                    case 'sci_fi':{
                
                         let link = `https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html`
                         let anui =  await maker.textpro(link, q)
                         reply(`Wait a moment while making the logo about 1 minute`) 
                         console.log(anui)
                        Zero.sendMessage(m.chat, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
                    }
                       break
                    case 'rainbow':{
                
                         let link = `https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html`
                         let anui =  await maker.textpro(link, q)
                         reply(`Wait a moment while making the logo about 1 minute`) 
                         console.log(anui)
                        Zero.sendMessage(m.chat, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
                    }
                       break
                    case 'classic':{
                
                    let link = `https://textpro.me/video-game-classic-8-bit-text-effect-1037.html`
                    let anui =  await maker.textpro(link, q)
                         reply(`Wait a moment while making the logo about 1 minute`) 
                         console.log(anui)
                        Zero.sendMessage(m.chat, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
                    }
                       break
                    case 'watercolor2':{
                
                    let link = `https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html`
                    let anui =  await maker.textpro(link, q)
                         reply(`Wait a moment while making the logo about 1 minute`) 
                         console.log(anui)
                        Zero.sendMessage(m.chat, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
                    }
                       break
                    case 'halloween2':{
                
                    let link = `https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html`
                    let anui =  await maker.textpro(link, q)
                         reply(`Wait a moment while making the logo about 1 minute`) 
                         console.log(anui)
                        Zero.sendMessage(m.chat, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
                    }
                       break
                    case 'halloweenfire':{
                
                    let link = `https://textpro.me/halloween-fire-text-effect-940.html`
                    let anui =  await maker.textpro(link, q)
                         reply(`Wait a moment while making the logo about 1 minute`) 
                         console.log(anui)
                        Zero.sendMessage(m.chat, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
                    }
                       break
                    case 'writing':{
                
                    let link = `https://textpro.me/sand-writing-text-effect-online-990.html`
                    let anui =  await maker.textpro(link, q)
                         reply(`Wait a moment while making the logo about 1 minute`) 
                         console.log(anui)
                        Zero.sendMessage(m.chat, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
                    }
                       break
                    case 'foggy':{
                
                    let link = `https://textpro.me/write-text-on-foggy-window-online-free-1015.html`
                    let anui =  await maker.textpro(link, q)
                         reply(`Wait a moment while making the logo about 1 minute`) 
                         console.log(anui)
                        Zero.sendMessage(m.chat, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
                    }
                       break
                    case 'marvel':{
                
                    let link = `https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html`
                    let anui =  await maker.textpro(link, q)
                         reply(`Wait a moment while making the logo about 1 minute`) 
                         console.log(anui)
                        Zero.sendMessage(m.chat, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
                    }
                       break
                    case 'skeleton2':{
                
                    let link = `https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html`
                    let anui =  await maker.textpro(link, q)
                         reply(`Wait a moment while making the logo about 1 minute`) 
                         console.log(anui)
                        Zero.sendMessage(m.chat, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
                    }
                       break
                    case 'sketch':{
                
                    let link = `https://textpro.me/create-a-sketch-text-effect-online-1044.html`
                    let anui =  await maker.textpro(link, q)
                         reply(`Wait a moment while making the logo about 1 minute`) 
                         console.log(anui)
                        Zero.sendMessage(m.chat, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
                    }
                       break
                    case 'wonderful':{
                
                    let link = `https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html`
                    let anui =  await maker.textpro(link, q)
                         reply(`Wait a moment while making the logo about 1 minute`) 
                         console.log(anui)
                        Zero.sendMessage(m.chat, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
                    }
                       break
                   
                    case 'multicolor2':{
                
                    let link = `https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html`
                    let anui =  await maker.textpro(link, q)
                         reply(`Wait a moment while making the logo about 1 minute`) 
                         console.log(anui)
                        Zero.sendMessage(m.chat, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
                    }
                       break
                    case 'batman':{
                
                    let link = `https://textpro.me/make-a-batman-logo-online-free-1066.html`
                    let anui =  await maker.textpro(link, q)
                         reply(`Wait a moment while making the logo about 1 minute`) 
                         console.log(anui)
                        Zero.sendMessage(m.chat, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
                    }
                       break
                    case 'juice':{
                
                    let link = `https://textpro.me/fruit-juice-text-effect-861.html`
                    let anui =  await maker.textpro(link, q)
                         reply(`Wait a moment while making the logo about 1 minute`) 
                         console.log(anui)
                        Zero.sendMessage(m.chat, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
                    }
                       break
                    case 'pornhub':{
                
                    if(!q) return m.reply(`Example: ${prefix + command} ajg | ea`)
                    m.reply(mess.wait)
                      inilogo4 = args.join(" ")
                    inilogo9 = args.join(" ")
                       var logo4 = inilogo4.split('|')[0]
                    var logo9 = inilogo9.split('|')[1]
                        let anu =  await maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`,`${logo9}`])
                    console.log(anu)
                    Zero.sendMessage(m.chat,{image:{url:anu}, caption:"Here you go!"},{quoted:m})
                    }
                    break
                    case 'retro':{
                
                    if(!q) return m.reply(`Example: ${prefix + command} ajg | ea`)
                    m.reply(mess.wait)
                      inilogo4 = args.join(" ")
                    inilogo9 = args.join(" ")
                       var logo4 = inilogo4.split('|')[0]
                    var logo9 = inilogo9.split('|')[1]
                        let anu =  await maker.textpro("https://textpro.me/create-3d-retro-text-effect-online-free-1065.html", [`${logo4}`,`${logo9}`])
                    console.log(anu)
                    Zero.sendMessage(m.chat,{image:{url:anu}, caption:"Here you go!"},{quoted:m})
                    }
                    break
                    case 'horror':{
                
                    if(!q) return m.reply(`Example: ${prefix + command} ajg | ea`)
                    m.reply(mess.wait)
                      inilogo4 = args.join(" ")
                    inilogo9 = args.join(" ")
                       var logo4 = inilogo4.split('|')[0]
                    var logo9 = inilogo9.split('|')[1]
                        let anu =  await maker.textpro("https://textpro.me/create-a-cinematic-horror-text-effect-1045.html", [`${logo4}`,`${logo9}`])
                    console.log(anu)
                    Zero.sendMessage(m.chat,{image:{url:anu}, caption:"Here you go!"},{quoted:m})
                    }
                    break
                    case '1917':{
                
                        if(!q) return m.reply(`Example: ${prefix + command} Zero`)
                        m.reply(mess.wait)
                          inilogo4 = args.join(" ")
                         var logo4 = inilogo4.split('|')[0]
                         let anu =  await maker.textpro("https://textpro.me/1917-style-text-effect-online-980.html", [`${logo4}`])
                        console.log(anu)
                        Zero.sendMessage(m.chat,{image:{url:anu}, caption:"Here you go!"},{quoted:m})
                        }
                        break
                    case '8bit':{
                
                    if(!q) return m.reply(`Example: ${prefix + command} ajg | ea`)
                    m.reply(mess.wait)
                      inilogo4 = args.join(" ")
                    inilogo9 = args.join(" ")
                       var logo4 = inilogo4.split('|')[0]
                    var logo9 = inilogo9.split('|')[1]
                        let anu =  await maker.textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [`${logo4}`,`${logo9}`])
                    console.log(anu)
                    Zero.sendMessage(m.chat,{image:{url:anu}, caption:"Here you go!"},{quoted:m})
                    }
                    break
                    case 'textmaker': {
            
                    if (args.length < 1) return reply(`Example :\n${prefix + command} <name>`)
                    if (args[0] === 'glitch') {
                    if (args.length < 2) return reply(`Example :\n${prefix + command + ' ' + args[0]} ${ownername}`)
                    let teds = await thiccysapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args[1]])
                    Zero.sendMessage(m.chat, {image:{url:teds}, caption:"Here you go!"}, {quoted:m})
                    } else if (args[0] === 'glow') {
                    if (args.length < 2) return reply(`Example :\n${prefix + command + ' ' + args[0]} ${ownername}`)
                    let teds = await thiccysapi.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [args[1]])
                    Zero.sendMessage(m.chat, {image:{url:teds}, caption:"Here you go!"}, {quoted:m})}}
                    break
                    case'glitch3':

if(!q) return reply(`Use ${prefix + command} text|text`)
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
`${teks1}`,`${teks2}`])
.then((data) => Zero.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break

case '3dbox':

if(!q) return reply(`Use ${prefix + command} text`)
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
`${q}`,])
.then((data) => Zero.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break


case 'waterdrop':

if(!q) return reply(`Use ${prefix + command} text`)
m.reply(mess.wait)
maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
`${q}`,])
.then((data) => Zero.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break

//not working//
case 'lion2':

if(!q) return reply(`Use ${prefix + command} text`)
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
`${q}`,])
.then((data) => Zero.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break

/////
case 'papercut':

if(!q) return reply(`Use ${prefix + command} text`)
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${q}`,])
.then((data) => Zero.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break


case 'transformer':

if(!q) return reply(`Use ${prefix + command} text`)
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${q}`,])
.then((data) => Zero.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break


case 'harrypot':

if(!q) return reply(`Use ${prefix + command} text|text`)
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
`${teks1}`,`${teks2}`])
.then((data) => Zero.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break


case 'neondevil':

if(!q) return reply(`Use ${prefix + command} text`)
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
.then((data) => Zero.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break


case '3dstone':

if(!q) return reply(`Use ${prefix + command} text`)
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
`${q}`,])
.then((data) => Zero.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break


case '3davengers':

if(!q) return reply(`Use ${prefix + command} text`)
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
`${q}`,])
.then((data) => Zero.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break


case 'thunder':

if(!q) return reply(`Use ${prefix + command} text`)
m.reply(mess.wait)
maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
`${q}`,])
.then((data) => Zero.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break


case 'window':

if(!q) return reply(`Use ${prefix + command} text`)
m.reply(mess.wait)
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
`${q}`,])
.then((data) => Zero.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break
case 'blackpinkneon':

if(!q) return reply(`Use ${prefix + command} text`)
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html", [
`${q}`,])
.then((data) => Zero.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break

case 'graffiti':
case 'grafiti':

if(!q) return reply(`Use ${prefix + command} text|text`)
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
`${teks1}`,`${teks2}`])
.then((data) => Zero.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break



case 'pornhub2':

if(!q) return reply(`Use ${prefix + command} text`)
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
`${teks1}`,`${teks2}`])
.then((data) => Zero.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break



case 'blackpink2':

if(!q) return reply(`Use ${prefix + command} text`)
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
`${q}`,])
.then((data) => Zero.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break

case 'glitch':

if(!q) return reply(`Use ${prefix + command} text`)
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
`${q}`,])
.then((data) => Zero.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break



case 'glitch2':

if(!q) return reply(`Use ${prefix + command} text|text`)
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
`${teks1}`,`${teks2}`])
.then((data) => Zero.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break



case 'glitch3':

if(!q) return reply(`Use ${prefix + command} text|text`)
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
`${teks1}`,`${teks2}`])
.then((data) => Zero.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break



case '3dspace':

if(!q) return reply(`Use ${prefix + command} text|text`)
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
`${teks1}`,`${teks2}`])
.then((data) => Zero.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break



case 'lion':

if(!q) return reply(`Use ${prefix + command} text|text`)
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
`${teks1}`,`${teks2}`])
.then((data) => Zero.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break



case '3dneon':

if(!q) return reply(`Use ${prefix + command} text`)
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
`${q}`,])
.then((data) => Zero.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break



case 'neon':

if(!q) return reply(`Use ${prefix + command} text`)
m.reply(mess.wait)
maker.textpro("https://textpro.me/neon-text-effect-online-879.html", [
`${q}`,])
.then((data) => Zero.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break



case 'greenneon':

if(!q) return reply(`Use ${prefix + command} text`)
m.reply(mess.wait)
maker.textpro("https://textpro.me/green-neon-text-effect-874.html", [
`${q}`,])
.then((data) => Zero.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break



case 'bokeh':

if(!q) return reply(`Use ${prefix + command} text`)
m.reply(mess.wait)
maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
`${q}`,])
.then((data) => Zero.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break



case 'holographic':

if(!q) return reply(`Use ${prefix + command} text`)
m.reply(mess.wait)
maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
`${q}`,])
.then((data) => Zero.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break



case 'bear':

if(!q) return reply(`Use ${prefix + command} text`)
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
`${teks1}`,`${teks2}`])
.then((data) => Zero.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break



case 'wolf':

if(!q) return reply(`Use ${prefix + command} text`)
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
`${teks1}`,`${teks2}`])
.then((data) => Zero.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break




case 'joker':

if(!q) return reply(`Use ${prefix + command} text`)
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-logo-joker-online-934.html", [
`${q}`,])
.then((data) => Zero.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break


case 'dropwater2':

if(!q) return reply(`Use ${prefix + command} text`)
m.reply(mess.wait)
maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
`${q}`,])
.then((data) => Zero.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break

case 'summertime':

if(!q) return reply(`Use ${prefix + command} text`)
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html", [
`${q}`,])
.then((data) => Zero.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break

case 'neonlight2':

if(!q) return reply(`Use ${prefix + command} text`)
m.reply(mess.wait)
maker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
`${q}`,])
.then((data) => Zero.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break

case 'thewall':

if(!q) return reply(`Use ${prefix + command} text`)
m.reply(mess.wait)
maker.textpro("https://textpro.me/break-wall-text-effect-871.html", [
`${q}`,])
.then((data) => Zero.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break

case 'natural':

if(!q) return reply(`Use ${prefix + command} text`)
m.reply(mess.wait)
maker.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
`${q}`,])
.then((data) => Zero.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break 

case 'carbon':

if(!q) return reply(`Use ${prefix + command} text`)
m.reply(mess.wait)
maker.textpro("https://textpro.me/carbon-text-effect-833.html", [
`${q}`,])
.then((data) => Zero.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break

case 'pencil':

if(!q) return reply(`Use ${prefix + command} text`)
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
`${q}`,])
.then((data) => Zero.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break

case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow2': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case '.': case '3dstone2': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'halloween': case 'darkgold': case 'joker': case 'wicker':
case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case 'leaves': case 'demon': {
 if (!q) return reply(`Example : ${prefix + command} ${global.ownername}`) 
    
 m.reply(mess.wait)
 let link
 if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
 if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
 if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
 if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
 if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
 if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
 if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
 if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
 if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
 if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
 if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
 if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
 if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
 if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
 if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
 if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
 if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
 if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
 if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
 if (/3dstone2/.test(command)) link = 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html'
 if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
 if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
 if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
 if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
 if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
 if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
 if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
 if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
 if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
 if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
 if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
 if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
 if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
 if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
 if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
 if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
 if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
 if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
 if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
 if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
 if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
 if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
 if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
 if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
 if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
 if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
 if (/halloween/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
 if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
 if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
 if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
 if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
 if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
 if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
 if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
 if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
    if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'           
 let anu = await maker.textpro(link, q)
    Zero.sendMessage(m.chat, { image: { url: anu }, caption: `Made by ${global.botname}` }, { quoted: m })
 }
 break
 case 'textmaker2': {
    
 if (args.length < 1) return reply(`Example :\n${prefix + command} <name>`)
 if (args[0] === 'glitch') {
 if (args.length < 2) return reply(`Example :\n${prefix + command + ' ' + args[0]} ${global.ownername}`)
 let teds = await thiccysapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args[1]])
 Zero.sendMessage(m.chat, {image:{url:teds}, caption:"Done!"}, {quoted:m})
 } else if (args[0] === 'glow') {
 if (args.length < 2) return reply(`Example :\n${prefix + command + ' ' + args[0]} ${global.ownername}`)
 let teds = await thiccysapi.textproimg("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [args[1]])
 Zero.sendMessage(m.chat, {image:{url:teds}, caption:"Done!"}, {quoted:m})
 } else {
 reply(`*Text Maker List :*\n•> glitch\n•> glow`)
 }
 }
 break

                               //NSFW//
            case 'nsfwahegao': case '/nsfwahegao': case 'ahegao': case '/ahegao':
                m.reply(mess.wait)
                Zero.sendMessage(m.chat, { image: { url:"https://zenzapis.xyz/api/morensfw/ahegao?apikey=7c59f79077"}, caption: `Done` }, { quoted: m})
            break
            case 'nsfwass': case '/nsfwass': case 'ass': case '/ass':
                m.reply(mess.wait)
                Zero.sendMessage(m.chat, { image: { url:"https://zenzapis.xyz/api/morensfw/ass?apikey=7c59f79077"}, caption: `Done` }, { quoted: m})
            break
            case 'nsfwblowjob': case '/nsfwblowjob': case 'blowjob': case '/blowjob':
                m.reply(mess.wait)
                Zero.sendMessage(m.chat, { image: { url:"https://zenzapis.xyz/api/morensfw/blowjob?apikey=7c59f79077"}, caption: `Done` }, { quoted: m})
            break
            case 'nsfwcuckold': case '/nsfwcuckold': case 'cuckold': case '/cuckold':
                m.reply(mess.wait)
                Zero.sendMessage(m.chat, { image: { url:"https://zenzapis.xyz/api/morensfw/cuckold?apikey=7c59f79077"}, caption: `Done` }, { quoted: m})
            break
            case 'nsfwcum': case '/nsfwcum': case 'cum': case '/cum':
                m.reply(mess.wait)
                Zero.sendMessage(m.chat, { image: { url:"https://zenzapis.xyz/api/morensfw/cum?apikey=7c59f79077"}, caption: `Done` }, { quoted: m})
            break
            case 'nsfwero': case '/nsfwero': case 'ero': case '/ero':
                m.reply(mess.wait)
                Zero.sendMessage(m.chat, { image: { url:"https://zenzapis.xyz/api/morensfw/ero?apikey=7c59f79077"}, caption: `Done` }, { quoted: m})
            break
            case 'nsfwfemdom': case '/nsfwfemdom': case 'femdom': case '/femdom':
                m.reply(mess.wait)
                Zero.sendMessage(m.chat, { image: { url:"https://zenzapis.xyz/api/morensfw/femdom?apikey=7c59f79077"}, caption: `Done` }, { quoted: m})
            break
            case 'nsfwfoot': case '/nsfwfoot': case 'foot': case '/foot':
                m.reply(mess.wait)
                Zero.sendMessage(m.chat, { image: { url:"https://zenzapis.xyz/api/morensfw/foot?apikey=7c59f79077"}, caption: `Done` }, { quoted: m})
            break
            case 'nsfwgangbang': case '/nsfwgangbang': case 'gangbang': case '/gangbang':
                m.reply(mess.wait)
                Zero.sendMessage(m.chat, { image: { url:"https://zenzapis.xyz/api/morensfw/gangbang?apikey=7c59f79077"}, caption: `Done` }, { quoted: m})
            break
            case 'nsfwglasses': case '/nsfwglasses': case 'glasses': case '/glasses':
                m.reply(mess.wait)
                Zero.sendMessage(m.chat, { image: { url:"https://zenzapis.xyz/api/morensfw/glasses?apikey=7c59f79077"}, caption: `Done` }, { quoted: m})
            break
            case 'nsfwhentai': case '/nsfwhentai': case 'hentai': case '/hentai':
                m.reply(mess.wait)
                Zero.sendMessage(m.chat, { image: { url:"https://zenzapis.xyz/api/morensfw/hentai?apikey=7c59f79077"}, caption: `Done` }, { quoted: m})
            break
            case 'nsfwjahy': case '/nsfwjahy': case 'jahy': case '/jahy':
                m.reply(mess.wait)
                Zero.sendMessage(m.chat, { image: { url:"https://zenzapis.xyz/api/morensfw/jahy?apikey=7c59f79077"}, caption: `Done` }, { quoted: m})
            break
            case 'nsfwmaid': case '/nsfwmaid': case 'maid': case '/maid':
                m.reply(mess.wait)
                Zero.sendMessage(m.chat, { image: { url:"https://zenzapis.xyz/api/morensfw/maid?apikey=7c59f79077"}, caption: `Done` }, { quoted: m})
            break
            case 'nsfwmanga': case '/nsfwmanga': case 'manga': case '/manga':
                m.reply(mess.wait)
                Zero.sendMessage(m.chat, { image: { url:"https://zenzapis.xyz/api/morensfw/manga?apikey=7c59f79077"}, caption: `Done` }, { quoted: m})
            break
            case 'nsfwmasturbation': case '/nsfwmasturbation': case 'masturbation': case '/masturbation':
                m.reply(mess.wait)
                Zero.sendMessage(m.chat, { image: { url:"https://zenzapis.xyz/api/morensfw/ma?apikey=7c59f79077"}, caption: `Done` }, { quoted: m})
            break
            case 'nsfwmwall': case '/nsfwwall': case 'wallnsfw': case '/wallnsfw':
                m.reply(mess.wait)
                Zero.sendMessage(m.chat, { image: { url:"https://zenzapis.xyz/api/morensfw/mobilewall?apikey=7c59f79077"}, caption: `Done` }, { quoted: m})
            break
            case 'nsfwnetorare': case '/nsfwnetorare': case 'netorare': case '/netorare':
                m.reply(mess.wait)
                Zero.sendMessage(m.chat, { image: { url:"https://zenzapis.xyz/api/morensfw/netorare?apikey=7c59f79077"}, caption: `Done` }, { quoted: m})
            break
            case 'nsfwmneko': case '/nsfwneko': case 'nekonsfw': case '/nekonsfw':
                m.reply(mess.wait)
                Zero.sendMessage(m.chat, { image: { url:"https://zenzapis.xyz/api/morensfw/nsfwneko?apikey=7c59f79077"}, caption: `Done` }, { quoted: m})
            break
            case 'nsfwmorgy': case '/nsfworgy': case 'orgy': case '/orgy':
                m.reply(mess.wait)
                Zero.sendMessage(m.chat, { image: { url:"https://zenzapis.xyz/api/morensfw/orgy?apikey=7c59f79077"}, caption: `ahegao` }, { quoted: m})
            break
            case 'nsfwmpanties': case '/nsfwpanties': case 'panties': case '/panties':
                m.reply(mess.wait)
                Zero.sendMessage(m.chat, { image: { url:"https://zenzapis.xyz/api/morensfw/panties?apikey=7c59f79077"}, caption: `ahegao` }, { quoted: m})
            break
            case 'nsfwpussy': case '/nsfwpussy': case 'pussy': case '/pussy':
                m.reply(mess.wait)
                Zero.sendMessage(m.chat, { image: { url:"https://zenzapis.xyz/api/morensfw/pussy?apikey=7c59f79077"}, caption: `ahegao` }, { quoted: m})
            break
            case 'nsfwtentacles': case '/nsfwtentacles': case 'tentacles': case '/tentacles':
                m.reply(mess.wait)
                Zero.sendMessage(m.chat, { image: { url:"https://zenzapis.xyz/api/morensfw/tentacles?apikey=7c59f79077"}, caption: `ahegao` }, { quoted: m})
            break
            case 'nsfwthighs': case '/nsfwthighs': case 'thighs': case '/thighs':
                m.reply(mess.wait)
                Zero.sendMessage(m.chat, { image: { url:"https://zenzapis.xyz/api/morensfw/thighs?apikey=7c59f79077"}, caption: `ahegao` }, { quoted: m})
            break
            case 'nsfwyuri': case '/nsfwyuri': case 'yuri': case '/yuri':
                m.reply(mess.wait)
                Zero.sendMessage(m.chat, { image: { url:"https://zenzapis.xyz/api/morensfw/yuri?apikey=7c59f79077"}, caption: `ahegao` }, { quoted: m})
            break
            case 'zettairyouiki': case '/zettairyouiki':
                m.reply(mess.wait)
                Zero.sendMessage(m.chat, { image: { url:"https://zenzapis.xyz/api/morensfw/zettairyouiki?apikey=7c59f79077"}, caption: `ahegao` }, { quoted: m})
            break
            //NSFW//
      case '/dog' : case 'randomdog':
        m.reply(mess.wait)
        axios.get('https://random.dog/woof.json?ref=apilist.fun')
        .then(({data}) => {
        Zero.sendImage(m.chat, data.url, mess.success, m)
        })
        break
        
        case '/dog2' : case 'randomdog2':
            m.reply(mess.wait)
            axios.get('https://dog.ceo/api/breeds/image/random')
            .then(({data}) => {
            Zero.sendImage(m.chat, data.message, mess.success, m)
            })
            break
        case '/fox' : case 'randomfox':
            m.reply(mess.wait)
            axios.get('https://randomfox.ca/floof/?ref=apilist.fun')
            .then(({data}) => {
            Zero.sendImage(m.chat, data.image, mess.success, m)
            })
            break
            case '/animememe': case '/animejoke':
            m.reply(mess.wait)
            axios.get('https://zenzapis.xyz/randomanime/animeme?apikey=7c59f79077')
            .then(({data}) => {
            Zero.sendImage(m.chat, data.result.image, mess.success, m)
            })
            break
            case '/animecouple': case '/animecouplepp': case 'animecouple': case 'animecouplepp':
            m.reply(mess.wait)
            axios.get('https://zenzapis.xyz/randomanime/couples?apikey=7c59f79077')
            .then(({data}) => {
            Zero.sendImage(m.chat, data.result.male, mess.success, m)
            Zero.sendImage(m.chat, data.result.female, mess.success, m)
            })
            break
    
        case '/cat': case 'randomcat':
            m.reply(mess.wait)
            Zero.sendMessage(m.chat, { image: { url: "https://cataas.com/cat" }, caption: `Done` }, { quoted: m})
    
            break
            
        case '/nasa' : case 'dailynasa': case '/dailynasa':
            m.reply(mess.wait)
            axios.get('https://api.nasa.gov/planetary/apod?api_key=pPVZIRxycQE39C0R48It7g04y22jnAzFnN2g6VpW')
            .then(({data}) => {
            Zero.sendImage(m.chat,data.hdurl , mess.success, m)
            })
            break
           


case 'roast':
            const roast =[
                "Your nasty behaviour is the reason for your receding hairline.",

"Silence is the best answer for a fool",

"The salt on this food is enough to kill an earthworm." ,

"You’re not glowing, honey; you’re basically bathed in oil",

"If you could smell you, you wouldn’t be friends with you.",

"Heaven knows if you were taller, you wouldn’t get any boyfriends.",

"I know I make stupid choices, but you’re the worst of all my choice",

"Being friends with you is only useful if I’m looking to have a good time",

"You’ve been trying to get your summer body since two winters ago",

"Serial killers would run mad if they tried to make you a victim.",

"Why can’t you be like other rom-com friends? You’re not supportive.",

"If you added any more weight, the elevator wouldn’t move",

"You can attract bees with honey; in your case, it’s flies and faeces.", 

"Even if you married, you’d still be single",

"You are the only friend in our group who’s going to hell",

"You have been getting your life together for two years, and I don’t think it wants to be gotten",

"If I have kids, I will just purposefully forget them at school",

"Why would you want to have babies? Don’t pass your dumb genes to an innocent child",

"Next – 100 Good Comebacks",

"I hate you. All your calories go to your big head and not your body",

"Please clean out this apartment. It’s called being a plant Mom, not being a plant undertaker",

"Your writing is not made for the big screen, maybe for the small screen, a phone screen." ,

"Talking to you is like stepping on a leaf in autumn and hearing no crunch- disappointment.",

"I am so single; I wake up to ‘battery full’ every morning.",

"Why are you giving me 100 missed calls? Is it a call to glory?",

"I can’t believe I have to work to make money.",

"Thank God the kids don’t have my surname. Stupid doesn’t run in my family.",

"You actually look nice today. You deserve a cookie. ",

"I knew that it could only be you. Nonsense follows you. ",

"You got 97 because that was all you could get, and I got 100 because that was all there was to get.",

"Your eyebrows look like eagle’s",

"I did not pick up the phone because I’m ignoring you",

"Taking a picture of you would put a virus on my phone",

"Call me back when you’re ready to be an adult",

"No one noticed when you left; that’s how insignificant you are",

"Can we normalize telling you that you aren’t so wonderful",

"I am only friends with you for the drama",

"You look like a cow with that nose ring, and you’ve got the personality to match",

"Calling you is a waste of time",

"If they ask for a Dr. on board, you should whip out your math degree and start solving for resuscitation",

"Just a little BDSM, and you’ll be facing God and saying what you’ve done.",

"So nobody understands you.. it isn’t art but stupidity",

"I’d be happy to hear from you if you were actually important.",

"My headaches left immediately I left your presence",

"Your mother should’ve swallowed you",

"You do know you’d cause a crying spree if you went to a nursery",

"If I typed ‘stupid’ in google, your name would pop up",

"Your thoughts should be flushed",

"I can’t insult you. The universe has already helped by making you look like that" ,

"Is it bad I want to throw my kids away?",

"You deserve to be loved from a distance",

"You cause joy whenever you go.",

"You’re never too old to make friends with stupid",

"I’ve been told to make friends with dumb people. I’m glad you’re mine",

"God wanted to spice the earth with jokes, and he made your kind",

"Empty barrels make the loudest noise",
,
"Your bag is fake. You forgot there’s no ‘e’ in ‘Prada.’",
,
"Even rats pay rent. You’ve outstayed your welcome.",

"You could play  Arnold from ‘hey Arnold’s",

"What have you got going on for you? You’re not pretty enough to be this foolish",

"We are not going appease that empty brain of yours",

"You are as annoying as the crying baby on the plane",

"I pity your significant other. They must have their hands full",

"Where’d you get that? Forever 22?",

"If a cannibal wanted to eat you, he wouldn’t find anything in your brain",

"The mirror broke when you looked at it. You can’t fix ugly.",

"A fool is the same all year round, and we celebrate you on April 1st." ,

"Remember, if anyone says you’re beautiful, it’s all lies",

"Roses are red; violets are blue. You a fool, and that will always be true",

"You’re too smart to date stupid. Or maybe you’re just the same.",

"For you, a fool at 40, remains a fool forever." ,

"All your brain is in that suitcase",

"Your wig is slipping, and so are your senses.",

"It would be best if you didn’t have an accent, you were in France for two days",

"I’m jealous of how you can be so dumb",

"The middle finger should be your motto for life.",

"The good books say to make good friends, but I think I made a mistake" ,

"I have to teach myself not to trust your stupid decisions",

"Your skincare routine shouldn’t smell like a graveyard",

"We are not friends, and we are not even acquaintances. Let’s not pretend like we know each ",

"You are alone in this. I don’t support foolish behaviour",

"I’m smart, and I know you’re only benefitting from my wealth of knowledge",

"You’re so skinny; I hear the sound of bone on wood when you sit.",

"I’m sorry, I’ll call you later. I’m breathing in air",

"When the sanitation worker came, he forgot to take you along",

"Your kids need to be returned to where they came from",

"I honestly thought about selling my kids on eBay.",

"How do you cope with those gaps in your teeth? Are you comfortable with walking around with a window?",

"You make me increase the amount of caffeine I take daily",

"If we continue talking to each other, I might end up dead.",

"I can do better than you. I will do better than you.",

"Do you see the light at the end of the tunnel? Your presence keeps covering it up",

"You need to try clothes at the store and look in the mirror before you wear things like this",

"I’m cutting off toxicity from my life, and you are the prime reason",

"How can get an education and not get any educational experience",

"If I were to jump down from your IQ, it would equate to hopping",

"How can your IQ be in single numbers",

"It would help if you sued your parents for looking like that",

"Your mouth should be as silent as the ‘p’ in psychology",

"I’d have to understand this for you. Explaining won’t help you either",

"You do realize we tolerate you.",
               
            ]
            if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Zero`)
                          const xeonroast = roast[Math.floor(Math.random() * roast.length)]
                          Zero.sendMessage(m.chat, { text:`\nName : ${q}\n*❅${xeonroast}❅*` }, { quoted: m })
                          break
            case 'truth':
            const truth =[
                "Have you ever liked anyone? How long?",
                "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
                "apa ketakutan terbesar kamu?",
                "Have you ever liked someone and felt that person likes you too?",
                "What is the name of your friend's ex-girlfriend that you used to secretly like?",
                "Have you ever stolen money from your father or mom? The reason?",
                "What makes you happy when you're sad?",
                "Ever had a one sided love? if so who? how does it feel bro?", 
                "been someone's mistress?",
                "the most feared thing",
                "Who is the most influential person in your life?",
                "what proud thing did you get this year", 
                "Who is the person who can make you awesome", 
                "Who is the person who has ever made you very happy?", 
                "Who is closest to your ideal type of partner here", 
                "Who do you like to play with??", 
                "Have you ever rejected people? the reason why?",
                "Mention an incident that made you hurt that you still remember", 
                "What achievements have you got this year??",
                "What's your worst habit at school??",
                "What song do you sing most in the shower",
                "Have you ever had a near-death experience",
                "When was the last time you were really angry. Why?",
                "Who is the last person who called you",
                "Do you have any hidden talents, What are they",
                "What word do you hate the most?",
                "What is the last YouTube video you watched?",
                "What is the last thing you Googled",
                "Who in this group would you want to swap lives with for a week",
                "What is the scariest thing thats ever happened to you",
                "Have you ever farted and blamed it on someone else",
                "When is the last time you made someone else cry",
                "Have you ever ghosted a friend",
                "Have you ever seen a dead body",
                "Which of your family members annoys you the most and why",
                "If you had to delete one app from your phone, which one would it be",
                "What app do you waste the most time on",
                "Have you ever faked sick to get home from school",
                "What is the most embarrassing item in your room",
                "What five items would you bring if you got stuck on a desert island",
                "Have you ever laughed so hard you peed your pants",
                "Do you smell your own farts",
                "have u ever peed on the bed while sleeping ðŸ¤£ðŸ¤£",
                "What is the biggest mistake you have ever made",
                "Have you ever cheated in an exam",
                "What is the worst thing you have ever done",
                "When was the last time you cried",
                "whom do you love the most among ur parents", 
                "do u sometimes put ur finger in ur nosetrilðŸ¤£", 
                "who was ur crush during the school days",
                "tell honestly, do u like any boy in this grup",
                "have you ever liked anyone? how long?",
                "do you have gf/bf','what is your biggest fear?",
                "have you ever liked someone and felt that person likes you too?",
                "What is the name of your ex boyfriend of your friend that you once liked quietly?",
                "ever did you steal your mothers money or your fathers money",
                "what makes you happy when you are sad",
                "do you like someone who is in this grup? if you then who?",
                "have you ever been cheated on by people?",
                "who is the most important person in your life",
                "what proud things did you get this year",
                "who is the person who can make you happy when u r sad",
                "who is the person who ever made you feel uncomfortable",
                "have you ever lied to your parents",
                "do you still like ur ex",
                "who do you like to play together with?",
                "have you ever stolen big thing in ur life? the reason why?",
                "Mention the incident that makes you hurt that you still remember",
                "what achievements have you got this year?",
                "what was your worst habit at school?",
                "do you love the bot creator, xeon?ðŸ¦„",
                "have you ever thought of taking revenge from ur teacher?",
                "do you like current prime minister of ur country",
                "you non veg or veg",
                "if you could be invisible, what is the first thing you would do",
                "what is a secret you kept from your parents",
                "Who is your secret crush",
                "whois the last person you creeped on social media",
                "If a genie granted you three wishes, what would you ask for",
                "What is your biggest regret",
                "What animal do you think you most look like",
                "How many selfies do you take a day",
                "What was your favorite childhood show",
                "if you could be a fictional character for a day, who would you choose",
                "whom do you text the most",
                "What is the biggest lie you ever told your parents",
                "Who is your celebrity crush",
                "Whats the strangest dream you have ever had",
                "do you play pubg, if you then send ur id number"
            ]
                          const xeontruth = truth[Math.floor(Math.random() * truth.length)]
                          buffer = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
                          Zero.sendMessage(m.chat, { image: buffer, caption: '_You choose TRUTH_\n'+ xeontruth }, {quoted:m})
                          break
case 'dare':
const dare =[
"eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
"spill people who make you pause",
"call crush/pickle now and send ss",
"drop only emote every time you type on gc/pc for 1 day.",
"say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
"call ex saying miss",
"sing the chorus of the last song you played",
"vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss🥺👉🏼👈🏼",
"Bang on the table (which is at home) until you get scolded for being noisy",
"Tell random people _I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
"mention ex's name",
"make 1 rhyme for the members!",
"send ur whatsapp chat list",
"chat random people with gheto language then ss here",
"tell your own version of embarrassing things",
"tag the person you hate",
"Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
"change name to *I AM DONKEY* for 24 hours",
"shout *ma chuda ma chuda ma chuda* in front of your house",
"snap/post boyfriend photo/crush",
"tell me your boyfriend type!",
"say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
"record ur voice that read *titar ke age do titar, titar ke piche do titar*",
"prank chat ex and say *i love u, please come back.* without saying dare!",
"chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
"change the name to *I am a child of randi* for 5 hours",
"type in bengali 24 hours",
"Use selmon bhoi photo for 3 days",
"drop a song quote then tag a suitable member for that quote",
"send voice note saying can i call u baby?",
"ss recent call whatsapp",
"Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
"pop to a group member, and say fuck you",
"Act like a chicken in front of ur parents",
"Pick up a random book and read one page out loud in vn n send it here",
"Open your front door and howl like a wolf for 10 seconds",
"Take an embarrassing selfie and paste it on your profile picture",
"Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
"Walk on your elbows and knees for as long as you can",
"sing national anthem in voice note",
"Breakdance for 30 seconds in the sitting room😂",
"Tell the saddest story you know",
"make a twerk dance video and put it on status for 5mins",
"Eat a raw piece of garlic",
"Show the last five people you texted and what the messages said",
"put your full name on status for 5hrs",
"make a short dance video without any filter just with a music and put it on ur status for 5hrs",
"call ur bestie, bitch",
"put your photo without filter on ur status for 10mins",
"say i love oli london in voice note🤣🤣",
"Send a message to your ex and say I still like you",
"call Crush/girlfriend/bestie now and screenshot here",
"pop to one of the group member personal chat and Say you ugly bustard",
"say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
"send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
"write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
"use any bollywood actor photo as ur pfp for 3 days",
"put your crush photo on status with caption, this is my crush",
"change name to I AM GAY for 5 hours",
"chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
"send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
"slap ur butt hardly send the sound of slap through voice note😂",
"state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
"shout bravooooooooo and send here through voice note",
"snap your face then send it here",
"Send your photo with a caption, i am lesbian",
"shout using harsh words and send it here through vn",
"shout you bastard in front of your mom/papa",
"change the name to i am idiot for 24 hours",
"slap urself firmly and send the sound of slap through voice note😂",
"say i love the bot owner xeon through voice note",
"send your gf/bf pic here",
"make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
"breakup with your best friend for 5hrs without telling him/her that its a dare",
"tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
"say i love depak kalal through voice note",
"write i am feeling horny and put it on status, u can delete it only after 5hrs",
"write i am lesbian and put it on status, u can delete only after 5hrs",
"kiss your mommy or papa and say i love you😌",
"put your father name on status for 5hrs",
"send abusive words in any grup, excepting this grup, and send screenshot proof here"
]
  const xeondare = dare[Math.floor(Math.random() * dare.length)]
  buffer = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
  Zero.sendMessage(m.chat, { image: buffer, caption: '_You choose DARE_\n'+ xeondare }, {quoted:m})
  break
  case 'space':
            const space =[
"https://images.wallpaperscraft.com/image/stars_milky_way_space_1108093_1920x168.jpg",
"https://images.wallpaperscraft.com/image/milky_way_starry_sky_stars_128523_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/milky_way_starry_sky_galaxy_119519_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_space_glow_planet_99744_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planets_takeoff_explosion_96455_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_galaxy_universe_121293_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_craters_space_light_61032_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/exoplanet_atmosphere_clouds_stars_moon_mist_mountains_rocks_101205_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_clouds_light_star_94996_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_milky_way_stars_glitter_space_118653_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_sky_space_car_113629_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/pluto_planet_dwarf_planet_trans_neptunian_objects_news_97479_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_milky_way_stars_night_118495_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_space_sky_glitter_116409_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_sky_spiral_galaxy_99967_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_light_spots_space_86643_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/cosmonaut_space_suit_multicolored_123724_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_cataclysm_planet_art_explosion_asteroids_comets_fragments_98315_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_universe_galaxy_stars_flash_59622_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_people_planet_art_105693_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/star_nebula_glow_94217_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_nebula_blurring_stars_65152_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/hurricane_iss_earth_clouds_element_86659_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/earth_moon_space_galaxy_118437_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_stars_planet_surface_105684_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_flight_sky_stars_82970_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/earth_sun_planet_surface_stars_99478_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_shine_glitter_118976_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_galaxy_universe_sky_night_118591_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/sunset_sea_rings_planet_90890_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_earth_network_126341_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_ball_planet_131122_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_meteor_asteroid_comet_blast_space_101967_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_glow_spiral_142698_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planet_light_82977_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_universe_stars_125862_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/helix_nebula_space_stars_explosion_brilliance_97908_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_cluster_gravity_communication_98391_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planet_sky_85133_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_starry_sky_night_purple_118027_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/universe_planet_planet_disaster_space_94435_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planet_sky_94434_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_stars_sky_dark_82968_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planets_universe_134628_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/rocket_flight_space_104471_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planet_explosion_light_94503_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/star_relief_planet_space_94536_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_universe_space_138271_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/cosmonaut_astronaut_art_134410_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_universe_galaxy_118232_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_galaxy_saturn_planet_94330_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_surface_space_dark_island_98626_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planet_light_night_sky_94442_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/art_star_tree_sky_space_93472_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_sky_3d_art_97531_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planets_asteroids_stars_belt_galaxy_93470_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_flash_bright_139725_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/earth_moon_transit_121207_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_milky_way_starry_sky_119836_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/astronaut_art_space_129529_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_night_sky_121223_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_universe_space_stars_105874_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_stars_universe_light_planet_63624_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_asteroids_space_142894_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/eclipse_moon_sun_129559_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_night_starry_sky_mountains_118126_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planeta_kosmos_more_gorizont_103567_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/real_coordinate_space_space_real_space_space_coordinates_97854_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_rings_sky_space_97576_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_extraterrestrial_mountains_125431_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planet_light_galaxy_94490_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/star_cluster_ngc_7129_stars_space_98385_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_stars_glitter_night_sky_119220_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_galaxy_stars_146448_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_night_117082_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/earth_planet_blue_black_stars_1472_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/mountains_starry_sky_milky_way_night_119973_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_stars_galaxy_125401_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_stars_galaxy_121902_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_space_photoshop_129003_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_glow_dark_space_flight_96538_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_sky_night_113553_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_asteroids_speed_impact_explosion_67778_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/sky_stars_moon_144720_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/northern_lights_aurora_starry_sky_night_120081_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_night_stars_115042_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_sky_stars_79233_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/cosmos_milky_way_particles_109415_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/lunar_eclipse_solar_eclipse_space_97617_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planet_ship_art_star_73877_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_ring_purple_149425_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_galaxy_universe_140757_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_stars_shine_130325_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_planet_stars_121000_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/gailis_planet_rings_stars_space_94952_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/sky_light_stars_85135_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/landscape_space_alien_143820_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/cosmonaut_astronaut_space_suit_137404_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_milky_way_glitter_123917_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_space_nebula_95432_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/milky_way_stars_space_nebula_68885_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/ship_open_space_flight_68750_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planet_astronomy_133670_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_space_spot_102138_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_galaxies_rotation_universe_68893_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/astronaut_spacesuit_butterflies_121755_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_space_stars_132298_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_nebula_space_122035_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_universe_space_118205_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_art_spiral_star_glow_94003_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_galaxy_planets_142557_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/universe_stars_space_face_109385_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planet_sky_82962_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_space_galaxy_118132_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_night_stars_134696_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_space_open_space_129155_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/earth_moon_universe_121397_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/spaceship_space_planet_101317_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/yuri_gagarin_cosmonaut_ussr_spacesuit_97869_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_light_stars_nebula_67770_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_suit_cosmonauts_astronaut_124302_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_earth_surface_land_color_variety_palette_93322_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/cosmonaut_space_suit_skull_130424_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_space_universe_127497_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_continents_map_113434_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_upper_atmosphere_falling_satellite_98857_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_asteroids_flash_143349_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_universe_stars_132413_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_burning_hot_130716_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/milky_way_starry_sky_stars_128808_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/saturn_planet_ring_star_95018_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_stars_black_holes_circles_68749_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/swan_lbn_274_space_sky_nebula_constellation_99199_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_space_sky_balloon_86642_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_night_trees_121201_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/saturn_palm_trees_water_darkness_fantasy_2760_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/asteroids_black_hole_funnel_light_57876_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planets_satellites_stars_deep_94376_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/sun_stars_space_light_58237_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_green_glow_149333_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_stars_galaxy_146898_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_space_dark_139528_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/earth_planet_space_135594_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_space_satellite_127377_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_milky_way_radiance_bright_118712_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_night_stars_sky_117475_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_stars_galaxies_light_67767_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/mars_planet_space_104848_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_full_moon_starry_sky_119402_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/sgr_j1550_5418_soft_gamma_ray_repeater_sgr_gamma_radiation_98514_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_glow_asteroids_142306_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_full_moon_night_135745_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_full_moon_red_moon_134377_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planets_cosmic_space_132508_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_galaxy_shine_130828_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_galaxy_light_night_118524_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_earth_planets_96790_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_light_luster_94206_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_stars_space_flash_59646_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/milky_way_stars_starry_sky_119883_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planet_surface_102201_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_nebula_glow_point_abstraction_100580_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/sun_energy_light_radiation_space_67828_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_phase_cycle_144381_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_lights_space_142030_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_landscape_flash_141807_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_galaxy_shine_137572_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_space_satellite_134424_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_earth_stars_133535_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/earth_planet_space_132862_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_lightning_eclipse_130843_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_galaxy_nebula_130782_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_space_outer_space_130400_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/saturn_planet_space_127666_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/radiance_sky_night_118994_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_stars_galaxies_nebulae_68488_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/earth_planet_space_131796_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/sci_fi_space_red_planet_97859_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_bright_sky_129939_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/astronaut_space_suit_spaceman_127220_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_galaxy_universe_126503_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_blue_planet_earth_iss_shuttle_endeavour_96306_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_space_satellite_160219_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_asteroids_space_141707_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planets_shine_140681_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planets_shine_138400_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_funnel_spiral_135761_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_universe_stars_135577_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_night_shine_134922_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/milky_way_starry_sky_stars_134091_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_galaxy_space_130964_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_space_universe_130184_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_space_stars_128150_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_space_127944_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_ultraviolet_stars_123196_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_mountains_milky_way_119796_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_earth_space_123222_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/black_hole_eclipse_stars_123131_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_space_constellation_astronomy_galaxy_118686_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_stars_surface_106135_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_sky_night_space_117681_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_light_stars_65787_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_night_galaxy_glitter_118014_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_space_galaxy_117958_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/heavens_touch_planet_space_glow_97573_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_satellites_space_sky_96936_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_space_universe_129992_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_galaxy_milky_way_glitter_night_120429_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_glow_galaxy_167815_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/ufo_aliens_night_143621_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_flash_shine_141469_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_colorful_ball_136743_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/earth_planet_space_133110_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_stars_cloudy_130803_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/milky_way_starry_sky_stars_126017_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_outer_space_gas_clouds_125463_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/cosmonaut_spacesuit_flight_122825_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/universe_planet_circle_star_65146_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_eclipse_radiance_141940_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planets_nebula_131343_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_spaceship_lights_130833_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_dark_ball_91260_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_galaxies_stars_light_flash_59633_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/eye_of_the_sahara_space_ring_structure_mauritania_africa_93215_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planet_explosion_stars_101920_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_galaxy_stars_universe_spots_flashes_58487_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/blood_moon_blood_moon_2015_shortest_eclipse_of_the_century_national_geographic_101341_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_ball_dark_167935_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/sun_planet_flame_153084_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/astronaut_butterflies_spacesuit_144309_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_atmosphere_glow_143482_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/flash_shine_flare_142674_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/astronaut_flash_bright_141088_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/astronaut_cosmonaut_gravity_139457_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_outer_space_bright_138505_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_full_moon_sky_134930_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_full_moon_satellite_134213_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_nebula_galaxy_131171_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_planets_stars_130860_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_shine_nebula_130853_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/saturn_planet_ring_130763_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_space_satellite_128162_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_milky_way_astronomy_124632_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/astronaut_planet_space_suit_120959_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_milky_way_mountains_120810_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/man_starry_sky_light_flashlight_119928_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_night_glitter_117568_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/rendering_space_planets_light_99907_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/port_elizabeth_space_land_snapshot_96625_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_starry_sky_universe_131472_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_space_glitter_120044_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planet_dark_101456_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_stars_sky_night_dark_art_3d_99186_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planet_abstraction_fire_108891_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxies_stars_sky_dark_nebula_101228_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/ship_kind_earth_planet_silhouette_1457_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_milky_way_night_118818_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_starry_sky_night_117616_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_open_space_planets_135213_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_full_moon_satellite_124833_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_night_milky_way_120075_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/ball_space_multicolored_169278_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/earth_planet_space_164751_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/astronaut_space_outer_space_157580_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planets_nebula_151671_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_nebula_cloud_150738_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_glow_blue_150370_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_purple_surface_148377_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_asteroids_space_143556_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_galaxy_nebula_143388_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_circle_ring_142538_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_space_nebula_141264_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_galaxy_star_cluster_138814_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_space_shine_137865_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_pinwheel_galaxy_spiral_134777_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_full_moon_red_moon_133679_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_stream_constellations_133098_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/full_moon_moon_satellite_128550_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_full_moon_eclipse_124843_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_earth_plexus_124078_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/astronaut_planet_gravitation_122380_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_universe_earth_121119_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/spaceship_interstellar_space_galaxy_120845_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_space_sun_radiation_61012_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_night_trees_dark_120011_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_light_beam_space_68882_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_galaxy_stars_light_bright_67773_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_sphere_surface_145146_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/helix_nebula_constellation_nebula_122646_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_galaxy_stars_glitter_119572_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_shine_night_blue_118888_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_meteorites_space_galaxy_116921_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_space_stars_116743_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_sky_planets_stars_moons_109919_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_satellites_space_nebula_68880_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_space_universe_123741_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/silhouette_starry_sky_shining_night_120363_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_glow_clouds_178745_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_satellite_space_163215_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_flash_light_158179_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_stars_nebula_157030_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_stars_space_149763_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_milky_way_stars_149198_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_stars_shine_148948_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_dark_shadow_148333_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/earth_planet_space_147661_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_shine_144117_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/cosmonaut_planets_flash_141734_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_nebula_galaxy_138741_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_ball_dark_138526_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_nebula_cluster_137892_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_glitter_stars_135090_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_full_moon_red_moon_133912_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_astronomy_galaxy_133622_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/mercury_planet_space_133139_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_universe_starry_sky_131807_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_spiral_stars_130656_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planet_the_universe_1192074_300x1080.jpg",
"https://images.wallpaperscraft.com/image/eclipse_moon_sun_129354_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_galaxy_universe_129266_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_space_stars_128266_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_art_universe_127454_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/saturn_planet_space_127400_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/terzan_7_globular_cluster_galaxy_124922_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/full_moon_red_moon_starry_sky_124907_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/constellation_bear_starry_sky_122509_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_people_milky_way_121432_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_planet_space_120741_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_milky_way_galaxy_120656_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/tree_night_sky_starry_sky_radiance_120367_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_night_stars_118333_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_orion_constellation_stars_galaxy_118154_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_space_sci_fi_112946_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/beacon_stars_sun_planets_1458_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_pink_light_galaxy_1471_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_aurora_space_148317_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_glow_spiral_141983_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_milky_way_stars_128656_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/full_moon_red_moon_eclipse_124993_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/radiance_sky_space_118250_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_universe_stars_135603_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_universe_stars_122871_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_nebula_constellation_104640_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/interplanetary_transport_network_itn_gravity_orbit_space_98107_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_space_stars_shuttle_flight_61011_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_stars_space_169026_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/astronaut_spacesuit_meteorites_1080734_1920x168.jpg",
"https://images.wallpaperscraft.com/image/light_glare_abstraction_157821_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_fire_rotation_155110_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_galaxy_light_152216_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_galaxy_stars_149604_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_stars_galaxy_148253_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_surface_atmosphere_144566_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_glow_asteroids_1441080_1920x168.jpg",
"https://images.wallpaperscraft.com/image/eclipse_moon_sun_143860_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_star_shine_143312_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_space_flash_142485_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/cosmonaut_space_planet_142138_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planets_shine_140653_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_full_moon_sky_137495_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_night_space_135954_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/full_moon_moon_red_moon_135524_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_space_satellite_135301_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_galaxy_astronomy_134763_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_full_moon_bw_132296_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_space_satellites_132279_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/solar_system_planets_space_131813_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_galaxy_universe_131639_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_constellation_galaxy_131562_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_space_starry_sky_131453_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/eclipse_moon_sun_129840_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/milky_way_galaxy_space_128633_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_universe_galaxy_128528_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_space_universe_128056_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_space_universe_127976_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/cosmonaut_space_suit_smoke_127284_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stardust_milky_way_starry_sky_126281_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/full_moon_moon_eclipse_124929_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_constellation_stars_122977_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/lighthouse_starry_sky_light_120698_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_night_120691_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_starry_sky_stars_120518_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_dark_background_crescent_moon_119145_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_stars_sky_night_116649_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/mars_planet_space_surface_104690_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/hubble_space_star_102391_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/saturn_planet_ring_68493_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/shuttle_open_space_flight_light_68895_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/earth_planet_space_nebula_65785_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_satellite_rays_light_radiance_65154_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_station_iss_world_laboratory_light_58259_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/cocoon_nebula_space_sparkle_stars_constellations_99245_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/colors_distant_blue_orange_stars_1456_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_stars_radiance_122081_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_space_satellite_bw_58245_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_asteroids_glow_142426_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_earth_space_140291_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/hurricane_space_view_from_space_133916_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planet_fragments_131817_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/cosmonaut_fall_depth_130625_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_space_red_128770_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_space_stars_127858_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/eclipse_moon_sun_121745_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_shine_dark_radiance_118872_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_galaxy_spots_glitter_118423_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_light_shine_1108006_1920x168.jpg",
"https://images.wallpaperscraft.com/image/venus_space_galaxy_109331_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_line_planet_glow_light_99830_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/earth_orbit_shuttle_height_flight_58489_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_rays_light_universe_nebula_65147_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_space_stars_188773_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planets_stars_173301_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_space_stars_171657_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_space_cosmic_170311_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_space_cosmic_169342_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_meteorites_stones_1080885_1920x168.jpg",
"https://images.wallpaperscraft.com/image/planets_meteors_glow_167861_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_constellations_black_hole_164133_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_stars_constellation_163816_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_satellite_space_163323_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/rocket_flight_launch_162464_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_stars_constellations_161585_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_starry_sky_night_161046_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_stars_starry_sky_160352_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/astronaut_water_space_158953_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_space_dark_158001_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planets_nebula_155432_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_shine_atmosphere_153949_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_asteroids_fragments_153096_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_green_space_151972_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_sky_clouds_151158_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_space_stars_151000_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_stars_dark_148774_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_asteroids_space_147931_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/cave_planet_glow_144093_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planets_shine_141152_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_space_lights_140725_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_rings_shine_140385_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_glow_space_140071_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_spiral_glow_139670_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_starry_sky_purple_137185_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_nebula_galaxy_136976_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_space_cluster_136944_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_shine_lines_134183_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_asteroids_space_133695_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/full_moon_moon_sky_132664_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_full_moon_night_132494_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_shine_130974_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_star_shine_130577_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_lattice_128498_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/cosmonaut_space_suit_space_123018_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_milky_way_mountains_122662_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_universe_stars_122485_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/sky_stars_polarization_120580_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/eclipse_moon_astronomy_119271_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_galaxy_milky_way_starry_sky_night_sky_119125_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_star_starry_sky_119091_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_milky_way_space_stars_118064_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_night_tree_1108080_1920x168.jpg",
"https://images.wallpaperscraft.com/image/space_sky_stars_glare_113489_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_galaxy_space_124294_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_clouds_moonlight_141868_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_flashes_shine_139584_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_space_117498_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/eclipse_moon_sun_117138_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_night_116961_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/universe_space_face_rocket_116714_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_space_shadow_stars_68889_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_space_night_119881_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/eclipse_moon_sun_dark_background_117018_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_haze_light_nebula_68881_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_circle_flash_radiance_galaxy_65149_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_galaxy_glitter_night_118638_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planet_orbit_close-up_stars_63578_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_ring_space_light_rays_68744_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_space_glow_185640_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_stars_starfall_181220_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_space_rings_176517_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_nebula_space_173278_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_stars_glow_170641_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_space_universe_170536_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_meteorite_stones_1080636_1920x168.jpg",
"https://images.wallpaperscraft.com/image/space_stars_galaxy_1080227_1920x168.jpg",
"https://images.wallpaperscraft.com/image/space_stars_milky_way_166758_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_comets_meteorites_165989_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/astronaut_spacesuit_milky_way_164760_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_rays_space_163172_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_stars_space_163013_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_loneliness_161606_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planet_stars_161389_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/earth_planet_shadow_158851_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/astronaut_silhouette_galaxy_158750_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_galaxy_158714_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/mountains_relief_earth_158052_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_earth_surface_156329_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_space_stars_156321_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_surface_atmosphere_155499_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_stars_space_150181_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_shadow_dark_149565_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_milky_way_night_149046_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_dark_night_148730_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_satellite_space_148361_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_galaxy_stars_147065_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_shadow_dark_146880_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_asteroids_stars_145907_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_space_outer_space_145727_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_nebula_space_145603_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_stars_nebula_145043_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_galaxy_space_144684_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_space_143776_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_red_surface_143709_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_red_dark_143198_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planet_stars_142785_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_flash_shine_142622_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_surface_eclipse_141951_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/mountains_landscape_space_141216_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planet_dark_140560_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/satellite_space_planet_140332_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planet_lights_140206_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/ball_planet_under_water_139091_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/open_space_nebula_planets_139021_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_satellite_open_space_138499_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_space_saturn_138218_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_satellite_space_137421_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_full_moon_sky_137267_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_full_moon_red_moon_134812_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_light_134451_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_red_fantasy_133525_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_space_stars_133086_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_satellite_space_131703_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_night_131522_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/saturn_planet_space_128436_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/full_moon_red_moon_eclipse_125886_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/full_moon_moon_starry_sky_125260_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/full_moon_red_moon_eclipse_124915_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_tarantula_starry_sky_galaxy_123307_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_starbursts_constellations_121335_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_space_universe_137163_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_universe_spirals_133308_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/clouds_shine_stars_129786_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_night_glitter_dark_119065_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_universe_violet_118230_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_galaxy_radiance_119085_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_mountains_radiance_118859_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_space_light_rays_59619_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_space_universe_galaxy_nebula_119068_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planet_flight_105565_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/meteorite_speed_space_debris_smoke_62623_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_lot_galaxy_universe_world_61692_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/baikonur_shuttle_rocket_61018_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/universe_planet_stars_light_57878_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/saturn_planet_space_rings_belt_104348_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_light_rays_stars_59625_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_eclipse_astronomy_141701_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_starry_sky_astronomy_122323_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_galaxy_blur_spots_light_stars_63579_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/astronaut_cosmonaut_space_suit_137841_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/eclipse_moon_sun_128985_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_galaxy_stars_125852_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_lilac_122630_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_shine_glitter_119257_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/lunar_eclipse_2015_moon_sky_104705_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/luminescence_colors_stars_blue_orange_dark_blue_1452_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_pleiades_186642_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_space_red_185705_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_saturn_space_184440_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planets_stars_183970_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_night_183093_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_starfall_182881_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_galaxy_182242_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_spiral_space_181244_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_nebula_starry_sky_181119_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_galaxies_space_179619_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_starry_sky_stars_179044_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_night_starry_sky_178907_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_space_stars_178897_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/earth_planet_stars_177256_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_glow_nebula_176437_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_galaxy_spiral_174554_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_black_174007_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_starry_sky_nebula_173576_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_glow_nebula_171272_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_universe_space_170661_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/earth_planet_glow_170438_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_rocks_space_170315_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_nebula_universe_170154_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/saturn_planet_space_169927_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_stars_nebula_169848_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_stars_universe_169405_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_saturn_space_169290_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/cosmonaut_astronaut_spacesuit_169107_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_space_universe_1080418_1920x168.jpg",
"https://images.wallpaperscraft.com/image/space_stars_colorful_167964_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_earth_space_167499_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_stars_constellation_166645_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_universe_meteorites_165040_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_stars_constellation_164383_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_space_164296_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_space_circle_164238_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_space_dark_163164_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planet_ball_162132_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_space_universe_161375_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_space_160539_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_milky_way_space_159992_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_stars_space_159204_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_nebula_galaxy_159028_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_space_158187_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_space_stars_157274_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/northern_lights_stars_space_157128_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_stars_space_156629_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_space_stars_155950_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_flash_light_153871_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/earth_atmosphere_aerial_view_152796_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_explosion_spaceships_152609_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_asteroids_dark_150925_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_full_moon_night_147952_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/star_bright_shine_147920_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/rocket_smoke_night_146941_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_flash_light_146737_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_shine_light_146645_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_nebula_clouds_146425_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/porthole_spaceship_space_145635_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_mountains_landscape_144963_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_ring_satellite_143928_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_glow_glare_143717_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_surface_glow_143472_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/landscape_winter_space_142827_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_cloud_space_141619_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/flash_planets_asteroids_141448_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_space_shine_140127_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/meteorite_sky_stars_139866_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_flash_asteroids_139699_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_red_full_moon_139417_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_shine_galaxy_139243_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_space_satellite_135275_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/full_moon_bw_moon_134688_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_crescent_full_moon_134234_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_full_moon_night_134083_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/full_moon_moon_night_132927_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/sky_stars_night_130489_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/saturn_planet_space_129043_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_patterns_glitter_127514_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_constellations_outer_space_124085_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/rocket_flight_space_station_123426_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_space_120412_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/sky_stars_the_milky_way_130250_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/artwork_wormhole_expanse_space_104124_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planets_stars_darkness_62629_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_stars_galaxies_cluster_energy_65691_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/earth_day_night_urbanization_progress_1470_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_nebula_pink_122850_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_nebula_spiral_174215_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_starry_sky_174025_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_galaxy_stars_1080046_1920x168.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_galaxy_153447_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_flare_shine_137986_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_cluster_135789_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_full_moon_bw_134640_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_full_moon_eclipse_134320_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_eclipse_photoshop_122026_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/cosmonaut_space_suit_art_121915_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/ufo_children_space_ship_120539_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/crescent_moon_sky_night_120326_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_milky_way_119841_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/outer_space_galaxy_constellation_119797_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/milky_way_galaxy_stars_space_supercluster_119274_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_night_mountains_117878_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_night_115504_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_night_glitter_114765_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_space_sun_light_stars_62626_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planet_open_space_131145_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_space_open_space_129764_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_space_galaxy_rays_62611_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_universe_galaxy_188512_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_galaxy_188346_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_space_187590_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_universe_galaxy_187371_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/earth_planet_black_1871920_300x1080.jpg",
"https://images.wallpaperscraft.com/image/nebula_universe_stars_183709_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_space_stars_182966_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_colorful_182782_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_space_182658_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/earth_planet_space_180988_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_stars_starry_sky_180590_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_galaxy_universe_180515_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_space_stars_180167_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_stars_glow_178066_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_spiral_nebula_177687_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_twisting_stars_174923_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_cranny_starry_sky_174780_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_nebula_brown_174756_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_galaxy_stars_174682_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_nebula_stars_174639_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_glow_1719200_300x1080.jpg",
"https://images.wallpaperscraft.com/image/stars_glow_starry_sky_172922_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_nebula_galaxy_171977_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_glow_171766_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/universe_milky_way_galaxy_171733_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_nebula_universe_171628_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_satellite_space_171215_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_universe_nebula_170716_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_nebula_space_170582_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_nebula_stars_170557_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_cluster_space_170375_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_nebula_universe_169964_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_constellations_169072_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_starry_sky_nebula_1080894_1920x168.jpg",
"https://images.wallpaperscraft.com/image/space_milky_way_starry_sky_1080571_1920x168.jpg",
"https://images.wallpaperscraft.com/image/planet_cranny_dark_1080526_1920x168.jpg",
"https://images.wallpaperscraft.com/image/moon_starry_sky_space_1080511_1920x168.jpg",
"https://images.wallpaperscraft.com/image/planet_satellite_orbit_1080211_1920x168.jpg",
"https://images.wallpaperscraft.com/image/twisting_starry_sky_trees_167351_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_glow_stars_167140_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_galaxy_universe_166891_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_universe_space_166846_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_stars_starry_sky_165173_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_space_day_164921_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_stars_universe_164874_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_universe_milky_way_164685_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_universe_stars_163453_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_stars_constellation_162862_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_orbit_space_162109_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_stars_starry_sky_160839_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_space_milky_way_160471_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_stars_milky_way_160393_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_stars_sky_159567_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planet_stars_159308_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/earth_relief_surface_158783_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/earth_relief_snow_158777_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_nebula_stars_158061_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/sky_stars_space_157738_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/vortex_clouds_atmosphere_156338_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/earth_surface_space_155920_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/earth_surface_aerial_view_155862_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_asteroids_rings_155608_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/outer_space_stars_shroud_155149_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/mars_planet_space_154711_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_shadow_night_154121_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_asteroids_nebula_153919_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_dark_shadow_153878_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/outer_space_space_stars_153617_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_surface_atmosphere_153039_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_surface_shadow_152964_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_airplane_dark_151578_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_milky_way_150678_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_ring_blue_149399_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_light_shadow_147517_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_light_glow_147351_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_nebula_145170_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_flash_shine_144049_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_sky_dark_143868_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/astronaut_porthole_space_143321_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_surface_light_142909_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_meteorites_flash_140948_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planets_nebula_140849_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_space_stars_139899_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_shadow_darkness_139786_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_shadow_dark_139632_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_full_moon_sky_137649_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/cosmonaut_astronaut_planet_135291_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_cluster_constellations_135157_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_space_134547_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/astronaut_space_planet_133579_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/full_moon_moon_satellite_133269_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_space_satellite_132983_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/full_moon_moon_sky_132760_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_starry_sky_light_132562_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/porthole_planet_space_132409_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planet_man_131220_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_shine_lines_129899_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/interstellar_space_sky_129292_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_nebula_stars_153100_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_stars_space_147849_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_surface_glow_145558_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_surface_dark_143505_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_satellite_space_138134_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_space_stars_135137_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_radiance_120907_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/eclipse_moon_sun_sky_1108092_1920x168.jpg",
"https://images.wallpaperscraft.com/image/earth_circle_moon_satellite_clot_stars_65690_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/orion_constellation_starry_sky_119627_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_starry_sky_rock_119111_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_black_glitter_118255_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_space_galaxy_118131_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_slope_stars_space_65153_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_ring_star_space_68746_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/launching_pad_spaceport_shuttle_clouds_running_68496_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/mars_planet_space_image_61028_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_sky_space_planet_119383_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planets_nebula_158542_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/astronomy_galaxy_starry_sky_119763_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/eclipse_planets_stars_174227_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_nebula_universe_169499_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_glow_universe_167324_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_space_glow_164491_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_sky_night_155984_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_surface_atmosphere_150774_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_glow_143289_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_space_stars_140371_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_shine_space_135257_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_space_satellite_134444_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_universe_stars_galaxy_127329_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/astronaut_space_suit_girl_122446_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_galaxy_121718_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/astronaut_planet_spacesuit_121169_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_stars_fractal_120624_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/earth_planet_space_116609_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/explosion_light_fragments_stones_asteroids_2767_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_spiral_galaxy_190011_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_space_189356_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_glow_space_189256_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_red_188543_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_universe_galaxy_188504_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_milky_way_universe_188427_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_universe_galaxy_187805_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_night_187635_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_universe_187312_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_constellations_187145_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_space_glow_187038_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_nebula_universe_186980_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_starry_sky_stars_186796_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_red_186570_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starfall_night_stars_186218_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_universe_186188_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_universe_spiral_186041_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_universe_185749_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_universe_185090_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_starry_sky_184578_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_galaxy_stars_184552_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_galaxy_184368_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_full_moon_minimalism_184281_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_nebula_space_184065_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_galaxy_stars_184014_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_space_constellations_183564_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_space_183329_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_colorful_space_183190_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_universe_galaxy_182698_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_starry_sky_182385_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_nebula_starry_sky_182318_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_space_stars_182169_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_space_182002_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_space_stars_181967_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_starry_sky_181780_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/glitter_stars_particles_181760_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_space_red_181604_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/earth_planet_shadow_181502_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_galaxy_stars_181088_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_trees_silhouette_180461_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_galaxy_stars_180036_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_universe_stars_180018_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_starry_sky_stars_179941_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_space_galaxy_179904_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_starry_sky_stars_178797_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_space_relief_178522_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_galaxy_178021_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_galaxy_stars_177851_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_nebula_space_177798_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/earth_planet_black_177774_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_galaxy_starry_sky_177173_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_starry_sky_starfall_176380_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_space_176299_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_galaxy_176076_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_space_175957_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_starry_sky_stars_175595_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_space_175486_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_galaxy_175394_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_nebula_stars_175026_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_universe_174705_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_colorful_stars_174609_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_constellations_174567_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_pleiades_174522_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_glow_174506_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_night_174430_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_tree_174088_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_space_173971_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_space_stars_173817_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_nebula_brown_173791_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_spiral_nebula_173725_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/cosmonaut_astronaut_spacesuit_173420_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_glow_space_172800_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_galaxy_172720_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_space_172418_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/earth_planet_shadow_172359_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_spiral_space_172256_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_stars_universe_172042_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_galaxy_stars_171839_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_space_stars_171499_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_nebula_stars_171482_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_nebula_stars_171411_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_space_stars_171352_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_nebula_galaxy_171327_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/earth_planet_shadow_171304_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_universe_171255_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_starry_sky_clouds_171204_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/earth_planet_asteroids_171018_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_space_170763_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_nebula_stars_170452_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_galaxy_170421_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_space_galaxy_170349_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_stars_galaxy_169899_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_stars_nebula_169826_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_craters_surface_169814_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_balls_circles_169745_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_space_craters_169666_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_stars_nebula_169551_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_meteorite_asteroid_169136_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stones_fall_nebula_1080994_1920x168.jpg",
"https://images.wallpaperscraft.com/image/planet_earth_continents_1080970_1920x168.jpg",
"https://images.wallpaperscraft.com/image/planet_shadow_space_1080771_1920x168.jpg",
"https://images.wallpaperscraft.com/image/space_starry_sky_dark_167759_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_stars_black_167477_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_black_night_166814_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_space_stars_166470_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_stars_milky_way_166418_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_branches_dark_166331_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_sky_evening_166221_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_black_hole_stars_166138_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_starry_sky_stars_165890_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/asteroid_meteorite_space_165706_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/constellation_stars_space_165259_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/milky_way_space_starry_sky_165098_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/silhouette_space_sky_164823_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_space_164433_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_universe_stars_163879_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_universe_starry_sky_163779_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_space_constellation_163559_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_constellation_stars_163268_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_black_dark_163070_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_satellite_stars_162552_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_satellite_orbit_161997_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_month_night_161939_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_nebula_milky_way_161404_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planet_lens_flare_160359_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_satellite_space_160344_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_space_satellite_160283_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/saturn_planet_rings_160108_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_stars_starry_sky_159958_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_full_moon_sky_159931_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_space_stars_159648_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planet_asteroids_159123_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_sky_dark_158957_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_milky_way_stars_158921_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_cloud_stars_158210_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_stars_space_157263_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_space_blur_156991_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_clouds_space_156719_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/mars_planet_brown_156483_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_eclipse_space_156359_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_asteroids_space_156033_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/volcano_relief_surface_155866_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_rings_space_155720_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_clouds_night_155569_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/outer_space_stars_shroud_155302_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/outer_space_stars_shroud_155267_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_shroud_nebula_155231_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/mars_planet_surface_154613_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_constellations_154336_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_stars_galaxy_154266_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_sky_astronomy_152728_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_shadow_dark_152559_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_shine_light_152231_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_night_dark_152039_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_craters_relief_151955_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_milky_way_150341_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_flash_bright_148578_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_blur_long_exposure_148029_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_space_147656_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_explosion_flash_bright_147529_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_flash_shine_145875_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_space_circle_145802_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_galaxy_stars_145519_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_stars_galaxy_145507_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_flash_atmosphere_145466_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/tunnel_porthole_astronaut_143047_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_surface_relief_142423_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/shine_stars_planets_141368_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_orbit_moon_space_134794_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/full_moon_moon_starry_sky_134545_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_full_moon_space_134164_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_spirals_stars_133315_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/full_moon_moon_stars_133092_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/sky_stars_movement_130797_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/flash_light_sparks_130788_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_glow_star_fields_130100_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_stars_rays_galaxy_65145_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_starry_sky_galaxy_119237_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planets_stars_shadow_62610_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_earth_surface_land_water_sea_coast_snow_greens_8683_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_explosion_nebula_circles_waves_61715_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planet_ring_explosions_satellites_61698_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_night_sky_stars_130936_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/outer_space_planets_worlds_64267_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/earth_planet_black_176582_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_galaxy_stars_174996_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/astronaut_spacesuit_porthole_1080453_1920x168.jpg",
"https://images.wallpaperscraft.com/image/planet_atmosphere_surface_158081_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_asteroids_deep_space_138726_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_satellite_open_space_138520_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/eclipse_moon_night_sky_118551_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_night_trees_stars_1108015_1920x168.jpg",
"https://images.wallpaperscraft.com/image/colors_blue_orange_black_stars_1453_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/orange_color_stars_1454_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_space_outer_space_130593_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/full_moon_eclipse_red_moon_124867_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_ring_moon_stars_galaxies_67780_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_mountains_galaxy_universe_118112_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_satellite_lighting_light_65156_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/cosmodrome_launch_pad_night_rocket_63582_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_circles_space_rays_light_glare_62612_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_ring_space_nebula_61006_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_night_glitter_118778_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/mars_red_planet_space_61027_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_space_stars_lights_61003_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_space_ball_166195_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_starry_sky_stars_165334_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_flash_shine_149943_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_sphere_brown_146557_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_nebula_galaxy_143400_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_shine_shadow_141018_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_shadow_space_139558_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/star_cluster_galaxy_stars_138909_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_full_moon_space_133127_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_space_glow_131395_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_sky_night_124024_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/ngc_346_nebula_stars_123954_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_earth_command_module_apollo_61024_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_nebulae_stars_galaxies_65698_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_space_glitter_120106_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/constellation_galaxy_hearts_stars_119484_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_flight_spaceship_115277_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/earth_planet_stars_time_of_days_darkness_day_night_8573_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_ring_star_space_67775_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_light_rays_58490_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_surface_stars_water_lake_rocks_8575_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/ground_ring_satellite_cyclone_space_67825_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/saturn_rings_planet_stars_1460_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/fog_spiral_constellations_12698_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/cosmonauts_survival_suits_ship_case_repair_equipment_flight_weightlessness_8654_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/site_baikonur_launch_start_night_61706_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_station_layout_solar_panels_58298_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_galaxy_sky_night_brown_118489_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_night_stars_116687_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_stars_galaxy_166797_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/eclipse_moon_dark_background_118404_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_sky_space_light_man_117129_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_night_space_stars_116783_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_galaxy_173903_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_glow_172094_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_shine_light_155774_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_space_satellite_138198_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/hubble_constellations_galaxy_133115_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_gas_stream_constellations_133107_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_spots_space_1108045_1920x168.jpg",
"https://images.wallpaperscraft.com/image/planet_earth_surface_clouds_land_water_continent_snow_greens_8701_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_earth_surface_cyclone_whirlwind_ocean_clouds_8697_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_planet_black_white_surface_58236_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_stars_space_light_clot_59631_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/light_sun_stars_blue_planet_earth_moon_2756_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_space_sci_fi_98020_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_glare_151739_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_sphere_dark_146231_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_earth_surface_land_doomsday_eruption_8707_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/mountains_snow_photo_surface_planet_earth_8633_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_companions_stars_1459_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_station_space_study_61008_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_nebula_space_180783_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_nebula_space_178694_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_craters_black_176104_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_constellations_starry_sky_174270_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_meteorites_stones_167902_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_stars_starry_sky_164614_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_stars_starry_sky_162713_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_universe_constellations_161510_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_starry_sky_stars_161150_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_space_159791_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_space_sky_dark_119035_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/station_iss_space_orbit_planet_earth_62635_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/observatory_telescope_sky_clouds_rain_61718_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_light_radiance_stars_65151_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_earth_surface_land_water_ocean_clouds_coast_line_8712_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_station_moon_earth_121015_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_sun_stars_slope_65092_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_station_iss_world_orbit_stars_58256_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/mars_planet_cranny_174166_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_space_close-up_station_61010_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/earth_moon_station_stars_61025_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/mars_red_planet_stars_space_68492_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_ring_light_rays_nebula_65695_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/astronaut_planet_pyramid_121129_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_cosmos_radiance_brilliance_119863_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/rocket_cosmodrome_night_63231_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_universe_189521_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_space_188398_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_space_184243_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_pleiades_nebula_180920_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/comet_meteorite_starry_sky_178790_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_starry_sky_stars_164405_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/asteroid_sphere_stone_146071_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_space_stars_144799_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_earth_surface_land_colors_variety_palette_8684_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_shine_dark_136865_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_space_117564_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/cosmonaut_spacesuit_sculpture_wooden_117140_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_earth_surface_land_water_fires_8686_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/earth_planet_days_day_night_stars_1461_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_earth_surface_clouds_land_water_islands_ocean_8706_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_ring_satellite_light_67782_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_light_rays_space_59626_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_three_space_light_65689_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_ray_light_stars_65150_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/companion_orbit_flight_earth_planet_surface_8591_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/earth_surface_river_water_population_8608_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_earth_surface_photo_cities_civilization_population_8640_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_stars_space_159884_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_earth_surface_land_mountains_tops_white_green_brown_8711_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/satellite_planet_universe_stars_nebula_57873_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_earth_surface_land_smoke_clouds_red_8708_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/satellite_orbit_flight_iss_world_57874_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_earth_surface_clouds_mountains_snowboarder_8702_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/site_baikonur_launch_start_smoke_61705_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_earth_surface_clouds_land_water_ocean_island_8704_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/rocket_spaceport_night_light_63232_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_surface_earth_volcano_island_eruption_lava_water_8653_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/cosmonaut_survival_suit_ship_case_repair_equipment_8652_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/satellites_ships_ground_flight_orbit_57890_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/spaceship_flying_open_space_62634_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/ship_cosmos_solar_panels_flight_59634_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/station_solar_space_study_61702_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/mars_planet_shadow_space_68494_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_night_190196_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_space_190000_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_starfall_189752_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_space_stars_189725_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_universe_189621_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_constellations_starry_sky_189504_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_space_universe_189402_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_universe_space_189174_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_red_space_189007_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_universe_188898_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_space_188690_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_space_pink_188472_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_starry_sky_188074_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_universe_stars_187751_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_universe_187728_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_space_red_187621_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_galaxy_space_187544_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/earth_planet_space_187479_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_glow_space_187460_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_space_stars_187435_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_starry_sky_187397_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_nebula_universe_187342_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_starry_sky_starfall_187195_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/night_nebula_stars_186925_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_galaxy_186424_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_universe_stars_186410_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_universe_stars_186396_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_glow_constellations_186262_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/comet_meteorite_starry_sky_186010_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_space_relief_185995_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_nebula_universe_185142_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_universe_stars_184904_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_universe_stars_184426_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_stars_milky_way_184225_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_space_stars_184174_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_stars_space_183942_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/constellation_nebula_stars_183673_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_universe_stars_183612_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_nebula_spiral_183098_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_universe_stars_183030_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_constellations_182504_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_space_stars_182460_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_starry_sky_182290_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_universe_182140_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_space_181909_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_space_constellation_181646_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_starry_sky_gradient_181398_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_galaxy_181038_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_glow_180943_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starfall_stars_starry_sky_180643_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/galaxy_nebula_colorful_180386_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_galaxy_space_180331_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_space_galaxy_180151_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_starfall_space_180129_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_pleiades_space_180090_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_starry_sky_stars_179866_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_night_starry_sky_179164_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_universe_stars_178860_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_starry_sky_stars_178445_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_pleiades_177607_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_starry_sky_pleiades_177483_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/craters_relief_moon_177466_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_starry_sky_176640_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_galaxy_176613_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_starry_sky_stars_176129_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_universe_176067_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_starry_sky_stars_176036_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/constellation_stars_nebula_176004_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_starry_sky_space_175876_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_nebula_galaxy_175642_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_galaxy_stars_175605_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_starry_sky_stars_175574_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_galaxy_stars_175331_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_starry_sky_175134_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_space_stars_174846_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_nebula_174734_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_space_stars_174592_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_starry_sky_stars_174482_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_pleiades_space_174328_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_starry_sky_nebula_174071_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_galaxy_173930_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_purple_173854_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/earth_planet_space_173623_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_nebula_173307_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/stars_nebula_space_173118_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_space_172883_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_space_172883_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_universe_172646_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_galaxy_172451_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_galaxy_172207_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_space_171597_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_nebula_galaxy_171442_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_glow_171431_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_universe_171386_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_craters_shadow_171170_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_stars_space_171091_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_universe_stars_170992_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_space_170887_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_space_stars_170862_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_nebula_universe_170833_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_space_night_170203_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_ball_space_1080909_1920x168.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_space_glow_167026_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/full_moon_moon_dark_166581_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_universe_stars_165496_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_stars_galaxy_165021_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_bottom_view_164767_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_stars_constellations_164356_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_star_night_163947_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_ball_space_163109_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_comet_stars_162694_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_stars_constellation_162599_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_sky_night_162432_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_satellite_night_162291_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/earth_land_surface_162063_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/month_sky_evening_161985_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/month_sky_evening_161985_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_night_black_161802_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_satellite_space_161327_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_earth_space_161245_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_space_shadow_161234_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_space_satellite_160791_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_space_dark_160562_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planet_stars_space_160157_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/sky_stars_space_159920_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_red_dark_159050_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_space_dark_158434_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/space_starry_sky_dots_158269_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/river_aerial_view_earth_156291_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/atmosphere_earth_surface_155850_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/starry_sky_stars_space_155792_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/moon_phases_astronomy_155459_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/nebula_space_stars_154751_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/planets_spaceship_space_154728_1080x1920.jpg",
"https://images.wallpaperscraft.com/image/venus_planet_stars_153671_1080x1920.jpg"]
const xeonspace = space[Math.floor(Math.random() * space.length)]
buffer = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
Zero.sendMessage(m.chat, { image: buffer, caption: xeonspace}, {quoted:m})
break
		case 'developers': case '/developer': case 'developer':
			buffer = await getBuffer(`https://i.ibb.co/3SRxFcx/team-zero-1.gif`)
			Zero.sendMessage(m.chat, { image: buffer, caption: "Developers" gifPlayback: true}, {quoted:m})
break
  case '918684934035': case '@918684934035': case'hola': case'ola': case 'hi': case'holi': case'saludos': case'commandos':
            Zero.sendMessage(m.chat,{ text: '❂ᴜꜱᴇ /ᴍᴇɴᴜ ᴛᴏ ʀᴇᴠᴇᴀʟ ʟɪꜱᴛ ᴏꜰ ᴄᴏᴍᴍᴀɴᴅs❂' }, {quoted:m})
            
            break
        case 'uchiha': case 'madara':
            let buttons = [
                {buttonId: `madara ${'Madara Uchiha'}`, buttonText: {displayText: '☯ More ☯'}, type: 1}
            ]
            let buttonMessage = {
                image: { url: madapic },
                caption: `*-------「Madara Uchiha」-------*`,
                footer: Zero.user.name,
                buttons: buttons,
                headerType: 4
            }
            Zero.sendMessage(m.chat, buttonMessage, { quoted: m })
            
            break
            case 'husbando': case '/husbando': case '/animeboy':{

                let gis = require('g-i-s')
                gis('Anime boy', async (error, result) => {
                n = result
                images = n[Math.floor(Math.random() * n.length)].url
                let buttons = [
                            {buttonId: `husbando`, buttonText: {displayText: '☯ More ☯'}, type: 1}
                        ]
                        let buttonMessage = {
                            image: { url: images },
                            caption: `Done`,
                            footer: Zero.user.name,
                            buttons: buttons,
                            headerType: 4
                        }
                        Zero.sendMessage(m.chat, buttonMessage, { quoted: m })
                })
                }
                break

            case 'cosplay': case '/cosplay': case '/animecosplay':{

                let gis = require('g-i-s')
                gis('anime cosplay', async (error, result) => {
                n = result
                images = n[Math.floor(Math.random() * n.length)].url
                let buttons = [
                            {buttonId: `gimage ${'Anime Cosplay'}`, buttonText: {displayText: '☯ More ☯'}, type: 1}
                        ]
                        let buttonMessage = {
                            image: { url: images },
                            caption: `*-------「ANIME COSPLAY」-------*`,
                            footer: Zero.user.name,
                            buttons: buttons,
                            headerType: 4
                        }
                        Zero.sendMessage(m.chat, buttonMessage, { quoted: m })
                })
                }
                break

                case '/animequote': case 'animequote': {
                    let gis = require('g-i-s')
                    gis('anime quote line images', async (error, result) => {
                    n = result
                    images = n[Math.floor(Math.random() * n.length)].url
                    let buttons = [
                                {buttonId: `/animequote`, buttonText: {displayText: '☯ More ☯'}, type: 1}
                            ]
                            let buttonMessage = {
                                image: { url: images },
                                caption: `*-------「Anime quote」-------*`,
                                footer: Zero.user.name,
                                buttons: buttons,
                                headerType: 4
                            }
                            Zero.sendMessage(m.chat, buttonMessage, { quoted: m })
                    })
                    }
                    break
               
                case 'factsanime': case '/animefacts': case '/animefact': case 'anime fact':{

                let gis = require('g-i-s')
                gis('anime facts images', async (error, result) => {
                n = result
                images = n[Math.floor(Math.random() * n.length)].url
                let buttons = [
                            {buttonId: `/animefact`, buttonText: {displayText: '☯ More ☯'}, type: 1}
                        ]
                        let buttonMessage = {
                            image: { url: images },
                            caption: `*-------「Anime Fact」-------*`,
                            footer: Zero.user.name,
                            buttons: buttons,
                            headerType: 4
                        }
                        Zero.sendMessage(m.chat, buttonMessage, { quoted: m })
                })
                }
                break
                case 'motivationalquote': case '/quote': case '/motivationalquote': case 'quote':{

                    let gis = require('g-i-s')
                    gis('motivational quote images', async (error, result) => {
                    n = result
                    images = n[Math.floor(Math.random() * n.length)].url
                    let buttons = [
                                {buttonId: `gimage ${'motivational quote images'}`, buttonText: {displayText: '☯ More ☯'}, type: 1}
                            ]
                            let buttonMessage = {
                                image: { url: images },
                                caption: `*㊗「MOTIVATIONAL QUOTES」㊗*`,
                                footer: Zero.user.name,
                                buttons: buttons,
                                headerType: 4
                            }
                            Zero.sendMessage(m.chat, buttonMessage, { quoted: m })
                    })
                    }
                    break
	        case 'tiktok': case 'tiktoknowm': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                Zero.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                Zero.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/musically', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await Zero.sendMessage(m.chat, buttonMessage, { quoted: m })
                Zero.sendMessage(m.chat, { audio: { url: anu.result.audio }, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await Zero.sendImage(m.chat, anu.result.img, `※ Title : ${anu.result.lagu}\n※ Album : ${anu.result.album}\n※ Singer : ${anu.result.penyanyi}\n※ Publish : ${anu.result.publish}\n※ Lirik :\n${anu.result.lirik.result}`, m)
                Zero.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await Zero.sendImage(m.chat, anu.result.thumb, `※ Title : ${anu.result.title}\n※ Url : ${isUrl(text)[0]}`)
                Zero.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                Zero.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await Zero.sendMessage(m.chat, buttonMessage, { quoted: m })
                Zero.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                Zero.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `※ Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindl': case 'pinterestdl': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                Zero.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'umma': case 'ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
※ Title : ${anu.title}
※ Author : ${anu.author.name}
※ Like : ${anu.like}
※ Caption : ${anu.caption}
※ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: Zero.user.name,
			buttons,
			headerType: 4
		    }
		    Zero.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        Zero.sendMessage(m.chat, { image: { url }, caption: `※ Title : ${anu.title}\n※ Author : ${anu.author.name}\n※ Like : ${anu.like}\n※ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		Zero.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		Zero.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		case 'hadits': case 'hadis': case 'hadist': {
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
tirmidzi
1 - 3891
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://fatiharridho.herokuapp.com/api/islamic/hadits?list=${args[0]}`)
		let { number, arab, id } = res.result.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		Zero.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await Zero.downloadAndSaveMediaMessage(qmsg)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                Zero.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                Zero.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                Zero.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                Zero.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await Zero.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, Zero.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                let room = Object.values(db.data.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await Zero.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await Zero.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete db.data.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                if (Object.values(db.data.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await Zero.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, Zero.user.name, m)
                    throw false
                }
                let room = Object.values(db.data.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await Zero.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, Zero.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await Zero.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, Zero.user.name, m)
                } else {
                    let id = + new Date
                    db.data.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await Zero.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, Zero.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                let romeo = Object.values(db.data.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await Zero.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await Zero.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete db.data.anonymous[romeo.id]
                let room = Object.values(db.data.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await Zero.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, Zero.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await Zero.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, Zero.user.name, m)
                } else {
                    let id = + new Date
                    db.data.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await Zero.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, Zero.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                Zero.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                Zero.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
                Zero.sendContact(m.chat, global.owner, m)
            }
            break
            case 'playstore': {
            if (!text) throw `Example : ${prefix + command} clash of clans`
            let res = await fetchJson(api('zenz', '/webzone/playstore', { query: text }, 'apikey'))
            let teks = `※ Playstore Search From : ${text}\n\n`
            for (let i of res.result) {
            teks += `※ Name : ${i.name}\n`
            teks += `※ Link : ${i.link}\n`
            teks += `※ Developer : ${i.developer}\n`
            teks += `※ Link Developer : ${i.link_dev}\n\n──────────────────────\n`
            }
            m.reply(teks)
            }
            break
            case 'gsmarena': {
            if (!text) throw `Example : ${prefix + command} samsung`
            let res = await fetchJson(api('zenz', '/webzone/gsmarena', { query: text }, 'apikey'))
            let { judul, rilis, thumb, ukuran, type, storage, display, inchi, pixel, videoPixel, ram, chipset, batrai, merek_batre, detail } = res.result
let capt = `※ Title: ${judul}
※ Realease: ${rilis}
※ Size: ${ukuran}
※ Type: ${type}
※ Storage: ${storage}
※ Display: ${display}
※ Inchi: ${inchi}
※ Pixel: ${pixel}
※ Video Pixel: ${videoPixel}
※ Ram: ${ram}
※ Chipset: ${chipset}
※ Battery: ${batrai}
※ Battery Brand: ${merek_batre}
※ Detail: ${detail}`
            Zero.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'jadwalbioskop': {
            if (!text) throw `Example: ${prefix + command} jakarta`
            let res = await fetchJson(api('zenz', '/webzone/jadwalbioskop', { kota: text }, 'apikey'))
            let capt = `Jadwal Bioskop From : ${text}\n\n`
            for (let i of res.result){
            capt += `※ Title: ${i.title}\n`
            capt += `※ Thumbnail: ${i.thumb}\n`
            capt += `※ Url: ${i.url}\n\n──────────────────────\n`
            }
            Zero.sendImage(m.chat, res.result[0].thumb, capt, m)
            }
            break
            case 'nowplayingbioskop': {
            let res = await fetchJson(api('zenz', '/webzone/nowplayingbioskop', {}, 'apikey'))
            let capt = `Now Playing Bioskop\n\n`
            for (let i of res.result){
            capt += `※ Title: ${i.title}\n`
            capt += `※ Url: ${i.url}\n`
            capt += `※ Img Url: ${i.img}\n\n──────────────────────\n`
            }
            Zero.sendImage(m.chat, res.result[0].img, capt, m)
            }
            break
            case 'aminio': {
            if (!text) throw `Example: ${prefix + command} free fire`
            let res = await fetchJson(api('zenz', '/webzone/amino', { query: text }, 'apikey'))
            let capt = `Aminio Search From : ${text}\n\n`
            for (let i of res.result){
            capt += `※ Community: ${i.community}\n`
            capt += `※ Community Link: ${i.community_link}\n`
            capt += `※ Thumbnail: ${i.community_thumb}\n`
            capt += `※ Description: ${i.community_desc}\n`
            capt += `※ Member Count: ${i.member_count}\n\n──────────────────────\n`
            }
            Zero.sendImage(m.chat, 'https://'+res.result[0].community_thumb, capt, m)
            }
            break
            case 'wattpad': {
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/wattpad', { query: text }, 'apikey'))
            let { judul, dibaca, divote, bab, waktu, url, thumb, description } = res.result[0]
            let capt = `Wattpad From ${text}\n\n`
            capt += `※ Judul: ${judul}\n`
            capt += `※ Dibaca: ${dibaca}\n`
            capt += `※ Divote: ${divote}\n`
            capt += `※ Bab: ${bab}\n`
            capt += `※ Waktu: ${waktu}\n`
            capt += `※ Url: ${url}\n`
            capt += `※ Deskripsi: ${description}`
            Zero.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'webtoons': {
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/webtoons', { query: text }, 'apikey'))
            let capt = `Webtoons Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `※ Judul: ${i.judul}\n`
            capt += `※ Like: ${i.like}\n`
            capt += `※ Creator: ${i.creator}\n`
            capt += `※ Genre: ${i.genre}\n`
            capt += `※ Url: ${i.url}\n\n──────────────────────\n`
            }
            m.reply(capt)
            }
            break
            case 'drakor': {
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/drakor', { query: text }, 'apikey'))
            let capt = `Drakor Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `※ Judul: ${i.judul}\n`
            capt += `※ Years: ${i.years}\n`
            capt += `※ Genre: ${i.genre}\n`
            capt += `※ Url: ${i.url}\n`
            capt += `※ Thumbnail Url: ${i.thumbnail}\n\n──────────────────────\n`
            }
            Zero.sendImage(m.chat, res.result[0].thumbnail, capt, m)
            }
            break
            case 'setmenu': {
            if (!isCreator) throw mess.owner
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateLocation = false
                m.reply(mess.success)
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateLocation = false
                m.reply(mess.success)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                setbot.templateLocation = false
                m.reply(mess.success)
                } else if (args[0] === 'templateMessage'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = true
                setbot.templateLocation = false
                m.reply(mess.success)
                } else if (args[0] === 'templateLocation'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateLocation = true
                m.reply(mess.success)
                } else {
                let sections = [
                {
                title: "CHANGE MENU BOT",
                rows: [
                {title: "Template Image", rowId: `setmenu templateImage`, description: `Change menu bot to Template Image`},
                {title: "Template Video", rowId: `setmenu templateVideo`, description: `Change menu bot to Template Video`},
                {title: "Template Gif", rowId: `setmenu templateGif`, description: `Change menu bot to Template Gif`},
                {title: "Template Message", rowId: `setmenu templateMessage`, description: `Change menu bot to Template Message`},
                {title: "Template Location", rowId: `setmenu templateLocation`, description: `Change menu bot to Template Location`}
                ]
                },
                ]
                Zero.sendListMsg(m.chat, `Please select the menu you want to change!`, Zero.user.name, `Hello Owner !`, `Click Here`, sections, m)
                }
            }
            break
            case 'list': case 'menu': case 'help': case '?': {
                anu = `
┌──⭓ *Group Menu*
│※ ${prefix}𝙡𝙞𝙣𝙠𝙜𝙧𝙤𝙪𝙥
│※ ${prefix}𝙚𝙥𝙝𝙚𝙢𝙚𝙧𝙖𝙡 [𝙤𝙥𝙩𝙞𝙤𝙣]
│※ ${prefix}𝙨𝙚𝙩𝙥𝙥𝙜𝙘 [𝙞𝙢𝙖𝙜𝙚]
│※ ${prefix}𝙨𝙚𝙩𝙣𝙖𝙢𝙚 [𝙩𝙚𝙭𝙩]
│※ ${prefix}𝙨𝙚𝙩𝙙𝙚𝙨𝙘 [𝙩𝙚𝙭𝙩]
│※ ${prefix}𝙜𝙧𝙤𝙪𝙥 [𝙤𝙥𝙩𝙞𝙤𝙣]
│※ ${prefix}𝙚𝙙𝙞𝙩𝙞𝙣𝙛𝙤 [𝙤𝙥𝙩𝙞𝙤𝙣]
│※ ${prefix}𝙖𝙙𝙙 @𝙪𝙨𝙚𝙧
│※ ${prefix}𝙠𝙞𝙘𝙠 @𝙪𝙨𝙚𝙧
│※ ${prefix}𝙝𝙞𝙙𝙚𝙩𝙖𝙜 [𝙩𝙚𝙭𝙩]
│※ ${prefix}𝙩𝙖𝙜𝙖𝙡𝙡 [𝙩𝙚𝙭𝙩]
│※ ${prefix}𝙩𝙤𝙩𝙖𝙜 [𝙧𝙚𝙥𝙡𝙮]
│※ ${prefix}𝙖𝙣𝙩𝙞𝙡𝙞𝙣𝙠 [𝙤𝙣/𝙤𝙛𝙛]
│※ ${prefix}𝙢𝙪𝙩𝙚 [𝙤𝙣/𝙤𝙛𝙛]
│※ ${prefix}𝙥𝙧𝙤𝙢𝙤𝙩𝙚 @𝙪𝙨𝙚𝙧
│※ ${prefix}𝙙𝙚𝙢𝙤𝙩𝙚 @𝙪𝙨𝙚𝙧
│※ ${prefix}𝙫𝙤𝙩𝙚 [𝙩𝙚𝙭𝙩]
│※ ${prefix}𝙙𝙚𝙫𝙤𝙩𝙚
│※ ${prefix}𝙪𝙥𝙫𝙤𝙩𝙚
│※ ${prefix}𝙘𝙚𝙠𝙫𝙤𝙩𝙚
│※ ${prefix}𝙝𝙖𝙥𝙪𝙨𝙫𝙤𝙩𝙚
│
└───────⭓

┌──⭓ 「𝙒𝙚𝙗𝙯𝙤𝙣𝙚 𝙈𝙚𝙣𝙪」
│
│※ ${prefix}𝙥𝙡𝙖𝙮𝙨𝙩𝙤𝙧𝙚
│※ ${prefix}𝙜𝙨𝙢𝙖𝙧𝙚𝙣𝙖
│※ ${prefix}𝙟𝙖𝙙𝙬𝙖𝙡𝙗𝙞𝙤𝙨𝙠𝙤𝙥
│※ ${prefix}𝙣𝙤𝙬𝙥𝙡𝙖𝙮𝙞𝙣𝙜𝙗𝙞𝙤𝙨𝙠𝙤𝙥
│※ ${prefix}𝙖𝙢𝙞𝙣𝙞𝙤
│※ ${prefix}𝙬𝙖𝙩𝙩𝙥𝙖𝙙
│※ ${prefix}𝙬𝙚𝙗𝙩𝙤𝙤𝙣𝙨
│※ ${prefix}𝙙𝙧𝙖𝙠𝙤𝙧
│
└───────⭓
┌──⭓「𝙈𝘼𝙄𝙉 𝙈𝙀𝙉𝙐」
│※ ${prefix}𝙖𝙡𝙞𝙫𝙚
│※ ${prefix}𝙨𝙘𝙧𝙞𝙥𝙩
│※ ${prefix}𝙨𝙥𝙚𝙚𝙙𝙩𝙚𝙨𝙩
│※ ${prefix}𝙥𝙞𝙣𝙜
│※ ${prefix}𝙤𝙬𝙣𝙚𝙧
│※ ${prefix}𝙢𝙚𝙣𝙪
│※ ${prefix}𝙙𝙚𝙡𝙚𝙩𝙚
│※ ${prefix}𝙘𝙝𝙖𝙩𝙞𝙣𝙛𝙤
│※ ${prefix}𝙦𝙪𝙤𝙩𝙚𝙙
│※ ${prefix}𝙡𝙞𝙨𝙩𝙥𝙘
│※ ${prefix}𝙡𝙞𝙨𝙩𝙜𝙘
│※ ${prefix}𝙙𝙤𝙣𝙖𝙩𝙚
│※ ${prefix}/𝙬𝙖𝙞𝙛𝙪
│※ ${prefix}/𝙢𝙚𝙢𝙚
│※ ${prefix}𝙧𝙚𝙥𝙤𝙧𝙩 [𝙗𝙪𝙜]
└───────⭓

┌──⭓「 𝙊𝙒𝙉𝙀𝙍 」
│※ ${prefix}𝙘𝙝𝙖𝙩 [𝙤𝙥𝙩𝙞𝙤𝙣]
│※ ${prefix}𝙟𝙤𝙞𝙣 [𝙡𝙞𝙣𝙠]
│※ ${prefix}𝙡𝙚𝙖𝙫𝙚
│※ ${prefix}𝙗𝙡𝙤𝙘𝙠 [𝙪𝙨𝙚𝙧]
│※ ${prefix}𝙪𝙣𝙗𝙡𝙤𝙘𝙠 [𝙪𝙨𝙚𝙧]
│※ ${prefix}𝙗𝙘𝙜𝙧𝙤𝙪𝙥 [𝙩𝙚𝙭𝙩]
│※ ${prefix}𝙗𝙘𝙖𝙡𝙡 [𝙩𝙚𝙭𝙩]
│※ ${prefix}𝙨𝙚𝙩𝙥𝙥𝙗𝙤𝙩 [𝙞𝙢𝙖𝙜𝙚]
│※ ${prefix}𝙨𝙚𝙩𝙚𝙭𝙞𝙛
└───────⭓

┌──⭓「 𝙂𝙍𝙊𝙐𝙋 」       
│※ ${prefix}𝙜𝙧𝙤𝙪𝙥𝙡𝙞𝙣𝙠
│※ ${prefix}𝙚𝙥𝙝𝙚𝙢𝙚𝙧𝙖𝙡 [𝙤𝙥𝙩𝙞𝙤𝙣]
│※ ${prefix}𝙨𝙚𝙩𝙜𝙘𝙥𝙥 [𝙞𝙢𝙖𝙜𝙚]
│※ ${prefix}𝙨𝙚𝙩𝙣𝙖𝙢𝙚 [𝙩𝙚𝙭𝙩]
│※ ${prefix}𝙨𝙚𝙩𝙙𝙚𝙨𝙘 [𝙩𝙚𝙭𝙩]
│※ ${prefix}𝙜𝙧𝙤𝙪𝙥 [𝙩𝙚𝙭𝙩]
│※ ${prefix}𝙚𝙙𝙞𝙩𝙞𝙣𝙛𝙤 [𝙤𝙥𝙩𝙞𝙤𝙣]
│※ ${prefix}𝙖𝙙𝙙 [𝙪𝙨𝙚𝙧]
│※ ${prefix}𝙠𝙞𝙘𝙠 [𝙧𝙚𝙥𝙡𝙮/𝙩𝙖𝙜]
│※ ${prefix}𝙝𝙞𝙙𝙚𝙩𝙖𝙜 [𝙩𝙚𝙭𝙩]
│※ ${prefix}𝙩𝙖𝙜𝙖𝙡𝙡 [𝙩𝙚𝙭𝙩]
│※ ${prefix}𝙖𝙣𝙩𝙞𝙡𝙞𝙣𝙠 [𝙤𝙣/𝙤𝙛𝙛]
│※ ${prefix}𝙢𝙪𝙩𝙚 [𝙤𝙣/𝙤𝙛𝙛]
│※ ${prefix}𝙥𝙧𝙤𝙢𝙤𝙩𝙚 [𝙧𝙚𝙥𝙡𝙮/𝙩𝙖𝙜]
│※ ${prefix}𝙙𝙚𝙢𝙤𝙩𝙚 [𝙧𝙚𝙥𝙡𝙮/𝙩𝙖𝙜]
│※ ${prefix}𝙫𝙤𝙩𝙚
│※ ${prefix}𝙙𝙚𝙫𝙤𝙩𝙚
│※ ${prefix}𝙪𝙥𝙫𝙤𝙩𝙚
│※ ${prefix}𝙘𝙝𝙚𝙘𝙠𝙫𝙤𝙩𝙚
│※ ${prefix}𝙙𝙚𝙡𝙫𝙤𝙩𝙚
└───────⭓

┌──⭓「𝙋𝙃𝙊𝙏𝙊𝙊𝙓𝙔 𝙈𝙀𝙉𝙐」
│※ 𝙨𝙞𝙡𝙠 -𝙩𝙚𝙭𝙩-
│※ 3𝙙𝙣𝙖𝙩𝙪𝙧𝙚 -𝙩𝙚𝙭𝙩-
│※ 𝙗𝙚𝙫𝙚𝙡 -𝙩𝙚𝙭𝙩-
│※ 𝙗𝙞𝙧𝙩𝙝𝙙𝙖𝙮𝙘𝙖𝙠𝙚 -𝙩𝙚𝙭𝙩-
│※ 𝙗𝙪𝙧𝙣𝙥𝙖𝙥𝙚𝙧 -𝙩𝙚𝙭𝙩-
│※ 𝙘𝙤𝙛𝙛𝙚𝙚 -𝙩𝙚𝙭𝙩-
│※ 𝙘𝙤𝙛𝙛𝙚𝙚-𝙝𝙚𝙖𝙧𝙩𝙘𝙪𝙥 -𝙩𝙚𝙭𝙩-
│※ 𝙚𝙢𝙗𝙧𝙤𝙞𝙙𝙚𝙧𝙮𝙩𝙚𝙭𝙩 -𝙩𝙚𝙭𝙩-
│※ 𝙛𝙡𝙖𝙢𝙞𝙣𝙜 -𝙩𝙚𝙭𝙩-
│※ 𝙛𝙡𝙤𝙬𝙚𝙧𝙩𝙮𝙥𝙤 -𝙩𝙚𝙭𝙩-
│※ 𝙛𝙪𝙣𝙣𝙮𝙘𝙪𝙥 -𝙩𝙚𝙭𝙩-
│※ 𝙛𝙪𝙧 -𝙩𝙚𝙭𝙩-
│※ 𝙜𝙚𝙧𝙗𝙖𝙣𝙜 -𝙩𝙚𝙭𝙩-
│※ 𝙜𝙡𝙤𝙬𝙧𝙖𝙞𝙣𝙗𝙤𝙬 -𝙩𝙚𝙭𝙩-
│※ 𝙜𝙧𝙖𝙙𝙞𝙚𝙣𝙩𝙖𝙫𝙖𝙩𝙖𝙧 -𝙩𝙚𝙭𝙩-
│※ 𝙜𝙧𝙖𝙛𝙛𝙞𝙩𝙞𝙩𝙚𝙭𝙩 -𝙩𝙚𝙭𝙩-
│※ 𝙝𝙖𝙧𝙧𝙮𝙥𝙤𝙩𝙩𝙚𝙧 -𝙩𝙚𝙭𝙩-
│※ 𝙡𝙤𝙫𝙚𝙢𝙚𝙨𝙨𝙖𝙜𝙚 -𝙩𝙚𝙭𝙩-
│※ 𝙣𝙚𝙤𝙣𝙡𝙞𝙜𝙝𝙩 -𝙩𝙚𝙭𝙩-
│※ 𝙨𝙬𝙚𝙚𝙩𝙘𝙖𝙣𝙙𝙮 -𝙩𝙚𝙭𝙩-
│※ 𝙨𝙪𝙢𝙢𝙚𝙧𝙩𝙚𝙭𝙩 -𝙩𝙚𝙭𝙩-
│※ 𝙬𝙤𝙤𝙙𝙝𝙚𝙖𝙧𝙩 -𝙩𝙚𝙭𝙩-
│※ 𝙮𝙚𝙡𝙡𝙤𝙬𝙧𝙤𝙨𝙚𝙨 -𝙩𝙚𝙭𝙩-
│※ 𝙬𝙤𝙡𝙛𝙢𝙚𝙩𝙖𝙡 -𝙩𝙚𝙭𝙩-
│※ 𝙪𝙣𝙙𝙚𝙧𝙬𝙖𝙩𝙚𝙧𝙤𝙘𝙚𝙖𝙣 -𝙩𝙚𝙭𝙩-
└───────⭓
┌──⭓
│※ ═✪「 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍 」☯︎
│※ ${prefix}𝙮𝙩𝙢𝙥3 [𝙪𝙧𝙡|𝙦𝙪𝙖𝙡𝙞𝙩𝙮]
│※ ${prefix}𝙮𝙩𝙢𝙥4 [𝙪𝙧𝙡|𝙦𝙪𝙖𝙡𝙞𝙩𝙮]
│※ ${prefix}𝙜𝙚𝙩𝙢𝙪𝙨𝙞𝙘 [𝙮𝙩 𝙡𝙞𝙣𝙠]
│※ ${prefix}𝙜𝙚𝙩𝙫𝙞𝙙𝙚𝙤 [𝙮𝙩 𝙡𝙞𝙣𝙠]
│※ ${prefix}𝙪𝙢𝙢𝙖 [𝙦𝙪𝙚𝙧𝙮]
│※ ${prefix}𝙟𝙤𝙤𝙭 [𝙦𝙪𝙚𝙧𝙮]
│※ ${prefix}𝙨𝙤𝙪𝙣𝙙𝙘𝙡𝙤𝙪𝙙 [𝙪𝙧𝙡]
└───────⭓

┌──⭓「 𝙎𝙀𝘼𝙍𝘾𝙃 𝙈𝙀𝙉𝙐 」
│※ ${prefix}𝙥𝙡𝙖𝙮 [𝙦𝙪𝙚𝙧𝙮]
│※ ${prefix}𝙨𝙤𝙣𝙜 [𝙦𝙪𝙚𝙧𝙮]
│※ ${prefix}𝙮𝙩𝙨 [𝙦𝙪𝙚𝙧𝙮]
│※ ${prefix}𝙜𝙤𝙤𝙜𝙡𝙚 [𝙦𝙪𝙚𝙧𝙮]
│※ ${prefix}𝙜𝙞𝙢𝙖𝙜𝙚 [𝙦𝙪𝙚𝙧𝙮]
│※ ${prefix}𝙥𝙞𝙣𝙩𝙚𝙧𝙚𝙨𝙩 [𝙦𝙪𝙚𝙧𝙮]
│※ ${prefix}𝙬𝙖𝙡𝙡𝙥𝙖𝙥𝙚𝙧 [𝙦𝙪𝙚𝙧𝙮]
│※ ${prefix}𝙬𝙞𝙠𝙞𝙢𝙚𝙙𝙞𝙖 [𝙦𝙪𝙚𝙧𝙮]
│※ ${prefix}𝙮𝙩𝙨𝙚𝙖𝙧𝙘𝙝 [𝙦𝙪𝙚𝙧𝙮]
│※ ${prefix}𝙧𝙞𝙣𝙜𝙩𝙤𝙣𝙚 [𝙦𝙪𝙚𝙧𝙮]
│※ ${prefix}𝙬𝙚𝙗𝙩𝙤𝙤𝙣 [𝙦𝙪𝙚𝙧𝙮]
└───────⭓

┌──⭓「 𝙍𝘼𝙉𝘿𝙊𝙈 」
│※ ${prefix}𝙘𝙤𝙛𝙛𝙚𝙚𝙞𝙢𝙜
│※ ${prefix}𝙘𝙤𝙪𝙥𝙡𝙚𝙥𝙥
│※ ${prefix}/𝙦𝙪𝙤𝙩𝙚
└───────⭓

┌──⭓「 𝙍𝘼𝙉𝘿𝙊𝙈 𝘼𝙉𝙄𝙈𝙀 」
│※ ${prefix}/𝙬𝙖𝙞𝙛𝙪
│※ ${prefix}/𝙖𝙣𝙞𝙢𝙚𝙦𝙪𝙤𝙩𝙚
│※ ${prefix}/𝙖𝙣𝙞𝙢𝙚𝙛𝙖𝙘𝙩
└───────⭓
┌──⭓「 𝙁𝙐𝙉 」 
│※ ${prefix}𝙝𝙤𝙬 [𝙩𝙚𝙭𝙩
│※ ${prefix}𝙬𝙝𝙚𝙣 [𝙩𝙚𝙭𝙩]
│※ ${prefix}𝙞𝙨 [𝙩𝙚𝙭𝙩]
│※ ${prefix}𝙬𝙝𝙖𝙩 [𝙩𝙚𝙭𝙩]
│※ ${prefix}𝙘𝙖𝙣 [𝙩𝙚𝙭𝙩]
│※ ${prefix}𝙧𝙖𝙩𝙚 [𝙩𝙚𝙭𝙩]
│※ ${prefix}𝙬𝙖𝙣𝙜𝙮 [𝙩𝙚𝙭𝙩]
│※ ${prefix}𝙗𝙚𝙖𝙪𝙩𝙞𝙛𝙪𝙡𝙘𝙝𝙚𝙘𝙠 [𝙩𝙖𝙜]
│※ ${prefix}𝙖𝙬𝙚𝙨𝙤𝙢𝙚𝙘𝙝𝙚𝙘𝙠 [𝙩𝙖𝙜]
│※ ${prefix}𝙥𝙧𝙚𝙩𝙩𝙮𝙘𝙝𝙚𝙘𝙠 [𝙩𝙖𝙜]
│※ ${prefix}𝙘𝙪𝙩𝙚𝙘𝙝𝙚𝙘𝙠 [𝙩𝙖𝙜]
│※ ${prefix}𝙪𝙜𝙡𝙮𝙘𝙝𝙚𝙘𝙠 [𝙩𝙖𝙜]
│※ ${prefix}𝙘𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧𝙘𝙝𝙚𝙘𝙠 [𝙩𝙖𝙜]
│※ ${prefix}𝙡𝙤𝙫𝙚𝙡𝙮𝙘𝙝𝙚𝙘𝙠 [𝙩𝙖𝙜]
│※ ${prefix}𝙘𝙤𝙪𝙥𝙡𝙚
│※ ${prefix}𝙢𝙮𝙨𝙤𝙪𝙡𝙢𝙖𝙩𝙚
│※ ${prefix}𝙝𝙤𝙩
│※ ${prefix}𝙠𝙞𝙣𝙙
│※ ${prefix}𝙞𝙙𝙞𝙤𝙩
│※ ${prefix}𝙝𝙖𝙣𝙙𝙨𝙤𝙢𝙚
│※ ${prefix}𝙗𝙚𝙖𝙪𝙩𝙞𝙛𝙪𝙡
│※ ${prefix}𝙘𝙪𝙩𝙚
│※ ${prefix}𝙥𝙧𝙚𝙩𝙩𝙮
│※ ${prefix}𝙣𝙤𝙤𝙗
│※ ${prefix}𝙛𝙤𝙤𝙡𝙞𝙨𝙝
│※ ${prefix}𝙣𝙚𝙧𝙙
│※ ${prefix}𝙨𝙢𝙖𝙧𝙩
│※ ${prefix}𝙨𝙩𝙪𝙗𝙗𝙡𝙚
│※ ${prefix}𝙬𝙞𝙗𝙪
│※ ${prefix}𝙩𝙞𝙘𝙩𝙖𝙘𝙩𝙤𝙚
│※ ${prefix}𝙙𝙚𝙡𝙩𝙩𝙩
│※ ${prefix}𝙜𝙪𝙚𝙨𝙨 [𝙤𝙥𝙩𝙞𝙤𝙣]
│※ ${prefix}𝙢𝙖𝙩𝙝 [𝙢𝙤𝙙𝙚]
│※ ${prefix}𝙨𝙪𝙞𝙩𝙥𝙫𝙥 [𝙩𝙖𝙜]

┌──⭓「 𝙋𝙃𝙊𝙏𝙊𝙊𝙓𝙔 𝙈𝙀𝙉𝙐 」	        
│※ ${prefix}𝙡𝙤𝙜𝙤 [𝙩𝙭𝙩]
│※ ${prefix}𝙡𝙤𝙜𝙤2 [𝙩𝙭𝙩]
│※ ${prefix}𝙡𝙤𝙜𝙤3 [𝙩𝙭𝙩]
│※ ${prefix}𝙡𝙤𝙜𝙤𝙜𝙖𝙢𝙞𝙣𝙜 [𝙩𝙭𝙩]
│※ ${prefix}𝙡𝙤𝙜𝙤𝙜𝙞𝙧𝙡 [𝙩𝙭𝙩]
│※ ${prefix}𝙡𝙤𝙜𝙤𝙜𝙞𝙧𝙡 [𝙩𝙭𝙩]
│※ ${prefix}𝙨𝙥𝙞𝙙𝙚𝙧𝙡𝙤𝙜𝙤 [𝙩𝙭𝙩]
│※ ${prefix}𝙛𝙧𝙚𝙚𝙛𝙞𝙧𝙚 [𝙩𝙭𝙩]
│※ ${prefix}𝙘𝙧𝙤𝙨𝙨𝙛𝙞𝙧𝙚 [𝙩𝙭𝙩]
│※ ${prefix}𝙜𝙖𝙡𝙖𝙭𝙮 [𝙩𝙭𝙩]
│※ ${prefix}𝙜𝙡𝙖𝙨𝙨 [𝙩𝙭𝙩]
│※ ${prefix}𝙣𝙚𝙤𝙣 [𝙩𝙭𝙩]
│※ ${prefix}𝙗𝙚𝙖𝙘𝙝 [𝙩𝙭𝙩]
│※ ${prefix}𝙨𝙥𝙖𝙧𝙠𝙡𝙞𝙣𝙜 [𝙩𝙭𝙩]
│※ ${prefix}𝙖𝙬𝙖𝙣 [𝙩𝙭𝙩]
│※ ${prefix}𝙛𝙡𝙤𝙬𝙚𝙧 [𝙩𝙭𝙩]
│※ ${prefix}𝙗𝙤𝙝𝙡𝙖𝙢 [𝙩𝙭𝙩]
│※ ${prefix}𝙠𝙖𝙡𝙞𝙜𝙖𝙛𝙞 [𝙩𝙭𝙩]
│※ ${prefix}𝙘𝙤𝙠𝙞𝙖𝙩 [𝙩𝙭𝙩]
│※ ${prefix}𝙦𝙪𝙤𝙩𝙚𝙨 [𝙩𝙭𝙩]
│※ ${prefix}𝙜𝙧𝙖𝙛𝙞𝙩𝙮 [𝙩𝙭𝙩]
│※ ${prefix}𝙜𝙧𝙖𝙛𝙞𝙩𝙮3𝙙 [𝙩𝙭𝙩]
│※ ${prefix}𝙏𝙮𝙥𝙤𝙜𝙧𝙖𝙥𝙝𝙮 [𝙩𝙭𝙩]
│※ ${prefix}𝙈𝙖𝙧𝙢𝙚𝙧 [𝙩𝙭𝙩]
│※ ${prefix}𝙋𝙧𝙤𝙮𝙚𝙠𝙩𝙤𝙧 [𝙩𝙭𝙩]
│※ ${prefix}𝙌𝙪𝙤𝙩𝙚𝙨𝙤𝙣𝙡𝙞𝙣𝙚 [𝙩𝙭𝙩]
│※ ${prefix}𝙁𝙡𝙖𝙨𝙝𝙡𝙞𝙜𝙝𝙩 [𝙩𝙭𝙩]
│※ ${prefix}𝙔𝙖𝙨𝙪𝙤𝙡𝙤𝙜𝙤[𝙩𝙭𝙩]
│※ ${prefix}𝙎𝙩𝙖𝙧𝙣𝙞𝙜𝙝𝙩2 [𝙩𝙭𝙩]
└───────⭓

┌──⭓「  𝙏𝙀𝙓𝙏 𝙈𝘼𝙆𝙀𝙍 」
│※ ${prefix}𝙘𝙖𝙣𝙙𝙮
│※ ${prefix}𝙗𝙡𝙖𝙘𝙠𝙥𝙞𝙣𝙠𝙣𝙚𝙤𝙣
│※ ${prefix}𝙙𝙚𝙚𝙥𝙨𝙚𝙖
│※ ${prefix}𝙨𝙘𝙞𝙛𝙞
│※ ${prefix}𝙛𝙞𝙘𝙩𝙞𝙤𝙣
│※ ${prefix}𝙗𝙚𝙧𝙧𝙮
│※ ${prefix}𝙛𝙧𝙪𝙞𝙩𝙟𝙪𝙞𝙘𝙚
│※ ${prefix}𝙗𝙞𝙨𝙘𝙪𝙞𝙩
│※ ${prefix}𝙬𝙤𝙤𝙙
│※ ${prefix}𝙘𝙝𝙤𝙘𝙤𝙡𝙖𝙩𝙚
│※ ${prefix}𝙢𝙖𝙩𝙧𝙞𝙭
│※ ${prefix}𝙗𝙡𝙤𝙤𝙙
│※ ${prefix}𝙝𝙖𝙡𝙡𝙤𝙬𝙚𝙚𝙣
│※ ${prefix}𝙬𝙞𝙘𝙠𝙚𝙧
│※ ${prefix}𝙙𝙖𝙧𝙠𝙜𝙤𝙡𝙙
│※ ${prefix}𝙛𝙞𝙧𝙚𝙬𝙤𝙧𝙠
│※ ${prefix}𝙨𝙠𝙚𝙡𝙚𝙩𝙤𝙣
│※ ${prefix}𝙨𝙖𝙣𝙙
│※ ${prefix}𝙜𝙡𝙪𝙚
│※ ${prefix}𝙡𝙚𝙖𝙫𝙚𝙨
│※ ${prefix}𝙢𝙖𝙜𝙢𝙖
│※ ${prefix}𝙡𝙖𝙫𝙖
│※ ${prefix}𝙧𝙤𝙘𝙠
│※ ${prefix}𝙗𝙡𝙤𝙤𝙙𝙜𝙡𝙖𝙨
│※ ${prefix}𝙪𝙣𝙙𝙚𝙧𝙬𝙖𝙩𝙚𝙧
│※ ${prefix}𝙩𝙚𝙭𝙩𝙢𝙖𝙠𝙚𝙧
│※ ${prefix}𝙝𝙤𝙣𝙚𝙮
│※ ${prefix}𝙞𝙘𝙚
│※ ${prefix}𝙬𝙖𝙩𝙚𝙧𝙘𝙤𝙡𝙤𝙧
│※ ${prefix}𝙢𝙪𝙡𝙩𝙞𝙘𝙤𝙡𝙤𝙧
│※ ${prefix}𝙨𝙣𝙤𝙬
│※ ${prefix}𝙝𝙖𝙧𝙧𝙮𝙥𝙤𝙩
│※ ${prefix}𝙝𝙖𝙧𝙧𝙮𝙥𝙤𝙩𝙩𝙚𝙧
│※ ${prefix}𝙗𝙧𝙤𝙠𝙚𝙣𝙜𝙡𝙖𝙨𝙨
│※ ${prefix}𝙬𝙖𝙩𝙚𝙧𝙥𝙞𝙥𝙚
│※ ${prefix}𝙨𝙥𝙤𝙤𝙠𝙮
│※ ${prefix}𝙘𝙞𝙧𝙘𝙪𝙞𝙩
│※ ${prefix}𝙢𝙚𝙩𝙖𝙡𝙡𝙞𝙘
│※ ${prefix}𝙙𝙚𝙢𝙤𝙣
│※ ${prefix}𝙨𝙥𝙖𝙧𝙠𝙡𝙚𝙘𝙝𝙧𝙞𝙨𝙩𝙢𝙖𝙨
│※ ${prefix}𝙘𝙝𝙧𝙞𝙨𝙩𝙢𝙖𝙨
│※ ${prefix}3𝙙𝙘𝙝𝙧𝙞𝙨𝙩𝙢𝙖𝙨
│※ ${prefix}3𝙙𝙗𝙤𝙭
│※ ${prefix}𝙬𝙖𝙩𝙚𝙧𝙙𝙧𝙤𝙥
│※ ${prefix}𝙡𝙞𝙤𝙣2
│※ ${prefix}𝙥𝙖𝙥𝙚𝙧𝙘𝙪𝙩
│※ ${prefix}𝙩𝙧𝙖𝙣𝙨𝙛𝙤𝙧𝙢𝙚𝙧
│※ ${prefix}𝙣𝙚𝙤𝙣𝙙𝙚𝙫𝙞𝙡
│※ ${prefix}3𝙙𝙖𝙫𝙚𝙣𝙜𝙚𝙧𝙨
│※ ${prefix}3𝙙𝙨𝙩𝙤𝙣𝙚
│※ ${prefix}3𝙙𝙨𝙩𝙤𝙣𝙚2
│※ ${prefix}𝙨𝙪𝙢𝙢𝙚𝙧𝙩𝙞𝙢𝙚
│※ ${prefix}𝙩𝙝𝙪𝙣𝙙𝙚𝙧
│※ ${prefix}𝙬𝙞𝙣𝙙𝙤𝙬
│※ ${prefix}𝙜𝙧𝙖𝙛𝙛𝙞𝙩𝙞
│※ ${prefix}𝙜𝙧𝙖𝙛𝙛𝙞𝙩𝙞𝙗𝙞𝙠𝙚
│※ ${prefix}𝙥𝙤𝙧𝙣𝙝𝙪𝙗
│※ ${prefix}𝙜𝙡𝙞𝙩𝙘𝙝
│※ ${prefix}𝙗𝙡𝙖𝙘𝙠𝙥𝙞𝙣𝙠
│※ ${prefix}𝙜𝙡𝙞𝙩𝙘𝙝2
│※ ${prefix}𝙜𝙡𝙞𝙩𝙘𝙝3
│※ ${prefix}3𝙙𝙨𝙥𝙖𝙘𝙚
│※ ${prefix}𝙡𝙞𝙤𝙣
│※ ${prefix}3𝙙𝙣𝙚𝙤𝙣
│※ ${prefix}𝙜𝙧𝙚𝙚𝙣𝙣𝙚𝙤𝙣
│※ ${prefix}𝙗𝙤𝙠𝙚𝙝
│※ ${prefix}𝙝𝙤𝙡𝙤𝙜𝙧𝙖𝙥𝙝𝙞𝙘
│※ ${prefix}𝙗𝙚𝙖𝙧
│※ ${prefix}𝙬𝙤𝙡𝙛
│※ ${prefix}𝙟𝙤𝙠𝙚𝙧
│※ ${prefix}𝙙𝙧𝙤𝙥𝙬𝙖𝙩𝙚𝙧
│※ ${prefix}𝙙𝙧𝙤𝙥𝙬𝙖𝙩𝙚𝙧2
│※ ${prefix}𝙩𝙝𝙚𝙬𝙖𝙡𝙡
│※ ${prefix}𝙣𝙚𝙤𝙣𝙡𝙞𝙜𝙝𝙩
│※ ${prefix}𝙣𝙖𝙩𝙪𝙧𝙖𝙡
│※ ${prefix}𝙘𝙖𝙧𝙗𝙤𝙣
│※ ${prefix}𝙥𝙚𝙣𝙘𝙞𝙡
│※ ${prefix}𝙗𝙡𝙖𝙘𝙠𝙥𝙞𝙣𝙠2
│※ ${prefix}𝙣𝙚𝙤𝙣
│※ ${prefix}𝙣𝙚𝙤𝙣𝙡𝙞𝙜𝙝𝙩2
│※ ${prefix}𝙩𝙤𝙭𝙞𝙘
│※ ${prefix}𝙨𝙩𝙧𝙖𝙬𝙗𝙚𝙧𝙧𝙮
│※ ${prefix}𝙙𝙞𝙨𝙘𝙤𝙫𝙚𝙧𝙮
│※ ${prefix}1917
│※ ${prefix}𝙨𝙘𝙞_𝙛𝙞
│※ ${prefix}𝙖𝙣𝙘𝙞𝙚𝙣𝙩
│※ ${prefix}𝙛𝙖𝙗𝙧𝙞𝙘
│※ ${prefix}𝙝𝙤𝙤𝙧𝙧𝙤𝙧
│※ ${prefix}𝙬𝙝𝙞𝙩𝙚𝙗𝙚𝙖𝙧
│※ ${prefix}𝙟𝙪𝙞𝙘𝙚
│※ ${prefix}𝙗𝙖𝙩𝙢𝙖𝙣
│※ ${prefix}𝙢𝙪𝙡𝙩𝙞𝙘𝙤𝙡𝙤𝙧
│※ ${prefix}𝙘𝙤𝙡𝙡𝙬𝙖𝙡𝙡
│※ ${prefix}𝙬𝙤𝙣𝙙𝙚𝙧𝙛𝙪𝙡
│※ ${prefix}𝙘𝙤𝙤𝙡
│※ ${prefix}𝙨𝙠𝙚𝙩𝙘𝙝
│※ ${prefix}𝙢𝙖𝙧𝙫𝙚𝙡
│※ ${prefix}𝙛𝙤𝙜𝙜𝙮
│※ ${prefix}𝙬𝙧𝙞𝙩𝙞𝙣𝙜
│※ ${prefix}𝙝𝙖𝙡𝙡𝙤𝙬𝙚𝙚𝙣𝙛𝙞𝙧𝙚
│※ ${prefix}𝙝𝙖𝙡𝙡𝙤𝙬𝙚𝙚𝙣
│※ ${prefix}𝙬𝙖𝙩𝙚𝙧𝙘𝙤𝙡𝙤𝙧
│※ ${prefix}𝙘𝙡𝙖𝙨𝙨𝙞𝙘
└───────⭓

┌──⭓「𝙋𝙃𝙊𝙏𝙊 𝙁𝙄𝙇𝙏𝙀𝙍 𝙈𝙀𝙉𝙐」 ☯︎
│※ 𝙖𝙣𝙜𝙞𝙚 [𝙍𝙚𝙥𝙡𝙮 𝙄𝙢𝙖𝙜𝙚]
│※ 𝙖𝙧𝙞𝙖 [𝙍𝙚𝙥𝙡𝙮 𝙄𝙢𝙖𝙜𝙚]
│※ 𝙖𝙩𝙩𝙞𝙘 [𝙍𝙚𝙥𝙡𝙮 𝙄𝙢𝙖𝙜𝙚]
│※ 𝙗𝙡𝙖𝙘𝙠𝙖𝙣𝙙𝙬𝙝𝙞𝙩𝙚 [𝙍𝙚𝙥𝙡𝙮 𝙄𝙢𝙖𝙜𝙚]
│※ 𝙘𝙝𝙤𝙧𝙢𝙚1977 [𝙍𝙚𝙥𝙡𝙮 𝙄𝙢𝙖𝙜𝙚]
│※ 𝙘𝙤𝙣𝙨𝙩𝙧𝙖𝙨𝙩𝙗𝙖𝙣𝙙𝙬 [𝙍𝙚𝙥𝙡𝙮 𝙄𝙢𝙖𝙜𝙚]
│※ 𝙘𝙧𝙚𝙖𝙢𝙮 [𝙍𝙚𝙥𝙡𝙮 𝙄𝙢𝙖𝙜𝙚]
│※ 𝙙𝙪𝙤𝙩𝙤𝙣𝙚 [𝙍𝙚𝙥𝙡𝙮 𝙄𝙢𝙖𝙜𝙚]
│※ 𝙚𝙫𝙖 [𝙍𝙚𝙥𝙡𝙮 𝙄𝙢𝙖𝙜𝙚]
│※ 𝙜𝙤𝙡𝙙𝙚𝙣𝙝𝙤𝙪𝙧 [𝙍𝙚𝙥𝙡𝙮 𝙄𝙢𝙖𝙜𝙚]
│※ 𝙝𝙖𝙣𝙖 [𝙍𝙚𝙥𝙡𝙮 𝙄𝙢𝙖𝙜𝙚]
│※ 𝙡𝙖𝙫𝙖𝙣𝙙𝙚𝙧 [𝙍𝙚𝙥𝙡𝙮 𝙄𝙢𝙖𝙜𝙚]
│※ 𝙡𝙚𝙢𝙤𝙣𝙖𝙣𝙙𝙚 [𝙍𝙚𝙥𝙡𝙮 𝙄𝙢𝙖𝙜𝙚]
│※ 𝙡𝙞𝙜𝙝𝙩𝙡𝙚𝙖𝙠 [𝙍𝙚𝙥𝙡𝙮 𝙄𝙢𝙖𝙜𝙚]
│※ 𝙡𝙞𝙨𝙖 [𝙍𝙚𝙥𝙡𝙮 𝙄𝙢𝙖𝙜𝙚]
│※ 𝙡𝙤𝙢𝙤 [𝙍𝙚𝙥𝙡𝙮 𝙄𝙢𝙖𝙜𝙚]
│※ 𝙢𝙞𝙡𝙠 [𝙍𝙚𝙥𝙡𝙮 𝙄𝙢𝙖𝙜𝙚]
│※ 𝙢𝙤𝙡𝙡𝙮 [𝙍𝙚𝙥𝙡𝙮 𝙄𝙢𝙖𝙜𝙚]
│※ 𝙢𝙤𝙣𝙤𝙘𝙝𝙧𝙤𝙢𝙚 [𝙍𝙚𝙥𝙡𝙮 𝙄𝙢𝙖𝙜𝙚]
│※ 𝙢𝙤𝙧𝙣𝙞𝙣𝙜 [𝙍𝙚𝙥𝙡𝙮 𝙄𝙢𝙖𝙜𝙚]
│※ 𝙢𝙤𝙫𝙞𝙚 [𝙍𝙚𝙥𝙡𝙮 𝙄𝙢𝙖𝙜𝙚]
│※ 𝙤𝙧𝙩𝙤𝙣 [𝙍𝙚𝙥𝙡𝙮 𝙄𝙢𝙖𝙜𝙚]
│※ 𝙥𝙖𝙧𝙚𝙩𝙧𝙤 [𝙍𝙚𝙥𝙡𝙮 𝙄𝙢𝙖𝙜𝙚]
│※ 𝙥𝙚𝙧𝙛𝙚𝙘𝙩𝙗𝙖𝙣𝙙𝙬 [𝙍𝙚𝙥𝙡𝙮 𝙄𝙢𝙖𝙜𝙚]
│※ 𝙥𝙡𝙪𝙢𝙮 [𝙍𝙚𝙥𝙡𝙮 𝙄𝙢𝙖𝙜𝙚]
│※ 𝙧𝙚𝙩𝙧𝙤𝙡𝙜𝙖 [𝙍𝙚𝙥𝙡𝙮 𝙄𝙢𝙖𝙜𝙚]
│※ 𝙧𝙪𝙗𝙮 [𝙍𝙚𝙥𝙡𝙮 𝙄𝙢𝙖𝙜𝙚]
│※ 𝙨𝙖𝙣𝙙 [𝙍𝙚𝙥𝙡𝙮 𝙄𝙢𝙖𝙜𝙚]
│※ 𝙨𝙖𝙥𝙥𝙝𝙞𝙧𝙚 [𝙍𝙚𝙥𝙡𝙮 𝙄𝙢𝙖𝙜𝙚]
│※ 𝙨𝙚𝙥𝙞𝙖 [𝙍𝙚𝙥𝙡𝙮 𝙄𝙢𝙖𝙜𝙚]
│※ 𝙨𝙤𝙛𝙩𝙨𝙚𝙥𝙞𝙖 [𝙍𝙚𝙥𝙡𝙮 𝙄𝙢𝙖𝙜𝙚]
│※ 𝙨𝙤𝙡𝙖𝙧𝙞𝙯𝙚 [𝙍𝙚𝙥𝙡𝙮 𝙄𝙢𝙖𝙜𝙚]
│※ 𝙨𝙥𝙝𝙞𝙣𝙭 [𝙍𝙚𝙥𝙡𝙮 𝙄𝙢𝙖𝙜𝙚]
│※ 𝙫𝙚𝙣𝙪𝙨 [𝙍𝙚𝙥𝙡𝙮 𝙄𝙢𝙖𝙜𝙚]
│※ 𝙟𝙖𝙥𝙖𝙣𝙚𝙨𝙚 [𝙍𝙚𝙥𝙡𝙮 𝙄𝙢𝙖𝙜𝙚]
│※ 𝙝𝙙𝙧 [𝙍𝙚𝙥𝙡𝙮 𝙄𝙢𝙖𝙜𝙚]
│※ 𝙫𝙞𝙚𝙬𝙛𝙞𝙡𝙩𝙚𝙧 [𝙍𝙚𝙥𝙡𝙮 𝙄𝙢𝙖𝙜𝙚]
│※ 𝙬𝙖𝙧𝙢𝙨𝙪𝙣𝙨𝙚𝙩 [𝙍𝙚𝙥𝙡𝙮 𝙄𝙢𝙖𝙜𝙚]
└───────⭓

┌──⭓「 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙀𝙍 」 
│※ ${prefix}𝙩𝙤𝙞𝙢𝙖𝙜𝙚 [𝙧𝙚𝙥𝙡𝙮 𝙨𝙩𝙞𝙘𝙠]
│※ ${prefix}𝙨𝙩𝙞𝙘𝙠𝙚𝙧 [𝙧𝙚𝙥𝙡𝙮 𝙞𝙢𝙜|𝙜𝙞𝙛]
│※ ${prefix}𝙚𝙢𝙤𝙟𝙞𝙢𝙞𝙭 [𝙢𝙤𝙟𝙞+𝙢𝙤𝙟𝙞]
│※ ${prefix}𝙩𝙤𝙫𝙞𝙙𝙚𝙤 [𝙧𝙚𝙥𝙡𝙮 𝙞𝙢𝙜]
│※ ${prefix}𝙩𝙤𝙜𝙞𝙛 [𝙧𝙚𝙥𝙡𝙮 𝙨𝙩𝙞𝙘𝙠]
│※ ${prefix}𝙩𝙤𝙪𝙧𝙡 [𝙧𝙚𝙥𝙡𝙮 𝙞𝙢𝙜]
│※ ${prefix}𝙩𝙤𝙫𝙣 [𝙧𝙚𝙥𝙡𝙮 𝙖𝙪𝙙]
│※ ${prefix}𝙩𝙤𝙢𝙥3 [𝙧𝙚𝙥𝙡𝙮 𝙫𝙣]
│※ ${prefix}𝙩𝙤𝙖𝙪𝙙𝙞𝙤 [𝙧𝙚𝙥𝙡𝙮 𝙫𝙞𝙙]
│※ ${prefix}𝙚𝙗𝙞𝙣𝙖𝙧𝙮 [𝙧𝙚𝙥𝙡𝙮 𝙩𝙭𝙩]
│※ ${prefix}𝙙𝙗𝙞𝙣𝙖𝙧𝙮 [𝙧𝙚𝙥𝙡𝙮 𝙩𝙭𝙩]
│※ ${prefix}𝙨𝙩𝙮𝙡𝙚𝙩𝙚𝙭𝙩 [𝙩𝙚𝙭𝙩]
└───────⭓

┌──⭓「 𝘿𝘼𝙏𝘼𝘽𝘼𝙎𝙀 」 
│※ ${prefix}𝙨𝙚𝙩𝙘𝙢𝙙
│※ ${prefix}𝙡𝙞𝙨𝙩𝙘𝙢𝙙
│※ ${prefix}𝙙𝙚𝙡𝙘𝙢𝙙
│※ ${prefix}𝙡𝙤𝙘𝙠𝙘𝙢𝙙
│※ ${prefix}𝙖𝙙𝙙𝙢𝙨𝙜
│※ ${prefix}𝙡𝙞𝙨𝙩𝙢𝙨𝙜
│※ ${prefix}𝙜𝙚𝙩𝙢𝙨𝙜
│※ ${prefix}𝙙𝙚𝙡𝙢𝙨𝙜
└───────⭓
┌──⭓「 𝘼𝙉𝙊𝙉𝙔𝙈𝙊𝙐𝙎 𝘾𝙃𝘼𝙏 」
│※ ${prefix}𝙖𝙣𝙤𝙣𝙮𝙢𝙤𝙪𝙨
│※ ${prefix}𝙨𝙩𝙖𝙧𝙩
│※ ${prefix}𝙣𝙚𝙭𝙩
│※ ${prefix}𝙡𝙚𝙖𝙫𝙚
└───────⭓

┌──⭓「 𝙑𝙊𝙄𝘾𝙀 𝘾𝙃𝘼𝙉𝙂𝙀𝙍 」
│※ ${prefix}𝙗𝙖𝙨𝙨 [𝙧𝙚𝙥𝙡𝙮 𝙖𝙪𝙙]
│※ ${prefix}𝙗𝙡𝙤𝙬𝙣 [𝙧𝙚𝙥𝙡𝙮 𝙖𝙪𝙙]
│※ ${prefix}𝙙𝙚𝙚𝙥 [𝙧𝙚𝙥𝙡𝙮 𝙖𝙪𝙙]
│※ ${prefix}𝙚𝙖𝙧𝙧𝙖𝙥𝙚 [𝙧𝙚𝙥𝙡𝙮 𝙖𝙪𝙙]
│※ ${prefix}𝙛𝙖𝙨𝙩 [𝙧𝙚𝙥𝙡𝙮 𝙖𝙪𝙙]
│※ ${prefix}𝙛𝙖𝙩 [𝙧𝙚𝙥𝙡𝙮 𝙖𝙪𝙙]
│※ ${prefix}𝙣𝙞𝙜𝙝𝙩𝙘𝙤𝙧𝙚 [𝙧𝙚𝙥𝙡𝙮 𝙖𝙪𝙙]
│※ ${prefix}𝙧𝙚𝙫𝙚𝙧𝙨𝙚 [𝙧𝙚𝙥𝙡𝙮 𝙖𝙪𝙙]
│※ ${prefix}𝙧𝙤𝙗𝙤𝙩 [𝙧𝙚𝙥𝙡𝙮 𝙖𝙪𝙙]
│※ ${prefix}𝙨𝙡𝙤𝙬 [𝙧𝙚𝙥𝙡𝙮 𝙖𝙪𝙙]
│※ ${prefix}𝙨𝙦𝙪𝙞𝙧𝙧𝙚𝙡 [𝙧𝙚𝙥𝙡𝙮 𝙖𝙪𝙙]
└───────⭓`
                let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/Daveshvats/zerochatbot'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+91 7404854406'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        Zero.send5ButImg(m.chat, anu, Zero.user.name, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        Zero.send5ButGif(m.chat, anu, Zero.user.name, global.visoka, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        Zero.send5ButVid(m.chat, anu, Zero.user.name, global.visoka, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        Zero.send5ButMsg(m.chat, anu, Zero.user.name, btn)
                        } else if (setbot.templateLocation) {
                        Zero.send5ButLoc(m.chat, anu, Zero.user.name, global.thumb, btn)
                        }
                     }
            break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return m.reply(`${err}`)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    let room = Object.values(db.data.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    Zero.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
