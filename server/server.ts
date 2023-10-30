import * as Path from 'node:path'
import * as URL from 'node:url'

import express from 'express'
import handlebars from 'express-handlebars'

import alchemistRoutes from './routes/alchemist.ts'

const server = express()

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

// Middleware
server.engine('hbs', handlebars.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', Path.join(__dirname, 'views'))
const publicFolder = Path.resolve('public')
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))

// Routes
server.get('/', (req, res) => {
  res.render('home')
})

server.use('/alchemists', alchemistRoutes)

export default server
