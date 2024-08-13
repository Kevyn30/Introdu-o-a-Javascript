import { randomUUID } from "node:crypto"

export class DatabaseMemory {
#videos = new Map()


list(search){
    return Array.from(this.#videos.entries())
    .map((videoArray)=>{
        const id = videoArray[0]
        const data = videoArray[1]
        return{
            id,
            ...data,
        }
})
.filter(videos => {
    if(search){
        return videos.title.includes(search)
    }
    return true
})
}

create(video){
    const VideoID = randomUUID()
    this.#videos.set(VideoID, video)

    }
update(id, video){
    this.#videos.set(id, video)
}

delete(id){
    this.#videos.delete(id)
}
}























