# Homely - A web app which helps you find your next home

## Goal:

Create two carousels for a property managment microservice for a real estate web app that presented the user with newly listed properties within their area of interest and properties which are similar to the properties that the user is currently viewing.

## Technologies:

**Systems Programing Language**
* JavaScript

**Web Frameworks**
* React.JS
* Express
* Axios

**Database Managment**
* MongoDB

**Development Frameworks**
* Babel
* Webpack
* Enzyme
* Jest

**Container Orchestration Service**
* Docker

**Public Cloud Service**
* AWS

**Collaborative Methodologies**
* Continuous Integration
* Unit, Functional Testing
* Code Branching, Architecture Branching

## Images:

Carousel component:

![GitHub Logo](/siteImages/homely_top_component.jpg)
![GitHub Logo](/siteImages/homely_centered_component.jpg)


## Reproduction Steps:

Assumes MongoDB is installed and running in the local environment.

1. Install repo dependencies:
  * $ npm install

2. Seed the test data:
  * $ npm run seed

3. Start the local server:
  * $ npm run start

4. Routes:
  * http://localhost:3535/home
  * http://localhost:3535/home/similar
  * http://localhost:3535/home/newest



