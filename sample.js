onst express = require("express")
const post_data=require("./MOCK_DATA.json")
const app = express();
const PORT = 8000;



app.get("/post_data",(req,res)=>{
    const html=`
    <ul>
        ${post_data.map(user=>`<li>${user.Post_id}</li>`).join("")}
    </ul>
    `
    return res.send(html)
    
});
app.get("/api/post_data",(req,res)=>{
    return res.json(post_data)
    
});
app.get("/api/post_data/:id",(req,res)=>{
    const id=Number(req.params.id);
    const user = post_data.find((user)=>user.User_id === id);
    return res.json(user[])
});
