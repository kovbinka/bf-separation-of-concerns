'use strict';

const actual = (argsObj) => {
    const divEl = document.createElement('div');
    divEl.className = 'thumbnail-container';

    const aEl = document.createElement('a');
    aEl.className = 'thumbnail to-the-right';
    aEl.target = 'A';
    aEl.href = argsObj.url;
    divEl.appendChild(aEl);

    const imgEl = document.createElement('img');
    imgEl.className = 'thumbnail to-the-right';
    imgEl.src = argsObj.url;
    imgEl.alt = `the color ${argsObj.color}`;
    aEl.appendChild(imgEl);

    return divEl;
};
