var restaurantsArr = [];

if (typeof restaurants !== 'undefined') {
  restaurantsArr = restaurants;
}

// Generate food type list
var rawFoodList = [];
restaurantsArr.forEach(element => {
  element.food.forEach(foodelem => {
    if (foodelem !== "") {
      rawFoodList.push(foodelem);
    }
  });
});
var foodList = [...new Set(rawFoodList)];
foodList.sort();

// Generate area list
var rawAreaList = [];
restaurantsArr.forEach(element => {
  if (element.area !== "") {
    rawAreaList.push(element.area);
  }
});
var areaList = [...new Set(rawAreaList)];
areaList.sort();

// Populate select lists
var foodselect = document.getElementById("foodselect");
var areaselect = document.getElementById("areaselect");
foodList.forEach(element => {
  var option = document.createElement("option");
  option.text = element;
  option.value = element;
  foodselect.add(option);
});
areaList.forEach(element => {
  var option = document.createElement("option");
  option.text = element;
  option.value = element;
  areaselect.add(option);
});

function filterFoods(arr, query) {
  return arr.filter(element => element.food.includes(query));
}

function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

function runListGenerator() {
  const result = document.getElementById("filteredResult");
  const foodselect = document.getElementById("foodselect").value;
  const areaselect = document.getElementById("areaselect").value;
  const limitselect = document.getElementById("limitselect").value;
  var filteredArr = restaurantsArr;
  result.innerHTML = "";

  if (foodselect !== "") {
    filteredArr = filterFoods(filteredArr, foodselect);
  }

  if (areaselect !== "") {
    filteredArr = filteredArr.filter(obj => obj.area == areaselect);
  }

  const arrLen = filteredArr.length;
  if (limitselect !== "" && arrLen > limitselect) {
    filteredArr = getMultipleRandom(filteredArr, limitselect);
    filteredArr.sort((a, b) => {
      if (a.name < b.name)
        return -1;
      if (a.name > b.name)
        return 1;
      return 0;
    });
  }

  if (filteredArr.length === 0) {
    result.append("- no matches -");
  }
  else {
    filteredArr.forEach(elem => {
      var linebreak = document.createElement("br");
      var resultitem = document.createElement("li");
      var resultlink = document.createElement("a");
      var resultfood = document.createElement("span");

      resultlink.href = elem.link;
      resultlink.text = elem.name;
      resultlink.target = "_blank";
      if (elem.ownwebsite) { resultlink.classList = "own-website"; }

      resultfood.classList = "result-food";
      resultfood.textContent = elem.listFoods + " - " + elem.area;

      resultitem.append(resultlink, linebreak, resultfood);
      result.append(resultitem);
    });
  }
}