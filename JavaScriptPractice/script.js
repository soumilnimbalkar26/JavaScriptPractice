// const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
// const appendAlert = (message, type) => {
//   const wrapper = document.createElement("div");
//   wrapper.innerHTML = [
//     `<div class="alert alert-${type} alert-dismissible" role="alert">`,
//     `   <div>${message}</div>`,
//     '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
//     "</div>",
//   ].join("");

//   alertPlaceholder.append(wrapper);
// };

// const alertTrigger = document.getElementById("liveAlertBtn");
// if (alertTrigger) {
//   alertTrigger.addEventListener("click", () => {
//     appendAlert("Nice, you triggered this alert message!", "success");
//   });
// }

// let ctitle = document.getElementById("firstcardtitle");
// ctitle.style.color = "red";

// searching with DOM

// let ctitles = document.querySelectorAll(".card-title");
// ctitles[0].style.color = "red";
// ctitles[1].style.color = "green";
// ctitles[2].style.color = "blue";
// console.log(ctitles);

// document.querySelector(".this").style.color = "cyan";
// document.querySelector(".this").style.background = "red";

// matches, closest and contains

// matches
// let id1 = document.getElementById("id1");
// let sp1 = document.getElementById("sp1");
// console.log(id1);

// console.log(id1.matches(".class"));
// console.log(id1.matches(".box"));

// closest
// console.log(sp1.closest(".box"));

// contains
// console.log(id1.contains(sp1));
// console.log(sp1.contains(id1));

// practice 7
// document.getElementsByTagName("ul")[0].firstElementChild.style.color = "red";
// document.getElementsByTagName("ul")[0].firstElementChild.style.color = "green";
// document.getElementsByTagName("ul")[0].lastElementChild.style.color = "green";

// Array.from(document.getElementsByTagName("li")).forEach((element) => {
//   element.style.background = "cyan";
// });

// jokes
// let myjokes = [
//   "What do you call a boomerang that won’t come back?A stick.",
//   "What does a cloud wear under his raincoat?Thunderwear.",
//   "Two pickles fell out of a jar onto the floor. What did one say to the other? Dill with it.",
//   "What time is it when the clock strikes 13?Time to get a new clock.",
//   "How does a cucumber become a pickle?It goes through a jarring experience.",
//   "What did one toilet say to the other?You look a bit flushed.",
//   "What do you think of that new diner on the moon?Food was good, but there really wasn’t much atmosphere.",
//   "Why did the dinosaur cross the road?Because the chicken wasn’t born yet.",
//   "What musical instrument is found in the bathroom?A tuba toothpaste.",
//   "Why did the kid bring a ladder to school?Because she wanted to go to high school.",
// ];

// let index = Math.floor(Math.random() * myjokes.length);
// console.log(index);

// let puns = document.getElementById("puns");
// puns.innerHTML = myjokes[index];

// let x = document.getElementsByTagName("span")[0];
// console.log(x); //returns an element
// let y = document.getElementsByTagName("span")[0];
// console.dir(y); //returns an object

// console.log(document.body.firstChild.nodeName);
// console.log(document.body.firstElementChild.nodeName);

// inner and outer HTML elements
// first.innerHTML;
// first.innerHTML = "<i>he i am span</i>";
// first.outerHTML;
// first.outerHTML = "<div>hey</div>";
// document.body.firstChild.data;
// console.log(document.body.textContent);
// first.hidden = false;

// attributes
// let first = document.getElementById("first");
// let a = first.getAttribute("class"); //used to get value of an attribute
// console.log(a);

// let b = first.hasAttribute("class"); //method to check existence of an attribute
// let c = first.hasAttribute("style"); //method to check existence of an attribute
// console.log(b);
// console.log(c);

// first.setAttribute("hidden", "true"); //sets an attribute
// first.setAttribute("class", "true sachin"); //sets an attribute
// first.removeAttribute("class"); //removes an attribute

// console.log(first.attributes);
// console.log(first.dataset);
// console.log(first.dataset.game);
// console.log(first.dataset.player);

// insertion

// let a = document.getElementsByTagName("div")[0];

// a.innerHTML = a.innerHTML + "<h1>Hello World!</h1>";

// let div = document.createElement("div");
// div.innerHTML = "<h1>Hello World!</h1>";
// a.append(div);
// a.prepend(div);
// a.before(div);
// a.after(div);
// a.replaceWith(div);

