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
            "style-scope yt-icon"));
	
    let textToCopyToClipboard = "";
	
    let exportType = "newpipe";
    if (exportType === "newpipe") {
	textToCopyToClipboard = JSON.stringify({"app_version":"0.19.8", "app_version_int": 953, "subscriptions": [...subscriptions.map(elem => {"service_id": 0, "url": elem.href, "name": elem.name})]});
    } else {
	textToCopyToClipboard = subscriptions.map(elem => elem.title + "\t" + elem.href).join("\n");
    }

    copyToClipboard(textToCopyToClipboard);

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
