// stories 
var arr = [
    {dp:"https://images.unsplash.com/photo-1682685797857-97de838c192e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:"https://images.unsplash.com/photo-1599557041284-7e2a15610388?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyZWV0JTIwcGhvdG9ncmFwaHl8ZW58MHwxfDB8fHww"},
    {dp:"https://images.unsplash.com/photo-1488034976201-ffbaa99cbf5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RyZWV0JTIwcGhvdG9ncmFwaHl8ZW58MHwxfDB8fHww",
    story:"https://images.unsplash.com/photo-1587303643465-55484e80e4ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN0cmVldCUyMHBob3RvZ3JhcGh5fGVufDB8MXwwfHx8MA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1573455494057-12684d151bf4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN0cmVldCUyMHBob3RvZ3JhcGh5fGVufDB8MXwwfHx8MA%3D%3D",
    story:"https://images.unsplash.com/photo-1615506367773-a71e33f5a4e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHN0cmVldCUyMHBob3RvZ3JhcGh5fGVufDB8MXwwfHx8MA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1682685797857-97de838c192e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:"https://images.unsplash.com/photo-1599557041284-7e2a15610388?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyZWV0JTIwcGhvdG9ncmFwaHl8ZW58MHwxfDB8fHww"},
]

var clutter = ""
arr.forEach(function(elem,idx){
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt=""></div>`
})

var stories = document.querySelector("#stories")
stories.innerHTML = clutter

stories.addEventListener("click", function(dets){
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none"
    },2000)
})



// post part //

var con = document.querySelector("#cont");
var love = document.querySelector("#ani");
var like = document.querySelector("#like");
var flag = 0;

function setupEventListeners() {
  con.addEventListener("dblclick", function () {
    love.style.transform = "translate(-50%, -50%) scale(1) rotate(15deg)";
    setTimeout(function () {
      love.style.transform = "translate(-50%, -50%) scale(0) rotate(0deg)";
    }, 1000);
    flag = 1;

    if (flag == 1) {
      like.style.color = "red";
    }
  });

  if (flag == 0) {
    like.addEventListener("click", function () {
      like.style.color = "red";
      flag = 1;
      setupEventListeners(); // Call the function again to update event listeners
    });
  }

  if (flag == 1) {
    like.addEventListener("click", function () {
      like.style.color = "white";
      flag = 0;
      setupEventListeners(); // Call the function again to update event listeners
    });
  }
}

// Call the function to set up initial event listeners
setupEventListeners();





// posts 
var con = document.querySelector("#cont");
var love = document.querySelector("#ani");
var like = document.querySelector("#like");
var flag = 0;

function setupEventListeners() {
  con.addEventListener("dblclick", function () {
    love.style.transform = "translate(-50%, -50%) scale(1) rotate(15deg)";
    setTimeout(function () {
      love.style.transform = "translate(-50%, -50%) scale(0) rotate(0deg)";
    }, 1000);
    flag = 1;

    if (flag == 1) {
      like.style.color = "red";
    }
  });

  if (flag == 0) {
    like.addEventListener("click", function(){
      like.style.color = "red";
      flag = 1;
      setupEventListeners(); // Call the function again to update event listeners
    });
  }

  if (flag == 1) {
    like.addEventListener("click", function(){
      like.style.color = "white";
      flag = 0;
      setupEventListeners(); // Call the function again to update event listeners
    });
  }
}

// Call the function to set up initial event listeners
setupEventListeners();
