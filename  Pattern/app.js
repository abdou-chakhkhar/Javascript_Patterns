// Basic structure

(function () {
  // here we can declare private vars and functions
  return {
    // here we declare public vars and functions that we can use outside this pattern
  };
})();

// STANDARD MODULE PATTERN

const UIController = (function () {
  const privateText =
    "salam from the private side of the pattern we can not access this from outside unless we return it";
  const changePrivateText = function () {
    const element = document.querySelector("h1");
    element.textContent = privateText;
  };
  return {
    callChangePrivateText: function () {
      changePrivateText();
    },
  };
})();

UIController.callChangePrivateText();
//UIController.changePrivateText(); // typeError
//console.log(UIController.text); // undefined we can't access this because it remains prvate

// REVEALING MODULE PATTERN

const ItemController = (function () {
  let data = [];
  function add(item) {
    data.push(item);
    console.log("We added a item");
  }
  function get(id) {
    return data.find((item) => {
      return item.id === id;
    });
  }
  return {
    add: add,
    get: get,
  };
})();
ItemController.add({ id: 1, name: "abdou" });
ItemController.add({ id: 2, name: "hamid" });
console.log(ItemController.get(2));
