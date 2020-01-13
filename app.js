var friends = ["Rachel", "Phoeby", "Ross", "Joey", "Chandler", "Monica"];
var locations = [
  "Location 1",
  "Location 2",
  "Location 3",
  "Location 4",
  "Location 5",
  "Location 6",
  "Location 7",
  "Location 8",
  "Location 9",
  "Location 10"
];

var weapons = [
  "Weapon 1",
  "Weapon 2",
  "Weapon 3",
  "Weapon 4",
  "Weapon 5",
  "Weapon 6",
  "Weapon 7",
  "Weapon 8",
  "Weapon 9",
  "Weapon 10",
  "Weapon 11",
  "Weapon 12",
  "Weapon 13",
  "Weapon 14",
  "Weapon 15",
  "Weapon 16",
  "Weapon 17",
  "Weapon 18",
  "Weapon 19",
  "Weapon 20"
];
var div = document.querySelector(".container");

for (var i = 1; i < 101; i++) {
  var h3 = document.createElement("h3");
  h3.id = "accusation" + [i];
  h3.innerHTML = "Accusation " + [i];
  div.appendChild(h3);
  function accuse() {
    var clueNumber = i;
    var friend = friends[i % 5];
    var location = locations[i % 10];
    var weapon = weapons[i % 20];
    return function() {
      Swal.fire(
        `Accusation ${clueNumber}: I accuse ${friend}, with the ${weapon} in the ${location}!`
      );
    };
  }
  clickAccusation = accuse();
  h3.addEventListener("click", clickAccusation);
}

// function clickAccusation(i) {
//   h3.addEventListener("click", function(e) {
//     accusationNo = e.target.innerHTML;
//     var f = Math.floor(Math.random() * (5 - 1 + 1) + 1);
//     var w = Math.floor(Math.random() * (20 - 1 + 1) + 1);
//     var l = Math.floor(Math.random() * (10 - 1 + 1) + 1);

//     Swal.fire(
//       `${accusationNo}: I accuse ${friends[f]}, with ${weapons[w]} on ${locations[l]}`
//     );
//   });
// }
