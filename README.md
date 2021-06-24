# Timestamp Microservice

Build a full stack JavaScript app that is functionally similar to this: https://timestamp-microservice.freecodecamp.rocks/. Working on this project will involve you writing your code using one of the following methods:

* Clone this [GitHub repo](https://github.com/freeCodeCamp/boilerplate-project-timestamp/) and complete your project locally.
* Use [our Replit starter project](https://replit.com/github/freeCodeCamp/boilerplate-project-timestamp) to complete your project.
* Use a site builder of your choice to complete the project. Be sure to incorporate all the files from our GitHub repo.

**User stories:**
* [x] You should provide your own project, not the example URL.
* [x] A request to `/api/:date?` with a valid date should return a JSON object with a `unix` key that is a Unix timestamp of the input date in milliseconds
* [x] A request to `/api/:date?` with a valid date should return a JSON object with a `utc` key that is a string of the input date in the format: `Thu, 01 Jan 1970 00:00:00 GMT`
* [x] A request to `/api/1451001600000` should return `{ unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }`
* [ ] Your project can handle dates that can be successfully parsed by `new Date(date_string)`
* [x] If the input date string is invalid, the api returns an object having the structure `{ error : "Invalid Date" }`
* [x] An empty date parameter should return the current time in a JSON object with a `unix` key
* [x] An empty date parameter should return the current time in a JSON object with a `utc` key

https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice
