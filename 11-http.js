
const http = require('http')

const server = http.createServer((req,res)=>{
    // console.log(req)
    if(req.url === '/'){
        res.end('Wellcome to our home page')
    }
    // res.write('Wellcome to our home page')
    // res.end()
    if(req.url === '/about'){
        res.end('this is our shor history')
    }
    res.end(`
    <h1>Ooops... </h1>
    <p>it seem you search for a wrong patha</p>
    <a href='/'>go back home</a>
    `)
})

server.listen(5000)

//