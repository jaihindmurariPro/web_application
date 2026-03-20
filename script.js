const stocks = [
    { symbol: 'AAPL', price: 182.45, change: '+1.2%' },
    { symbol: 'TSLA', price: 238.10, change: '-2.4%' },
    { symbol: 'NVDA', price: 485.20, change: '+4.1%' },
    { symbol: 'BTC', price: 64200.00, change: '+0.5%' },
    { symbol: 'MSFT', price: 375.12, change: '+0.8%' }
];

function initWatchlist() {
    const list = document.getElementById('watchlist');
    list.innerHTML = stocks.map(stock => `
        <div class="p-4 border-b border-gray-800 flex justify-between hover:bg-gray-800 cursor-pointer transition">
            <div>
                <p class="font-bold">${stock.symbol}</p>
                <p class="text-xs text-gray-500 text-uppercase">Equity</p>
            </div>
            <div class="text-right">
                <p class="font-mono">$${stock.price.toFixed(2)}</p>
                <p class="text-xs ${stock.change.includes('+') ? 'text-green-500' : 'text-red-500'}">${stock.change}</p>
            </div>
        </div>
    `).join('');
}

// Simulate real-time price flickering
function simulatePrice() {
    const priceEl = document.getElementById('active-price');
    setInterval(() => {
        const currentPrice = parseFloat(priceEl.innerText.replace('$', ''));
        const noise = (Math.random() - 0.5) * 0.5;
        const newPrice = (currentPrice + noise).toFixed(2);
        priceEl.innerText = `$${newPrice}`;
        
        // Visual feedback for change
        priceEl.style.color = noise > 0 ? '#10b981' : '#ef4444';
        setTimeout(() => priceEl.style.color = 'white', 500);
    }, 2000);
}

document.addEventListener('DOMContentLoaded', () => {
    initWatchlist();
    simulatePrice();
});