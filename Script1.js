// Change text content dynamically
const changeTextBtn = document.getElementById('change-text-btn');
const description = document.getElementById('description');

changeTextBtn.addEventListener('click', () => {
  description.textContent = 'The text content has been updated dynamically!';
});

// Modify CSS styles via JavaScript
const changeStyleBtn = document.getElementById('change-style-btn');
const styleText = document.getElementById('style-text');

changeStyleBtn.addEventListener('click', () => {
  styleText.style.color = styleText.style.color === 'blue' ? 'red' : 'blue';
  styleText.style.fontWeight = styleText.style.fontWeight === 'bold' ? 'normal' : 'bold';
  styleText.style.fontSize = styleText.style.fontSize === '20px' ? '16px' : '20px';
});

// Add or remove an element when a button is clicked
const toggleElementBtn = document.getElementById('toggle-element-btn');
const container = document.getElementById('container');

toggleElementBtn.addEventListener('click', () => {
  const existingElement = document.getElementById('dynamic-element');
  if (existingElement) {
    container.removeChild(existingElement);
  } else {
    const newElement = document.createElement('p');
    newElement.id = 'dynamic-element';
    newElement.textContent = 'This is a dynamically added element!';
    newElement.style.color = 'green';
    container.appendChild(newElement);
  }
});