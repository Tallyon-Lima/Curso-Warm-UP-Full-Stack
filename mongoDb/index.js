const modalInformationList = {
    moreNoSql: {
        title: "Resumo da História do NoSQL",
        content: "O NoSQL surgiu no ano de 2009 e, de lá para cá, só vem crescendo, impulsionado pela popularização de aplicações web em larga escala, computação em nuvem e grandes volumes de dados, cenário no qual empresas como Google, Amazon e Facebook buscaram soluções mais flexíveis e escaláveis. O que é NoSQL? Inicialmente, a tradução era “Não SQL”, o que gerou interpretações equivocadas de que se tratava de um movimento contra os bancos relacionais, quando na verdade o objetivo do NoSQL sempre foi suprir limitações do SQL tradicional, oferecendo maior escalabilidade, desempenho e flexibilidade na modelagem dos dados."
    }
};

function assembleModalDescription(value) {
    const info = modalInformationList[value];
    if (!info) return;

    const modal = document.getElementById("modal");

    modal.querySelector("#modal-title").innerText = info.title;
    modal.querySelector("#modal-text").innerText = info.content;

    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}
