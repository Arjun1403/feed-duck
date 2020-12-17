# Duck Feed

## Given Requirement :-
The scientist is trying to understand how ducks are being fed in parks around the world. She
wants to collect the following information: ●What time the ducks are fed ●What food the ducks
are fed ●Where the ducks are fed ●How many ducks are fed ●How much food the ducks are
fed The scientist would like to crowdsource this information by creating a web application
where people can submit these data points. The scientist would like to be able to view all
submissions (please note that user management/authentication is not a requirement/expectation).

## Technology :-
### React for frontend
The font uses ReactJs Javascript for design webapplication.No External css libraries have been
used for designing or styling purposes. Styled Components is used for writing css,so as tomake
the css as re-usable components. Moreover,Chart.js library is used dashboard data analysis
purpose. I have choose reactjs because this is a single page application,with just rendering
different components on specific tour in the web-app.

### NodeJS for backend
Node.js is an open source, cross-platform runtime environment for developing server-side and
networking applications. NodeJs is simple to bind with React orVueJs front application.This
allows user to develop,build and deploy the application using simple steps. I have used Sequilize
ORM model for talking to the database as it provides solid tranaction support, relatively easy to
query the database instead of writing complex Queries.
### Mysql for database
The relational database is used for application.There are 5 tables such as food type,region,country,
food and feed table. All the tables are normalized for their attribute. Below image represents the
ER Diagram of the database.


### Installation and Running 

Requires to run from root folder

Install the dependencies to start the server.

```sh
$ duck-feeds npm install 
$ duck-feeds cd client
$ duck-feeds/client/ npm install
$ duck-feeds/client/ cd ..
$ duck-feeds cd src/connection/
$ duck-feeds/src/connection/ gedit config.js
[Edit config js for mysql connection enter correct user and password]
$ duck-feeds npm run dev
```
