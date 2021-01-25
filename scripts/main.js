let generateBtn = document.querySelector('#generateBtn');
let textQuote = document.querySelector('.text');
let authorName = document.querySelector('.author');


let quotes =[
 	
 	{
		'quote': 'There is only one happiness in this life, to love and be loved.',
		'author': 'George Sand'
	},
	{
		'quote': 'I swear I couldn\'t love you more than I do right now, and yet I know I will tomorrow.',
		'author': 'Leo Christopher'
	},
	{
		'quote': 'The only thing we never get enough of is love; and the only thing we never give enough of is love.',
		'author': 'Henry Miller'
	},
	{
		'quote': 'Never be in a hurry; do everything quietly and in a calm spirit. Do not lose your inner peace for anything whatsoever, even if your whole world seems upset.',
		'author': 'Saint Francis de Sales'
	},
	{
		'quote': 'Nobody can bring you peace but yourself.',
		'author': 'Ralph Waldo Emerson'
	},
	{
		'quote': 'When things change inside you, things change around you.',
		'author': 'Unknown'
	}

] 

generateBtn.addEventListener('click', quoter);


function quoter() {
	let index = Math.floor(Math.random() * quotes.length);
	let randomQuote = quotes[index].quote;
	let randomAuthor = quotes[index].author;
	console.log(`quote: ${randomQuote} | author ${randomAuthor}`)

	textQuote.innerHTML =` "${randomQuote}"`;
	authorName.innerHTML = `Author - ${randomAuthor}`; 
}