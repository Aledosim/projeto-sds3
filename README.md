
# DS Vendas

This is a web site developed during a event of [DevSuperior](https://devsuperior.com.br/), called Semana Spring React (Spring React Week). You can check out the [live site here](https://aledosim-sds3.netlify.app/).  

![Dashboard screenshot](https://github.com/Aledosim/projeto-sds3/blob/master/dashboard.png?raw=true)  

## The event

This was an third edition of online event carried by DevSuperior that went during may third and 9th of 2021. The objective was to teach some of the technologies that tech companies are looking for the most. The propose was to develop and deploy a website that shows fake information about sellers and sales, with graphics and tables constructed with information of the back end server.

Was supplied some [step by step material](https://github.com/devsuperior/sds3) along with videos and a Discord community for questions.

## Technologies

The front end was developed with ReactJS, using Axios to communicate with the back end. ApexCharts was used to make the graphs and the styling was made with Bootstrap. The navigation is based on React Router and everything is in Typescript. The deployment is at Netlify.

The back end is based on Spring Boot. H2 Database Engine was used during the development and PostgreSQL in production. The tests were made with Postman. The server relies on Heroku.

## Lessons

Since there was too much software that I don't know if I'll keep daily usage, I decided to carry this course into a VM with antiX installed. I had a problem on Java types (which is not my main language) when a query to databank returned a Double and my variable was defined as a Long. Had a problem with pgAdmin too, which I could not use because I canceled the configuration script execution and could not fix it. I thought it had crashed. So I used psql commands (I like the terminal anyway).

For me was a great way to introduce myself into Spring framework. I had been using ReactJS for some months, although I've never used Axios and never made great beautiful graphics.

I think the deployment process and the back end architecture was my greatest learned lesson. The separation between respository, service and controller layers is more clear for me now. This was the first time I used enviroment variables on production server. Is not much a hardship, but I am new on deployment business.
