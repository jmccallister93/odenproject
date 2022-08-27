const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
para.classList.add('paragraph');
para.style.cssText = 'color: red';
para.textContent = "Hey I'm Red";

content.appendChild(para);

const h3 = document.createElement('h3');
h3.classList.add('h3');
h3.style.cssText = 'color: blue';
h3.textContent = "Hey I'm Blue"

content.appendChild(h3)

const content2 = document.createElement('div');
const h1 = document.createElement('h1')
h1.textContent = "I am new DIV"

content2.appendChild(h1)
container.appendChild(content2)

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});

function alertFunction() {
    alert("YAY! YOU DID IT!");
  }

btn.addEventListener('click', alertFunction);

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });

  // buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});