function func() {
    "use strict";
    var arr = [];
    arr.push(1);
    arr.push(10);
    arr.push(200)
    arr.pop();
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    console.log(sum);
    console.warn("This is a warning message");
    console.error("This is an error message");
    console.table(arr);
    eval("console.log('This is an eval message');");

    
    var x = 10; 
    console.log(x);

    let obj = { name: "TSK" }
    let str = JSON.stringify(obj);
    console.log(str);
    let obj2 = JSON.parse(str);
    console.log(obj2);

    localStorage.setItem("name", "saran");
    localStorage.setItem("passsword", "saranm@gmail.com");
    localStorage.setItem("age", "20");
    console.log(localStorage.getItem("name"));
    localStorage.removeItem("age");
    console.log(localStorage.getItem("age"));
    sessionStorage.setItem("name", "saran");
    sessionStorage.setItem("passsword", "saranm@gmail.com");
    sessionStorage.setItem("age", "20");
    console.log(sessionStorage.getItem("name"));
    let promise = new Promise((resolve, reject) => {
        let commit = true;
        setTimeout(() => { resolve("hello") }, 10000);
        if (commit) {
            resolve("Promise resolved");
        } else {
            reject("Promise rejected");
        }
    });
    promise.then((value) => { console.log(value); }).catch((error) => { console.error(error); });

    function outer() {
        let name = "saran";
        return function inner() {
            console.log("Hello " + name);
        }
    }
    
    let body = document.getElementById("DOM");
    console.log(body);
    body.innerHTML = "<h2>Welcome saran</h2>";
    body.style.color = "red";
    body.style.backgroundcolor = "aqua";

    
    let cl = document.querySelector(".classDOM");
    console.log(cl);

    let newele = document.createElement("h1");
    newele.innerText = "saran"  
    body.appendChild(newele);
    setTimeout(() => {
        body.removeChild(newele);
    }, 10000);
   
    ele.innerHTML = "<h1>Hello World</h1";
    divDom.appendChild(ele);
    console.log(ele.innerHTML);
    let body1 = document.getElementById("dom");
    console.log(body1);
    let newe = document.createElement("h2");
    newe.innerText = "Hi,This is saran here!";


    let newele2 = document.createElement("h2");
    newele1.innerText = "I am pursuing my B.E in Electronics and Instrumentation Enginnering at Kongu Engineering College,Perundurai,Erode.";
    setTimeout(() => { body.appendChild(newele2); }, 1000);
    setTimeout(() => { body.removeChild(newele2); }, 5000);

    let newele1 = document.createElement("h2")
    newele1.innerText = "Seeking for an InternShip";
    setTimeout(() => { body.appendChild(newele1); }, 5000);
    setTimeout(() => { body.removeChild(newele1); }, 10000);

    let obj1 = document.getElementById("event");
    obj1.addEventListener("click", () => {
        obj1.innerText = "clicked";
    });


}