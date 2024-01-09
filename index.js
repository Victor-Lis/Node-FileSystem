const fs = require("fs")

console.log("[CRUD] Node - File System")

const crud = {
    posts: [],
    read(){
        this.posts = JSON.parse(fs.readFileSync('./db.json', {encoding: "utf-8"})) || []
        return this.posts
    },
    create({id, content}){
        this.read()

        this.posts.push({id, content})
        
        fs.writeFileSync('./db.json', JSON.stringify(this.posts), { encoding: "utf-8" })
    },
    update({id, content}){
        this.read()

        let newPost = {id, content}
        let oldPostIndex = this.posts.findIndex((post) => post.id == id)
        this.posts.splice(oldPostIndex, 1, newPost)

        fs.writeFileSync('./db.json', JSON.stringify(this.posts), { encoding: "utf-8" })
    },
    delete({id}){
        this.read()

        let postIndex = this.posts.findIndex((post) => post.id == id)
        this.posts.splice(postIndex, 1)

        fs.writeFileSync('./db.json', JSON.stringify(this.posts), { encoding: "utf-8" })
    }
}

// Create
crud.create({id: 1, content: "Hello World!"})

// Read
console.log('Lendo Posts', crud.read())

// Update
crud.update({id: 1, content: "Content Atualizado!"})

// Delete
crud.delete({id: 1})