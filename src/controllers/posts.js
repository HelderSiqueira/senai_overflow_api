module.exports = {
  index(req, res) {
    const posts = [
      {
        author: {
          name: "fulano",
        },
        created_at: "10/10/2021",
        title: "este um post sobre js",
        description: "js é uma linguagem legal",
        image:
          "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
        gist: "https://github.com/settings/profile",
        categories: ["js", "backend", "front", "html", "css"],
        coments: [
          {
            author: {
              name: "fulano",
            },
            created_at: "10/01/2020",
            description: "js é legal",
          },
        ],
      },
    ];
    res.send(posts);
  },
  find(req, res) {},
  store(req, res) {},
  update(req, res) {},
  delete(req, res) {},
};
