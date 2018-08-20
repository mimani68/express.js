
## Introduction

This project based on real need and now it work for an middle-east startup in automation-IOT. In the project scenario, server-side application has special roles in coordinate all user. As mention before mobile application with android and ios operation system is first user of API endpoint. we use single page application technology for separate UI/UX  part of of project and delegated to Angular project.
This project design in MVC-based mode and Monolithic architecture.


## Feature

#### 1) API end-point visualizer with [swagger](https://github.com/swagger-api/swagger-node)

The simplest way to share all reachable API for other user is visualizer that show all preserved URL and their HTTP verb.
___
#### 2) container with [docker](https://hub.docker.org)
Docker help us to lunch project in zero server configuration and agile template. It can be refactor in microservices with seperate service like cataloge, auto-detector, account, shop, mini social network, support and ...
___

#### 3) use system state monitoring with [PM9](https://pm2.keymetrics.io)
best tools for monitoring project in node.js technology is metrics tools like PM2.

![PM2](https://github.com/mimani68/express.js/blob/master/server/screen_shot/1397-01-21-2.jpg)
___

#### 4) Model-View_controller based
A familar project architucture is MVC that is popular in web application.
___

#### 5) runable in windows server with no dependency
in some case system admin need zero configuration for run application. with this package you can only run application as executable file with any software installation.

____
## RUN PROJECT

a) for use this project as

       $ npm run start

b) start project in monitoring mode

       $ npm run start:pm2
       $ npm run start:pm2-monit

c) watch project in development mode

       $ npm run start:nodemon

d ) bundle project in single file for release in public server with no restriction

       $ npm run start:webpack-mode
       $ npm run start:webpack-cli
