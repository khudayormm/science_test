const { PrismaClient } = require('@prisma/client')
const path = require('path')
 
const prisma = new PrismaClient()


module.exports = async (req, res) => {
    // console.log(req.file)
    const que_logo = path.basename(req.file.path) 

    const { question, variant_a, variant_b, variant_c, variant_d, box } = req.body

    try {
        const new_question = await prisma.question.create({
            data: {
                question,
                variant_a,
                variant_b,
                variant_c,
                variant_d,
                correct_v: box,
                que_logo: `data/uploads/${que_logo}`
            }
        })

        res.json(new_question)
        
    } catch (error) {
        console.log(error)
    }
    
}