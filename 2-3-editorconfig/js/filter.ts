import { getOneByTitle, hide, show } from "./utils";

function getSelectedValues(node: HTMLElement) {
  const checkboxes = node.querySelectorAll<HTMLInputElement>("input[type=\"checkbox\"]:checked");

  const selectedValues = Array.from(checkboxes).map(
    (checkbox) => checkbox.value
  );

  return selectedValues;
}

function isInList(item: string,list: string[]){
  return list.includes(item);
}

export function initCategoryFilter() {
  const filter = document.getElementById("category")!;

  filter.addEventListener("change", function () {
    const categories = getSelectedValues(this);
    const elementsToFilter = document.querySelectorAll(".js-filtered-item");

    for (const element of elementsToFilter) {
      if (categories.length === 0) {
        show(element);
        continue;
      }

      const elementCategory = element.getAttribute("data-category")!;

      if (isInList(elementCategory, categories)) {
        show(element);
      } else {
        hide(element);
      }
    }
  });
}

export function initSearchByTitle() {
  const filter = document.getElementById("getOneByName") as HTMLInputElement;
  const result = document.getElementById("name-search-result")!;

  filter.addEventListener("keyup", () => {
    const course = getOneByTitle(filter.value);

    if (course) {
      show(result);
      result.innerHTML = course.title;
    } else {
      hide(result);
    }
  });
}
