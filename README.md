# erp-angular-java
Project ERP with Java Spring + Angular 8.

## Steps
Run Spring Boot project and the the Angular project this sequence.

## BACK END - JAVA 11

This project was generated with [Spring Tool Suite](https://spring.io/tools) version 4.

### Build Spring Boot Project with Maven
You will need to run it from the project folder which contains the pom.xml file (`erp-api`).
`cd C:\Workspace\erp-angular-java\erp-api`
`mvn install`

### Run Spring Boot app with java -jar command
To run your Spring Boot app from a command line in a Terminal window you can you the java -jar command. This is provided your Spring Boot app was packaged as an executable jar file.
`java -jar target/erp-api-0.0.1-SNAPSHOT.jar`

### Development server
Navigate to `http://localhost:8080/`. The app will automatically reload if you change any of the source files.

## FRONT END - ANGULAR 8

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.11.

### Development server
Enter the folder `erp-app` and run `npm install` for download all libraries and dependencies.
Then run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).