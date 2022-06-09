define([], function () {
  var free = {
    title: "Free Explore",
    key: "free",
    message: "Have fun!",
    commitData: [{ id: "e137e9b", tags: ["master"], message: "first commit" }],
  };

  var freeWithRemote = {
    title: "Free Explore with Remote",
    key: "free-remote",
    message: "Have fun!",
    commitData: [
      {
        id: "e137e9b",
        tags: ["master", "origin/master"],
        message: "first commit",
      },
    ],
    originData: [{ id: "e137e9b", tags: ["master"], message: "first commit" }],
  };

  return [
    free,
    freeWithRemote,
  ];
});
