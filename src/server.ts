import app from "./app";
import sequelize from "./config/database";

const PORT = 3000;

async function iniciarServidor() {
    try {
        await sequelize.authenticate();

        console.log("Banco de dados conectado!");

        await sequelize.sync();

        console.log("Banco de dados sincronizado!");

        app.listen(PORT, () => {
            console.log(
                `Servidor rodando na porta ${PORT}`
            );
        });
    } catch (error) {
        console.error(
            "Erro ao iniciar servidor:",
            error
        );
    }
}

iniciarServidor();