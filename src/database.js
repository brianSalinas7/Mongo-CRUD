const {connect} = require('mongoose')

const mydb = async () =>{
    try {
        const db = await connect("mongodb://localhost:27017/crud-mongo")

        console.log("DB Connected to ", db.connection.name)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    mydb
}