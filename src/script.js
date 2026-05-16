
    const typingText = [
      'PCB Designer',
      'Embedded System Developer',
      'Circuit Designer',
      'Project Maker'
    ];

    let textIndex = 0;
    let charIndex = 0;
    const typingElement = document.querySelector('.typing');

    function typeEffect() {
      if (charIndex < typingText[textIndex].length) {
        typingElement.textContent += typingText[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
      } else {
        setTimeout(eraseEffect, 1500);
      }
    }

    function eraseEffect() {
      if (charIndex > 0) {
        typingElement.textContent = typingText[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
      } else {
        textIndex = (textIndex + 1) % typingText.length;
        setTimeout(typeEffect, 300);
      }
    }

    document.addEventListener('DOMContentLoaded', () => {
      if (typingText.length) setTimeout(typeEffect, 500);
    });

    function sendMessage() {
      alert('Message Sent Successfully!');
    }
