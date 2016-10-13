/* globals module, document, HTMLElement, console */

function solve() {
  return function (selector, isCaseSensitive) {
    var element = selector;

    isCaseSensitive = !!isCaseSensitive;

    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (!element || !(element instanceof HTMLElement)) {
      throw new Error("Invalid HTML element or selector");
    }

    fragment = document.createDocumentFragment();

    // Add Controls
    var addControls = document.createElement('div');
    addControls.className += ' add-controls';

    var addInput = document.createElement('input');

    var addLabel = document.createElement('label');
    addLabel.innerHTML = 'Enter Text';
    addLabel.appendChild(addInput);

    var addButton = document.createElement('a');
    addButton.className += ' button';

    addButton.addEventListener('click', function (ev) {
      var value = addInput.value;
      addInput.value = '';

      itemText.innerHTML = value;

      resultList.appendChild(resultItem.cloneNode(true));
    }, false);

    addButton.innerHTML = 'Add';
    addButton.style.display = 'inline-block';

    addControls.appendChild(addLabel);
    addControls.appendChild(addButton);

    // Search Controls
    var searchControls = document.createElement('div');
    searchControls.className += ' search-controls';

    var searchInput = document.createElement('input');

    searchInput.addEventListener('keyup', function (ev) {
      var i = 0,
        len,
        text,
        pattern = searchInput.value;
      if (!isCaseSensitive) {
        pattern = pattern.toLowerCase();
      }

      for (i = 0, len = listItems.length; i < len; i += 1) {
        text = listItems[i].getElementsByTagName("strong")[0].innerHTML;
        if (!isCaseSensitive) {
          text = text.toLowerCase();
        }

        if (text.indexOf(pattern) < 0) {
          listItems[i].style.display = "none";
        } else {
          listItems[i].style.display = "";
        }
      }
    }, false);

    var searchLabel = document.createElement('label');
    searchLabel.innerHTML = 'Search:';
    searchLabel.appendChild(searchInput);

    searchControls.appendChild(searchLabel);

    // Result Controls
    var resultControls = document.createElement('div');
    resultControls.className += ' result-controls';

    var resultList = document.createElement('ul');
    resultList.className += ' items-list';

    var resultItem = document.createElement('li');
    resultItem.className += ' list-item';

    var deleteButton = document.createElement('a');
    deleteButton.className += ' button button-delete';
    deleteButton.innerHTML = 'X';

    var itemText = document.createElement('strong');

    resultItem.appendChild(deleteButton);
    resultItem.appendChild(itemText);

    resultList.addEventListener('click', function (ev) {
      var btn = ev.target;
      if (btn.className.indexOf("button-delete") < 0) {
        return;
      }

      var parent = btn;
      while (parent && parent.className.indexOf("list-item") < 0) {
        console.log(parent.nodeName);
        parent = parent.parentNode;
      }

      if (!parent) {
        return;
      }

      resultList.removeChild(parent);
    }, false);

    resultControls.appendChild(resultList);

    listItems = element.getElementsByClassName("list-item");

    fragment.appendChild(addControls);
    fragment.appendChild(searchControls);
    fragment.appendChild(resultControls);

    element.appendChild(fragment);
    element.className += " items-control";
  };
}

module.exports = solve;