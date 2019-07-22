const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const checkoutBtn = document.getElementById('checkout');

let fname = checkName(firstName.value);
let lname = checkName(lastName.value);
let mail = validateEmail(email.value);
if(fname && lname && mail === true){
    checkoutBtn.disabled = false;
    document.getElementById('custom-error').style.display = "none";
} else {
        document.getElementById('custom-error').style.display = "block";
};

document.getElementById("firstName").addEventListener("blur", function(event) {
    var value = document.getElementById("firstName").value;
    console.log("try1");
    if (value === "") {
        document.getElementById("firstName").setAttribute("style", "border: 1px solid red;");
    } else {
        document.getElementById("firstName").setAttribute("style", "border: 1px solid #777777;");
    }
});
document.getElementById("lastName").addEventListener("blur", function(event){
    var value=document.getElementById("lastName").value;
    console.log("try2");
    if (value === "") {
        document.getElementById("lastName").setAttribute("style" , "border: 1px solid red;");
    }
    else {
        document.getElementById("lastName").setAttribute("style", "border: 1px solid #777777;");
    }
});
document.getElementById("email").addEventListener("blur", function(event){
    var value=document.getElementById("email").value;
    console.log("try3");
    if (value === ""){
        document.getElementById("email").setAttribute("style", "border: 1px solid red;");
    }
    else{
        document.getElementById("email").setAttribute("style", "border: 1px solid #777777;");
    }
});
document.getElementById("firstName").addEventListener("blur", function(event){
    var value = document.getElementById("firstName").value;
    if (/^[a-zA-Z]+$/.test(value)) {
        document.getElementById("firstName").setAttribute("style", "border: 1px solid #777777;");
        console.log(/^[a-zA-Z]+$/.test(value));
        console.log('Hi');
    } else {
        document.getElementById("firstName").setAttribute("style", "border: 1px solid red;");
        console.log(/^[a-zA-Z]+$/.test(value));
        console.log('Bye');
    }
});
document.getElementById("lastName").addEventListener("blur", function(event) 
{var value = document.getElementById("lastName").value;
    if (/^[a-zA-Z]+$/.test(value)) {
        document.getElementById("lastName").setAttribute("style", "border: 1px solid #777777;");
        console.log(/^[a-zA-Z]+$/.test(value));

        console.log('Hi2');

    } else {
        document.getElementById("lastName").setAttribute("style", "border: 1px solid red;");
        console.log(/^[a-zA-Z]+$/.test(value));
        console.log('Bye2');
    }
});

document.getElementById("email").addEventListener("blur", function(event) {
    var value = document.getElementById("email").value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        document.getElementById("email").setAttribute("style", "border: 1px solid #777777;");
        console.log(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value));
        console.log('Hi3');

    } else {
        document.getElementById("email").setAttribute("style", "border: 1px solid red;");
        console.log(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value));
        console.log('Bye3');
    }
});

document.getElementById("phone").addEventListener("blur", function(event) {
    var value = document.getElementById("phone").value;
    if (/^[0-9]*$/.test(value)) {
        document.getElementById("phone").setAttribute("style", "border: 1px solid #777777;");
        console.log(/^[0-9]*$/.test(value));
        console.log('Hi4');

    } else {
        document.getElementById("phone").setAttribute("style", "border: 1px solid red;");
        console.log(/^[0-9]*$/.test(value));
        console.log('Bye4');
    }
});
/*  
let addButton = document.querySelectorAll(".add");

addButton.forEach((btn,i)=>{
   btn.addEventListener("click",function(event){
       let quant = document.getElementsByClassName("quantity").value;
       quant++;
       console.log(quant);
   })
});

let minusButton = document.querySelectorAll(".remove");
console.log("negative we have"+minusButton.length);
console.log(minusButton);
minusButton.forEach((btn,i)=>{
    btn.addEventListener("click", function(event){
        console.log(i);
    })
    
}); */
const removeBtn = document.getElementsByClassName('remove-item');
    const updateRow = function(event) {
        event.preventDefault();
        let target = event.target;
        console.log(target);
        let targetPrice = target.parentElement.parentElement.children[4].innerHTML;
        deleteRow(target);
        updatePrice(targetPrice);
}; 

for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener('click', updateRow, false);
};

const decreaseBtn = document.getElementsByClassName('remove');
const decreaseQuantity = function(event) {
    event.preventDefault();
    let target = event.target;
    let quantity = target.parentElement.children[1].innerHTML;
    console.log(quantity);
};

const increaseBtn = document.getElementsByClassName('add');
const increaseQuantity = function(event) {
    event.preventDefault();
    let target = event.target;
    let quantity = target.parentElement.children[1].innerHTML;
    console.log(quantity);
};

for(let i = 0; i < decreaseBtn.length; i++){
    decreaseBtn[i].addEventListener('click', decreaseQuantity, false);
};

for(let i = 0; i < increaseBtn.length; i++){
    decreaseBtn[i].addEventListener('click', decreaseQuantity, false);
};

/* final price update */
const updatePrice = (targetPrice) => {
    let total = document.getElementsByClassName('total')[0];
    total.innerHTML = total.innerHTML - targetPrice;
};

/* delete row for removed items */
const deleteRow = (target) => {
    target.parentElement.parentElement.style.display = "none";
};

function checkName(name) {
    let letters = "^[a-zA-Z]*$";
    if (name.length > 4 && name.match(letters)){
        return true;
    } else {
        return false;
    }
};

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
};