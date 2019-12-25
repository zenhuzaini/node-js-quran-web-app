const mongodb = require('mongodb')
const mongoclient = mongodb.MongoClient

const all = {
    database: 'bismillah',
    collection: 'pastibisa'
}

const url = 'mongodb://localhost:27017/'

function bisamillahkerjadinokia() {
    mongoclient.connect(url, { useUnifiedTopology: true }, (err, client) => {
        if (err) {
            return console.log(err)
        }

        const databaseconn = client.db(all.database)
        databaseconn.collection(all.collection).insertOne({ name: 'Huzaini', posisi: 'node.js developer', di: 'nokia', komentar: 'aamiin' }, (er, res) => {
            if (er) {
                return console.log(er)
            }

            return console.log(res.ops)
        })
        //to terminate
        client.close()
    })


}

bisamillahkerjadinokia()
