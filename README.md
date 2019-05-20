# OCTOSMASH VERSION 2
#### Current Version: 2.0.1
Octosmash is a multiplayer fighting game inspired by the Super Smash Bros series using characters from Square Enix's Octopath Traveler. This version is a revamp of Octosmash 110, which was originally created in Fall 2018 for Hack 110, a hackathon hosted by UNC-Chapel Hill's COMP 110: Introduction to Programming class.

A link to play the revamped version will be available here once the project has reasonable progress.

## Current Work in Progress
* Supporting 3 or 4 characters
* Ability for players to map their own controls
Note: Due to these WIPs, the most recent version on GitHub doesn't work (unless you select two players on the selection screen for number of players). Refer to the commit on May 17th, 2019 with the code d204b41 for the latest fully functional version.

## Background Information
I intend to make changes to the Octosmash game periodically to track my progress as a programmer. Octosmash 110 was my first major project, so I thought this would be a neat and entertaining way to see how I improve over the years.

Any major changes (such as creating a new version in a different language) will be made in a new repository, but minor changes or implementing new features will be done in the same repository.

## Octosmash 110
The link for Octosmash 110 can be found [here](http://apps.introcs.com/linzhou/z-hack-110/octosmash-110.html).

The repository for Octosmash 110 can be found [here](https://github.com/lin-zhou/Octosmash-110). Note: The repository isn't actually organized the way the code was organized in the text editor. In the text editor, all of the files were in one folder with no subfolders.

## Changes in Version 2
### Fundamentals
* Change of Programming Language: While the original Octosmash 110 was written in TypeScript, version 2 uses JavaScript.
* Octosmash 110 was largely focused on functional programming, whereas version 2 uses more object-oriented programming concepts.

### New Features
This section will be updated as new features are implemented.

### Debugging & Fixes
* Fixed lag when replaying the main game.
* Fixed issue with not being able to jump after walking off stage.

## Installation
Octosmash utilizes the [PixiJS library](http://www.pixijs.com).
To install PixiJS:
```sh
$ npm install pixi.js
$ npm install @types/pixi.js
```

## Running
I'm not sure if other browsers also have this issue, but if you're running the game in Google Chrome, Chrome doesn't allow running local files (such as images for sprites).

### Solution:

#### Node Package Manager
```sh
$ npm install -g http-server
```
In the project directory, run:
```sh
$ http-server
```

Load the page on: http://localhost:8080.

I had problems with localhost serving old versions of the game a couple of times while I was working on it, probably because of issues with the cache. There are a couple of ways to get around it, but I found running this to be the easiest:

```sh
$ http-server -c-1
```

#### Python 3
If you have Python 3 installed, you can use this:

```sh
$ python -m http.server
```
You can load the page on: http://localhost:8000.

I also had cache issues running it like this, but there are some ways to fix that, which are easy to find online if you prefer to use Python to run the game.

#### Other Python Versions
I haven't tried this one, but it seems to have worked for other people.

```sh
$ python -m SimpleHTTPServer
```