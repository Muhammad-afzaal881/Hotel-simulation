let landing_page = document.getElementById("landing_page")
let Questionpage = document.getElementById("main")
let menu_card =document.getElementById("menu")
let input =document.getElementById("input")
let order_card =document.getElementById("order")
let q1 =document.getElementById("q1")
let q2 =document.getElementById("q2")
let q3 =document.getElementById("q3")
let q4 =document.getElementById("q4")
let q5 =document.getElementById("q5")
let q6 =document.getElementById("q6")
let q7 =document.getElementById("q7")
let q8 =document.getElementById("q8")
let bttn =document.getElementById("bttn")
let btn =document.getElementById("btn")
let button =document.getElementById("button")
let Payment_card =document.getElementById("Payment")
const orderBox = document.getElementById('orderBox');
const orderDetails = document.getElementById('orderDetails');

function main(){
    landing_page.style.display ="none"
    Questionpage.style.display = "block"
     q1.style.display = "block"
}

function like(){
    q1.style.display = "none"
    q2.style.display = "block"
}

function notlike(){
    q1.style.display = "none"
    q5.style.display = "block"
}

function soft(){
    q1.style.display = "none"
    q2.style.display = "none"
    q3.style.display = "block"
}

function hard(){
    q2.style.display = "none"
    q4.style.display = "block"
    q1.style.display = "none"
}

function sprite(){
    q1.style.display = "none"
    q2.style.display = "none"
    q3.style.display = "none"
    q4.style.display = "none"
    q5.style.display = "block"
}

function special(){
    q1.style.display = "none"
    q2.style.display = "none"
    q3.style.display = "none"
    q4.style.display = "none"
    q5.style.display = "none"
    q6.style.display = "block"
    
}
function menucard(){
     q1.style.display = "none"
    q2.style.display = "none"
    q3.style.display = "none"
    q4.style.display = "none"
    q5.style.display = "none"
    q6.style.display = "none"
    q7.style.display = "none"
    menu_card.style.display ="block"
}

function order(){
     q1.style.display = "none"
    q2.style.display = "none"
    q3.style.display = "none"
    q4.style.display = "none"
    q5.style.display = "none"
    q6.style.display = "none"
    q7.style.display = "none"
    menu_card.style.display ="none"
    order_card.style.display ="block"
}

let menuselection = {
    "Caesar Salad ": 300,
    "Tomato Soup" : 950,
    "Garlic Bread": 400,
    "Grilled Chicken": 1200,
    "Margherita Pizza":1150,
    "Spaghetti Bolognese" : 1740,
    "Chocolate Lava Cake" : 200,
    "Cheesecake" :250,
    "Fruit Salad" : 355,
    "Cola" :90,
    "Lemonade" :120
    , "Iced Tea": 170,
    "Mineral Water": 60
}

function orderpass(){
    let userInput = input.value.trim()
     if (userInput === "") {
        alert("Plz enter order")
     }else if(userInput in menuselection){
        let ordername = userInput
        orderDetails.append(userInput)
        orderDetails.innerHTML = `You have ordered <strong>${ordername}</strong> for <strong>Rs. ${menuselection[userInput]}</strong>.`;
        orderBox.style.display = 'block';
        userInput =""
        order_card.style.display ="none"
        btn.style.display ="block"
     }
}
function askAgain() {
    orderBox.style.display = 'none';
    order_card.style.display = 'block';
    q8.style.display = "none"

}
function pay(){
    order_card.style.display ="none"
    Payment_card.style.display ="block"
    btn.style.display ="none"
    orderBox.style.display ="none"
     q8.style.display = "none"
}

function suggestion(){
         q1.style.display = "none"
    q2.style.display = "none"
    q3.style.display = "none"
    q4.style.display = "none"
    q5.style.display = "none"
    q6.style.display = "none"
    q7.style.display = "none"
    q8.style.display = "block"
    menu_card.style.display ="none"
    order_card.style.display ="none"
    Payment_card.style.display ="none"
    btn.style.display ="none"
    orderBox.style.display ="none"
}
let billsession = document.getElementById("bill-container")
function bill(){
   alert("Payment recived succesfull")
   Payment_card.style.display= "none"
   landing_page.style.display ="block"
}
function main(){
    landing_page.style.display ="none"
    Questionpage.style.display = "block"
     q1.style.display = "block"
}