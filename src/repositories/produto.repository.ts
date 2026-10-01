import Produto from "../models/produto.model";

async function listar(filtros: any = {}) {
    const where: any = {};

    if (filtros.nome) {
        where.nome = filtros.nome;
    }

    return await Produto.findAll({
        where
    });
}

async function buscarPorId(id: string | number) {
    return await Produto.findByPk(Number(id));
}

async function criar(dados: {
    nome: string;
    preco: number;
}) {
    return await Produto.create({
        nome: dados.nome,
        preco: dados.preco
    });
}

async function atualizar(
    id: string | number,
    dados: {
        nome: string;
        preco: number;
    }
) {
    const produto = await Produto.findByPk(Number(id));

    if (!produto) {
        return null;
    }

    await produto.update(dados);

    return produto;
}

async function atualizarParcial(
    id: string | number,
    dados: {
        nome?: string;
        preco?: number;
    }
) {
    const produto = await Produto.findByPk(Number(id));

    if (!produto) {
        return null;
    }

    await produto.update(dados);

    return produto;
}

async function deletar(id: string | number) {
    const produto = await Produto.findByPk(Number(id));

    if (!produto) {
        return false;
    }

    await produto.destroy();

    return true;
}

module.exports = {
    listar,
    buscarPorId,
    criar,
    atualizar,
    atualizarParcial,
    deletar
};