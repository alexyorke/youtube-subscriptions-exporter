// async wrapper required for Firefox, otherwise will get an "await is only valid in async function" error
var start = async function() {

    if (window.location.href !== "https://www.youtube.com/") alert(
        "Please go to youtube.com in order to run this script");

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

    console.log(subscriptions.join("\n"));

    function getShowMoreElement() {
        return Array.from(document.querySelectorAll(
            "yt-formatted-string")).find(
            ytTextElement => /Show \d+ more$/.exec(ytTextElement
                .textContent) !==
            null);
    }

}

start();
