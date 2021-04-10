function click(e) {
    chrome.tabs.executeScript(null, {
        code: generateExportOption(e.target.id),
    }, function() {
        chrome.tabs.executeScript(null, {file: 'youtube-subscriptions-exporter.js'});
    });
}

// It has to be var and not let because it has to be able to be redefined if the user chooses another option
// after selecting the first. Otherwise, it won't let them choose another option.
function generateExportOption(option) {
    return "var exportOption = \"" + option + "\";"
}

document.addEventListener('DOMContentLoaded', function() {
    Array.from(document.getElementsByClassName('export')).map(exportElem => exportElem.addEventListener('click', click));
});