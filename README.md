# Introduction

The website(or react app exactly) is made using Javascript React Library the most popular library right now.
The code is on App.js and App.css, rest of the files belong to react library. The src folder was updated according to needs and requirements.
The project mostly focuses on using css styling and react.js functionality. The reserach part wasn't given more than 5 hours as the assignment was a programming project not research project.

Some key takeaways are:
Fonts taken from google fonts
To launch the app, first need to install npm using "npm install" and then run with "npm start"
Current Location Fire Danger Functionality is the coolest part of the assignment.

# What I Did Well?

The layouts, which were perfectly built and the css styling along with fonts and making the theme close to geographical themed website.
Thinking out of box and create weather app using json api
Working with react.js

# Things that could have been possibly improved?

The funtionality as per single page website looks great, but can be improved further if we take it to multiple pages. Also there could be implementation of different design ideas of website layouts. The design aspect of website could've been improved.
Weather app picture is static, it could have been improved to change as per current weather.

# Production Notes

For the Navbar, first of all I have used flex property to add space between two containers that will make one content to the left and other to right. Navbar is set to fixed which means it will appear all the time on the screen.

Then on the video section, I have to research how to add autoplay feature, then i figured out I have to add muted attribute aswell to make it work. Along with that, I have added Video title as a header over the video, whose position is absolute.

Now comes the main section parts. All of the sections required very similar styling, so I have to use all the reusable styling into one css classes to avoid repetetion. For some main containers where I required additional styling, I added seperate css classes for them.

There is a Weather api section where you can check your current location weather from which you can tell if your area is at risk of fire, or its safe. It uses Html geolocation property to access lattitude and longitude which will be required to get weather data from a third-party API known as "OpenWeather". This API returns all the required weather details such as temperature,humiditiy,location. etc. It also sends weather image data, however it comes with image code, that represents weather condition. The image code list is huge, that bring alot of work to implement the dynamic image functionality. So I have used a static cloudy image.

The biggest challenge was to add the fade up effect whenever user scrolls on the section. I have used the intersection observer which observes which element is user viewing currently. If that is true, observer adds the css class that makes fade effect to life. It took alot of time to figure out how to make it work on multiple elements.
