<h2>Furmiliar</h2>
Furmiliar is a Rails and vanilla JS single page application that stores information about your pet's favorite toys. This is the frontend to my final project in JS for Flatiron School. 

Each pet has their own virtual toy box where you can input all the toys your pet has in case you want to purchase it again or if you want to know which toys need repaired. Each toy can contain the following information: name, brand, price, url of where it was purchased, and any features it has like squeakers.  

<h3>Installing Furmiliar:</h3>
To install Furmiliar, follow these steps:
First you will need to clone the backend here: https://github.com/dotnotation/Furmiliar_Backend
Install all required gems in the Gemfile by running `bundle install`. Create your database by running `rails db:migrate`. (Optional) Seed your database with the default dummy data by running `rails db:seed`. Run `rails s` in the terminal to run the ApplicationController. Open the port in the browser (rails defaults to port 3000) if you want to see the data in the api. For toy box information visit http://localhost:3000/toy_boxes. For toy information visit htpp://localhost:3000/toys. To exit the server run `ctrl + c` in the terminal. You will need to clone the frontend next: https://github.com/dotnotation/Furmiliar_Frontend. Then in the terminal enter `open index.html`. 

<h3>Using Furmiliar:</h3>
First, click on the toy box you want to add more toys to, or create your own toy box. Then you can create, read, update, or delete any of the toys. The only required field for both the toy box and the toy is that it must have a name. 

<img src="./public/FurmiliarJS.gif" alt="preview of website" />

<h3>Model Diagram:</h3>
<img src="/public/Furmiliar.jpeg" title="diagram of models for Furmiliar" alt="a diagram showing the relationship and attributes of the models for the Furmiliar project">

<h3>Contributors:</h3>
This project was created by @dotnotation as a student of Flatiron School Software Engineering.

<h3>Contact:</h3>
If you want to contact me you can email me at dorthythielsen@gmail.com. 

<h3>License:</h3>
This project uses the following license: MIT License.