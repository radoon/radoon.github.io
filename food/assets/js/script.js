const restaurants = [
  "123 Pizza & Indian Cuisine",
  "2 For 1 Family Pizza",
  "82 Bakeshop",
  "A&W",
  "Ace Burger",
  "Afghan Kabob & Donair",
  "Ambarsari Kitchen",
  "Angeethi Flame Fine Indian Bistro",
  "Arby's",
  "Asian Cuisine",
  "Asian Garden",
  "Asian Kitchen",
  "Baba's Homestyle Perogies",
  "Bagel Shop",
  "Baghdad Restaurant Ltd.",
  "Bannock Express",
  "Bao Bros",
  "barBURRITO",
  "Bawk Bawk Chicken & Poutines",
  "Beaks Chicken",
  "Bell Island Pizza",
  "Best Asia Buffet",
  "Best Cakes",
  "Best Taste Restaurant",
  "Between the Buns",
  "Big Bird",
  "Big Wings",
  "Birmingham's Vodka & Ale House",
  "Black Cat Tavern",
  "Black Pepper Pizza",
  "Blackrose Whiskey Club",
  "Blue Rhino Pub & Grill",
  "Boa's Bakery",
  "Boardwalk Fries Burgers Shakes",
  "Bombay Chaat & Paan",
  "Bon Temps Cafe",
  "Booster Juice",
  "Boston Pizza",
  "Botté Persian Kitchen",
  "Breakfast by Rock N Rodz",
  "Bridges Ale House & Eatery",
  "Bring Wings",
  "Broken Egg",
  "Brownies by the Pound",
  "Browns Socialhouse",
  "Bun's House Restaurant",
  "Burger King",
  "Buster's Pizza & Donair",
  "Cafe Japa Bowl",
  "Capitol Music Club",
  "Caraway Grill Saskatoon",
  "Casper's Shawarma",
  "Cathedral Social Hall",
  "Cesar's Cakes & Cafe",
  "Chatime",
  "Cheesetoast Restaurant",
  "Chef Express",
  "Chef Pan",
  "Chianti's Cafe",
  "Chicken Hut",
  "CHIT CHA",
  "Chop Steakhouse & Bar",
  "Chungchun Rice Hotdog",
  "Church's Texas Chicken",
  "Clark's Crossing Brew Pub",
  "Coach's Corner Eatery & Lounge",
  "Coachman Restaurant",
  "COBS Bread",
  "Cohen's Beer Republic",
  "Cora Breakfast & Lunch",
  "Cory Park Cafe",
  "Crispy Bites",
  "Crown Kitchen",
  "Crunchy Basket",
  "Dairy Queen",
  "Darbar Restaurant",
  "David's Restauraunt and Lounge",
  "Deep Dish Cookie Co.",
  "Delight + Chinese Cuisine",
  "Denny's",
  "Dessert Club",
  "Desserts by The Daily Scoop",
  "Diane's Kitchen",
  "Donair & Pizza Palace",
  "Dough Box Wood Fired Pizza & Pasta",
  "Dragon Emperor Dim Sum Restaurant",
  "Dublin's",
  "Dynamic Duo Restaurants",
  "Edo Japan",
  "Extreme Pita",
  "Faifo Concept",
  "Famoso Italian Pizzeria",
  "Fatburger",
  "Filosophi Wise Cuisine",
  "Fin City Fish & Chips",
  "Five Guys Burgers & Fries",
  "Flor's Authentic Filipino Cuisine",
  "Fox and Hounds Pub and Brewery",
  "Frankys Banh Mi",
  "French Toast Family Restaurant",
  "Freshly Squeezed",
  "FreshSlice Pizza",
  "Fried Addictions",
  "Fuh Station Vietnamese Cuisine 8th St. E",
  "Fuh Station Vietnamese Cuisine Idylwyld Dr. N",
  "Fuzion Sushi & Deli Bar",
  "Gas Plus",
  "Global Pot Fusion Cuisine",
  "Global Pot Fusion Cuisine Attridge",
  "Gong Cha and Karaoke",
  "Gong Cha Stonebridge",
  "Good Farmer Tofu Products and Deli",
  "Great Buffet of China",
  "Guac Mexi Grill",
  "Guruji Pure Veg Restaurant",
  "Hakka Express",
  "Happy Lamb Hot Pot",
  "Hashtags Saskatoon",
  "Havmor",
  "Healthy Living Bistro and Boutique",
  "Heaven Pizza & Donair",
  "Hey Fried Chicken",
  "Hey I am Yogost",
  "High Key Brewing Co Tap Room",
  "Hooters Saskatoon",
  "Hot Wok Asian Restaurant",
  "House Of Hakka Asian Fusion Cuisine",
  "Hudsons Canada's Pub",
  "Humble House Bakery",
  "Humpty's Big Plate Diner",
  "Hunger Cure Restro & Bar",
  "I Do Sweet Bakery & Beverage",
  "Jack + Roy's BBQ",
  "Jacky's Exotic Pizza",
  "Japa Shack",
  "Jasmine Restaurant",
  "Jeju Korean BBQ Restaurant",
  "Jia Vietnamese and Chinese Eatery",
  "Jodhpur Sweets & Restaurant",
  "Joey's Seafood Restaurant",
  "Kabab King",
  "Karahi Guys Restaurant",
  "Katmu Family Restaurant",
  "Keo's Kitchen",
  "KFC",
  "Khan Kabab Peshawari",
  "Khana Khajana",
  "King of Donair",
  "KING OF DUCK",
  "Ko Chicken + Ramen",
  "Koi Japanese Restaurant",
  "Koko Curry",
  "Kooko's Pizza",
  "La Bamba Cafe",
  "La Familia",
  "Landmark Cinemas",
  "Lebanese Kitchen",
  "Leopold's Tavern",
  "Liberty Kitchen",
  "Lifestyle Cafe",
  "Little Caesars",
  "Little Spice",
  "Loaded Pierogi",
  "Louis'",
  "Love Punjab Eats",
  "Macao Imperial Tea",
  "Magic Wok",
  "Mai's Kitchen Vietnamese Cuisine",
  "ManchuWOK",
  "Mano's Restaurant & Lounge",
  "Marhaba Restaurant",
  "Marvin's Home of the Best Siopao",
  "Mary Brown's Chicken",
  "McDonald's",
  "Meg's Diner",
  "Meltwich Food Co.",
  "Mi Tierra Mexican Restaurant",
  "Mia Pasta",
  "Ming's Kitchen",
  "Moment Bubble Tea",
  "Montana's BBQ & Bar",
  "Mosey's Southern BBQ",
  "Moto Japanese Kitchen",
  "MOXIES",
  "MR MIKES SteakhouseCasual",
  "Mr. Pretzels",
  "Mr. Ribs Family Restaurant",
  "Mr.Sub",
  "Mucho Burrito",
  "Namaste Bistro Saskatoon",
  "Nebo's Falafel & Donair",
  "Nellie's Kitchen",
  "New Island Sushi",
  "New York Fries",
  "No. 1 Noodle House",
  "Noodlebox",
  "Nutana Cafe",
  "NY Pizza Den",
  "O'Shea's Irish Pub",
  "Oceania Inn",
  "October Authentic Asian Cuisine",
  "On the Run",
  "OOMORI JAPANESE KITCHEN",
  "OPA! Souvlaki of Greece",
  "Orchid Garden",
  "Oreno Sushi",
  "Original Joe's Restaurant & Bar",
  "Pak Donair",
  "Panago Pizza",
  "Pancho's Pizza & Pasta",
  "Peking Restaurant",
  "Petro-Canada",
  "Philthy Philly's",
  "Pho Hao Restaurant",
  "Pi Co.",
  "Pickle & Bowls",
  "Pita Pit",
  "Pizza 73",
  "Pizza Bite & Indian Food",
  "Pizza Hut",
  "Pizza Time Pizza and Donair",
  "Pleasure-Way Pub",
  "Popeyes Louisiana Kitchen",
  "Poppin Perogies",
  "Prairie Donair",
  "Prairie Ink",
  "Press'd Sandwich Shop",
  "Primal",
  "Prime Bistro",
  "Princess Kitchen",
  "Puffsey Japanese restaurant",
  "Quebec Real Poutine",
  "Quesada Burritos & Tacos",
  "Quiznos",
  "Rayla's Bubble Tea Cafe",
  "Real Canadian Pizza & Donair",
  "Red Lobster",
  "Red Pepper",
  "Red Swan Pizza",
  "Red Zone Premium Sports Bar",
  "Red's Bar and Grill",
  "Restaurant Kashmere",
  "Rexall",
  "Rice Box",
  "Ricky Ticky Tacos",
  "Ricky's All Day Grill",
  "Rock Creek Tap & Grill",
  "Rock N Rodz Diner",
  "Royal Paan",
  "Royal Pizza",
  "Saigon Roll Restaurant",
  "Salad Bar By Pi Co",
  "Salt'N Pepper Indian Restaurant",
  "Sami's Sunrise Grill",
  "Samway Grill",
  "Santa Lucia Pizza",
  "Sardinia",
  "Saskatoon Inn Garden Cafe & Lounge",
  "Satay Vietnamese",
  "Schnitzel Meister",
  "Seasoned Fusion Tastes",
  "Second Cup Café",
  "Serene Tea",
  "Shark Club",
  "Sharma Curry Express & Sweets",
  "Shawarma Boys",
  "Shell",
  "Sizzling Wok",
  "Skip Express Lane",
  "Sly Fox Chicken Shack",
  "Smash Hamburgur",
  "Smitty's",
  "Smoke's Poutinerie",
  "Solaro Pizza",
  "SOS Treats",
  "Specklebellys Pub & Eatery",
  "Spicy Bite Restaurant",
  "Spicy Garden Restaurant",
  "Spicy Time Fine Indian Cuisine",
  "Spring Roll Restaurant",
  "Star of Ishtar",
  "State & Main",
  "Stephen C Dim Sum & BBQ",
  "Stoked Kitchen & Bar",
  "Street Tenders",
  "Stumbletown Distilling & City Limits Brewing",
  "Stylin' Poutine",
  "Subway",
  "Summer Palace Restaurant",
  "Sunan's Garden Hot Pot Buffet",
  "Swadesh",
  "Sweet Tooth",
  "Sweethoney Dessert",
  "Sweets for my Sweets",
  "Swirl World Frozen Treats",
  "Szechuan Kitchen",
  "T&Q VietMeal Restaurant",
  "Taco Bell",
  "Taco Time",
  "Taj Mahal",
  "Tamarind Restaurant",
  "Tandoori Express Pizza",
  "Tandoori Palace",
  "Tandoori Tadka",
  "Tapps Sports Lounge & Grill",
  "Tapri",
  "Taqueria Mexicana El Milagro",
  "Taste of Syria Restaurant",
  "Tastebuds Cafe",
  "Taunte Maria's Mennonite and Chinese Food Restaurant",
  "Taverna Italian Kitchen + Bar",
  "Thai Express",
  "The Ben & Jerry's Ice Cream Shop",
  "The Biryani Box Restaurant Ltd",
  "The Bombay Restaurant",
  "The Broadway Roastery",
  "The Burger Den",
  "The Canadian Brewhouse",
  "The Chopped Leaf",
  "The Flats Eatery + Drink",
  "The Gravy Boat",
  "The Greek House",
  "The Haines Mile Pub",
  "The Hideout Lounge",
  "The Meltdown",
  "The Old Spaghetti Factory",
  "The Philthy Pierogi",
  "The Pitch Kitchen",
  "The Riv Bar",
  "The Rook & Raven Pub",
  "The Shoppe",
  "The Ukrainian Canadian",
  "The Vault Restaurant",
  "The Vault Saskatoon Restaurant",
  "The Veganish",
  "The Wok Asian Restaurant",
  "Thien Vietnam",
  "Thirsty Scholar",
  "Thirteen Pies",
  "Tim Hortons",
  "TJ's Pizza",
  "Tong's Wok",
  "Toon Town Offsale",
  "Toon Town Tavern",
  "TOT Café",
  "True Pizza",
  "Twisted Monkey",
  "UNA pizza + wine",
  "Valley Pizza",
  "Venice House",
  "Vietnamese Diner Restaurant",
  "Vietnamese Tasty Cuisine",
  "VPs Pub and Grill",
  "Waves Poke + Press",
  "Wayback Burgers",
  "Wednesday's Smokey BBQ",
  "Wendel Clark's",
  "Wendy's",
  "White Lotus",
  "Willow Country",
  "Wings & All",
  "Wok Box",
  "Wow Pizza",
  "Yanz Place",
  "Yip Hong's",
  "YoHakka!",
  "YXE Pizza & Burgers"
];

function randomizer() {
  var rest_num = restaurants.length;
  var result_target = document.getElementById("randomResult");
  var random_array = [];
  result_target.innerHTML = "";

  for (var i=0; i<5; i++) {
    var random_num = Math.floor(Math.random() * rest_num);
    random_array.push(random_num);
  }

  random_array.sort(function(a, b){return a - b});

  for (var j=0; j<random_array.length; j++) {
    result_target.innerHTML += restaurants[random_array[j]] + '<br>';
  }
}