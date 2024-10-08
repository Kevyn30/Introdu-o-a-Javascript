import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'


const server = fastify()
const database = new DatabaseMemory()

server.post('/videos',(request, reply) => {
    const {title, duration, description} = request.body

    database.create ({
        title,
        description,
        duration,
    })

    return reply.status(201).send()
})

server.get('/videos',(request) => {
   const search = request.query.search
   const videos = database.list()
   
   
   return videos
}) 

server.put('/videos/:id',(request, reply) => {
    const VideoID = request.params.id
    const {title, duration, description} = request.body

    database.update(VideoID,{
        title,
        duration,
        description
    })
    return reply.status(204).send()
})

server.delete('/videos/:id',(request, reply) => {
    const VideoID = database.params.id
    
    database.delete(VideoID)

    return reply.status(204).send()
})


server.listen({
    port: 3333,
})



