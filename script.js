document.getElementById('year').textContent = new Date().getFullYear();

// Prevent confusing checkout behaviour while the demo API key is still present.
document.addEventListener('click', (event) => {
  const target = event.target.closest('.snipcart-add-item, .snipcart-checkout');
  const snipcartRoot = document.getElementById('snipcart');
  if (!target || !snipcartRoot) return;

  if (snipcartRoot.dataset.apiKey === 'YOUR_SNIPCART_PUBLIC_API_KEY') {
    event.preventDefault();
    event.stopImmediatePropagation();
    alert('Checkout is ready to connect. Replace YOUR_SNIPCART_PUBLIC_API_KEY in index.html with your Snipcart public API key to accept orders and payments.');
  }
}, true);
