import './reset.css';
import './styles.css';

document.addEventListener("input", (event) => {
    if (event.target.tagName.toLowerCase() === "textarea") {
      event.target.style.height = "auto"; // Reset height
      event.target.style.height = event.target.scrollHeight + "px"; // Set new height
    }
  });