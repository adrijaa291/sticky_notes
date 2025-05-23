// let name = prompt("Enter your name: ");
let color = document.getElementById("color");
let text = document.querySelector("#textarea");
let btn = document.getElementById("add");
let notes = document.getElementById("notes-container");
let refresh = document.getElementById("refresh");
let duplicate = document.getElementById("duplicate");
let msg = document.getElementById("message");
// let h1 = document.getElementById("name");
// h1.innerText = `Welcome, ${name}`


function addNote(){
    if(text.value === ""){
        alert("Please enter some text");
        return;
    }
    let div = document.createElement("div");
    let p = document.createElement("p");
    let deletebtn = document.createElement("button");
    deletebtn.id="delete-btn";

    div.style.height="10rem";
    div.style.width="10rem";
    div.style.borderRadius="10%"
    p.style.wordWrap="break-word";
    div.style.padding="10px"
    div.style.display="flex";
    div.style.flexDirection="column";
    div.style.border="2px solid black";
    div.appendChild(deletebtn);

    div.appendChild(p);

    deletebtn.innerText="X";
    deletebtn.style.width="2rem";
    deletebtn.style.padding="0.25rem";
    deletebtn.style.borderRadius="50%";
    deletebtn.style.marginLeft="8.5rem"
    p.innerText=text.value;
    div.style.backgroundColor=color.value;
    notes.appendChild(div);
    function xbtn(){
        div.remove();
        let divs = notes.querySelectorAll("div");
        if(divs.length != 0){
            msg.style.display="none";
        }else{
            msg.style.display="block";
        }

    }
    deletebtn.addEventListener("click", xbtn)
    let divs = notes.querySelectorAll("div");
    if(divs.length != 0){
    msg.style.display="none";
}

}   
// function dupnotes(){
//     notes.removeChild()
// }
function clear(){
    msg.style.display="block";
    let arr = notes.querySelectorAll("div")
    arr.forEach(d => d.remove())
}
btn.addEventListener("click", addNote);
// duplicate.addEventListener("click", dupnotes);
refresh.addEventListener("click", clear);

