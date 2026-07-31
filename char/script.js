document.addEventListener('DOMContentLoaded', () => {
  // Hamburger Menu Toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', hamburger.classList.contains('active'));
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav')) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Copy Mobile Money Number to Clipboard
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = button.getAttribute('data-text');
      
      navigator.clipboard.writeText(textToCopy).then(() => {
        // Show feedback
        const originalText = button.textContent;
        button.textContent = '✓ Copied!';
        button.classList.add('copied');
        
        setTimeout(() => {
          button.textContent = originalText;
          button.classList.remove('copied');
        }, 2000);
      }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        button.textContent = '✓ Copied!';
        button.classList.add('copied');
        setTimeout(() => {
          button.textContent = 'Copy Number';
          button.classList.remove('copied');
        }, 2000);
      });
    });
  });

  // Donation Form Functionality
  const amountButtons = document.querySelectorAll('.amount-chip');
  const customAmount = document.getElementById('customAmount');
  const form = document.getElementById('donationForm');
  const reportButton = document.getElementById('reportButton');
  const emailButton = document.getElementById('emailButton');

  amountButtons.forEach((button) => {
    button.addEventListener('click', () => {
      amountButtons.forEach((chip) => chip.classList.remove('active'));
      button.classList.add('active');
      if (customAmount) {
        customAmount.value = button.dataset.amount;
      }
    });
  });

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Thank you for supporting Hope Foundation Church Charity. Your donation receipt and confirmation will be sent shortly.');
    });
  }

  if (reportButton) {
    reportButton.addEventListener('click', () => {
      alert('Donation report generated successfully.');
    });
  }

  if (emailButton) {
    emailButton.addEventListener('click', () => {
      alert('Thank-you emails queued for donors.');
    });
  }
});
