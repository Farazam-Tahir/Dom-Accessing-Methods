document.getElementById("heading1").innerHTML = "Heading 1";
document.getElementById("heading2").innerHTML = "Heading 2";
document.getElementById("heading3").innerHTML = "Heading 3";

let paragraph1 = document.getElementById("paragraph1");
paragraph1.innerHTML = "Paragraph 1";

let paragraph2 = document.querySelector("#paragraph2");
paragraph2.innerHTML = "Paragraph 2";

let paragraph3 = document.querySelector("#paragraph3");
paragraph3.innerHTML = "Paragraph 3";

let headings = document.querySelectorAll(".heading");
for (const i of headings) {
    let Styles = i.style;
    Styles.backgroundColor = "blue";
    Styles.color = "White";
    Styles.padding = "10px";
}

let paragraphs = document.querySelectorAll(".paragraph");
for (const i of paragraphs) {
    i.style.backgroundColor = "black";
    i.style.color = "White";
    i.style.padding = "10px";
}