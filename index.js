const express = require('express')
const b_parser = require('body-parser')
const app = express()

const db = {
    "filmes": [
      {
        "id": 1,
        "titulo": "O Poderoso Chefão",
        "ano": 1972,
        "genero": "Drama",
        "diretor": "Francis Ford Coppola",
        "atores": ["Marlon Brando", "Al Pacino", "James Caan"],
        "sinopse": "A história da ascensão de um poderoso chefão da máfia ítalo-americana e sua família.",
        "avaliacao": 9.2
      },
      {
        "id": 2,
        "titulo": "A Origem",
        "ano": 2010,
        "genero": "Ficção Científica",
        "diretor": "Christopher Nolan",
        "atores": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
        "sinopse": "Um ladrão especializado em roubar segredos do subconsciente das pessoas é contratado para realizar o inverso: implantar uma ideia na mente de um indivíduo.",
        "avaliacao": 8.8
      },
      {
        "id": 3,
        "titulo": "Clube da Luta",
        "ano": 1999,
        "genero": "Drama",
        "diretor": "David Fincher",
        "atores": ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
        "sinopse": "Um homem desiludido forma um clube de luta subterrâneo como uma forma de lidar com seu tédio e frustração na vida.",
        "avaliacao": 8.8
      }
    ]
  }

app.use(b_parser.urlencoded({extended: false}))
app.use(b_parser.json())

// Rota para pegar os dados do DB (Improvisado em JSON)

app.get('/movies', (req, res) => {
    res.statusCode = 200
    res.json(db) 
})

// Rota para pegar filmes por Id

app.get('/movies/:id', (req, res) => {
    const _id = req.params.id
    if(isNaN(_id)){
        res.sendStatus(400)
    }else{
      let _movie = db.filmes.find(movie => movie.id == _id)
      if(_movie == undefined){
        res.sendStatus(404)
      }else{
        let statusCode = 200
        res.json(_movie)
      }

    }
})
app.listen(8080, () => {
    console.log("Server está rodando com sucesso")
})