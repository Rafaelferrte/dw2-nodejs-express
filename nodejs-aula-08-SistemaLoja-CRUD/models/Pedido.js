// Model pedido

//Importando o arquivo de conexão
import connection from "../config/sequelize-config.js";
// Importando a biblioteca sequelize
import Sequelize from "sequelize";

const Pedido = connection.define("pedidos", {
    // Atributos da tabela 'pedidos'
    numero: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    valor: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
    
});

Pedido.sync({ force: false});
// Exportando o modulo
export default Pedido;