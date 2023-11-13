const input = document.querySelector('input')
const button = document.querySelector('button')
const container = document.querySelector('#container')


const btcConvert = async () => {
	const fetchApi = await fetch(
		"https://api.coindesk.com/v1/bpi/currentprice.json"
	);
	const convertFetchApi = await fetchApi.json();

    return(convertFetchApi.bpi.USD.rate_float);
};
const btcCode = async () => {
	const codeFetchApi = await fetch(
		"https://api.coindesk.com/v1/bpi/currentprice.json"
	);
	const codeFetcher = await codeFetchApi.json();
	// console.log(codeFetcher.bpi.USD.code);
    return(codeFetcher.bpi.USD.code);
};
// console.log(btcCode());
button.addEventListener('click', async () =>{
    const currValue = Number(input.value);
    console.log(currValue);
    input.value = '';
    
    const newDiv = document.createElement('div')
    newDiv.style.background = 'wheat';

    const val1 = await btcConvert();
    const countryCode = await btcCode();
    newDiv.textContent = `${countryCode} ${val1 * currValue}`

    container.appendChild(newDiv)
});