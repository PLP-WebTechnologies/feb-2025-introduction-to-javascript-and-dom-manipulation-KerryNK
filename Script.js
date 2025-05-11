// Change text content dynamically
const changeTextBtn = document.getElementById('change-text-btn');
const description = document.getElementById('description');

if (changeTextBtn && description) {
  changeTextBtn.addEventListener('click', () => {
    description.textContent = 'The text content has been changed dynamically!';
  });
}

// Modify CSS styles via JavaScript
const changeStyleBtn = document.getElementById('change-style-btn');
const styleText = document.getElementById('style-text');

if (changeStyleBtn && styleText) {
  changeStyleBtn.addEventListener('click', () => {
    styleText.style.color = styleText.style.color === 'blue' ? 'green' : 'blue';
    styleText.style.fontWeight = styleText.style.fontWeight === 'bold' ? 'normal' : 'bold';
    styleText.style.fontSize = styleText.style.fontSize === '20px' ? '16px' : '20px';
  });
}

// Add or remove an element when a button is clicked
const toggleElementBtn = document.getElementById('toggle-element-btn');
const container = document.getElementById('container');

if (toggleElementBtn && container) {
  toggleElementBtn.addEventListener('click', () => {
    const existingElement = document.getElementById('dynamic-element');
    if (existingElement) {
      container.removeChild(existingElement);
    } else {
      const newElement = document.createElement('p');
      newElement.id = 'dynamic-element';
      newElement.textContent = 'I am a new element added dynamically!';
      newElement.style.color = 'purple';
      container.appendChild(newElement);
    }
  });
}
