const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

app.use(cors())

app.get('/', (req, res) => 
{
    const point = req.query.point

    if(point.length > 0)
    {
        res.send(calcGrade(point))
    }
    else
    {
        res.send(calcGrade(0))
    }
})

function calcGrade(point)
{
    const pointInt = parseInt(point)

    if(pointInt >= 80)
    {
        return "A"
    }
    else if(pointInt >= 75 && pointInt <= 79)
    {
        return "B+"
    }
    else if(pointInt >= 70 && pointInt <= 74)
    {
        return "B"
    }
    else if(pointInt >= 65 && pointInt <= 69)
    {
        return "C+"
    }
    else if(pointInt >= 60 && pointInt <= 64)
    {
        return "C"
    }
    else if(pointInt >= 55 && pointInt <= 59)
    {
        return "D+"
    }
    else if(pointInt >= 50 && pointInt <= 54)
    {
        return "D"
    }
    else
    {
        return "F"
    }
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))