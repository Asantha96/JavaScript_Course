let calculation = localStorage.getItem('calculation') || '';

function updateCalculation(value) {
  calculation += value;
  document.querySelector('.js-view').innerHTML = calculation;
  localStorage.setItem('calculation',calculation);
}
function clearAll() {
  calculation ='';
  localStorage.setItem('calculation', calculation);
  document.querySelector('.js-view').innerHTML = calculation;
}