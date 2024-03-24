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



const initial = new Date().getTime();

        const final = new Date().getTime();

comst Pingg = final - initial;




        
       
        await zk.sendMessage(origineMessage, {text: Pingg}, {quoted: ms})
  
    
    
  }
)

