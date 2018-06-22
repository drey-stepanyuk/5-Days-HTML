window.onload = function () {
    var plus = document.getElementById('plus-icon');
    plus.onclick = function () {
        toggleMenu();
        toggleBubbles();
    }

    function toggleMenu() {
        if (plus.style.transform != 'rotate(45deg)') {
            plus.style.transform = 'rotate(45deg)';
        } else {
            plus.style.transform = 'rotate(0deg)';
        }
    }

    function toggleBubbles() {
        var bubbles = document.querySelectorAll('.bubble');

        bubbles.forEach(function (bubble) {
            var defaultAtr = 'translate(0, 0)';

            if (bubble == bubbles[0]) {
                if (bubble.style.transform != 'translate(-6rem, -6rem)') {
                    bubble.style.transform = 'translate(-6rem, -6rem)';
                } else {
                    bubble.style.transform = defaultAtr;
                }
            } else if (bubble == bubbles[1]) {
                if (bubble.style.transform != 'translateY(-8rem)') {
                    bubble.style.transform = 'translateY(-8rem)'
                } else {
                    bubble.style.transform = defaultAtr;
                }
            } else if (bubble == bubbles[2]) {
                if (bubble.style.transform != 'translate(6rem, -6rem)') {
                    bubble.style.transform = 'translate(6rem, -6rem)';
                } else {
                    bubble.style.transform = defaultAtr;
                }
            }

        });
    }

};
