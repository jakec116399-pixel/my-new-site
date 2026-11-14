// Herne Bay Web Design — small enhancements only

// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');

toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('is-open', !open);
});

nav.addEventListener('click', (e) => {
  if (e.target.closest('a')) {
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  }
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form: send to Formspree without leaving the page
const form = document.querySelector('.contact-form');
const status = form.querySelector('.form-status');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const button = form.querySelector('button[type="submit"]');
  status.className = 'form-status';

  if (form.action.includes('YOUR_FORM_ID')) {
    status.textContent = 'The form is not connected yet. Please email instead.';
    status.classList.add('is-error');
    return;
  }

  button.disabled = true;
  status.textContent = 'Sending…';

  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) throw new Error();
    form.reset();
    status.textContent = "Thanks, your message has been sent. I'll be in touch soon.";
    status.classList.add('is-success');
  } catch {
    status.textContent = 'Sorry, something went wrong. Please try again or email me.';
    status.classList.add('is-error');
  } finally {
    button.disabled = false;
  }
});
