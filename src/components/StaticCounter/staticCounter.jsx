import React from "react";

function StaticCounter(Limit) {
  let counts = setInterval(updated);
  let upto = 0;
  function updated() {
    let count = document.getElementById("counter");
    count.innerHTML = ++upto;
    if (upto === Limit) {
      clearInterval(counts);
    }
  }
  return (
    <div>
      <div id="counter"></div>
    </div>
  );
}

export default StaticCounter;
