import { Router } from "express";
const filmesRouter = Router()
filmesRouter.get('/api/filmes', obterFilmes)


const filmes = {
    id: 1,
    title: "Barbie"
}

const filmes2 = {
    id: 2,
    title: "A era do gelo 4"
}
function obterFilmes(req, res){
    return res.status(200).json(filmes)
}

export default Router