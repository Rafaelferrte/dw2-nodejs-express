import express from "express";
const router = express.Router();

import Usuario from "../models/Usuario.js";
//Importando a biblioteca bcrypt (hash de senha)
import bcrypt from "bcrypt";

// Rota de login
router.get("/login", (req, res) => {
    res.render("login");
});

// Rota de cadastro
router.get("/cadastro", (req,res) => {
    res.render("cadastro");
});

router.post("/cadastro/novo", (req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    // gerando o hash de senha
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    Usuario.create({
        email: email,
        password: hash,
    }).then(() => {
        res.redirect("/login");
    }).catch((error) => {
        console.log(`Ocorreu um erro ao cadastrar usuario. Erro: ${error}`);
    });
});

export default router;