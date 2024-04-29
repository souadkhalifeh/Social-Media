import express from "express";
const app =express();
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
import likeRoutes from "./routes/likes.js"
import commentRoutes from "./routes/comments.js"
import authRoutes from "./routes/auth.js"
import cors from "cors"
import cookieParser from "cookie-parser";


app.use(express.json());
app.use(cors());
app.use(cookieParser())

app.use("/api/users",userRoutes)
app.use("/api/posts",postRoutes)
app.use("/api/likes",likeRoutes)
app.use("/api/comments",commentRoutes)
app.use("/api/auth",authRoutes)


app.listen(3000,()=>{
    console.log("API working!")
})
