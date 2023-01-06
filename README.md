# React Weather App

A simple application built using React that retrieves the current weather of a user entered location via the [OpenWeather API](https://openweathermap.org/)

## Background

This is a rebuild of a similar project I built a few months ago as an exercise in using APIs. 
I wasn't satisfied with the way it looked on desktop and mobile, so I decided to rebuild it (and get more React practice in the process).

### How-to

Simply enter a location in one of three formats, and the app will report the weather and local time for that location:
* For cities outside of the United States:
    * Enter either 'City, Country' (ex. 'London, England'), or just the city (ex. 'London')
* For cities within the United States:
    * Enter either 'City, State, United States' (ex. 'Boston, Massachusetts, United States') or just the city (ex. 'Boston')

Note that many cities share a name, so the more specific your query the better!

### Additional Features

* Local date-time reporting (Note: the timer will eventually desync if left alone for a number of hours)
* Data output in typewriter-style dialogue box
* Mobile-friendly :)

### Notable Takeaways

* Learned how to more effectively transfer data between child components
* Learned how to use the ids randomly assigned to ```setTimeout``` and ```setInterval``` to selectively enable and disable certain ```setTimeout``` and ```setInterval``` calls