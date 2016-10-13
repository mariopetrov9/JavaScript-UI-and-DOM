/* globals $ */

function solve() {
  return function(selector) {
    var root,
        elements,
        targetButton,
        content,
        next,
        len;

    if (typeof selector !== 'string' && !(selector instanceof HTMLElement)) {
      throw new Error();
    }

    root = document.getElementById(selector);

    if (root === null) {
      throw new Error();
    }

    elements = root.childNodes;
    len = elements.length;

    for (var i = 0; i < len; i += 1) {
      if (elements[i].className === "button") {
        elements[i].innerHTML = "hide"
      }
    }

    root.addEventListener("click", function(ev) {
      targetButton = ev.target;
      next = targetButton.nextElementSibling;

      if (targetButton.className !== "button") {
        return;
      }

      if (next.className === "content") {
        content = next;

        while (next) {
          if (next.className === "button") {
            if (content.style.display === "none") {
              content.style.display = "";
              targetButton.innerHTML = "hide";
            }
            else {
              content.style.display = "none";
              targetButton.innerHTML = "show";
            }
            break;
          }
          next = next.nextElementSibling;
        }
      }
    }, false)
  };
};

module.exports = solve;