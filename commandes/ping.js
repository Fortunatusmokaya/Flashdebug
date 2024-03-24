const { zokou } = require("../framework/zokou");
const moment = require("moment-timezone");
const speed = require("performance-now");
const { default: axios } = require('axios');
const pingTo = new Date();


zokou({ nomCom: 'ping',
    desc: 'To check ping',
    Categorie: 'General',
    reaction: '🚨', 
    fromMe: 'true', 

       
  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;


const pingM = await zk.sendMessage(m.chat, { text: 'Running speed test...' }, {quoted: ms } );

await zk.relayMessage(ms.chat, {
      protocolMessage: {
        key: pingM.key,
        type: 14,
        editedMessage: {
          conversation: `Pong: ${new Date() - pingTo} ms`
        }
      }
    }, {});

  
    
    
  }
)

