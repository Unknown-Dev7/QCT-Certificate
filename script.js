document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener('keydown', function(e) {
  if ((e.ctrlKey && ['s', 'u', 'c', 'p'].includes(e.key.toLowerCase())) || e.key === "F12") {
    e.preventDefault();
  }
});