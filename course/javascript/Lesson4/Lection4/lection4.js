//functions




document.write(`<div>`);
document.write(`<h2>some text1</h2>`);
document.write(`</div>`);

document.write(`<div>`);
document.write(`<h2>some text2</h2>`);
document.write(`</div>`);

document.write(`<div>`);
document.write(`<h2>some text3</h2>`);
document.write(`</div>`);


function xxx(textContent, tag) {
    document.write(`<div>`);
    document.write(`<${tag}>  ${textContent}  </${tag}>`);
    document.write(`</div>`);
}

xxx('blblblbbblblbba', 'h2');
xxx('afaffafafaf');


