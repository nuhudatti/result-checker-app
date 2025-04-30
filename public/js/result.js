document.addEventListener('DOMContentLoaded', () => {
    const checkBtn = document.getElementById('checkBtn');
    const matricInput = document.getElementById('matricNumber');
    const resultTable = document.getElementById('result-table');
    const errorMessage = document.getElementById('errorMessage');
    const datetimeDisplay = document.getElementById('datetime');

    

    function isValidMatricNumber(matricNumber) {
      const pattern = /^[Uu]\d{2}\/[A-Za-z]{3}\/[A-Za-z]{3}\/\d{4}$/;
      return pattern.test(matricNumber);
    }

    checkBtn.addEventListener('click', () => {
      const matricNumber = matricInput.value.trim().toLowerCase();

      if (matricNumber === '') {
        errorMessage.textContent = 'Please enter your Matric Number.';
        errorMessage.style.display = 'block';
        resultTable.style.display = 'none';
        return;
      }

      if (!isValidMatricNumber(matricNumber)) {
        errorMessage.textContent = 'Invalid Matric Number Format.';
        errorMessage.style.display = 'block';
        resultTable.style.display = 'none';
        return;
      }

      if (matricNumber === 'u22/fns/csc/1105') {
        errorMessage.style.display = 'none';
        resultTable.style.display = 'block';
        function updateTime() {
      const now = new Date();
      const options = { timeZone: 'Africa/Lagos', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
      datetimeDisplay.textContent = now.toLocaleString('en-GB', options);
    }

    setInterval(updateTime, 1000);
    updateTime();
      } else {
        errorMessage.textContent = 'Sorry, your result was not found.';
        errorMessage.style.display = 'block';
        resultTable.style.display = 'none';
      }
    });
  });