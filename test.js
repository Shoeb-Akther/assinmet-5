
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
let day = days[d.getDay()];

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const M = new Date();
let month = months[M.getMonth()];
let date = new Date().getDate()
let year = new Date().getFullYear()
let text = document.getElementById("dateId").innerHTML = `${day} ,<br>
 <span  class="font-bold text-xl color">${month}  ${date} ${year}</span>`;


let buttonS = document.querySelectorAll(".comonBtn");
let Count = 0;
let number = convarterNumber("six")
let number1 = convarterNumber("twentythree")

for (let i = 0; i < buttonS.length; i++) {
    buttonS[i].addEventListener("click", function() {
            // alert("Board Updated successfuly")
            this.style.backgroundColor = "#ced6ff";
            this.style.color = "#fff";
            this.disabled = true;
            Count++;
            number--
            number1++
            let botton = buttonS[i];
            let button1p = botton.parentElement
            let button2p = button1p.parentElement
            let button3p = button2p.parentElement
            let button4p = button3p.parentElement
            let secondChild = button4p.querySelector(':nth-child(2)'); 
            let secondChild2 = secondChild.querySelector(':nth-child(1)').innerHTML; 

            if (Count === buttonS.length) { alert("All buttons are now disabled!");}
            let strtext = convarterstring(number)
            let strtext1 = convarterstring(number1)
            document.getElementById("six").innerText = strtext;
            document.getElementById("twentythree").innerText = strtext1;

           let div = document.createElement("div");
           div.innerHTML = `<div class="rounded-lg p-3 globalColor mb-7" ><p>You have Complete The Task ${secondChild2} at 12:48:15 PM</p></div>`;
           document.getElementById("prantNotification").appendChild(div)

        
            
            console.log(div);
    });
}

function convarterNumber(id) {
    let text = document.getElementById(id).innerText;
    let parcflote = parseFloat(text)
    return parcflote
}
function convarterstring(value) {
    let toString = value.toString()
    return toString
}



// custom section
document.getElementById("custom").addEventListener("click",function () {
    window.location.href ="newWindow.html"
})

//  Ramdome color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
document.getElementById("colorpad").addEventListener("click",function () {
    document.getElementById("random").style.backgroundColor = getRandomColor()
})