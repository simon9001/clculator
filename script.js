const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');
    let currentInput = '';

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const value = btn.textContent;

        if (value === 'RESET') {
          currentInput = '';
          display.textContent = '0';
        } else if (value === 'DEL') {
          currentInput = currentInput.slice(0, -1);
          display.textContent = currentInput || '0';
        } else if (value === '=') {
          try {
            currentInput = eval(currentInput).toString();
            display.textContent = Number(currentInput).toLocaleString();
          } catch {
            display.textContent = 'Error';
            currentInput = '';
          }
        } else {
          currentInput += value;
          display.textContent = currentInput;
        }
      });
    });

    const toggle = document.getElementById('theme-toggle');
    const toggleBtn = toggle.querySelector('.toggle-btn');
    const body = document.body;
  
    let themeIndex = 0; 
  
    toggle.addEventListener('click', () => {
      themeIndex = (themeIndex + 1) % 3;
  
     
      toggleBtn.style.left = `${3 + themeIndex * 15}px`;
  
      body.classList.remove('light-theme', 'contrast-theme');
  
      
      if (themeIndex === 1) {
        body.classList.add('light-theme');
      } else if (themeIndex === 2) {
        body.classList.add('contrast-theme');
      }
    });