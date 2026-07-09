const http=require("http");

const server=http.createServer((req,res)=>{
    res.end("This is my server\nThis is new line\nMy name is Nitesh Chaurasiya \nI am from India \ni am fullstack web developer \nI am learning node js \nI am learning express js \nI am learning mongodb \nI am learning react js \nI am learning redux \nI am learning next js \nI am learning typescript \nI am learning javascript \nI am learning html \nI am learning css \nI am learning bootstrap \nI am learning tailwind css \nI am learning material ui \nI am learning chakra ui \nI am learning ant design \nI am learning semantic ui \nI am learning react native \nI am learning flutter \nI am learning dart \nI am learning java \nI am learning python \nI am learning c++ \nI am learning c# \nI am learning php \nI am learning ruby on rails \nI am learning django \nI am learning flask \nI am learning spring boot \nI am learning node js\n");
})

server.listen(3000,()=>{
    console.log("Listening to PORT 3000")
})

// nodemon