// Import stylesheets
import './style.css';

const f = (x) => { return 4 * x + 3; };  // disponibile solo in index.js

document.g = function() { 
  console.log("fatto"); 
  appDiv.innerHTML = 'Fatto'; 
  return; 
}

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
console.log(f(2))