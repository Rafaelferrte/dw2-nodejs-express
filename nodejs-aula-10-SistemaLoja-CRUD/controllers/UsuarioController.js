import express from "express";
const router = express.Router();

import Usuario from "../models/Usuario.js";
//Importando a biblioteca bcrypt (hash de senha)
import bcrypt from "bcrypt";

// Rota de login
router.get("/login", (req, res) => {
  res.render("login");
});

// Rota de autenticação
router.post("/autenticar", (req,res) => {
    // coletando os dados do formulario
    const email = req.body.email;
    const password = req.body.password;
    // Buscando o usuário no banco
    Usuario.findOne({where: {email:email}})
        .then(usuario => {
            // Se o usuario existir
            if (usuario != undefined){
                // validando a senha (hash)
                const senhaCorreta = bcrypt.compareSync(password, usuario.password);
                // Se a senha for valida
                if (senhaCorreta){
                    res.redirect("/");
                } 
                else{
                    res.send(`Senha inválida!<br>
                        Verifique os dados e tente novamente!<br>
                        <a href="/login">Voltar</a>`);
                }

                //Se o usuario nao existir
            } 
            else{
                res.send(`Usuário não existe!<br>
                    Verifique os dados e tente novamente!<br>
                    <a href="/login">Voltar</a>`);
            }
        })
})

// Rota de cadastro
router.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

router.post("/cadastro/novo", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  //verificando se o usuario ja existe
  Usuario.findOne({ where: { email: email } }).then((usuario) => {
    //usuario nao encontrado
    if (usuario == undefined) {
      // cadastra o usuario
      // gerando o hash de senha
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      Usuario.create({
        email: email,
        password: hash,
      })
        .then(() => {
          res.redirect("/login");
        })
        .catch((error) => {
          console.log(`Ocorreu um erro ao cadastrar usuario. Erro: ${error}`);
        });
    } else{
        res.send(`usuário já cadastrado!<br>
            Verifique os dados e tente novamente.<br>
            <a href="/login">Voltar</a>`)
    }
  });
});

export default router;
