// dx_generator.js
window.onload = () => {
  const x = Math.floor(Math.random() * 10 + 1);
  const v = Math.random() * 5;
  const θ = Math.random() * Math.PI * 2;
  const dx_real = x;
  const dx_imag = v * Math.cos(θ);
  const dx = `${dx_real}+${dx_imag.toFixed(3)}j`;
  fetch(`/collapse?dx=${encodeURIComponent(dx)}`)
    .then(res => res.text())
    .then(data => console.log("Collapse Result:", data));
};
