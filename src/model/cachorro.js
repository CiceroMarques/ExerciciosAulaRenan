const cachorros = new Array(
    { nome: "smaug", idade: 1203, dono: "Pedro", raca: "Labrador" },
    { nome: "gollum", idade: 3, dono: "Bilbo", raca: "Indefinida" }
)

class Cachorro {
    
    Buscar() {
        return cachorros;
    }

    BuscarUm(id) {
        return marcas[id];
    }

    Criar(nome, idade, dono, raca) {
        marcas.push(
            { nome, idade, dono, raca }
        );
    }

    Alterar(nome, idade, dono, raca) {
        cachorros[id].nome = nome;
        cachorros[id].idade = idade;
        cachorros[id].dono = dono;
        cachorros[id].raca = raca;
    }

    Deletar(id) {
        marcas.splice(id, 1);
    }
}
export default new Cachorro();