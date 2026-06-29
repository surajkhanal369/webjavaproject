function calculateTotal() {
    const monitorPrice = parseFloat(document.getElementById('monitor').value) || 0;
    const mousePrice = parseFloat(document.getElementById('mouse').value) || 0;
    const ramPrice = parseFloat(document.getElementById('ram').value) || 0;
    const storagePricePerGB = parseFloat(document.getElementById('storage').value) || 0;
    const quantity = parseInt(document.getElementById('quantity').value) || 1;
  
    const totalStoragePrice = storagePricePerGB * quantity;
  
    const total = monitorPrice + mousePrice + ramPrice + totalStoragePrice;
  
    document.getElementById('total').value = "$" + total.toFixed(2);
  }