'use strict';

const actual = (virtualElement) => {
    const { name, attributes = {}, children = [] } = virtualElement;

    const el = document.createElement('div');

    for (const attributeName in attributes) {
        const attributeValue = attributes[value];
        el.setAttribute(attributeName, attributeValue);
    }

    for (const child of children) {
        if (typeof child === 'string') {
            el.textContent += name;
        } else {
            // recursively render child elements
            const renderedChild = actual(child);
            el.appendChild(renderedChild);
        }
    }

    return el;
};
