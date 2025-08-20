// Get elements
const toggleIngBtn = document.getElementById('toggleIngredients');
const toggleStepsBtn = document.getElementById('toggleSteps');
const ingPanel = document.getElementById('ingredients');
const stepsPanel = document.getElementById('steps');

// Toggle function
function togglePanel(panel, button, label) {
  panel.classList.toggle('show');
  if (panel.classList.contains('show')) {
    button.textContent = "Hide " + label;
  } else {
    button.textContent = "Show " + label;
  }
}

// Hook up events
toggleIngBtn.addEventListener('click', () => togglePanel(ingPanel, toggleIngBtn, "Ingredients"));
toggleStepsBtn.addEventListener('click', () => togglePanel(stepsPanel, toggleStepsBtn, "Steps"));
