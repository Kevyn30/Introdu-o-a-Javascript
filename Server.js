import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'


const server = fastify()
const database = new DatabaseMemory()

server.post('/videos',(response, reply) => {
    const {title, duration, description} = request.body

    database.create ({
        title,
        description,
        duration
    })

    return reply.status(201).send()
})

server.get('/videos',() => {
   const videos = database.list()
   console.log(videos)
   return videos
})

server.put('/videos/:id',() => {
    return "hello python"
})

server.delete('/videos/:id',() => {
    return "hello python"
})


server.listen({
    port: 3333,
})



