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
