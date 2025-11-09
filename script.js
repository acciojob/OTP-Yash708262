// Select all input fields
const inputs = document.querySelectorAll(".code");

// Focus the first one on load
window.addEventListener("load", () => {
  inputs[0].focus();
});

inputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    const value = e.target.value;

    // Allow only digits
    if (/[^0-9]/.test(value)) {
      e.target.value = "";
      return;
    }

    // Move to next field if not the last one
    if (value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (input.value === "" && index > 0) {
        inputs[index - 1].value = "";
        inputs[index - 1].focus();
      } else {
        input.value = "";
      }
    }
  });
});