// insert adjacent text element and HTML
// let first = document.getElementById("first");
// first.insertAdjacentHTML("beforebegin", '<div class="test">beforebegin</div>');
// first.insertAdjacentHTML("beforeend", '<div class="test">beforeend</div>');
// first.insertAdjacentHTML("afterbegin", '<div class="test">afterbegin</div>');
// first.insertAdjacentHTML("afterend", '<div class="test">afterend</div>');

// let demo = document.getElementById("demo");
// demo.remove();

// ClassName and ClassList
// let first = document.getElementById("first");
// first.className = "bg-success text-light";
// first.className = "text-black red";
// first.classList.add("bg-success");
// first.classList.remove("bg-success");
// first.classList.contains("bg-success");
// first.classList.toggle("bg-success");

//setInterval and setTimeout
// alert("hello");
// let a = setTimeout(function () {
//   alert("I am timeout");
// }, 5000);
// clearTimeout(a);
// console.log(a);
// let b = prompt("do you want to run settimeout?");
// if ("no" === b) {
//   clearTimeout(a);
// }
// const sum = (a, b) => {
//   a + b;
//   console.log("I am running " + (a + b));
// };
// setTimeout(sum, 2000, 1, 2);
// const multiply = (c, d) => {
//   console.log("This is multiplication of " + c * d);
//   c * d;
// };
// setInterval(multiply, 2000, 3, 2);

//Browser Events
// let a = document.getElementsByClassName("container")[0];
// a.onclick = () => {
//   let b = document.getElementsByClassName("btn")[0];
//   b.innerHTML = "HelloWorld!";
// };

//Event Listeners
// let a = document.getElementById("mybtn");
// let x = function (event) {
//   console.log(event);
//   console.log(event.clientX, event.clientY);
//   alert("hello earth");
// };
// let y = function (e) {
//   alert("hello mars");
// };
// a.addEventListener("click", x);
// a.addEventListener("click", y);
// let z = prompt("What is your age");
// let n = parseInt(z);
// console.log(typeof n);
// if (n == 2) {
//   a.removeEventListener("click", x);
// }

//javascript chapter 8 practice

// let google = document.getElementById("google");
// google.addEventListener("click", function () {
//   window.location = "https://google.com";
// });
// let ig = document.getElementById("ig");
// ig.addEventListener("click", function () {
//   window.location = "https://instagram.com";
// });
// let twitter = document.getElementById("twitter");
// twitter.addEventListener("click", function () {
//   window.location = "https://twitter.com";
// });

// setInterval(function () {
//   document.querySelector("#bulb").classList.toggle("bg-warning");
// }, 100);

// Callbacks promises async await
//synchronous programming
// let a = prompt("What is your name")
// let b = prompt("What is your age")
// let c = prompt("What is your favourite color")
// console.log(a +" is " + b + " years old and his favourite color is "+ c);

//asynchronous programming
// console.log("start");
// setTimeout(function() {
//     console.log("hey I am good");
// },2000)
// console.log("end");

//callbacks
// function loadScript(url, callback) {
//   let script = document.createElement("script");
//   script.src = url;
//   script.onload = function () {
//     console.log("Loaded script with src SRC: " + url);
//     callback(url);
//   };
//   document.body.appendChild(script);
// }

// function hello(error, src) {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   alert("Hello World!" + src);
// }

// function goodmorning(error, src) {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   alert("Good morning" + src);
// }

// loadScript(
//   "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",
//   hello
// );

//callback hell and pyramid of doom

//promises

// let promise = new Promise(function (resolve, reject) {
//   alert("HelloPromise");
//   resolve(56);
// });

// console.log("hello one");
// setTimeout(function () {
//   console.log("HELLLO2!");
// }, 1000);
// console.log("Hello3");
// console.log(promise);

//.then and .catch
// let p1 = new Promise((resolve, reject) => {
//   console.log("promise is pending");
//   setTimeout(() => {
// console.log("I am a  promise and i am fulfilled");
//     resolve(true);
//   }, 2000);
// });
// let p2 = new Promise((resolve, reject) => {
//   console.log("promise is pending");
//   setTimeout(() => {
// console.log("I am a  promise and i am rejected");
//     reject(new Error("I am an error"));
//   }, 2000);
// });

// console.log(p1, p2);

//to get the value
// p1.then((value) => {
//   console.log(value);
// });
//to catch the error
// p2.catch((error) => {
//   console.log("some error occurred in p2");
// });

// p2.then(
//   (value) => {
//     console.log(value);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

//Chaining promises

