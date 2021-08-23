module.exports = {
    index(req, res) {
        const posts = [{
            author: {
                name: "Fulano",
            },
            created_at: "23/08/2021",
            title: "Este é um post sobre JS",
            description: "JS é uma linguagem de programação muito top",
            image: "https://img.elo7.com.br/product/original/21F8224/paisagem-pintura-em-tela-pantanal-pintura-paisagem-oleo-sobre-tela.jpg",
            gist: "https://github.com.br/",
            categories: [
                "JS", "Back-end", "Express"
            ],
            comments: [
                {
                    author: {
                        name: "Ciclano",
                    },
                    created_at: "23/08/2021",
                    description: "Realmente JS é muito top"
                }
            ]
        }];

        res.send(posts);
    },

    find(req, res) {

    },

    store(req, res) {

    },

    update(req, res) {

    },

    delete(req, res) {

    }
}