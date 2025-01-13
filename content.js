chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.checked) {
		const checkboxes = document.querySelectorAll("input[type='checkbox']");
		for (var i = 0; i < checkboxes.length; i++) {
			checkboxes[i].checked = request.checked;
		}
	}
	if (request.text) {
		const comments = document.getElementById("assess-comments-text");
		comments.value = request.text;
	}
});
