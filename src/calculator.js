function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

// Esto evita que el navegador lance un error, pero permite que Jest siga funcionando
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { sumar, restar };
}