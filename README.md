# Nodejs course

## CPU Bound vs I/O Bound

Nodejs no sirve para aplicaciones CPU Bound ya que no puede realizar tareas mientras se encuentra ocupado el call stack(renderizar o codificar videos)

En Node.js lo que está relacionado con sockets (TCP, UDP) no necesita un hilo aparte, sino que se utilizan mecanismos de monitorización según el sistema operativo, por ejemplo epoll en Linux:
http://docs.libuv.org/en/v1.x/design.html
Solo necesitan hilos aparte aquellas tareas que no pueden monitorizarse, como por ejemplo I/O con ficheros y DNS lookups. Por tanto las peticiones de red, si no es necesario hacer un DNS lookup, 
no necesitan un hilo aparte. El hilo principial pone en marcha la petición pero sin bloquearse, y la próxima vez que intente extraer una tarea de la cola, usará epoll para determinar el evento 
(llegada de datos en un socket).

## REPL 

Nos permite evaluar codigo escrito para el entendimiento de nodejs

## Interval
```js
setInterval(()=>{
    console.log('Hola');
}, 1000)
```

## process

Como interactua con tu sistema operativo `process version/ os.getInfo()`

`console.log(__dirname, __filename, module, require, process)`

## os

```js
const os = require('os');
os.userInfo();
os.uptime() //Dice cuanto tiempo has estado usando el equipo
os.platform() //que so estas ocupando
freemem(); //cantidad de memoria ram
 
```


## Modulo path

```js
const path = require('path');

const filePath = console.log(path.join('/public')); // importa el archivo independientemente de el os y las rutas de el sistema operativo

path.basename(filePath)// Obtiene el nombre del archivo 
path.dirname(filePath) // solo las carpetas
path.parse(filePath) // da un objeto de las carpetas
path.resolve('dis')//resuelve y añade un nuevo archivo

```

## fs (filesystem)

```js
const fs = require('fs');

// Leemos el archivo que está dentro de el path especificado

const first = fs.readFileSync('./data/first.txt');

console.log(first) // Arroja un Buffer
//Definimos el tipo de buffer o salida que queremos que lea el fs
const second = fs.readFileSync('./data/first.txt', 'utf-8');

console.log(second) // Arroja un Buffer 
//ó
console.log(first.toString()) //Lo convierte a un string

//CREACION DE ARCHIVO

const title = 'New title'
fs.writeFileSync('./data/third.txt', title);
//APEND
fs.appendFileSync('./data/third.txt','new things are coming');

```

## ASYNCHRONISM

## http
```js
const http = require('http');

http.createServer((req, res)=>{

    res.write('Hello world')
    res.end()
}).listen(3001)

console.log('Servidor escuchando en el puerto 3001');
```

*Tambien podemos utilizar las opciones de req.url*

----------------------------------------------------------------

## NPX

Sirve para poder ejecutar paquetes sin instalarlos


## Promisify

Se encuentra en la carpeta utils y sirve para convertir en promesas las cosas

## fs/promises 

Es una mejor opcion para poder utilizar fs con promesas


## Events (EVENT DRIVEN PROGRAMMING)

js has 'events' module which emits named events that can cause corresponding functions or callbacks to be called.

```js
customEmitter.on('event', (data)=>{
    console.log(data);
})


customEmitter.emit('event', 'Hola');
```

## Streams

Sirve para poder transmitir files

```js

const {writeFile, createReadStrem} = require('fs');

const createBigFile = async()=>{
    new writeFile('./file.txt', 'New hioal')
} 

//Imaginemos que tenemos un archivo muy grande

const stream = createReadStream('./bigfile.txt');

//leyendo la data
strem.on('data', (chunk)=>{
    console.log(chunk)
})

//Cuando se cierra la conexxion
strem.on('close', (chunk)=>{
    console.log(chunk)
})
//Cuando termina
strem.on('end', (chunk)=>{
    console.log(chunk)
})

//Se puede con el 'error'




```

Para poder crear un strem

## Mandar un stream por un http

```js
const http = require('http')
const {createReadStream} = require('fs');

http.createServer((req, res)=>{
    const stream = createReadStream('./bigfile.txt', {

        encoding: 'utf-8'
    });
    stream.on('data', (chunk)=>{
        stream.pipe(res);
        res.end();
    });
    stream.on('error', (chunk)=>{
        console.log('Something went wrong')
        
    });
})

server.listen(3001); 

```
https://chat.openai.com/share/241a7de3-8a16-4e5c-80bb-73d35faef92c

## ACL 
https://www.geeksforgeeks.org/how-to-implement-acl-with-passport-using-node-js/

## Fetch

```js

fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => console.log(json))
```

## Cache
https://medium.com/the-node-js-collection/simple-server-side-cache-for-express-js-with-node-js-45ff296ca0f0

## Websockets
## Concurrencia de Javascript
Es lo que hace que sea de un solo hilo de trabajo y que contenga las async await promesas, etc
 
