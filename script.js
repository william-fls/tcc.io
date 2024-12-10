document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    // Função para validar e-mails
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Obter valores dos campos de entrada
        let nome = document.querySelector('input[placeholder="Nome"]').value.trim();
        const email = document.querySelector('input[placeholder="E-mail"]').value.trim();
        const senha = document.querySelector('input[placeholder="Senha"]').value.trim();

        // Salvar o nome no Local Storage
        localStorage.setItem('nome', nome);
        console.log('Nome salvo no Local Storage:', localStorage.getItem('nome'));
        window.location.href = "inicial.html";

        // Verificar se todos os campos estão preenchidos
        if (!nome || !email || !senha) {
            alert("Por favor, preencha todos os campos.");
            console.error("Erro: Campos obrigatórios não preenchidos.");
            return;
        }

        // Verificar se o e-mail é válido
        if (!validateEmail(email)) {
            alert("Por favor, insira um e-mail válido.");
            console.error("Erro: E-mail inválido.");
            return;
        }

        // Mensagem de sucesso
        alert("Registro realizado com sucesso!");
        console.log("Registro bem-sucedido:");
        console.log(`Nome: ${nome}, Email: ${email}, Senha: [oculto por segurança]`);

        // Resetar o formulário
        form.reset();
    });
});
