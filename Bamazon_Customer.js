//Initial setup
var inquirer = require("inquirer");
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,


  user: "root",


  password: "Century55",
  database: "Bamazon"
});
connection.connect(function(err) {
		  if (err) throw err; //Test connection 
		  console.log("connected as Customer number " + connection.threadId);
		});

	Contents();
	//connect to table
	function Contents(){
			//display contents item id, product name, and price
			connection.query("SELECT * FROM products", function(err,res){
				
				for (var i = 0; i < res.length; i++) {
					console.log("|Item id: "+ res[i].item_id + " |Product: "+ res[i].product_name + " |Price: $" +res[i].price );
					console.log("_____________________________________________");
				}
		});
			setTimeout(Purchase, 500);
	};
	function Purchase(){
		inquirer.prompt([
				{
					type: "input",
					message: "What is the id of the item you would like to purchase?",
	    			name: "id" 
				},
				{
					type: "input",
					message: "How many would you like to order?",
					name: "Quantity"	
				}
		]).then(function(user){
			connection.query("SELECT * FROM products WHERE item_id=?",[user.id],function(err, res) {
					if(res[0] == undefined){
						console.log("Item not found");
						Contents();
					}
					else{
						if(res[0].stock_quantity <= user.Quantity){
							console.log("insufficent stock to fulfill order. " + res[0].stock_quantity+ " are currently available");
							Contents();
						}
						else{
							var newStock = (res[0].stock_quantity - user.Quantity);
							var price = (res[0].price * user.Quantity);
								connection.query("UPDATE products Set ? WHERE?",
									[{stock_quantity: newStock}, {item_id: user.id}],
									 function(err,res){
									console.log("Purchase made successfully for a grand total of $" + price +", Thank you");

									});
								setTimeout(Continue,500);
						}
					}
				})
			});
	}


	function Continue(){
		inquirer.prompt([
		{
			type: "list",
			message:"Would you like to make another purchase?",
			choices: ["Yes","No"],
			name: "continue"
		}
		]).then(function(user){
			if(user.continue == "Yes"){
				Contents();
			}
			else{
				end();
			}
		});


		}




	//end node connection
	function end(){
		connection.end(function(err){
		if (err) throw err;
		})
	};