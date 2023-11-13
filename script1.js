var istatus = document.querySelector("h5")
var add = document.querySelector("#add")
var pro = document.querySelector("#pro")
var flag = 0

add.addEventListener("click", function(){
    if(flag == 0){
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"
        flag = 1
        add.innerHTML = "Remove"
    }else{
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        flag = 0
        add.innerHTML = "Add Friend"
    }
})


// index2 //

pro.addEventListener("click", function(){
    // Check if the variable is 0 and show the popup
    if (flag === 0) {
        // Add your CSS styles for the popup
        var popup = document.createElement("div");
        popup.className = "popup";
        popup.textContent = "You both are not friends";
        document.body.appendChild(popup);

        // Remove the popup after a certain time (e.g., 3 seconds)
        setTimeout(function () {
          document.body.removeChild(popup);
        }, 2000);
      }else if (flag === 1) {
        // Redirect to index2.html if the variable is 1
        window.location.href = "feed.html";
      }
})
