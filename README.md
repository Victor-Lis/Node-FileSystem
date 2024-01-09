
# Node FileSystem

Esse é um projeto simples trabalhando com a manipulação de arquivos usando NodeJS.

A base desse projeto veio do seguinte [vídeo](https://www.youtube.com/watch?v=dvd3pNYh7So) do [Mario Souto](github.com/omariosouto).
# Desafios

- Compreender o CRUD usando File System.
# Aprendizados

Por final aprendi algumas coisas interessantes como: 
# Na prática

## Create
Utilizei o método fs.writeFileSync() para criar os arquivos.
```js
function create({id, content}){
    posts.push({id, content})

    fs.writeFileSync('./db.json', JSON.stringify(posts), { encoding: "utf-8" })
}
```


## Read
Utilizei o método fs.readFileSync() para ler os arquivos.
```js
function read(){
    posts = fs.readFileSync('./db.json', {encoding: "utf-8"}) || []
}
```

## Update
Utilizei o método fs.writeFileSync() para atualizar os arquivos, porém com algumas alterações no restante do código.
```js
function update({id, content}){

    let newPost = {id, content}
    let oldPostIndex = posts.findIndex((post) => post.id == id)
    posts.splice(oldPostIndex, 1, newPost)

    fs.writeFileSync('./db.json', JSON.stringify(posts), { encoding: "utf-8" })
}
```

## Delete
Utilizei o método fs.writeFileSync() para apagar os arquivos, porém com algumas alterações no restante do código.
```js
function delete({id}){
    let postIndex = posts.findIndex((post) => post.id == id)
    posts.splice(postIndex, 1)

    fs.writeFileSync('./db.json', JSON.stringify(posts), { encoding: "utf-8" })
}
```

## Autores

- [@Victor-Lis](https://github.com/Victor-Lis)
