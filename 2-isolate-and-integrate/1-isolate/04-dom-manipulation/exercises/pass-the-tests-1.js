'use strict';

const divEl = document.createElement('ul');
divEl.innerHTML = `
  <p></p>
  <section></section>
  <h1></h1>
`;
console.log(divEl.nodeName + ' (before)', divEl.cloneNode(true));

// --- write some code ---
//  replace the <p>
//  insert something before the <section>
//  remove the <h1>
//  append something to the end
const pReplaced = divEl.children[0];
const navReplace = document.createElement('nav');
divEl.replaceChild(navReplace, pReplaced);

const section = divEl.children[1];
const newP = document.createElement('h2');
divEl.insertBefore(newP, section);

const lastTag = divEl.children[3];
const h1Replace = document.createElement('p');
divEl.replaceChild(h1Replace, lastTag);

// --- --- --- --- --- ---

console.log(divEl.nodeName + ' (after)', divEl.cloneNode(true));

console.assert(divEl.childElementCount === 4, 'Test: .childElementCount');

console.assert(divEl.children[0].nodeName === 'NAV', 'Test: 1st child');
console.assert(divEl.children[1].nodeName === 'H2', 'Test: 2nd child');
console.assert(divEl.children[2].nodeName === 'SECTION', 'Test: 3rd child');
console.assert(divEl.children[3].nodeName === 'P', 'Test: 4th child');
