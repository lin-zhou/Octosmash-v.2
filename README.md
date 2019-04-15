# OCTOSMASH VERSION 2
#### Current Version: 2.0.0
Octosmash is a multiplayer fighting game inspired by the Super Smash Bros series using characters from Square Enix's Octopath Traveler. This version is a revamp of Octosmash 110, which was originally created in Fall 2018 for Hack 110, a hackathon hosted by UNC-Chapel Hill's COMP 110: Introduction to Programming class.

A link to play the revamped version will be available here once the project is completed.

## Background Information
I intend to make changes to the Octosmash game periodically to track my progress as a programmer. Octosmash 110 was my first major project, so I thought this would be a neat and entertaining way to see how I improve over the years.

Any major changes (such as creating a new version in a different language) will be made in a new repository, but minor changes or implementing new features will be done in the same repository.

## Octosmash 110
The link for Octosmash 110 can be found [here](http://apps.introcs.com/linzhou/z-hack-110/octosmash-110.html).

The repository for Octosmash 110 can be found [here](https://github.com/lin-zhou/Octosmash-110). Note: The repository isn't actually organized the way the code was organized in the text editor. In the text editor, all of the files were in one folder with no subfolders.

## Changes in Version 2
### Fundamentals
* Change of Programming Language: While the original Octosmash 110 was written in TypeScript, version 2 uses JavaScript.
* Octosmash 110 was largely focused on functional programming, whereas version 2 primarily uses object-oriented programming concepts.

### New Features
This section will be updated as new features are implemented.

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

#### Python 3
```sh
$ python -m http.server
```
Then, you can load the page on: http://localhost:8000.

#### Other Python Versions
I haven't tried this one, but it seems to have worked for other people.

```sh
$ python -m SimpleHTTPServer
```

#### Node Package Manager
When I tried this approach, I had inconsistent issues with sprite scaling in the browser. I didn't see any other comments with this issue, but the Python methods are probably easier anyway.

```sh
$ npm install -g http-server
```
In the project directory, run:
```sh
$ http-server
```