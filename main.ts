import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import studentRouter from "./router/student.routes.js"
import botRouter from "./router/bot.routes.js"
import staffRouter from "./router/staff.routes.js"
import groupRouter from "./router/group.routes.js"
import teacherRouter from "./router/teacher.routes.js"


const app = express()
dotenv.config()
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 3000

//router
app.use(staffRouter)
app.use(teacherRouter)
app.use(botRouter)
app.use(groupRouter)
app.use(studentRouter)

app.listen(PORT, () => {
    console.log(`server is running at: ${PORT}`)
})
