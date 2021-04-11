# youtube-subscriptions-exporter

Export your YouTube channel subscriptions to the clipboard. Tested on the latest version of Firefox and Chrome on Windows 10 as of April 10th, 2021.

## Description from Chrome Webstore

Export your YouTube subscriptions (subscriber name, channel URL, and thumbnail) to tab-delimited CSV (spreadsheet), FreeTube, NewPipe, Invidious, and Google Takeout-like/YouTube API formats.

It's 100% free and super easy to do. No ads, and you'll be finished in under 30 seconds.

Here's how it works:
- First, install this extension.
- Next, click on the "Y" icon next to your URL bar. Don't see the "Y" icon? Click on the puzzle piece, and then click on the pin to move it to your URL bar.
- Follow the on-screen instructions. They're super easy.
- Finally, you'll have a list of your YouTube subscriptions copied to your clipboard.

If you chose the spreadsheet format, this is what it'll look like:

```
Adam Savage’s Tested	https://www.youtube.com/channel/UCiDJtJKMICpb9B1qf7qjEOA
Android Developers	https://www.youtube.com/channel/UCVHFbqXqoYvEWM1Ddxl0QDg
Austin Evans	https://www.youtube.com/channel/UCXGgrKt94gR6lmN4aN3mYTg
Austin John Plays	https://www.youtube.com/channel/UCIIPl-DSCC0prKxGGnJrdGQ
colinfurze	https://www.youtube.com/channel/UCp68_FLety0O-n9QU6phsgw
...
```

If you chose Google Takeout-like, this is what it'll look like:

```json
[
  {
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
        "channelId": "UCiDJtJKMICpb9B1qf7qjEOA",
        "kind": "youtube#channel"
      },
      "thumbnails": {
        "default": {
          "url": "https://yt3.ggpht.com/ytc/AAUvwniXRXvWoOaub9k-B_JVV6tzlXv4LZq-_RIbM5ks3A=s88-c-k-c0x00ffffff-no-rj"
        },
        "high": {
          "url": "https://yt3.ggpht.com/ytc/AAUvwniXRXvWoOaub9k-B_JVV6tzlXv4LZq-_RIbM5ks3A=s88-c-k-c0x00ffffff-no-rj"
        },
        "medium": {
          "url": "https://yt3.ggpht.com/ytc/AAUvwniXRXvWoOaub9k-B_JVV6tzlXv4LZq-_RIbM5ks3A=s88-c-k-c0x00ffffff-no-rj"
        }
      },
      "title": "Adam Savage’s Tested"
    }
  },
  {
    "contentDetails": {
      "activityType": "all",
      "newItemCount": 0,
      "totalItemCount": 0
    },
    "etag": "",
    "id": "",
    "kind": "youtube#subscription",
```

If you chose NewPipe/FreeTube/Invidious, this is what it'll look like:
```json
{
  "app_version": "0.19.8",
  "app_version_int": 953,
  "subscriptions": [
    {
      "service_id": 0,
      "url": "https://www.youtube.com/channel/UCiDJtJKMICpb9B1qf7qjEOA",
      "name": "Adam Savage’s Tested"
    },
    {
      "service_id": 0,
      "url": "https://www.youtube.com/channel/UCVHFbqXqoYvEWM1Ddxl0QDg",
      "name": "Android Developers"
    },
```

Don't have any text copied to your clipboard? Make sure that you wait until it says that your subscriptions have been copied (it might take several seconds.) If it's still not working, feel free to contact me on my contact email address on this extension and I'll take a look. Chances are YouTube might have updated and this extension might have to be updated as well.


## How to use

### From Chrome's Extension Webstore

Available on the [Chrome Extension Webstore](https://chrome.google.com/webstore/detail/youtube-subscriptions-exp/dhpojdmnffaocepmljcdcongdmkjblan)

### From source

- Clone this repo.

- Zip the youtube-subscriptions-exporter sub-folder and rename it to "youtube-subscriptions-exporter.crx".

- Load the packed extension in Chrome's Extensions.

- Click on the extension's icon and follow the on-screen directions.
