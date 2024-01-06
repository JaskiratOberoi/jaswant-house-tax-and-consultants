{
  /* <div id="counter">
<!-- counts -->
</div>

<script>
let counts = setInterval(updated);
let upto = 0;
function updated() {
    let count = document.getElementById("counter");
    count.innerHTML = ++upto;
    if (upto === 1000) {
        clearInterval(counts);
    }
}
</script> */
}

import React from "react";

function staticCounter() {
  let counts = setInterval(updated);
  let upto = 0;
  function updated() {
    let count = document.getElementById("counter");
    count.innerHTML = ++upto;
    if (upto === 1000) {
      clearInterval(counts);
    }
  }
  return (
    <div>
      <div id="counter"></div>
    </div>
  );
}

export default staticCounter;
