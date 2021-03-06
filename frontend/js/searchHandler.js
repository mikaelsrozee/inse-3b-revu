'use strict';

const searchElems = {};

function getSearchData() {
	return searchElems.searchBar.value;
}

async function doSearch() {
	const query = {
		text: getSearchData(),
		type: 'all',
		ucas: 0,
		category: 'all',
		level: 'all',
		studyType: 'all',
		sandwich: 'all',
	};

	const response = await fetch(`api/v1/search?text=${query.text}&type=${query.type}&ucas=${query.ucas}&category=${query.category}&level=${query.level}&studyType=${query.studyType}&sandwich=${query.sandwich}`);

	if (response.ok) {
		const json = await response.json();

		sessionStorage.setItem('searchText', query.text);
		sessionStorage.setItem('results', JSON.stringify(json));

		window.location = '/searchResults';
	} else {
		console.error(response.statusText);
	}
}

function getSearchElems() {
	searchElems.searchBar = document.querySelector("#input-search");
	searchElems.searchButton = document.querySelector("#search-button");
}

function populateSearchBar() {
	const text = sessionStorage.getItem('searchText');

	if (text == null) {
		return;
	}

	searchElems.searchBar.value = text;
}

function addSearchEventListeners() {
	searchElems.searchBar.addEventListener('keydown', async (event) => {
		if (searchElems.searchBar.value !== "" && event.code === 'Enter') {
			await doSearch();
		}
	});

	searchElems.searchButton.addEventListener('click', async () => {
		if (searchElems.searchBar.value !== "") {
			await doSearch();
		}
	});
}

function doSearchLoad() {
	getSearchElems();
	addSearchEventListeners();
	populateSearchBar();
}

window.addEventListener('load', doSearchLoad);
