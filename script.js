let vid = document.getElementById("DirGen"); 
let btn = document.getElementById("playBtn"); 

// function playVid() { 
//   vid.play(); 
//   btn.hidden = true;
// } 

// detect target found
const exampleTarget = document.querySelector('#example-target');
exampleTarget.addEventListener("targetFound", event => {
  console.log("target found");
  vid.load();
});

// detect target lost
exampleTarget.addEventListener("targetLost", event => {
  console.log("target lost");
});


