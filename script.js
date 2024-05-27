document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('button').addEventListener('click', ()=>{
        console.log('You clicked me!')
    });
});

const colorBox = document.getElementById("colorBox");
const changeColorBtn = document.getElementById("changeColorBtn");


    
function getRandomColor () {
    body.style.backgroundColor = "#ffffff";
}


changeColorBtn.addEventListener("click", () => {
    function getRandomColor () {
        colorBox.style.backgroundColor = "solid red";
    }
})


