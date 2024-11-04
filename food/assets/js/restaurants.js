class Restaurant {
    constructor(restName, food, area, link) {
        this.name = restName;
        this.food = food.sort();
        this.area = area;
        if (link !== "") {
            this.link = link;
            this.ownwebsite = true;
        }
        else {
            this.link = "https://www.skipthedishes.com/saskatoon/restaurants?search=" + encodeURIComponent(restName);
            this.ownwebsite = false;
        }
    }

    get listFoods() { return this.food.join(", "); }
}

// TODO Go through to mark restaurants that have patios
// TODO Mark Fast Food restaurants

const restaurants = [
    new Restaurant("123 Pizza & Indian Cuisine", ["Pizza", "Indian"], "West", "https://www.123pizza.ca"),
    new Restaurant("2 For 1 Family Pizza", ["Pizza"], "Multiple", "https://www.familypizza.ca"),
    new Restaurant("A&W", ["Burgers"], "Multiple", ""),
    new Restaurant("Ace Burger", ["Burgers"], "East", ""),
    new Restaurant("Afghan Kabob & Donair", ["Kabab", "Donair"], "Downtown", ""),
    new Restaurant("Ambarsari Kitchen", ["Indian"], "West", ""),
    new Restaurant("Angeethi Flame Fine Indian Bistro", ["Indian"], "South", ""),
    new Restaurant("Arby's", ["Burgers"], "Multiple", ""),
    new Restaurant("Asian Cuisine", ["Asian","Thai","Vietnamese","Chinese"], "East", ""),
    new Restaurant("Asian Garden", ["Asian"], "East", ""),
    new Restaurant("Asian Kitchen", ["Asian","Chinese","Thai"], "East", ""),
    new Restaurant("Baba's Homestyle Perogies", ["Ukrainian"], "North", ""),
    new Restaurant("Bagel Shop", ["Sandwiches"], "Downtown", ""),
    new Restaurant("Baghdad Restaurant Ltd.", ["Middle Eastern", "Shawarma"], "East", ""),
    new Restaurant("Bannock Express", ["Burgers","Tacos","First Nations"], "West", ""),
    new Restaurant("Bao Bros", ["Asian"], "South", ""),
    new Restaurant("barBURRITO", ["Tacos"], "East", ""),
    new Restaurant("Bawk Bawk Chicken & Poutines", ["Fried Chicken"], "Multiple", ""),
    new Restaurant("Beaks Chicken", ["Fried Chicken"], "West", ""),
    new Restaurant("Bell Island Pizza", ["Pizza"], "East", ""),
    new Restaurant("Best Asia Buffet", ["Asian"], "North", ""),
    new Restaurant("Best Taste Restaurant", ["Asian", "Vietnamese"], "West", ""),
    new Restaurant("Between the Buns", ["Burgers"], "East", ""),
    new Restaurant("Big Bird", ["Fried Chicken"], "South", ""),
    new Restaurant("Big Wings", ["Fried Chicken"], "East", ""),
    new Restaurant("Birmingham's Vodka & Ale House", ["Pub", "Burgers"], "North", ""),
    new Restaurant("Black Cat Tavern", ["Pizza"], "East", ""),
    new Restaurant("Black Pepper Pizza", ["Pizza"], "West", ""),
    new Restaurant("Blackrose Whiskey Club", ["Pub"], "Downtown", ""),
    new Restaurant("Blue Rhino Pub & Grill", ["Pub"], "East", ""),
    new Restaurant("Boardwalk Fries Burgers Shakes", ["Burgers"], "East", ""),
    new Restaurant("Bombay Chaat & Paan", ["Indian"], "East", ""),
    new Restaurant("Bon Temps Cafe", ["Cajun"], "Downtown", ""),
    new Restaurant("Boston Pizza", ["Burgers", "Pizza", "Pub"], "Multiple", ""),
    new Restaurant("Botté Persian Kitchen", ["Middle Eastern", "Kabab"], "Downtown", ""),
    new Restaurant("Breakfast by Rock N Rodz", ["Breakfast"], "West", ""),
    new Restaurant("Bridges Ale House & Eatery", ["Pub"], "West", ""),
    new Restaurant("Bring Wings", ["Fried Chicken"], "East", ""),
    new Restaurant("Broadway Cafe", ["Breakfast","Diner","Cafe"], "East", "https://broadwaycafesaskatoon.ca/"),
    new Restaurant("Broken Egg", ["Breakfast"], "West", ""),
    new Restaurant("Park Cafe", ["Breakfast","Diner","Cafe"], "Downtown", "https://www.facebook.com/parkcafeyxe"),
    new Restaurant("Las Palapas",["Mexican"],"East","https://www.laspalapas.ca/"),
    // above were manually entered; below were generated
    new Restaurant("Browns Socialhouse",["Pub"],"Multiple",""),
    new Restaurant("Bun's House Restaurant",["Asian"],"North",""),
    new Restaurant("Burger King",["Burgers"],"Multiple",""),
    new Restaurant("Buster's Pizza & Donair",["Donair"],"East","https://www.busterspizza.ca/"),
    new Restaurant("Cafe Japa Bowl",["Japanese"],"East",""),
    new Restaurant("Capitol Music Club",["Pub"],"Downtown",""),
    new Restaurant("Caraway Grill Saskatoon",["Indian"],"Downtown",""),
    new Restaurant("Casper's Shawarma",["Shawarma"],"North",""),
    new Restaurant("Cathedral Social Hall",["Pub"],"Downtown",""),
    new Restaurant("Cesar's Cakes & Cafe",["Asian","Desserts","Filipino"],"West",""),
    new Restaurant("Cheesetoast Restaurant",["Diner"],"West","https://cheesetoast.ca/"),
    new Restaurant("Chef Express",["Chinese"],"Downtown",""),
    new Restaurant("Chef Pan",["Chinese"],"East","https://chefpan.ca"),
    new Restaurant("Chianti's Cafe",["Italian"],"Downtown",""),
    new Restaurant("Chicken Hut",["Burgers"],"East",""),
    new Restaurant("CHIT CHA",["Asian","Desserts","Korean"],"West","https://www.chitchaonline.com/"),
    new Restaurant("Chop Steakhouse & Bar",["Pub","Steakhouse"],"East",""),
    new Restaurant("Chungchun Rice Hotdog",["Korean"],"East",""),
    new Restaurant("Church's Texas Chicken",["Fried Chicken"],"Multiple",""),
    new Restaurant("Clark's Crossing Brew Pub",["Pub"],"West",""),
    new Restaurant("Coachman Restaurant",["Pub"],"East",""),
    new Restaurant("Cohen's Beer Republic",["Pub"],"Downtown",""),
    new Restaurant("Cora Breakfast & Lunch",["Breakfast"],"Multiple",""),
    new Restaurant("Cory Park Cafe",["Asian","Chinese"],"West",""),
    new Restaurant("Crispy Bites",["Burgers"],"East",""),
    new Restaurant("Crown Kitchen",["Caribbean"],"East",""),
    new Restaurant("Crunchy Basket",["Fried Chicken"],"Downtown",""),
    new Restaurant("Dairy Queen",["Burgers","Desserts"],"Multiple",""),
    new Restaurant("Darbar Restaurant",["Indian"],"Downtown","https://darbar.ca/"),
    new Restaurant("David's Restauraunt and Lounge",["Pub"],"North",""),
    new Restaurant("Delight+ Chinese Cuisine",["Chinese"],"South",""),
    new Restaurant("Denny's",["Breakfast","Burgers"],"Multiple",""),
    new Restaurant("Diane's Kitchen",["Asian","Korean"],"West",""),
    new Restaurant("Donair & Pizza Palace",["Donair","Pizza"],"West",""),
    new Restaurant("Dough Box Wood Fired Pizza & Pasta",["Pizza"],"East",""),
    new Restaurant("Dragon Emperor Dim Sum Restaurant",["Chinese"],"West",""),
    new Restaurant("Dublin's",["Pub"],"West",""),
    new Restaurant("Dynamic Duo Restaurants",["Indian"],"West",""),
    new Restaurant("Edo Japan",["Japanese"],"Multiple",""),
    new Restaurant("Extreme Pita",["Pitas"],"Multiple",""),
    new Restaurant("Faifo Concept",["Vietnamese"],"East",""),
    new Restaurant("Famoso Italian Pizzeria",["Pizza"],"East",""),
    new Restaurant("Fatburger",["Burgers"],"East",""),
    new Restaurant("Filosophi Wise Cuisine",["Italian"],"East",""),
    new Restaurant("Fin City Fish & Chips",["Pub"],"North",""),
    new Restaurant("Five Guys Burgers & Fries",["Burgers"],"East",""),
    new Restaurant("Flor's Authentic Filipino Cuisine",["Asian","Filipino"],"West",""),
    new Restaurant("Fox and Hounds Pub and Brewery",["Pub"],"North",""),
    new Restaurant("Frankys Banh Mi",["Vietnamese"],"Downtown",""),
    new Restaurant("French Toast Family Restaurant",["Breakfast","Burgers"],"East","https://frenchtoastrestaurant.ca/"),
    new Restaurant("FreshSlice Pizza",["Pizza"],"North",""),
    new Restaurant("Fried Addictions",["Fried Chicken"],"West",""),
    new Restaurant("Fuh Station Vietnamese Cuisine",["Vietnamese"],"North",""),
    new Restaurant("Fuzion Sushi & Deli Bar",["Sushi"],"Downtown",""),
    new Restaurant("Global Pot Fusion Cuisine",["African","Caribbean"],"East",""),
    new Restaurant("Gong Cha",["Desserts"],"South",""),
    new Restaurant("Good Farmer Tofu Products and Deli",["Chinese","Vegetarian/Vegan"],"South",""),
    new Restaurant("Great Buffet of China",["Asian"],"Downtown",""),
    new Restaurant("Guac Mexi Grill",["Mexican","Tacos"],"East","https://guacmexigrill.ca"),
    new Restaurant("Guruji Pure Veg Restaurant",["Indian","Vegetarian/Vegan"],"East",""),
    new Restaurant("Hakka Express",["Asian","Chinese"],"West","https://hakkaexpress.ca/"),
    new Restaurant("Happy Lamb Hot Pot",["Asian"],"East",""),
    new Restaurant("Havmor",["Indian"],"North","https://havmor.ca/"),
    new Restaurant("Healthy Living Bistro and Boutique",["Sandwiches","Ukrainian"],"East",""),
    new Restaurant("Heaven Pizza & Donair",["Donair","Pizza"],"West",""),
    new Restaurant("Hey Fried Chicken",["Fried Chicken","Korean"],"East","https://heyfriedchicken.com/"),
    new Restaurant("High Key Brewing Co Tap Room",["Pub"],"Downtown",""),
    new Restaurant("Hot Wok Asian Restaurant",["Asian"],"South",""),
    new Restaurant("House Of Hakka Asian Fusion Cuisine",["Asian","Indian"],"West",""),
    new Restaurant("Hudsons Canada's Pub",["Pub"],"Downtown",""),
    new Restaurant("Humpty's Big Plate Diner",["Diner"],"North",""),
    new Restaurant("Hunger Cure Restro & Bar",["Pub"],"Downtown",""),
    new Restaurant("Jack + Roy's BBQ",["Burgers"],"South",""),
    new Restaurant("Jacky's Exotic Pizza",["Pizza"],"North",""),
    new Restaurant("Japa Shack",["Burgers","Japanese"],"East",""),
    new Restaurant("Jasmine Restaurant",["Vietnamese"],"North",""),
    new Restaurant("Jeju Korean BBQ Restaurant",["Korean"],"North",""),
    new Restaurant("Jia Vietnamese and Chinese Eatery",["Asian","Chinese","Vietnamese"],"East",""),
    new Restaurant("Jodhpur Sweets & Restaurant",["Desserts","Indian"],"East",""),
    new Restaurant("Joey's Seafood Restaurant",["Pub"],"West",""),
    new Restaurant("Kabab King",["Indian","Kabab"],"East",""),
    new Restaurant("Karahi Guys Restaurant",["Asian","Indian","Pakistani"],"West",""),
    new Restaurant("Katmu Family Restaurant",["Asian","Filipino"],"West",""),
    new Restaurant("Keo's Kitchen",["Asian","Thai"],"East",""),
    new Restaurant("KFC",["Fried Chicken"],"Multiple",""),
    new Restaurant("Khan Kabab Peshawari",["Asian","Indian","Kabab"],"West",""),
    new Restaurant("King of Donair",["Donair","Pizza"],"East",""),
    new Restaurant("KING OF DUCK",["Asian","Chinese"],"Downtown",""),
    new Restaurant("Ko Chicken + Ramen",["Asian","Fried Chicken","Japanese"],"South",""),
    new Restaurant("Koi Japanese Restaurant",["Japanese"],"East",""),
    new Restaurant("Koko Curry",["Japanese"],"South",""),
    new Restaurant("Kooko's Pizza",["Pizza"],"East","https://kookospizza.ca/"),
    new Restaurant("La Bamba Cafe",["Mexican","Tacos"],"East",""),
    new Restaurant("Reem Star Shawarma",["Asian","Shawarma"],"East",""),
    new Restaurant("Leopold's Tavern",["Pub"],"Multiple",""),
    new Restaurant("Liberty Kitchen",["Italian"],"North",""),
    new Restaurant("Little Caesars",["Pizza"],"Multiple",""),
    new Restaurant("Little Spice",["Indian"],"Downtown",""),
    new Restaurant("Loaded Pierogi",["Ukrainian","Poutine"],"East",""),
    new Restaurant("Louis'",["Pub"],"East",""),
    new Restaurant("Love Punjab Eats",["Indian"],"Downtown",""),
    new Restaurant("Magic Wok",["Asian","Chinese"],"East",""),
    new Restaurant("Mai's Kitchen Vietnamese Cuisine",["Asian","Vietnamese"],"South",""),
    new Restaurant("ManchuWOK",["Asian","Chinese"],"Downtown",""),
    new Restaurant("Mano's Restaurant & Lounge",["Diner","Greek","Steakhouse"],"East",""),
    new Restaurant("Marhaba Restaurant",["Asian","Indian","Middle Eastern"],"Downtown",""),
    new Restaurant("Marvin's Home of the Best Siopao",["Asian","Chinese"],"West",""),
    new Restaurant("Mary Brown's Chicken",["Fried Chicken"],"Multiple",""),
    new Restaurant("McDonald's",["Burgers"],"Multiple",""),
    new Restaurant("Meg's Diner",["Burgers","Fried Chicken","Indian","Sandwiches"],"Downtown",""),
    new Restaurant("Meltwich Food Co.",["Burgers","Sandwiches"],"East",""),
    new Restaurant("Mi Tierra Mexican Restaurant",["Mexican","Tacos"],"North",""),
    new Restaurant("Mia Pasta",["Italian"],"Downtown",""),
    new Restaurant("Ming's Kitchen",["Asian","Chinese"],"Downtown",""),
    new Restaurant("Montana's BBQ & Bar",["Burgers","Steakhouse"],"Multiple",""),
    new Restaurant("Mosey's Southern BBQ",["Diner","Sandwiches"],"Multiple",""),
    new Restaurant("Moto Korean & Japanese Kitchen",["Japanese","Korean"],"West",""),
    new Restaurant("MOXIES",["Diner","Steakhouse"],"East",""),
    new Restaurant("MR MIKES SteakhouseCasual",["Diner","Steakhouse"],"East",""),
    new Restaurant("Mr. Ribs Family Restaurant",["Diner"],"East",""),
    new Restaurant("Mr.Sub",["Sandwiches"],"Multiple",""),
    new Restaurant("Mucho Burrito",["Mexican","Tacos"],"South",""),
    new Restaurant("Namaste Bistro Saskatoon",["Indian"],"South",""),
    new Restaurant("Nebo's Falafel & Donair",["Asian","Donair"],"North",""),
    new Restaurant("Nellie's Kitchen",["Burgers","Diner"],"West",""),
    new Restaurant("New Island Sushi",["Asian","Japanese","Sushi"],"North",""),
    new Restaurant("New York Fries",["Diner"],"Multiple",""),
    new Restaurant("No. 1 Noodle House",["Asian","Chinese"],"Downtown",""),
    new Restaurant("Noodlebox",["Asian"],"East",""),
    new Restaurant("Nutana Cafe",["Asian"],"East",""),
    new Restaurant("NY Pizza Den",["Pizza"],"Downtown",""),
    new Restaurant("O'Shea's Irish Pub",["Pub"],"Downtown",""),
    new Restaurant("Oceania Inn",["Asian","Chinese"],"East",""),
    new Restaurant("October Authentic Asian Cuisine",["Asian","Japanese"],"East",""),
    new Restaurant("OOMORI JAPANESE KITCHEN",["Asian","Japanese"],"Downtown",""),
    new Restaurant("OPA! Souvlaki of Greece",["Greek","Pitas"],"Multiple",""),
    new Restaurant("Orchid Garden",["Asian","Vietnamese"],"Downtown",""),
    new Restaurant("Oreno Sushi",["Japanese","Sushi"],"East",""),
    new Restaurant("Original Joe's Restaurant & Bar",["Pub"],"North",""),
    new Restaurant("Pak Donair",["Donair"],"East",""),
    new Restaurant("Panago Pizza",["Pizza"],"Multiple",""),
    new Restaurant("Pancho's Pizza & Pasta",["Pizza"],"East",""),
    new Restaurant("Peking Restaurant",["Asian","Chinese"],"West",""),
    new Restaurant("Philthy Philly's",["Burgers","Sandwiches"],"West",""),
    new Restaurant("Pho Hao Restaurant",["Asian","Vietnamese"],"West",""),
    new Restaurant("Pi Co.",["Pizza"],"Multiple",""),
    new Restaurant("Pink Cadillac",["Diner"],"East",""),
    new Restaurant("Pita Pit",["Pitas"],"Multiple",""),
    new Restaurant("Pizza 73",["Pizza"],"Multiple",""),
    new Restaurant("Pizza Bite & Indian Food",["Indian","Pizza"],"West",""),
    new Restaurant("Pizza Hut",["Pizza"],"Multiple",""),
    new Restaurant("Pizza Time Pizza and Donair",["Donair","Pizza"],"West",""),
    new Restaurant("Pleasure-Way Pub",["Pub"],"East",""),
    new Restaurant("Popeyes Louisiana Kitchen",["Cajun","Fried Chicken"],"Multiple",""),
    new Restaurant("Poppin Perogies",["Ukrainian","Poutine"],"Downtown",""),
    new Restaurant("Prairie Donair",["Donair"],"Multiple",""),
    new Restaurant("Prairie Ink",["Sandwiches"],"East",""),
    new Restaurant("Press'd Sandwich Shop",["Sandwiches"],"Multiple",""),
    new Restaurant("Primal",["Italian"],"Downtown",""),
    new Restaurant("Prime Bistro",["Asian","Burgers","Italian","Mexican","Tacos"],"North",""),
    new Restaurant("Princess Kitchen",["Asian","Chinese"],"East",""),
    new Restaurant("Puffsey Japanese restaurant",["Asian","Japanese"],"Downtown",""),
    new Restaurant("Quebec Real Poutine",["Diner"],"West",""),
    new Restaurant("Quesada Burritos & Tacos",["Mexican","Tacos"],"Multiple",""),
    new Restaurant("Quiznos",["Sandwiches"],"North",""),
    new Restaurant("Real Canadian Pizza & Donair",["Donair","Pizza"],"East",""),
    new Restaurant("Red Lobster",["Diner","Steakhouse"],"East",""),
    new Restaurant("Red Pepper",["Asian","Chinese","Thai","Vietnamese"],"Downtown",""),
    new Restaurant("Red Swan Pizza",["Pizza"],"Multiple",""),
    new Restaurant("Red Zone Premium Sports Bar",["Pub"],"North",""),
    new Restaurant("Red's Bar and Grill",["Pub"],"East",""),
    new Restaurant("Restaurant Kashmere",["Asian","Indian"],"East",""),
    new Restaurant("Rice Box",["Japanese","Korean"],"East",""),
    new Restaurant("Ricky Ticky Tacos",["Mexican","Tacos"],"East",""),
    new Restaurant("Ricky's All Day Grill",["Diner"],"North",""),
    new Restaurant("Rock Creek Tap & Grill",["Pub"],"Multiple",""),
    new Restaurant("Rock N Rodz Diner",["Diner"],"West",""),
    new Restaurant("Royal Paan",["Asian","Indian"],"North",""),
    new Restaurant("Royal Pizza",["Pizza"],"Multiple",""),
    new Restaurant("Saigon Roll Restaurant",["Asian","Thai","Vietnamese"],"Downtown",""),
    new Restaurant("Salt'N Pepper Indian Restaurant",["Asian","Indian"],"Downtown",""),
    new Restaurant("Sami's Sunrise Grill",["Breakfast","Diner"],"North",""),
    new Restaurant("Samway Grill",["Asian","Indian"],"East","https://samwaygrill.com/"),
    new Restaurant("Santa Lucia Pizza",["Pizza"],"Multiple",""),
    new Restaurant("Sardinia",["Diner","Italian"],"North",""),
    new Restaurant("Saskatoon Inn Garden Cafe & Lounge",["Sandwiches","Cafe"],"North",""),
    new Restaurant("Satay Vietnamese",["Asian","Vietnamese"],"North",""),
    new Restaurant("Schnitzel Meister",["Burgers"],"Multiple",""),
    new Restaurant("Seasoned Fusion Tastes",["Asian","Chinese","Japanese","Vietnamese"],"Downtown",""),
    new Restaurant("Shark Club",["Pub"],"North",""),
    new Restaurant("Sharma Curry Express & Sweets",["Asian","Desserts","Indian"],"East",""),
    new Restaurant("Shawarma Boys",["Asian","Diner","Shawarma"],"North",""),
    new Restaurant("Sizzling Wok",["Asian","Chinese"],"East",""),
    new Restaurant("Sly Fox Chicken Shack",["Burgers","Fried Chicken"],"Downtown",""),
    new Restaurant("Smash Hamburgur",["Burgers"],"West",""),
    new Restaurant("Smitty's",["Diner"],"Multiple",""),
    new Restaurant("Smoke's Poutinerie",["Diner"],"Multiple",""),
    new Restaurant("Solaro Pizza",["Pizza"],"West",""),
    new Restaurant("Specklebellys Pub & Eatery",["Pub"],"East",""),
    new Restaurant("Spicy Bite Restaurant",["Asian","Indian"],"West",""),
    new Restaurant("Spicy Garden Restaurant",["Asian","Thai"],"East",""),
    new Restaurant("Spicy Time Fine Indian Cuisine",["Asian","Indian"],"East",""),
    new Restaurant("Spring Roll Restaurant",["Asian","Vietnamese"],"West",""),
    new Restaurant("Star of Ishtar",["Greek","Middle Eastern"],"East",""),
    new Restaurant("State & Main",["Pub","Steakhouse"],"Downtown",""),
    new Restaurant("Stephen C Dim Sum & BBQ",["Asian","Chinese"],"West",""),
    new Restaurant("Stoked Kitchen & Bar",["Pub","Steakhouse"],"East",""),
    new Restaurant("Subway",["Sandwiches"],"Multiple",""),
    new Restaurant("Summer Palace Restaurant",["Asian","Chinese"],"East",""),
    new Restaurant("Sunan's Garden Hot Pot Buffet",["Asian","Chinese"],"East",""),
    new Restaurant("Swadesh",["Asian","Indian"],"West",""),
    new Restaurant("Szechuan Kitchen",["Asian","Chinese"],"East",""),
    new Restaurant("T&Q VietMeal Restaurant",["Asian","Vietnamese"],"South",""),
    new Restaurant("Taco Bell",["Mexican","Tacos"],"Multiple",""),
    new Restaurant("Taco Time",["Mexican","Tacos"],"Multiple",""),
    new Restaurant("Taj Mahal",["Asian","Indian"],"North",""),
    new Restaurant("Tamarind Restaurant",["Asian","Indian"],"East",""),
    new Restaurant("Tandoori Express Pizza",["Asian","Chinese","Pizza"],"East",""),
    new Restaurant("Tandoori Palace",["Asian","Indian","Pakistani"],"Downtown",""),
    new Restaurant("Tandoori Tadka",["Asian","Indian"],"East",""),
    new Restaurant("Tapps Sports Lounge & Grill",["Pub"],"South",""),
    new Restaurant("Tapri",["Asian","Chinese"],"East",""),
    new Restaurant("Taqueria Mexicana El Milagro",["Mexican","Tacos"],"West",""),
    new Restaurant("Taste of Syria Restaurant",["Asian","Middle Eastern"],"East",""),
    new Restaurant("Tastebuds Cafe",["Sandwiches","Cafe"],"East",""),
    new Restaurant("Taunte Maria's Mennonite and Chinese Food Restaurant",["Chinese","Diner"],"North",""),
    new Restaurant("Taverna Italian Kitchen + Bar",["Italian","Pub"],"Downtown",""),
    new Restaurant("Thai Express",["Thai"],"Multiple",""),
    new Restaurant("The Biryani Box Restaurant Ltd",["Asian","Indian"],"West",""),
    new Restaurant("The Bombay Restaurant",["Indian"],"East",""),
    new Restaurant("The Broadway Roastery",["Cafe"],"East",""),
    new Restaurant("The Burger Den",["Burgers"],"East",""),
    new Restaurant("The Canadian Brewhouse",["Pub"],"South",""),
    new Restaurant("The Chopped Leaf",["Sandwiches"],"Multiple",""),
    new Restaurant("The Flats Eatery + Drink",["Pub","Steakhouse"],"East",""),
    new Restaurant("The Greek House",["Greek","Pub"],"West",""),
    new Restaurant("The Haines Mile Pub",["Pub"],"East",""),
    new Restaurant("The Hideout Lounge",["Pub"],"East",""),
    new Restaurant("The Meltdown",["Sandwiches"],"East",""),
    new Restaurant("The Old Spaghetti Factory",["Italian"],"Downtown",""),
    new Restaurant("The Philthy Pierogi",["Diner","Ukrainian","Poutine"],"West",""),
    new Restaurant("The Pitch Kitchen",["Burgers","Diner","Sandwiches"],"West",""),
    new Restaurant("The Riv Bar",["Pub"],"North",""),
    new Restaurant("The Rook & Raven Pub",["Pub"],"Downtown",""),
    new Restaurant("The Ukrainian Canadian",["Diner","Ukrainian","Poutine"],"West",""),
    new Restaurant("The Vault Restaurant",["Asian","Vietnamese"],"East",""),
    new Restaurant("The Veganish",["Vegetarian/Vegan"],"Downtown",""),
    new Restaurant("The Wok Asian Restaurant",["Asian","Chinese","Vietnamese"],"East",""),
    new Restaurant("Thien Vietnam",["Asian","Chinese","Thai","Vietnamese"],"Multiple",""),
    new Restaurant("Thirsty Scholar",["Pub"],"East",""),
    new Restaurant("Thirteen Pies",["Pizza"],"Downtown",""),
    new Restaurant("Tim Hortons",["Sandwiches"],"Multiple",""),
    new Restaurant("TJ's Pizza",["Pizza"],"Multiple",""),
    new Restaurant("Tong's Wok",["Asian","Chinese"],"North",""),
    new Restaurant("Toon Town Tavern",["Pub"],"West",""),
    new Restaurant("TOT Café",["Sandwiches"],"South",""),
    new Restaurant("True Pizza",["Pizza"],"North",""),
    new Restaurant("Twisted Monkey",["Burgers","Pizza"],"West",""),
    new Restaurant("UNA pizza + wine",["Pizza"],"East",""),
    new Restaurant("Valley Pizza",["Asian","Pizza"],"East",""),
    new Restaurant("Venice House",["Diner","Italian"],"Multiple",""),
    new Restaurant("Vietnamese Diner Restaurant",["Asian","Vietnamese"],"West",""),
    new Restaurant("Vietnamese Tasty Cuisine",["Asian","Vietnamese"],"Downtown",""),
    new Restaurant("VPs Pub and Grill",["Filipino","Pub","Vietnamese"],"North",""),
    new Restaurant("Waves Poke + Press",["Asian","Japanese","Sushi"],"South",""),
    new Restaurant("Wayback Burgers",["Burgers"],"East",""),
    new Restaurant("Wednesday's Smokey BBQ",["Burgers"],"East",""),
    new Restaurant("Wendel Clark's",["Diner","Pub"],"North",""),
    new Restaurant("Wendy's",["Burgers"],"Multiple",""),
    new Restaurant("White Lotus",["Asian","Vietnamese"],"West",""),
    new Restaurant("Willow Country",["Burgers","Pub","Sandwiches"],"South",""),
    new Restaurant("Wings & All",["Fried Chicken"],"Downtown",""),
    new Restaurant("Wok Box",["Asian"],"Multiple",""),
    new Restaurant("Wow Pizza",["Pizza"],"Multiple",""),
    new Restaurant("Yanz Place",["Burgers","Pub"],"West",""),
    new Restaurant("Yip Hong's",["Asian","Chinese"],"South",""),
    new Restaurant("YoHakka!",["Asian","Indian"],"Downtown",""),
    new Restaurant("YXE Pizza & Burgers",["Burgers","Pizza"],"West",""),
];

// Sort by name so they don't need to be added in order
restaurants.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase())
        return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase())
        return 1;
    return 0;
});