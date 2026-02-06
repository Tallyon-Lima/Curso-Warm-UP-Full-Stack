const modalInformationList = {
    moreNoSql: {
        title: "Resumo da História do NoSQL",
        content: "O NoSQL surgiu no ano de 2009 e, de lá para cá, só vem crescendo, impulsionado pela popularização de aplicações web em larga escala, computação em nuvem e grandes volumes de dados, cenário no qual empresas como Google, Amazon e Facebook buscaram soluções mais flexíveis e escaláveis. O que é NoSQL? Inicialmente, a tradução era “Não SQL”, o que gerou interpretações equivocadas de que se tratava de um movimento contra os bancos relacionais, quando na verdade o objetivo do NoSQL sempre foi suprir limitações do SQL tradicional, oferecendo maior escalabilidade, desempenho e flexibilidade na modelagem dos dados."
    },
    whatNoSql: {
        title: "O que é NoSQL?",
        content: "Apesar da tradução literal ser 'Não SQL', o NoSQL NÃO é um movimento contra os bancos relacionais, mas sim uma resposta às limitações do SQL tradicional. O NoSQL surgiu para oferecer maior escalabilidade, desempenho e flexibilidade na modelagem dos dados, especialmente em cenários de grandes volumes de dados e aplicações web em larga escala.\n O crescimento da internet veio a necessidade de armazenar e processsar maiores volumes de dados, o que levou ao desenvolvimento de bancos de dados NoSQL, que se adaptam melhor a esses cenários do que os bancos relacionais tradicionais."
    },
    relationalVsNonRelational: {
        title: "BD Relacionais vs BD Não Relacionais",
        content: "Características de BD Relacionais: \n Padão ANSI, \n Linguagem SQL, \n Armazenamento em tabelas. \n \n Características de BD Não Relacionais:\n Não possuem um padrão definido,\n Linguagem de consulta varia conforme o tipo de banco,\n Armazenamento em formatos variados, como documentos, grafos, colunas ou chaves-valor."
    },
    typesOfNoSql:{
        title: "Tipos de BD NoSql",
        content: "- Grafos:  Em um banco orientado a grafos, não existem tabelas, documentos ou qualquer outra estrutura que seja comparáve a uma tabela. Neste tipo de banco, tudo são nós (Vétices) e relacionamentos (Arestas). O mais popular deles é o Neo4j. \n\n  - Chave/valor:  Todos os registros fazem parte da mesma coleção de elementos. Fazendo uma comparação com os bancos de dados relacionais, é como se o banco de dados inteiro fosse uma única tabela que possui apenas duas colunas: uma chave,e uma outra com valor. Um exemplo desse tipo é o Redis. \n\n  - Colunar: A estrutura principal dos bancos colunares é basicamente uma grande tabela. Cada registro pode, ter quantas e quais colunas precisar (schemaless). Os bancos de dados colunares são os que mais se assemelham aos bancos de dados relacionais por terem uma 'tabela' na sua estrutura, mesmo que, na verdade, sejam muito diferentes, já que os dados estão orientados a colunas internamente. Um exemplo desse tipo é o Cassandra. \n\n - Documentos: O banco de dados de estilo de documento usa o que equivale a um objeto como sua menor unidade lógica. E uma coleção pode conter vários documentos. Por não haver um esquema fixo, cada documento pode ter um número e um tipo de campo diferente, o que contribui para a flexibilidade. Um exemplo desse tipo é MongoDB."
    },
    mongodb: {
        title: "MongoDB",
        content: "MongoDB é um banco de dados NoSQL orientado a documentos, desenvolvido pela empresa MongoDB Inc. Ele armazena dados em formatos semelhantes a objetos JSON (BSON), o que oferece flexibilidade na modelagem dos dados e facilita a integração com aplicações modernas. MongoDB é amplamente utilizado por empresas que precisam de escalabilidade horizontal, alta disponibilidade e desempenho em aplicações web e mobile. Um exemplo de uso de MongoDB é a EA Sports FIFA, que utiliza o banco de dados para armazenar informações sobre jogadores, times e partidas, permitindo uma experiência de jogo mais dinâmica e personalizada para os usuários."
    },
    moreMongodbMainCard: {
        title: "Continuando...",
        content: "Utilizando o formato de documento, que são armazenados dentro de coleções. Esses documentos, internamente, têm uma estrutura bem semelhante ao JSON, com chave e valor. \n No MongoDB, o esquema de dados não é fixo, o que permite que, dentro de uma mesma coleção, existam documentos com diferentes campos e estruturas. Essa flexibilidade facilita a reestruturação do banco de dados ao longo do tempo, evitando problemas como travamentos de sistemas e contribuindo para a segurança das informações.\nOutro recurso importante oferecido pelo MongoDB é o sistema de réplicas, que garante maior disponibilidade dos dados. Além do servidor principal, é possível manter cópias adicionais em outras máquinas, assegurando a continuidade do serviço mesmo em caso de falhas.\nO MongoDB também conta com o uso de clusters, que possibilitam o gerenciamento de grandes volumes de dados. Por meio dessa estrutura, as informações são distribuídas entre várias máquinas, aumentando o desempenho e a escalabilidade do banco de dados.\nAlém disso, o MongoDB é um software open source, com distribuição gratuita para os sistemas Linux, macOS e Windows. Seu servidor possui duas versões: a Community, gratuita e amplamente utilizada, e a Enterprise, voltada para assinantes. Também é possível utilizar o MongoDB em ambiente de nuvem por meio do MongoDB Atlas."
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
