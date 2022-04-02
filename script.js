const quizBox = document.querySelector(".quiz_box");
const nextBtn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");
const optionList = document.querySelector(".option_list");


const range_btn = document.querySelector('.range_btn');
const names = document.querySelector('.names');
const age = document.querySelector('.age');
const age_btn = document.querySelectorAll('.age_btn button');
const gender = document.querySelector('.gender');
const gender_btn = document.querySelectorAll('.gender_btn button');
const student = document.querySelector('.student');
const student_btn = document.querySelectorAll('.student_btn button');

var disp = document.getElementById('quiz_box');
//var a = quizBox.getAttribute("display");
let counter;
let counterLine;
let que_count = 0;
let que_numb = 0;
let widthValue = 0;
let sumIA = 0;
let sumHappy = 0;
let sumSE = 0;
let increment = Math.floor(Math.random() * 10);

answers= {};
wartosc= null;

// po prostu obj aby mieć zapisane te odpowiedzi
const participant = {
    age: null,
    gender: null,
    student: null, 
    ansIA: null,
    ansHappy: null,
    ansSE: null
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCH0BbtPEORMMM2UWxc2b1ZCBpwp-luHL8",
  authDomain: "ankieta-raim.firebaseapp.com",
  databaseURL: "https://ankieta-raim-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ankieta-raim",
  storageBucket: "ankieta-raim.appspot.com",
  messagingSenderId: "557619376772",
  appId: "1:557619376772:web:dd6136b34cc506b34f88d1",
  measurementId: "G-RPB9C1MRJH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import {getDatabase, ref, set, child, update, remove}
from "firebase/database"

const db = getDatabase();

function InsertData(){
    set(ref(db, "user/" + increment),{
        Age: participant.age,
        Gender: participant.gender, 
        Student: participant.student, 
        Answers1: answers, 
        AnsIA: participant.ansIA, 
        AnsHAPPY: participant.ansHappy, 
        AnsSE: participant.ansSE
    })
    .then(()=>{
        alert("data stored successfully");
    })
    .catch((error)=>{
        alert("unsuccessfull, error" + error);
    });
}


nextBtn.onclick = () => {
    // pierw sprawdza czy masz zaznaczone wszystko 

    if (ifSelected() == false) {
        console.log("false");
        alert("Please select all options")
        // tutaj jak nie ma to rzuca alert idk mozesz dac jakis czerwony tekst gdzies czy cos 

    } else if (ifSelected() == true) {
        // jesli nie ma problemu to lecimy dalej 
        // masz opisane nizej co to 
        clearDom();
        // teraz trzeba sprawdzic czy to jest pierwsze pytanie czy nastepne 
        // bo jesli bedzie to 0 to wtedy przed kliknieciem next za pierwszym razem 
        // to nie ma jeszcze wpisanych odpowiedzi
        if (que_count == 0) {
            displayQuestion1();
            saveOptAnswers();
        } else if (que_count != 0) {
            if (ifOptSelected() == false) {
                console.log('false');
                alert("Please select an option")
                // tutaj gdyby sie zaczelo od 0 to by nie przeszlo 

            } else if (ifOptSelected() === true) {
                if (que_count < questions.length) {
                    // no i dalej robi to ale to tez masz opisane
                    displayQuestion1();
                    saveOptAnswers();

                }else{                    
                    // wartosc = Object.values(participant.answers); //przekonwertowanie obiektu answers do tablicy
                    wartosc = Object.values(answers);
                    for( i = 0; i < wartosc.length; i++){
                        compareS(wartosc[i]);
                        //console.log(wartosc[i], sumIA);
                        participant.ansIA = sumIA;
                        participant.ansHappy = sumHappy;
                        participant.ansSE = sumSE;
                    }
                    console.log(participant.age, participant.gender, participant.student, answers, participant.ansIA, participant.ansHappy, participant.ansSE);
                    //sendD();
                    InsertData();
                    //alert("Dziękujemy za wypełnienie ankiety :)")
                }
            }
        }
    }

}

// function writeUserAns(userId,a, g, s, o, x, y, z){
//     firebase.database().ref('users/' + userId).set({

//     })
// }

function sendD() {
     // Get the reciever endpoint from Python using fetch:
    fetch("http://alicja.pythonanywhere.com/", 
    {
    method: 'POST',
    headers: {
    'Content-type': 'application/json',
    'Accept': 'application/json'
    },
    // Strigify the payload into JSON:
    body:JSON.stringify(participant)}).then(res=>{
    if(res.ok){
    return res.json()
    }else{
    alert("something is wrong")
    }
    }).then(jsonResponse=>{
    
    // Log the response data in the console
    console.log(jsonResponse)
    } 
    ).catch((err) => console.error(err));   

}

function clearDom() {

    // czyści i usuwa zbędne elementy 
    optionList.style.display = "flex"
    age.remove("show");
    age_btn.forEach(btn => btn.remove("show"));
    gender.remove("show");
    gender_btn.forEach(btn => btn.remove("show"));
    student.remove("show");
    student_btn.forEach(btn => btn.remove("show"));
}

function displayQuestion1() {
    // wrzuciłam to w funkcję aby było czytelniej 

    que_numb++;
    showQuetions(que_count);
    que_count++;
    queCounter(que_numb);
    clearInterval(counter);
    clearInterval(counterLine);
}



function savePersonAnswers() {
    // tutaj kazdy robi to samo tzn


    // dodaje event listener dla kazdego przycisku
    age_btn.forEach(btn => btn.addEventListener('click', () => {

        // usuwa jakby gdzies indziej byl juz zaznaczony
        age_btn.forEach(btn => btn.removeAttribute('id', 'selected'))
        // daje efekt zaznaczenia
        btn.setAttribute('id', 'selected')

        // no i tutaj zmienia aby ci sie zapisalo kto i co 
        participant.age = btn.innerHTML

    }))

    gender_btn.forEach(btn => btn.addEventListener('click', () => {
        gender_btn.forEach(btn => btn.removeAttribute('id', 'selected'))
        btn.setAttribute('id', 'selected')
        participant.gender = btn.innerHTML

    }))

    student_btn.forEach(btn => btn.addEventListener('click', () => {
        student_btn.forEach(btn => btn.removeAttribute('id', 'selected'))
        btn.setAttribute('id', 'selected')
        if (btn.innerHTML == 'Tak') {
            participant.student = true
        } else {
            participant.student = false
        }

    }))
}

function ifSelected() {
    // aby nie spradzac kazzdego po kolei to jezeli ktores z tych ponizej nie bedzie zaznaczony to F zwraca false
    if (participant.age === null || participant.gender === null || participant.student === null) {
        return false
    } else return true
}


function ifOptSelected() {
    // tutaj sprawdza czy ta osoba juz wybrała opcje a jak nie to po prostu F zwraca false
    // if (participant.answers[questions[que_count - 1].numb] === undefined) {  
        if (answers[questions[que_count - 1].numb] === undefined) {   
        return false
    } else return true
}

function showQuetions(index) {
    // pierw czyści aby było miejsce na nowe pytania
    optionList.innerHTML = ""
    // potem dodaje pytanie w tytule
    const que_text = document.querySelector(".que_text");
    let que_tag = `${questions[index].numb}. ${questions[index].question}`
    que_text.innerHTML = que_tag;

    // tutaj dałam loop aby renderowało tyle opcji ile jest w pytaniu czyli jak masz 5 opcji to pokaze 5 a jak 100 to 100 a nie ze bedziesz dodawać
    // jeden po jednym xd
    for (i = 0; i < questions[index].options.length; i++) {

        let optionEl = document.createElement("option")
        let optionTag = `${questions[index].options[i]}`
        optionEl.innerHTML = optionTag;
        optionEl.classList.add("option")
        optionEl.setAttribute('id', 'option-element')
        optionList.appendChild(optionEl)

        
    }
}




function queCounter(index) {
    //Updates Question Counter
    let totalQueCounTag = `${index} z ${questions.length}`;
    bottom_ques_counter.innerHTML = totalQueCounTag;
}

function saveOptAnswers() {
    const optionElement = document.querySelectorAll('#option-element')

    // Assignes choosen option to object
    optionElement.forEach(element => element.addEventListener('click', () => {
        // tutaj - 1 musi byc bo masz zle ponumerowane w sensie index zaczyna sie od 0 xd
        // participant.answers[questions[que_count - 1].numb] = element.innerHTML
        answers[questions[que_count - 1].numb] = element.innerHTML
    }))

    // Adds class to selected option
    optionElement.forEach(btn => btn.addEventListener('click', () => {
        optionElement.forEach(btn => btn.removeAttribute('id', 'selected'))
        btn.setAttribute('id', 'selected')
    }))

}

function compareS(odp){
    //odp na IA
    var stringNever = "Nigdy";
    var stringRarely = "Rzadko";
    var stringSometimes = "Czasami";
    var stringOften = "Często";
    var stringAlways = "Zawsze";
    //odp na depresje

    //odp na self esteem
    var stringSz = "Stanowczo się zgadzam";
    var stringZ = "Zgadzam się";
    var stringNmz = "Nie mam zdania";
    var stringNzs = "Nie zgadzam się";
    var stringSnz = "Stanowczo się nie zgadzam";

    // var stringSz1 = "Stanowczo się zgadzam.";
    // var stringZ1 = "Zgadzam się.";
    // var stringNmz1 = "Nie mam zdania.";
    // var stringNzs1 = "Nie zgadzam się.";
    // var stringSnz1 = "Stanowczo się nie zgadzam.";

    var stringX = "Bardzo nieszczęsliwy/a";
    var stringX1 ="Trochę nieszczęśliwy/a";
    var stringX2 ="Obojętny/a";
    var stringX3 ="Trochę szczęśliwy/a";
    var stringX4 ="Bardzo szczęśliwy/a";

    var stringY ="Zdecydowanie się z nim nie identyfikuję";
    var stringY1 ="Raczej się z nim nie identyfikuję";
    var stringY2 ="Nie potrafię określić";
    var stringY3 ="Uważam, że częściowo mam takie samo nastawienie";
    var stringY4 ="Zdecydowanie się z nim identyfikuję";

    // var stringY0 ="Zdecydowanie się z nim nie identyfikuję.";
    // var stringY10 ="Raczej się z nim nie identyfikuję.";
    // var stringY20 ="Nie potrafię określić.";
    // var stringY30 ="Uważam, że częściowo mam takie samo nastawienie.";
    // var stringY40 ="Zdecydowanie się z nim identyfikuję.";

    var string = odp.toString();
    var stringk = 'k';

    if(stringNever == string){   
        sumIA += 1;
    }else if(stringRarely == string){
        sumIA += 2;
    }else if(stringSometimes == string){
        sumIA += 3;
    }else if(stringOften == string){
        sumIA += 4;
    }else if(stringAlways == string){
        sumIA += 5;
    } 
    
    if(stringSnz == string){   
        sumHSE += 1;
    }else if(stringNzs == string){
        sumSE += 2;
    }else if(stringZ == string){
        sumSE += 3;
    }else if(stringSz == string){
        sumSE+= 4;
    }

    if(stringSnz.concat(stringk) == string){   
        sumSE += 4;
    }else if(stringNzs.concat(stringk) == string){
        sumSE += 3;
    }else if(stringZ.concat(stringk) == string){
        sumSE += 2;
    }else if(stringSz.concat(stringk) == string){
        sumSE += 1;
    }

    if(stringX == string){   
        sumHappy += 1;
    }else if(stringX1 == string){
        sumHappy += 2;
    }else if(stringX3 == string){
        sumHappy += 3;
    }else if(stringX4 == string){
        sumHappy += 4;
    }

    if(stringY == string){   
        sumHappy += 1;
    }else if(stringY1 == string){
        sumHappy += 2;
    }else if(stringY3 == string){
        sumHappy += 3;
    }else if(stringY4 == string){
        sumHappy += 4;
    }

    if(stringY.concat(stringk) == string){   
        sumHappy += 4;
    }else if(stringY1.concat(stringk) == string){
        sumHappy += 3;
    }else if(stringY3.concat(stringk) == string){
        sumHappy += 2;
    }else if(stringY4.concat(stringk) == string){
        sumHappy += 1;
    }
  
}
savePersonAnswers();