import pkg from 'pg';
import dotenv from 'dotenv';

const { pool } = pkg;
dotenv.config()

const BD = new Pool({
    connectionString: process.env.DATABASE_URL
})

const testarConexao = async () => {
    try{
        const client = await BD.connect();//tenta estabelecer a conexao com o banco de dados 
        console.log("✔ Conexao com o banco de dados estabelecida");
        client.release(); // libera o client
    }catch(error)
    {
        console.error("Erro ao conectar ao banco de dados", error.message)
    }
}

export { BD, testarConexao};