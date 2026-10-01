import { Router } from "express";

const produtoController = require("../controllers/produto.controller");

const router = Router();

router.get("/", produtoController.listar);
router.get("/:id", produtoController.buscarPorId);
router.post("/", produtoController.criar);
router.put("/:id", produtoController.atualizar);
router.patch("/:id", produtoController.atualizarParcial);
router.delete("/:id", produtoController.deletar);

export default router;