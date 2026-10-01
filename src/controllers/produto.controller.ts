import { Request, Response } from "express";

const service = require("../services/produto.service");

exports.listar = async (
    req: Request,
    res: Response
) => {
    try {
        const produtos = await service.listar(req.query);
        res.status(200).json(produtos);
    } catch (error) {
        const mensagem =
            error instanceof Error
                ? error.message
                : "Erro ao listar produtos.";

        res.status(500).json({ mensagem });
    }
};

exports.buscarPorId = async (
    req: Request,
    res: Response
) => {
    try {
        const produto = await service.buscarPorId(
            req.params.id
        );

        if (!produto) {
            return res.status(404).json({
                mensagem: "Produto não encontrado."
            });
        }

        res.status(200).json(produto);
    } catch (error) {
        const mensagem =
            error instanceof Error
                ? error.message
                : "Erro ao buscar produto.";

        res.status(500).json({ mensagem });
    }
};

exports.criar = async (
    req: Request,
    res: Response
) => {
    try {
        const produto = await service.criar(req.body);

        res.status(201).json(produto);
    } catch (error) {
        const mensagem =
            error instanceof Error
                ? error.message
                : "Erro ao criar produto.";

        res.status(400).json({ mensagem });
    }
};

exports.atualizar = async (
    req: Request,
    res: Response
) => {
    try {
        const produto = await service.atualizar(
            req.params.id,
            req.body
        );

        if (!produto) {
            return res.status(404).json({
                mensagem: "Produto não encontrado."
            });
        }

        res.status(200).json(produto);
    } catch (error) {
        const mensagem =
            error instanceof Error
                ? error.message
                : "Erro ao atualizar produto.";

        res.status(400).json({ mensagem });
    }
};

exports.atualizarParcial = async (
    req: Request,
    res: Response
) => {
    try {
        const produto =
            await service.atualizarParcial(
                req.params.id,
                req.body
            );

        if (!produto) {
            return res.status(404).json({
                mensagem: "Produto não encontrado."
            });
        }

        res.status(200).json(produto);
    } catch (error) {
        const mensagem =
            error instanceof Error
                ? error.message
                : "Erro ao atualizar produto.";

        res.status(400).json({ mensagem });
    }
};

exports.deletar = async (
    req: Request,
    res: Response
) => {
    try {
        const deletado = await service.deletar(
            req.params.id
        );

        if (!deletado) {
            return res.status(404).json({
                mensagem: "Produto não encontrado."
            });
        }

        res.status(200).json({
            mensagem: "Produto removido com sucesso."
        });
    } catch (error) {
        const mensagem =
            error instanceof Error
                ? error.message
                : "Erro ao deletar produto.";

        res.status(500).json({ mensagem });
    }
};