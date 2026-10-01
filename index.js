import express from 'express'


const app = express()

app.use(express.json())

app.use("/api", router)



app.listen(3000, () => {
    console.log("Server na porta 3000 -> https://localhost:3000")
})