fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(quote =>{
		document.getElementById('anime').innerHTML = quote.anime;
		document.getElementById('name').innerHTML = quote.character;
		console.log(quote)
		document.getElementById('p1').innerHTML= quote.quote}) 


