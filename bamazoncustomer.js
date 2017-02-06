
var app = express();
var mysql = require("mysql");
var inquirer = require("Inquirer");
var bodyParser = require('body-parser');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "/keys.js",
  database: "bamazon"

});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

connection.query("SELECT * FROM products", function(err, res) {
  for (var i = 0; i < res.length; i++) {
    console.log(res[1])};

});

// unsure about raw list and is that how u rite products? prolly not.
var start = function() {
  inquirer.prompt({
    name: "buy",
    type: "rawlist",
    message: "What Would you like to buy?",
    choices: ["products"]
    }
]).then(function(answer)) {
  if(answer.buy() === "products")
    saleCompleted();
   }
   else {
     insufficentQuantity();
   };

var saleCompleted (function () {
  connection.queary("SELECT * FROM Product.id, function(err, res") {
  console.log("Sale Completed")
};
// @todo insufficent quantity function
var insufficentQuantity = function(get, err){
  console.log("insufficentQuantity");
});
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



var products [{

  item_id: "21",
  item_name: "Card Deck",
  department_name: "Fun Stuff",
  price:"5",
  quantity: "24",
}, {
  item_id: "22",
  item_name: "Coffee",
  department_name: "drinks",
  price:"15",
  quantity: "24",
}, {
  item_id: "23",
  item_name: "macbook",
  department_name: "electronics",
  price:"999",
  quantity: "24",
}, {
  item_id: "24",
  item_name: "headphones",
  department_name: "electronics",
  price:"25",
  quantity: "24",
}, {
  item_id: "25",
  item_name: "fountainPens",
  department_name: "stationary",
  price:"31",
  quantity: "24",
}, {
  item_id: "26",
  item_name: "forks",
  department_name: "utensils",
  price:"5",
  quantity: "24",
}, {
  item_id: "27",
  item_name: "beer",
  department_name: "alcohol",
  price:"4",
  quantity: "24",
}, {
  item_id: "28",
  item_name: "Boxes",
  department_name: "materials",
  price:"1",
  quantity: "24",
}, {
  item_id: "29",
  item_name: "diapers",
  department_name: "baby",
  price:"100",
  quantity: "24",
}, {
  item_id: "30",
  item_name: "jeans",
  department_name: "clothing",
  price:"30",
  quantity: "24",
}];














app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
