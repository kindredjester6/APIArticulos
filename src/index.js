const express = require('express')
const config = require('./config')
const app = express() //commonJS

app.disable('x-powered-by')//desabilitar marca de agua
 //recordar mover

app.use(express.json()); //Hace que pueda leer Json
  // cors Evita los problemas de origen
app.use(express.urlencoded({ extended:false }));

app.get('/', (req, res) => {
    res.send("HELLO WORD")
}); //Son las rutas(o recursos en donde se accede a los datos)

app.listen(config.PORT, async ()=> { //Escucha hasta que esté disponible el puerto
    console.log(`server listening on port http://localhost:${config.PORT}`)
});