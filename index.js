  let modeBtn = document.querySelector("button");
  let currMode = "light";


  modeBtn.addEventListener("click", () => {
    if( currMode === "light") {
        currMode = "dark";
    }else {
        currMode = "light";
    }
    console.log(currMode);
  });