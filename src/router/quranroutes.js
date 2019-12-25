const express = require('express')
const router = express.Router()

//load quran
const quran = require('../utils/quran')

router.get('/listsurah', async (req, res) => {
    try {
        const getsurah = await quran.listsurah()
        console.log(getsurah.data[0])
        res.json({
            data: getsurah
        })
    } catch (error) {
        res.json({
            error: error
        })
    }

})

router.get('/surah', async (req, res) => {
    try {
        const surahnumber = req.query.number
        if (!surahnumber) {
            return res.send({
                message: 'you must provide surahnumber=xx'
            })
        }

        const surah = surahnumber
        const getsurah = await quran.quran(surah)

        return res.send({
            data: getsurah
        })

    } catch (error) {
        res.json({
            error: error
        })
    }

})

router.get('*', (req, res) => {
    res.send({
        message: 'the endpoint doesnt work!'
    })
})

//jangan lupa .. Router.use() requires a middleware function but got a Object
module.exports = router