const axios = require('axios');
const fs = require('fs');
const {zokou} = require('../framework/zokou');
const { writeFile } = require('fs/promises')

zokou({nomCom : "weather" , categorie : "NEW"},async (dest , zk , commandeOptions)=>{
  const {ms,repondre,arg} = commandeOptions ;

      const question = arg.join(' ');
if (!question) return repondre("Give me location...");



            

        });
