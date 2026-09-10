const service = require("../services/produto.service");

exports.listar = (req, res) => {
    const produtos = service.listar();
    res.json(produtos);
};

exports.buscarPorId = (req, res) => {
    const produto = service.buscarPorId(req.params.id);

    if (!produto) {
        return res.status(404).json({ erro: "Produto não encontrado" });
    }

    res.json(produto);
};

exports.criar = (req, res) => {
    try {
        const produto = service.criar(req.body);
        res.status(201).json(produto);
    } catch (erro) {
        res.status(400).json({ erro: erro.message });
    }
};