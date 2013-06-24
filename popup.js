function newTab() {
	var time = /(..)(:..)/.exec(new Date());
	chrome.tabs.create({url: 'http://www.bili.t/'+time});
}

document.addEventListener('DOMContentLoaded', function () {
	var newlistener = document.getElementById("go_newP").addEventListener('click', newTab);
});