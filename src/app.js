/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function refresh() {
    let nAleatorio1 = Math.floor(Math.random() * who.length);
    let nAleatorio2 = Math.floor(Math.random() * action.length);
    let nAleatorio3 = Math.floor(Math.random() * what.length);
    let nAleatorio4 = Math.floor(Math.random() * when.length);

    let positionsWho = who[nAleatorio1];
    let positionsAction = action[nAleatorio2];
    let positionsWhat = what[nAleatorio3];
    let positionsWhen = when[nAleatorio4];

    let excuse =
      positionsWho +
      " " +
      positionsAction +
      " " +
      positionsWhat +
      " " +
      positionsWhen;

    return excuse;
  }

  document.getElementById("excuses").innerHTML = refresh();

  console.log(refresh());
};
