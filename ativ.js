function validar() {

    const nome = document.getElementById("nome").value;
    const idade = Number(document.getElementById("idade").value);
    const estudante = document.getElementById("estudante").checked;
    const senha1 = document.getElementById("senha1").value;
    const senha2 = document.getElementById("senha2").value;
    const msg = document.getElementById("mensagem");

    // ==============================
    // 🔴 DESAFIO 3 - BOUNCER
    // ==============================
    if (nome === "" || idade < 0) {
        msg.innerText = "Erro: Nome vazio ou idade negativa!";
        msg.style.color = "red";
        return;
    }

    // ==============================
    // 🔐 DESAFIO 1 - SENHA
    // ==============================
    if (senha1 !== senha2 || senha1.length < 8) {
        msg.innerText = "Erro: Senhas diferentes ou menos de 8 caracteres!";
        msg.style.color = "red";
        return;
    }

    // ==============================
    // 🎓 DESAFIO 2 - PROMOÇÃO (OU)
    // ==============================
    if (idade > 60 || estudante) {
        msg.innerText = "Inscrição válida com desconto!";
        msg.style.color = "green";
    } else {
        msg.innerText = "Inscrição válida sem desconto.";
        msg.style.color = "blue";
    }
}