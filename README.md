## MMM-Halloween

This project started as a way to having a laugh (and some jumpscares) at halloween together with friends.

Since no module for the [MagicMirror](https://docs.magicmirror.builders/) could fulfill the need I decided to make a new one.

To not scare anyone without necessity I added some stock images, which are pretty wholesome. So you can give it a spin, even with kids or easily scared people around.

## Disclaimer

Since this is my first MagicMirror module and the first time I did some JS in a long time, feel free to give some hints, what I could do better.
And feel free to improve it or send some issues or ideas my way. This module can only get better.

What bugs me the most is to create all videos and images prior and "unhide/hide" them at an instant. I failed to get them to play by just updating the DOM.
If anyone has an idea, feel free to fix that or shoot a DM my way.

## Installation

### Cloning the repo

Clone the repo in your /modules folder of your magic mirror.

```
git clone git@github.com:Voigtus/MMM-Halloween.git
```
### Sound
If you are using a modern browser, you will realise, that no sound is available. This is due to a policy in most browsers to stop the
epidemic of annoying videos who started to blast in your face the instant you opened a page. [See here for chrome for example](https://developer.chrome.com/blog/autoplay/)

To enable it in Brave follow these steps:
1. Open Brave
2. Go to your settings
3. Go to Privacy and Security
4. Go to Site Settings
5. Click Sound and enable it for the hostname you use for your MagicMirror Server

This might differ to Chrome or Firefox, so feel free to add this.

### Config parameters
There are some parameters you have to overwrite in your config.js. For more information regarding the config.js see the [official documentation](https://docs.magicmirror.builders/modules/configuration.html)

| parameter     | default | explanation                                                                |
|---------------|---------|----------------------------------------------------------------------------|
| imageNameList | []      | An array containing all names of your images you want to scare people with |
| videoNameList | []      | An array containing all names of your videos you want to scare people with |
| scareInterval | 0       | Every x ms is a scare played                                               |
| scareTime     | 0       | How long the scare should be visible on your mirror in ms                  |
| muted         | true    | Weather the videos you play should be muted                                |
| bait          | ""      | Your bait, so people start to be interested.                               |

## Stock images

Added images and videos provided by pixabay under [Pixabay license](https://pixabay.com/de/service/license/)

- scare.jpg => https://pixabay.com/de/photos/margerite-g%c3%a4nsebl%c3%bcmchen-blume-wei%c3%9f-729510/
- scare_video.jpg => https://pixabay.com/de/videos/rock-balance-gestapelte-felsen-42470/
- bait.jpg => https://pixabay.com/de/photos/pendel-karte-navigation-kompass-1934311/

## Todos
- Add Motion sensor support
- Add Sound installation guide for Chrome, Firefox, Edge
- Add a docker image
- Add electron support
- CSS for video and images, so they are centered and fullscreen
- Support Youtube videos
