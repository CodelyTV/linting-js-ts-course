import { countChars } from "./utils";

function fetchData(select: Element) {
  const domain = document.domain == "localhost" ? "localhost:8080" : document.domain;
  const type = select.getAttribute("data-type");

  return fetch(`http://${domain}/data/${type}.json`)
    .then((response) => response.json())
    .catch(() => {
      throw new Error(`Could not find ${type}.json`);
    });
}

function countCharacters() {
  const contentCounters = document.querySelectorAll(".js-count-content");

  for (let i = 0; i < contentCounters.length; ++i) {
    const counter = contentCounters[i];
    const form_field = counter.parentElement!.querySelector<HTMLInputElement>(".js-form-control")!;
    const char_counter_container = counter.querySelector(".js-count-chars");

    if (char_counter_container) {
      char_counter_container.innerHTML = countChars(form_field.value).toString();

      form_field.addEventListener("keyup", () => {
        char_counter_container.innerHTML = countChars(form_field.value).toString();
      });
    }
  }
}

async function loadSelectData() {
  const dataLoaders = document.querySelectorAll(".js-load-data");
  const requests = [];

  for (const select of dataLoaders) {
    requests.push(fetchData(select));
  }

  const responses = await Promise.all(requests).catch((e) => {
    console.error(e);
    return [];
  });

  responses.forEach(({ data }, index) => {
    const select = dataLoaders[index];

    for (const item of data) {
      const option = document.createElement("option");
      option.textContent = item.name;
      select.append(option);
    }
  });
}

export async function initForms() {
  countCharacters();
  loadSelectData();
}
