import express from 'express'
import dotenv from 'dotenv'
import mustache from 'mustache-express'
import path from 'path'
import mainRoutes from './routes/index'

dotenv.config()
console.log('PORT:', process.env.PORT); // Isso deve exibir "PORT: 3000"


const server = express()

server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())

server.use(express.static(path.join(__dirname, '../public')))

// Rotas
server.use(mainRoutes)

server.use((req, res) => {
    res.send('Página não encontrada')
})





server.listen(3000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
}).on('error', (err) => {
    console.error('Failed to start server:', err);
});

console.log('Server running on port', process.env.PORT);

