const axios = require('axios')

//use promise
const quran = (surahnumber) => {
    const url = `https://unpkg.com/quran-json@1.0.1/json/surahs/${surahnumber}.json`
    return axios
        .get(url)
        .then(res => {
            return res.data
        })
        .catch(err => {
            if (!err.response) {
                return { message: 'no internet connection' }
            } else {
                return { message: err.response.statusText }
            }
        })
}


// promise use async await
const listsurah = async () => {
    const url = `https://unpkg.com/quran-json@1.0.1/json/surahs.json`
    const res = await axios.get(url)
    try {
        return res.data
    } catch (error) {
        if (!error.response) {
            return { message: 'no Internet connection', code: 401 }
        } else {
            return { message: 'other errors, check your API wheter it works', code: undefined }
        }
        return error
    }
}

quran(10000)
// listsurah()
module.exports = { listsurah: listsurah, quran: quran }
