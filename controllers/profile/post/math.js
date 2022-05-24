const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = (req, res) => {
    const data = req.body
    
    const keys = Object.keys(data)
    console.log(keys)
 
    const values = Object.values(data)
    console.log(values)


    let user_answer = keys.map((item, id) => {
        ua_id: id
    })



    try {
        
    } catch (error) {
        console.log(error)
    }
}  