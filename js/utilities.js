const playerList = document.getElementById("player-list");
// selects player on button click
function selectPlayer(playerId, buttonID) {
  document.getElementById(buttonID).addEventListener("click", function () {
    if (playerList.children.length >= 5) {
      alert("You can not add more than 5 players");
    } else {
      const listItem = document.createElement("li");
      listItem.innerText = document.getElementById(playerId).innerText;
      console.log(listItem);
      playerList.appendChild(listItem);
      document.getElementById(buttonID).setAttribute("disabled", true);
      document.getElementById(buttonID).style.backgroundColor= 'gray';
    }
  });
}
