import { db } from "../connect"

export const register=(req,res)=>{
    //check user if exits 

    const q="SELECT FROM user WHERE username=?"

    db.query(q,[req.body.username])

    //crete new user

}

export const login=(req,res)=>{

}


export const logout=(req,res)=>{

}