// p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("resolved after 2 seconds");
//     resolve(56);
//   }, 2000);
// });

// p1.then((value) => {
//   console.log(value);
//   let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise 2");
//     }, 2000);
//   });
//   return p2;
// }).then((value) => {
//   console.log("we are done");
// });

//loadscript funtion quiz

// const loadScript = (src) => {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement("script");
//     script.type = "text/javascript";
//     script.src = src;
//     document.body.appendChild(script);
//     script.onload = () => {
//       resolve(1);
//   console.log("script loaded");
// };
// script.onerror = () => {
//   reject(0);
//   console.log("error");
//     };
//   });
// };

// let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js");
// p1.then((value) => {
//   console.log(value);
// }).catch((error)=>{
//     console.log("there was an error");
// })

//multiple handlers in promises
// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         alert("hey i am not resolve")
//         resolve(1)
//     },2000)
// })

// p1.then(()=>{
//     console.log("congratulations this promise is now resolved");
// })

// p1.then(()=>{
//     alert("Hurray");
// })

//promise API
//promise methods

// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("value1");
//     },11000)
// })

// let p2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         // resolve("value2");
//         reject(new Error("Error"))
//     },2000)
// })

// let p3 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("value3");
//     },2000)
// })

// let promise_all = Promise.all([p1,p2,p3]) //runs if all promises are resolved
// let promise_all = Promise.allSettled([p1,p2,p3]) //runs even if any one promise is resolved
// let promise_all = Promise.race([p1,p2,p3]) //runs the promise which is resolved first
// let promise_all = Promise.any([p1,p2,p3]) //runs the promise but does not returns error. Instead it returns value of the resolved promise
// promise_all.then((value)=>{
//     console.log(value);
// })

//async await
// async function harry() {
//   let delhiWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("27 Degrees");
//     }, 5000);
//   });
//   let bangaloreWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("21 Degrees");
//     }, 10000);
//   });

//   delhiWeather.then((alert))
//   bangaloreWeather.then((alert))
// console.log("Fetching delhi weather please wait...");
// let delhiW = await delhiWeather
// console.log("delhi weather fetched " + delhiW);
// console.log("Fetching bangalore weather please wait...");
// let bangaloreW = await bangaloreWeather
// console.log("bangalore weather fetched " + bangaloreW);

// return[delhiW,bangaloreW]

// }

// const cherry = async() =>{
//     console.log("I am waiting");
// }

// const main1 = async ()=>{
//     console.log("welcome to the weather control");
//     let a = await harry()
//     let b = await cherry()

// }

// main1()

//trycatch

// setTimeout(()=>{
//     console.log("value1");
// },1000)
// setTimeout(()=>{
//     console.log("value2");
// },2000)
// try {
//     console.log(number);
// } catch (error) {
//     console.log("error");
// }
// setTimeout(()=>{
//     console.log("value3");
// },3000)
// setTimeout(()=>{
//     console.log("value4");
// },4000)
// setTimeout(()=>{
//     console.log("value5");
// },5000)

//error objects and custom errors

// try {
//     throw new ReferenceError("Soumil is not well")
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
// }

//try catch finally

// const f=()=>{

// try {
//     let a = 0
//     console.log(program);
//     console.log("success");
//     return
// } catch (error) {
//     console.log("this is an error");
//     console.log(p);
// }
// finally{
//     console.log("I am a good boy");
// }
// }

// f()

// console.log("end");

//practice set chapter9

const loadScript = async (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(src + " done success");
    };
    document.head.append(script);
  });
};

//problem1

// let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js")

// a.then((value)=>{
//     console.log(value);
// })

//problem2
// const main2=async()=>{
//     console.log(new Date().getSeconds() );
//     let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js")
//     console.log(a);
//     console.log(new Date());

// }
// main2()

//problem3

// let p =()=>{
//     return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         reject(new Error("This is not acceptable"))
//     }, 2000)
// })
// }

// let a = async()=>{
//     try {
//         let c= await p()
//         console.log(c);
//     } catch (err) {
//         console.log(err);
//     }
// }

// a()

//problem 4
let p1 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
};
let p2 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(20);
    }, 2000);
  });
};
let p3 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(30);
    }, 3000);
  });
};


const run =async()=>{
    console.time("run");
    let a1= p1()
    
    let a2= p2()
    
    let a3= p3()
    
    let a1a2a3 = await Promise.all([a1, a2, a3])
    console.log(a1a2a3);
    // console.log(a1,a2,a3);
    console.timeEnd("run");

}

run()