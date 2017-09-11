window.onload = function() {
  document.getElementById('plus-icon').onclick = function() {
    toggleMenu();
  }

  function toggleMenu() {
    toggleBubbleOne();
    toggleBubbleTwo();
    toggleBubbleThree();

    var plus = document.getElementById('plus-icon');

    if(plus.style.transform != 'rotate(45deg)') {
      plus.style.transform = 'rotate(45deg)';
    } else {
      plus.style.transform = 'rotate(0deg)';
    }
  }

  function toggleBubbleOne() {
    var bubbleOne = document.getElementById('bubble-one');

    if(bubbleOne.style.transform != 'translate(-6rem, -6rem)') {
      bubbleOne.style.transform = 'translate(-6rem, -6rem)';
    } else {
      bubbleOne.style.transform = 'translate(0rem, 0rem)';
    }
  }

  function toggleBubbleTwo() {
    var bubbleTwo = document.getElementById('bubble-two');

    if(bubbleTwo.style.transform != 'translateY(-8rem)') {
      bubbleTwo.style.transform = 'translateY(-8rem)';
    } else {
      bubbleTwo.style.transform = 'translateY(0rem)';
    }
  }

  function toggleBubbleThree() {
    var bubbleThree = document.getElementById('bubble-three');

    if(bubbleThree.style.transform != 'translate(6rem, -6rem)') {
      bubbleThree.style.transform = 'translate(6rem, -6rem)';
    } else {
      bubbleThree.style.transform = 'translate(0rem, 0rem)';
    }
  }

};
