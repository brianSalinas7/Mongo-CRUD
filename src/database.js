const {connect} = require('mongoose')

const mydb = async () =>{
    try {
        const db = await connect("mongodb://localhost/crud-mongo")

        console.log(db)
    } catch (error) {
        console.log("error")
    }
}

module.exports = {
    mydb
}