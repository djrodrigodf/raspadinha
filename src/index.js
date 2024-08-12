import "./styles.css";

/* eslint-disable */

import { ScratchCard, SCRATCH_TYPE } from "scratchcard-js";
const scContainer1 = document.getElementById("js-canvas-1");
const scContainer2 = document.getElementById("js-canvas-2");
const scContainer3 = document.getElementById("js-canvas-3");
const scContainer4 = document.getElementById("js-canvas-4");
const scContainer5 = document.getElementById("js-canvas-5");
const scContainer6 = document.getElementById("js-canvas-6");

let premiado = 0;
let perdeu = 0;

function checkForWin() {
  if (premiado === 2) {
    alert("Você ganhou!");
    window.location.reload(); // Refresh na página após o alerta
  }
}

function checkForLose() {
  if (perdeu === 2) {
    alert("Você Perdeu, tente novamente!");
    window.location.reload(); // Refresh na página após o alerta
  }
}

const sc1 = new ScratchCard("#js-canvas-1", {
  scratchType: SCRATCH_TYPE.CIRCLE,
  containerWidth: scContainer1.offsetWidth,
  containerHeight: 309,
  imageForwardSrc: "https://placehold.co/500x400",
  imageBackgroundSrc: "https://placehold.co/500x400/orange/white?text=GANHOU",
  clearZoneRadius: 50,
  nPoints: 30,
  pointSize: 4,
  callback: function () {
    premiado += 1;
    checkForWin();
  },
});
const sc2 = new ScratchCard("#js-canvas-2", {
  scratchType: SCRATCH_TYPE.CIRCLE,
  containerWidth: scContainer2.offsetWidth,
  containerHeight: 309,
  imageForwardSrc: "https://placehold.co/500x400",
  imageBackgroundSrc: "https://placehold.co/500x400?text=PERDEU&font=roboto",
  clearZoneRadius: 50,
  nPoints: 30,
  pointSize: 4,
  callback: function () {
    perdeu += 1;
    checkForLose();
  },
});
const sc3 = new ScratchCard("#js-canvas-3", {
  scratchType: SCRATCH_TYPE.CIRCLE,
  containerWidth: scContainer3.offsetWidth,
  containerHeight: 309,
  imageForwardSrc: "https://placehold.co/500x400",
  imageBackgroundSrc:
    "https://placehold.co/500x400?text=NA PROXIMA&font=roboto",
  clearZoneRadius: 50,
  nPoints: 30,
  pointSize: 4,
  callback: function () {
    perdeu += 1;
    checkForLose();
  },
});

const sc4 = new ScratchCard("#js-canvas-4", {
  scratchType: SCRATCH_TYPE.CIRCLE,
  containerWidth: scContainer4.offsetWidth,
  containerHeight: 309,
  imageForwardSrc: "https://placehold.co/500x400",
  imageBackgroundSrc:
    "https://placehold.co/500x400?text=NAO FOI DESSA VEZ&font=roboto",
  clearZoneRadius: 50,
  nPoints: 30,
  pointSize: 4,
  callback: function () {
    perdeu += 1;
    checkForLose();
  },
});
const sc5 = new ScratchCard("#js-canvas-5", {
  scratchType: SCRATCH_TYPE.CIRCLE,
  containerWidth: scContainer5.offsetWidth,
  containerHeight: 309,
  imageForwardSrc: "https://placehold.co/500x400",
  imageBackgroundSrc: "https://placehold.co/500x400/orange/white?text=GANHOU",
  clearZoneRadius: 50,
  nPoints: 30,
  pointSize: 4,
  callback: function () {
    premiado += 1;
    checkForWin();
  },
});
const sc6 = new ScratchCard("#js-canvas-6", {
  scratchType: SCRATCH_TYPE.CIRCLE,
  containerWidth: scContainer6.offsetWidth,
  containerHeight: 309,
  imageForwardSrc: "https://placehold.co/500x400",
  imageBackgroundSrc: "https://placehold.co/500x400?text=PERDEU&font=roboto",
  clearZoneRadius: 50,
  nPoints: 30,
  pointSize: 4,
  callback: function () {
    perdeu += 1;
    checkForLose();
  },
});

console.log("fired");

// Init
sc1
  .init()
  .then(() => {
    sc1.canvas.addEventListener("scratch.move", () => {
      let percent = sc1.getPercent().toFixed(2);
    });
  })
  .catch((error) => {
    // image not loaded
    alert(error.message);
  });

sc2
  .init()
  .then(() => {
    sc2.canvas.addEventListener("scratch.move", () => {
      let percent = sc2.getPercent().toFixed(2);
    });
  })
  .catch((error) => {
    // image not loaded
    alert(error.message);
  });

sc3
  .init()
  .then(() => {
    sc3.canvas.addEventListener("scratch.move", () => {
      let percent = sc3.getPercent().toFixed(2);
    });
  })
  .catch((error) => {
    // image not loaded
    alert(error.message);
  });

sc4
  .init()
  .then(() => {
    sc4.canvas.addEventListener("scratch.move", () => {
      let percent = sc4.getPercent().toFixed(2);
    });
  })
  .catch((error) => {
    // image not loaded
    alert(error.message);
  });

sc5
  .init()
  .then(() => {
    sc5.canvas.addEventListener("scratch.move", () => {
      let percent = sc5.getPercent().toFixed(2);
    });
  })
  .catch((error) => {
    // image not loaded
    alert(error.message);
  });

sc6
  .init()
  .then(() => {
    sc6.canvas.addEventListener("scratch.move", () => {
      let percent = sc6.getPercent().toFixed(2);
    });
  })
  .catch((error) => {
    // image not loaded
    alert(error.message);
  });
