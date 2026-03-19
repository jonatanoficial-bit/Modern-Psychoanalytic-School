// scripts.js
// Responsável por comportamentos interativos do site de Psicanálise.

document.addEventListener('DOMContentLoaded', () => {
  // Suaviza o scroll ao clicar nos links de navegação.
  const navLinks = document.querySelectorAll('a[href^="#modulo"], a[href="#inicio"], a[href="#sobre"], a[href="#contato"], a[href="#modulos"]');
  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      const targetId = link.getAttribute('href');
      // Permitir que links externos passem
      if (targetId.startsWith('#')) {
        event.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Destaque o item do menu de módulos conforme a seção estiver no viewport.
  const moduleSections = document.querySelectorAll('section.module');
  const moduleNavLinks = document.querySelectorAll('.module-nav a');
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const correspondingLink = document.querySelector(`.module-nav a[href="#${id}"]`);
      if (entry.isIntersecting) {
        moduleNavLinks.forEach(link => link.classList.remove('active'));
        if (correspondingLink) {
          correspondingLink.classList.add('active');
        }
      }
    });
  }, options);
  moduleSections.forEach(section => observer.observe(section));
});