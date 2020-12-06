if (window.location.href !== "https://www.youtube.com/") alert("Please go to youtube.com in order to run this script");

Array.from(document.querySelectorAll("yt-formatted-string")).find(
    ytTextElement => /Show \d+ more$/.exec(ytTextElement.textContent) !==
    null).click();
let items = Array.from(document.querySelectorAll("a#endpoint")).filter(
    ytTextElement => !ytTextElement.innerHTML.includes(
        "style-scope yt-icon")).map(elem => elem.title + "\t" + elem.href);
		
console.log(items.join("\n"));
