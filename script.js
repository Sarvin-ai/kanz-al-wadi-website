const config = window.KANZ_CONFIG || {};
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.main-nav');
menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const email = (config.email || '').trim();
  if (!email) {
    alert('Company email has not been added yet. Please add an email address in config.js when it becomes available.');
    return;
  }
  const subject = encodeURIComponent(`Website enquiry - ${data.get('service')}`);
  const body = encodeURIComponent(
    `Name: ${data.get('name')}\nCompany: ${data.get('company')}\nEmail: ${data.get('email')}\nService: ${data.get('service')}\n\nMessage:\n${data.get('message')}`
  );
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
});
