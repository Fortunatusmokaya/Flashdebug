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
    const { ms, arg, repondre, origineMessage } = commandeOptions;


        var initial = new Date().getTime();
        const { key } = await zk.sendMessage(origineMessage, {text: '```Checking speed...```'});
        var final = new Date().getTime();
       
       return await zk.sendMessage(origineMessage, {text: '_Flash MD_\n *' + (final - initial) + ' ms* ', edit: key});
  
    
    
  }
)

