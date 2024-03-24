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
  async (dest, zk, origineMessage, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;


        var initial = new Date().getTime();

        var final = new Date().getTime();
       
       return await zk.sendMessage(origineMessage, {text: '_Flash MD_\n ' + (final - initial) + ' ms ', {quoted: ms})
  
    
    
  }
)

