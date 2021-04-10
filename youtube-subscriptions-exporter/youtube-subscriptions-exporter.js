// async wrapper required for Firefox, otherwise will get an "await is only valid in async function" error
var start = async function () {
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

    if (exportOption === "newpipe") {
        let newPipeSubscriptions = new Object();

        newPipeSubscriptions.app_version = "0.19.8";
        newPipeSubscriptions.app_version_int = 953;
        newPipeSubscriptions.subscriptions = subscriptions.map(elem => {
            let aSubscription = new Object();
            aSubscription.service_id = 0;
            aSubscription.url = elem.href;
            aSubscription.name = elem.title;
            return aSubscription;
        });

        textToCopyToClipboard = JSON.stringify(newPipeSubscriptions);
    } else if (exportOption === "takeout") {
        let takeoutSubscription = {
            "contentDetails": {
                "activityType": "all",
                "newItemCount": 0,
                "totalItemCount": 0
            },
            "etag": "",
            "id": "",
            "kind": "youtube#subscription",
            "snippet": {
                "channelId": "",
                "description": "",
                "publishedAt": "",
                "resourceId": {
                    "channelId": "__CHANNEL_ID_TEMPLATE__",
                    "kind": "youtube#channel"
                },
                "thumbnails": {
                    "default": {
                        "url": ""
                    },
                    "high": {
                        "url": ""
                    },
                    "medium": {
                        "url": ""
                    }
                },
                "title": "__TITLE_TEMPLATE__"
            }
        };

        let takeoutSubscriptions = subscriptions.map(elem => {
            let template = JSON.parse(JSON.stringify(takeoutSubscription));
            let channelId = elem.href.split("/").pop();
            template.snippet.resourceId.channelId = channelId;
            template.snippet.title = elem.title;

            const thumbnails = elem.querySelector("#endpoint > tp-yt-paper-item > yt-icon.guide-icon.style-scope.ytd-guide-entry-renderer").getAttribute("disable-upgrade");
            const thumbnailUrl = JSON.parse(thumbnails).thumbnails[0].url;
            template.snippet.thumbnails.default.url = thumbnailUrl;
            template.snippet.thumbnails.high.url = thumbnailUrl;
            template.snippet.thumbnails.medium.url = thumbnailUrl;
            return template;
        });
        
        textToCopyToClipboard = JSON.stringify(takeoutSubscriptions);

    } else {
        textToCopyToClipboard = subscriptions.map(elem => elem.title + "\t" + elem.href).join("\n");
    }

    copyToClipboard(textToCopyToClipboard);

    alert(
        "Subscriptions have been successfully copied to the clipboard in the " + exportOption + " format.");

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
}
