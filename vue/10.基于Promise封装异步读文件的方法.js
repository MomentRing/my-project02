import fs from 'fs'

function getFile(fpath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fpath, 'uft8', (err, dataStr) => {
            if (err) {
                
            }
            
        })
    })
}

