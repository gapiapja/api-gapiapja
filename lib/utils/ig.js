const RA = require('ra-api')

const IG = (url) => new Promise((resolve, reject) => {
     if (url === 'undefined') { reject('masukan url nya kak.') }
     RA.igDownload(url).then(data => {
           resolve({
                     code : 200,
                     author : "@ApaJa",
                     link : data.result.link
                 })
           }).catch(err => {
                   reject({
                            code:400,
                            message : "Sepertinya link tidak valid"
                   })
           });
})

module.exports = IG;