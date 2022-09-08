

selectPlayer("player-1", "btn-player1");
selectPlayer("player-2", "btn-player2");
selectPlayer("player-3", "btn-player3");
selectPlayer("player-4", "btn-player4");
selectPlayer("player-5", "btn-player5");
selectPlayer("player-6", "btn-player6");

document.getElementById("btn-calculate").addEventListener("click", function () {
  let perPlayerCost = document.getElementById("per-player-cost");
  if (perPlayerCost.value == "") {
    document.getElementById("player-expenses").innerText = '0';
  } else {
    document.getElementById("player-expenses").innerText =
      parseFloat(perPlayerCost.value) * playerList.children.length;
  }
});

document.getElementById("btn-calculate-total").addEventListener("click", function () {
  let playerExpenses =parseFloat(document.getElementById("player-expenses").innerText);
  let managerExpenses=document.getElementById("manager-cost")
  let coachExpenses=document.getElementById("coach-cost");
  if (managerExpenses.value == "") {
    document.getElementById("total-expenses").innerText = playerExpenses+ parseFloat(coachExpenses.value);
  } else if (coachExpenses.value == "") {
    document.getElementById("total-expenses").innerText = playerExpenses+ parseFloat(managerExpenses.value);
  }
  else if(managerExpenses.value=='' && coachExpenses.value==''){
    document.getElementById("total-expenses").innerText = playerExpenses;
  }
  else{
    document.getElementById("total-expenses").innerText = playerExpenses+ parseFloat(managerExpenses.value)+ parseFloat(coachExpenses.value);
  }
  }
);

