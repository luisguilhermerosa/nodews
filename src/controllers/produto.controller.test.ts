import request from "supertest";
import app from "../app";
import sequelize from "../config/database";

beforeAll(async () => {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
});

afterAll(async () => {
    await sequelize.close();
});

describe("Produtos", () => {
    it("deve criar um produto", async () => {
        const response = await request(app)
            .post("/produtos")
            .send({
                nome: "Mouse",
                preco: 50
            });

        expect(response.status).toBe(201);
        expect(response.body.nome).toBe("Mouse");
        expect(response.body.preco).toBe(50);
    });

    it("deve listar os produtos", async () => {
        const response = await request(app)
            .get("/produtos");

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(0);
    });

    it("deve buscar um produto pelo ID", async () => {
        const response = await request(app)
            .get("/produtos/1");

        expect(response.status).toBe(200);
        expect(response.body.nome).toBe("Mouse");
    });

    it("deve atualizar um produto", async () => {
        const response = await request(app)
            .put("/produtos/1")
            .send({
                nome: "Teclado",
                preco: 100
            });

        expect(response.status).toBe(200);
        expect(response.body.nome).toBe("Teclado");
        expect(response.body.preco).toBe(100);
    });

    it("deve atualizar parcialmente um produto", async () => {
        const response = await request(app)
            .patch("/produtos/1")
            .send({
                preco: 120
            });

        expect(response.status).toBe(200);
        expect(response.body.preco).toBe(120);
        expect(response.body.nome).toBe("Teclado");
    });

    it("deve deletar um produto", async () => {
        const response = await request(app)
            .delete("/produtos/1");

        expect(response.status).toBe(200);
        expect(response.body.mensagem).toBe(
            "Produto removido com sucesso."
        );
    });

    it("deve retornar 404 ao buscar produto inexistente", async () => {
        const response = await request(app)
            .get("/produtos/999");

        expect(response.status).toBe(404);
    });

    it("deve retornar 404 ao atualizar produto inexistente", async () => {
        const response = await request(app)
            .put("/produtos/999")
            .send({
                nome: "Produto",
                preco: 10
            });

        expect(response.status).toBe(404);
    });

    it("deve retornar 404 ao deletar produto inexistente", async () => {
        const response = await request(app)
            .delete("/produtos/999");

        expect(response.status).toBe(404);
    });
        it("deve impedir criação sem nome", async () => {
        const response = await request(app)
            .post("/produtos")
            .send({
                preco: 50
            });

        expect(response.status).toBe(400);
        expect(response.body.mensagem).toBe(
            "Nome e preço são obrigatórios."
        );
    });
});