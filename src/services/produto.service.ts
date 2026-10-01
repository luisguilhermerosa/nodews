const repository = require("../repositories/produto.repository");

async function listar(filtros: any = {}) {
    return await repository.listar(filtros);
}

async function buscarPorId(id: string | number) {
    return await repository.buscarPorId(id);
}

async function criar(dados: {
    nome: string;
    preco: number;
}) {
    if (!dados.nome || dados.preco == null) {
        throw new Error("Nome e preço são obrigatórios.");
    }

    return await repository.criar(dados);
}

async function atualizar(
    id: string | number,
    dados: {
        nome: string;
        preco: number;
    }
) {
    if (!dados.nome || dados.preco == null) {
        throw new Error("Nome e preço são obrigatórios.");
    }

    return await repository.atualizar(id, dados);
}

async function atualizarParcial(
    id: string | number,
    dados: {
        nome?: string;
        preco?: number;
    }
) {
    return await repository.atualizarParcial(id, dados);
}

async function deletar(id: string | number) {
    return await repository.deletar(id);
}

module.exports = {
    listar,
    buscarPorId,
    criar,
    atualizar,
    atualizarParcial,
    deletar
};