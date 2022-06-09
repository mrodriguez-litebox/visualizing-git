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

  var mergefflocal = {
    title: "Fast-forward merge",
    key: "mergefflocal",
    message: "Fast-forward merge",
    commitData: [
      {
        id: "e137e9b",
        tags: ["origin/master"],
        message: "first commit",
        parent: "initial",
        cx: 50,
        cy: 379,
        branchless: false,
      },
      {
        id: "fdc3c45",
        tags: ["master"],
        parent: "e137e9b",
        cx: 140,
        cy: 379,
        branchless: false,
      },
      {
        id: "a639b1b",
        tags: [],
        parent: "fdc3c45",
        cx: 230,
        cy: 379,
        branchless: false,
      },
      {
        id: "025efab",
        tags: [],
        parent: "a639b1b",
        cx: 320,
        cy: 379,
        branchless: false,
      },
      {
        id: "cd4b56d",
        tags: ["test", "HEAD"],
        parent: "025efab",
        cx: 410,
        cy: 379,
        branchless: false,
      },
    ],
    originData: [
      {
        id: "e137e9b",
        tags: ["master", "HEAD"],
        message: "first commit",
        parent: "initial",
        cx: 50,
        cy: 360,
        branchless: false,
      },
    ],
  };

  return [free, freeWithRemote, mergefflocal];
});
