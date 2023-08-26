document.getElementById('convertBtn').addEventListener('click', function () {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;
  
    fetch(`https://v6.exchangerate-api.com/v6/e5830fe60a1742458dfb2cca/latest/${fromCurrency}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const exchangeRate = data.conversion_rates[toCurrency];  // value of 1 currency
        const convertedAmount = (amount * exchangeRate).toFixed(2);
        if(isNaN(amount) || amount <= 0){
            alert("Please Enter Amount")
        }else{
            document.getElementById('result').innerHTML = `${amount} ${fromCurrency} is ${convertedAmount} ${toCurrency}`;
        }
      })
      .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').innerHTML = 'An error occurred. Please try again later.';
      });
});
  


let currencyShortNames = ['AED', 'BDT', 'CNY', 'EUR', 'JPY', 'INR', 'PKR', 'USD' ]
let currencyLongNames = ['United Arab Emirates Dirham ', 'Bangladeshi Taka', 'Chinese Yuan', 'Euro', 'Japanese Yen', 'Indian Rupee', 'Pakistani Rupee', 'United States Dollar']

let selectElement = document.querySelectorAll('.currencySelect');

for(let i=0; i<currencyShortNames.length; i++){
    let shortNames = currencyShortNames[i];
    let longNames = currencyLongNames[i]

    selectElement.forEach((cs)=>{
        let option = document.createElement('option')
        option.value = shortNames
        option.text = longNames
        cs.appendChild(option)
    })

}

        
