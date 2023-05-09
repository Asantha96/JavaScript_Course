function changeStyle(buttonName) {
  /*const buttonElement = document.querySelector(`.${buttonName}`);
  
  if (!buttonElement.classList.contains('js-is-toggled')) {
    buttonElement.classList.add('js-is-toggled');
  }else{
    buttonElement.classList.remove('js-is-toggled');
  }*/
  const gamingElement = document.querySelector('.gaming-button');
  const musicElement = document.querySelector('.music-button');
  const techElement = document.querySelector('.tech-button');

  if (buttonName === 'gaming-button'){
    gamingElement.classList.add('js-is-toggled');
    musicElement.classList.remove('js-is-toggled');
    techElement.classList.remove('js-is-toggled');
  } 
  else if (buttonName === 'music-button'){
    musicElement.classList.add('js-is-toggled');
    gamingElement.classList.remove('js-is-toggled');
    techElement.classList.remove('js-is-toggled');
  } 
  else{
    techElement.classList.add('js-is-toggled');
    musicElement.classList.remove('js-is-toggled');
    gamingElement.classList.remove('js-is-toggled');
  }
    
  
}