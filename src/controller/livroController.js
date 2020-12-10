const livros = require('../model/livros.json');
const fs = require("fs");

const postLivros = (req,res) => {
    console.log(req.body);
    const {id, nomeDoLivro, editora, lancamento, autor, genero} = req.body;
    livros.push({id, nomeDoLivro, editora, lancamento, autor, genero});

    fs.writeFile("./src/model/livros.json" , JSON.stringify(livros), 'utf8', function(err) {
        if (err) {
        return res.status(424).send({ message:err });
    }
        console.log("Arquivo atualizado com sucesso");
    });

    res.status(201).send(livros)

};
const deleteLivro = (req, res) => {
const id = req.params.id;
const livroFiltrado = livros.find((livro) => livro.id == id);
const index = livros.indexOf(livroFiltrado);
livros.splice(index,1);

fs.writeFile("./src/model/livros.json" , JSON.stringify(livros), 'utf8', function(err) {
    if (err) {
        return res.status(424).send({message:err});
};
console.log("Arquivo atualizado com sucesso");

res.status(200).send(livros)

});

};
const getLivrosByGenero = (req,res) => {
    const genero = req.query.genero
    if (genero) {
        const livroByGenre = livros.filter(livro => livro.genero.includes(genero))
        res.status(200).send(livroByGenre)
    } else{
        res.status(200).send(livros)
    }
    
}
const getAllNomeLivro = (req, res) => {
    const nomeLivro = livros.map((livro) => livro.nomeDoLivro)
    res.status(200).send(nomeLivro)
}

module.exports = {
    postLivros,
    deleteLivro,
    getLivrosByGenero,
    getAllNomeLivro

};