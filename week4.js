
import express from 'express'

const server = express();

server.use(express.json())
server.use(userRouter)
import userRouter from './modules/user/user.routes.js'




server.listen(3000, () => {
    console.log("server is running");
})