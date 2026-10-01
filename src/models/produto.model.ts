import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

interface ProdutoAttributes {
    id: number;
    nome: string;
    preco: number;
}

interface ProdutoCreationAttributes
    extends Optional<ProdutoAttributes, "id"> {}

class Produto
    extends Model<ProdutoAttributes, ProdutoCreationAttributes> {}

Produto.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },

        preco: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    },
    {
        sequelize,
        tableName: "produtos",
        timestamps: false
    }
);

export default Produto;