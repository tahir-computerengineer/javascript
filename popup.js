// Her iki giriş alanı için olay dinleyicileri
document.getElementById('miles').addEventListener('input', calculate);
document.getElementById('knots').addEventListener('input', calculate);

function calculate() {
  const miles = parseFloat(document.getElementById('miles').value);
  const knots = parseFloat(document.getElementById('knots').value);

  // Verilerin geçerli olup olmadığını kontrol et
  if (isNaN(miles) || isNaN(knots) || knots <= 0) {
    clearResults();
    return;
  }

  // Süreyi hesapla
  const durationInHours = miles / knots;
  const hours = Math.floor(durationInHours);
  const minutes = Math.round((durationInHours - hours) * 60);

  // Şu andan itibaren varış zamanını hesapla
  const now = new Date();
  const arrivalTime = new Date(now.getTime() + durationInHours * 60 * 60 * 1000);

  // Sonuçları göster
  document.getElementById('duration').innerText = 
    `Tahmini Süre: ${hours} saat ${minutes} dakika`;

  document.getElementById('arrival-time').innerText = 
    `Varış Zamanı: ${arrivalTime.toLocaleString()}`;
}

function clearResults() {
  document.getElementById('duration').innerText = "";
  document.getElementById('arrival-time').innerText = "";
}
