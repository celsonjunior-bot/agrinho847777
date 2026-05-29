// Aguarda o documento carregar completamente
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Ação do Botão Principal
    const botao = document.getElementById("btnPrincipal");
    
    botao.addEventListener("click", () => {
        alert("Obrigado pelo interesse! O Projeto Agrinho incentiva a pesquisa e a tecnologia no campo.");
        
        // Rolagem suave para a seção sobre
        document.getElementById("sobre").scrollIntoView({ behavior: 'smooth' });
    });

    // 2. Simulação de Ação em Tempo Real (Contador Dinâmico)
    const contadorElemento = document.getElementById("contador");
    let acessos = 142; // Valor inicial

    // Função que atualiza o número aleatoriamente simulando novas visitas
    setInterval(() => {
        // Gera um aumento aleatório entre 1 e 3 acessos
        const novosAcessos = Math.floor(Math.random() * 3) + 1;
        acessos += novosAcessos;
        
        // Atualiza a tela
        contadorElemento.textContent = acessos;
        
        // Feedback visual rápido de atualização
        contadorElemento.style.color = "#ff9f1c";
        setTimeout(() => {
            contadorElemento.style.color = "#2a9d8f";
        }, 300);

    }, 3000); // Executa a cada 3 segundos (3000 milissegundos)
});
