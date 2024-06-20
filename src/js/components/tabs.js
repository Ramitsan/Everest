function handleLabel() {
  const forValue = event.target.getAttribute('for');
  if (event.code == 'Space' && forValue) {
    event.preventDefault();
    const el = document.getElementById(forValue);
    if (el) {
      el.checked = !el.checked
    }
  }
}

window.handleLabel = handleLabel;