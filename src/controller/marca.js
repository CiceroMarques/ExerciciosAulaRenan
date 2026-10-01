import ServiceMarca from '../service/marca.js'

class ControllerMarca {

    Buscar(req, res) {
        try {
            const marcas = ServiceMarca.Buscar();
            res.send({marcas})
        } catch (e) {
            res.send({message: e.message })
        }
    }

    BuscarUm(req, res) {
        try {
            const id = req.params.id
            const marca = ServiceMarca.BuscarUm(id)

            res.send({ marca })
        } catch (error) {
            res.send({ message: error.message })
        }
    }
    
    Criar(req, res) {
        try {
            const marca = req.body.marca

            ServiceMarca.Criar(marca)
            res.send ({message: "Criado com Sucesso" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    Alterar(req, res) {
        try {
            const id = req.params.id
            const marca = req.body.marca
            ServiceMarca.Alterar(id, marca)

            res.send({ message:"Alterado com sucesso"})
        } catch (error) {
            res.send({ message: error.message})
        }
    }

    Deletar(req, res) {
        try {
            const id = req.params.id
            ServiceMarca.Deletar(id)

            res.send({ message:"Deletado com sucesso"})
        } catch (erro) {
            res.send({ message: error.message })
        }
    }
}

export default new ControllerMarca()