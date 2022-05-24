const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


module.exports = (req, res) => {
    const data = req.body
    const keys = Object.keys(data)
    const values = Object.values(data)


   const user_answer = keys.map((id, index) => ({
       ua_id: id,
       ua: values[index]
   }))

    console.log(user_answer)





    try {
        
    } catch (error) {
        console.log(error)
    }
}  