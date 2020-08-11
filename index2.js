let lists = [{ id: 1, name: "Edivaldo" }];

//function to fetch one item and return it
function fetchItems() {
  return lists;
}

//function to add one new item
function addItem(item) {
  lists = [...lists, item];
}
addItem({ id: 2, name: "Rosany", lastName: "Goncalves" });

console.log(fetchItems());

//function update one item

function updatedItem(itemId, key, value) {
  lists.map((element) => {
    if (element.id === itemId) {
      element[key] = value;
    }
    return element;
  });
}
updatedItem(2, "lastName", "Santos");
updatedItem(1, "name", "Edineymar");
console.log(fetchItems());

//funcao to remove one item from the list
function removeItem(itemId, key, value) {
  lists = lists.filter((list) => {
    if (itemId === element.id) {
      lists !== key;
    }
  });
  // lists = lists.filter((list) => list !== item);
}

removeItem("name");
console.log(fetchItems());
