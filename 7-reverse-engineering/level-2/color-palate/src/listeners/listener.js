import domData from "../data.js";
import handler from "../handlers/handler.js";

const initHandler = domData.colorInput.addEventListener('input', handler);

export default initHandler;

