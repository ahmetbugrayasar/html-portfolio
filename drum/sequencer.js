// Helper function to create the steps for the sequencer
function createStepElement(index) {
    const step = document.createElement("div");
    step.classList.add("step");
    step.dataset.index = index;
    return step;
  }
  
  // Get the steps container
  const stepsContainer = document.querySelector(".steps");
  
  // Create eight steps and append them to the steps container
  for (let i = 0; i < 8; i++) {
    const step = createStepElement(i);
    stepsContainer.appendChild(step);
  }
  
  // Get the drum buttons and add click event listeners to each
  const drumButtons = document.querySelectorAll(".drum-button");
  drumButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Get the sound associated with the button
      const sound = button.dataset.sound;
      // Toggle the 'active' class for the button to show selection
      button.classList.toggle("active");
      // Get the active steps for this drum sound
      const activeSteps = document.querySelectorAll(`.step.active[data-sound="${sound}"]`);
      // Do something with the active steps (e.g., play sound)
      console.log(`Sound: ${sound}, Active Steps: ${activeSteps.length}`);
    });
  });
  
  // Get all the steps and add click event listeners to each
  const steps = document.querySelectorAll(".step");
  steps.forEach((step) => {
    step.addEventListener("click", () => {
      // Toggle the 'active' class for the step to enable/disable sound for that step
      step.classList.toggle("active");
    });
  });