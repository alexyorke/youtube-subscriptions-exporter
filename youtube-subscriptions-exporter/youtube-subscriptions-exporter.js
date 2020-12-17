// async wrapper required for Firefox, otherwise will get an "await is only valid in async function" error
var start = async function() {

    if (window.location.href !== "https://www.youtube.com/") {
		alert("Please go to youtube.com in order to run this script");
		return;
	}

    // Firefox requires that the slide out is visible to get the list of subscriptions
    if (getShowMoreElement() === undefined) {
        // click on hamburger menu to show slide out
        document.querySelector("#guide-icon").click();
        while (getShowMoreElement() === undefined) {
            await new Promise(r => setTimeout(r, 500));
        }
    }

    getShowMoreElement().click();

    let subscriptions = Array.from(document.querySelectorAll(
        "a#endpoint")).filter(
        ytTextElement => !ytTextElement.innerHTML.includes(
            "style-scope yt-icon")).map(elem => elem.title + "\t" +
        elem.href);

    copyToClipboard(subscriptions.join("\n"));

    alert(
        "Subscriptions have been successfully copied to the clipboard.");

    function getShowMoreElement() {
        return Array.from(document.querySelectorAll(
            "yt-formatted-string")).find(
            ytTextElement => /Show \d+ more$/.exec(ytTextElement
                .textContent) !==
            null);
    }

}

start();

function copyToClipboard(text) {
    const input = document.createElement('textarea');
    input.style.position = 'fixed';
    input.style.opacity = 0;
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('Copy');
    document.body.removeChild(input);
};