const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = async (req, res) => {
    
    try {
        const questions = await prisma.question.findMany()
        res.render('work', {
            questions
        })
    } catch (error) {
        console.log(error)
    }

}