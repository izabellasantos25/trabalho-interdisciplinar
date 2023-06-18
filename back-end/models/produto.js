const db = require("../back-end/db");

class Produto {
  static async select() {
    try {
      const connect = await db.connect();
      const sql = "SELECT *FROM pessoas"
      return await connect.query(sql);
    } catch (error) {
      console.error('Erro em select:', error);
      throw error;
    }
  }
  static async selectOne(id) {
    try {
      const connect = await db.connect();
      const sql = "SELECT *FROM pessoas WHERE id=$1";
      return await connect.query(sql,[id]);
    } catch (error) {
      console.error('Erro em select:', error);
      throw error;
    }
  }

  static async insert(data) {
    try {
      const connect = await db.connect();
      const sql = "INSERT INTO produtos(titulo, dataCadastro, preco, descricao, imagem) VALUES ($1, $2, $3, $4, $5) RETURNING id, titulo, dataCadastro, preco, descricao, imagem;";
      const values = [data.titulo, data.dataCadastro, data.preco, data.descricao, data.imagem];
      return await connect.query(sql, values);
    } catch (error) {
      console.error('Erro em insert:', error);
      throw error;
    }
  }

  static async update(id, data) {
    try {
      const connect = await db.connect();
      const sql = "UPDATE produtos SET titulo=$1, dataCadastro=$2, preco=$3, descricao=$4, imagem=$5 WHERE id=$6 RETURNING id, titulo, dataCadastro, preco, descricao, imagem;";
      const values = [data.titulo, data.dataCadastro, data.preco, data.descricao, data.imagem, id];
      return await connect.query(sql, values);
    } catch (error) {
      console.error('Erro em update:', error);
      throw error;
    }
  }

  static async delete(id) {
    try {
      const connect = await db.connect();
      const sql = "DELETE FROM produtos WHERE id=$1 RETURNING id, titulo, dataCadastro, preco, descricao, imagem;";
      return await connect.query(sql, [id]);
    } catch (error) {
      console.error('Erro em delete:', error);
      throw error;
    }
  }
}

module.exports = Produto;
