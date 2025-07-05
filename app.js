import express from "express"
import Connection from "./db/connection.js"
import router from "./routers/urlRouter.js"
const app = express()
app.use(express.json())
const port = process.env.PORT || 3000

Connection()

app.use(router)
app.listen(port , ()=>{
    console.log(`I am listen on port: ${port}`)
})