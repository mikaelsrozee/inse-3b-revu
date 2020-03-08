'use strict';

const handles = {};

/**
 * Used to check if the user is currently logged in, and redirects the user to the homepage if they're not
 * @returns {Promise<void>}
 */
async function checkAndRedirect() {
	const response = await fetch('api/v1/account/loggedIn');

	if (response.ok) {
		const status = await response.json();

		if (status.loggedIn) {
			handles.username.textContent = status.username;
		} else {
			window.location = "/login";
		}
	} else {
		console.log('unable to retrieve login status', response); // TODO: proper error handling
	}
}

async function logout() {
	// Check that the user has a session cookie
	if (document.cookie.split(';').filter((item) => item.trim().startsWith('session=')).length) {
		// If they do, log them out and redirect to home page
		document.cookie = "session=; undefined";
		window.location = "/";
	} else {
		console.log('cannot logout user that is not logged in');
	}
}

function getHandles() {
	handles.btnLogout = document.querySelector("#btn-logout");
	handles.username = document.querySelector("#profile-header-info-username");
}

function addEventListeners() {
	handles.btnLogout.addEventListener('click', logout);
}

function onLoad() {
	getHandles();
	checkAndRedirect().then(() => {
		addEventListeners();
	});
}

window.addEventListener('load', onLoad);
