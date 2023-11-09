const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	for (let fruit of fruits) {
		if (fruit.toLowerCase().includes(str.value.toLowerCase()) && str.value != "" && str.value != " ") {
			results.push(fruit);
		}
	}
	showSuggestions(results);
	return results;
}

function searchHandler(e) {
	const searchInput = e.target;
	search(searchInput);
}

function showSuggestions(results) {
	suggestions.innerHTML = "";
	suggestions.removeAttribute("class", "has-suggestions");

	for (let res of results) {
		if (res == results[0]) {
			suggestions.setAttribute("class", "has-suggestions");
		}
		const el = document.createElement("li")
		el.innerHTML = res;
		suggestions.appendChild(el);
	}
}

function useSuggestion(e) {
	const fruitChoice = e.target;
	input.value = fruitChoice.textContent;
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);