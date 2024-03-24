const { simpleGit } = require("simple-git");

simpleGit()
  .add(".")
  .commit(
    "[feat 🎷] able to create new room and show that room on home page 🎉",
    {
      "--date": "2024-03-24",
    }
  )
  .push();
