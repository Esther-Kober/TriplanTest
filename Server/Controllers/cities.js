
const cities = require("../Models/cities");

exports.getCities = function () {

    return new Promise((resolve, reject) => {
        cities.find({}).then(info=>{
            if(info){
                resolve(info)
            }
            else{
                reject(err)
            }
        })
    })
}