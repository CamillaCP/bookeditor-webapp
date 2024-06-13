# bookeditor-webapp
The *bookeditor-webapp* is a simple front-end web application that allows editing a list of books, enabling the user to add, remove, or modify entries in this list. The application also includes a message system at the bottom of the page, informing the user of the latest operations performed on the list, and a dynamic search bar for filtering the list. The web application idea is loosely inspired by a tutorial available on the Angular website (https://v17.angular.io/tutorial/tour-of-heroes). 

This project was developed during the course of my Bachelor's thesis titled *"Web application frameworks - A comparison between Angular and React"*, during which I studied and analyzed the two frameworks for web application development. For this reason, the web application has been developed in three versions to highlight the points of disparity between the frameworks and the advantages offered by their usage with respect to a plain JavaScript implementation; the versions are namely:
* **bookeditor-angular**, which has been implemented using the Angular framework and thus the TypeScript language.
* **bookeditor-react**, which has been implemented using the React framework.
* **bookeditor-javascript**, which has been implemented using plain JavaScript language.

For comparison purposes, each version also includes a line count of both the overall project and of the source directory only; this metrics has been considered as part of the analysis on the advantages offered by the use of frameworks that assist the developer in designing websites. 

# Basic Usage and Dependencies
Let's take a look at the steps needed to *locally* run the three versions of the web application.
## JavaScript Version 
To run the JavaScript version of the *bookeditor-webapp* the user is simply needed to clone the relative directory and open the ```home.html``` file, as this version is only available for visualization from the file system and not through a local server.
## Angular Version 
To run the Angular version of the *bookeditor-webapp* locally the user has to install:
* [Node.js](https://nodejs.org/en)
* The [Angular CLI](https://v17.angular.io/cli), that can be installed via CLI with the command:
```
npm install -g @angular/cli
```
After cloning the relative directory and navigating to it, it is sufficient to run the command:
```
ng serve --port [PORT]
```
The application will be displayed by the browser at ```http://localhost:[PORT]/``` (default port number is 4200).

## React Version
To run the React version of the *bookeditor-webapp* locally the user has to install:
* [Node.js](https://nodejs.org/en)
After cloning the relative directory and navigating to it, it is sufficient to run the command:
```
npm start
```
The application will be displayed by the browser at ```http://localhost:3000/```, which is the default port. If the port number has to be changed, the portion related to scripts of the file ```package.json``` has to be modified to include the required port number:
* For Linux and MacOS systems:
```
  "scripts": {
    "start": "PORT=[PORT] react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
```
* For Windows system:
```
  "scripts": {
    "start": "set PORT=[PORT] && react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
```

