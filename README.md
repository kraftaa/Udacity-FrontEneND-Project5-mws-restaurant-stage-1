## Project 5 Three Stage Course Material Project - Restaurant Reviews Stage 1

## Table of Contents

* [Motivation](#motivation)
* [Description](#description)
* [Tools](#tools)
* [Files](#files)
* [Installation](#installation)
* [Result](#result)
* [Instructions](#instructions)
* [Contributing](#contributing)


## Motivation

This project is the fifth project of Front End Developer Nanodegree.
This is the first stage of the project Restaurants Reviews.
The scholars provided with the static webpage and need to convert it into mobile-ready web-application.

## Description

Provided static webpage has two html files: index.html and restaurants.html.
On Both files we have access to the map and pointers showing the location of restaurants as well as restaurant's name, location and description.
From the index.html page we can choose by filter cuisine and location of the restaurants.

The files have many issues as:
- they are not responsible, so we have to adjust width and positioning of elements
- they don't answer browsing by tab key properly, so we need to add tabindex propery
- According to the audit:
    - page was missing alt tags
    - page had to improve accessibility, so colors and sizes had to be changed
    - appropriate aria-roles applied
- In order to be able to use the app online Service Worker had to be registered.
- In order to be able to see the map we could use either Leaflet or Google Maps.
  so API keys from either of them had to be created and inserted into html and js files.
  I've used Leaflet map (Mapbox API key) as it doesn't have limit on reloads as Google API Key does.


## Tools

This project has been done with:

 [HTML](https://developer.mozilla.org/en-US/docs/Glossary/HTML),
 [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript),
 [CSS](https://developer.mozilla.org/en-US/docs/Glossary/CSS),
 [CSS FlexBox] (https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox),
 [ServiceWorkers] (https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API),
 [CSS Validator] (https://jigsaw.w3.org/css-validator/validator),
 [LightHouse in DevTools] (https://developers.google.com/web/tools/lighthouse/),
 [MapBox] (https://www.mapbox.com/account/access-tokens),
 [Leaflet] (https://leafletjs.com/)

## Files

This project consist from the next files and folders:
* index.html - the main page
* restaurant.html - the restaurant page
* CODEOWNERS
* README
* service-worker.js
* css:
   - styles.css
* data:
   - restaurants.json  - all data about restaurants
* img:
   - 10 jpg files with restaurants' images
* js:
   - dbhelper.js
   - main.js
   - restaurant_info.js

## Installation

In the main folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 5000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 5000` or `python -m http.server 5000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.


## Result

This application allows you to browse through Manhattan restaurants description and reviews filtering them by cuisine and location, and you can use either mouse or tab key.



