const panel = document.querySelector('.code-panel');
const stage = document.querySelector('.depth-stage');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
stage.addEventListener('pointermove', event => {
  if (reducedMotion.matches || event.pointerType === 'touch') return;
  const bounds = stage.getBoundingClientRect();
  const x = (event.clientX - bounds.left) / bounds.width - 0.5;
  const y = (event.clientY - bounds.top) / bounds.height - 0.5;
  panel.style.transform = `rotateY(${x * 20 - 8}deg) rotateX(${-y * 14 + 5}deg) rotateZ(2deg)`;
});
stage.addEventListener('pointerleave', () => { panel.style.transform = ''; });
document.querySelectorAll('[data-package]').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('selected-package').textContent = `Let’s discuss: ${link.dataset.package}`;
  });
});
document.getElementById('year').textContent = new Date().getFullYear();
