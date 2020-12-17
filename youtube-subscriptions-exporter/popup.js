function click(e) {
    chrome.tabs.executeScript(null, {
        file: "youtube-subscriptions-exporter.js"
    });
    window.close();
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('copy').addEventListener('click', click);
});