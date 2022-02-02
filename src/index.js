import 'bootstrap/dist/css/bootstrap.min.css';

import  "./header/headerComponent";

import createCard from './card/card';
var container= document.getElementsByClassName("container")[1]
var row=document.createElement("div")
row.className="row"
createCard("text-white","bg-dark",row,"This is heading","and an even wittier subheading","bg-white")
createCard("text-dark","bg-white",row,"This is another heading","and an even wittier subheading","bg-dark")
container.appendChild(row)
var row=document.createElement("div")
row.className="row"
createCard("text-white","bg-warning",row,"This is heading","and an even wittier subheading","bg-white")
createCard("text-warning","bg-white",row,"This is another heading","and an even wittier subheading","bg-warning")
container.appendChild(row)
var row=document.createElement("div")
row.className="row"
createCard("text-white","bg-secondary",row,"This is heading","and an even wittier subheading","bg-white")
createCard("text-secondary","bg-white",row,"This is another heading","and an even wittier subheading","bg-secondary")
container.appendChild(row)
var row=document.createElement("div")
row.className="row"
createCard("text-white","bg-primary",row,"This is heading","and an even wittier subheading","bg-white")
createCard("text-primary","bg-white",row,"This is another heading","and an even wittier subheading","bg-primary")
container.appendChild(row)