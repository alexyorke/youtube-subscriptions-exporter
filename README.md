# youtube-subscriptions-exporter
Export your YouTube channel subscriptions to a spreadsheet-like text file. Tested on Firefox 84.0 and Chrome 87.0.4280.88 on Windows 10 as of December 16th, 2020.

## How to use

- Disable the uBlock Origin extension (it will cause your browser to freeze if using this script.)
- Go to YouTube.com and sign in.
- Paste the contents of `youtube-subscriptions-exporter.js` into the `Developer Console` and press enter.
- Wait 30 seconds or until you see your list of subscriptions appear in the console window.
- Click the text "Show more" in a very small font-size at the bottom of the console window if if it visible.
- Copy the result to the clipboard. Each channel is on a seperate line, with the channel name first and the URL second, tab-delimited.
- Re-enable the uBlock Origin extension if required.

## FAQ

Q: When I try running it in Chrome nothing happens.

A: It can take up to 30 seconds for the script to run in Chrome. Firefox doesn't seem to have this issue, however.

Q: When I try running it in Chrome the entire browser freezes and I get several hundred console warning messages and I don't see any results after 30 seconds. Help.

A: The uBlock Origin extension has to be disabled for the script to run. To fix this, disable uBlock Origin, refresh the page, then try again. If it still doesn't work try an incognito window. I'm investigating a workaround.

Q: Should this be a Chrome/Firefox extension?

A: Probably. I'll convert it to an extension at some point.
