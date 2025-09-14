const element = document.getElementById("description");

function typeText(element, text, speed = 80) {
  element.textContent = ""; // Clear existing text
  let index = 0;

  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }

  type();
}

typeText(element, "Where in the world?", 40);
