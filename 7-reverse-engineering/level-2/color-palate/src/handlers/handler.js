import domData from "../data.js";
const handler = (event) => {
    const selectedColor = event.target.value;
    domData.userInterface.style.backgroundColor = selectedColor;}

export default handler;