import { UserCreator } from "../../src/users/application/UserCreator";
import { User } from "../../src/users/domain/User";
import { DummyUserRepository } from "../../src/users/infrastructure/DummyUserRepository";
import { hide, show } from "./utils";

interface FormElements extends HTMLFormControlsCollection {
  firstName: HTMLInputElement;
  lastName: HTMLInputElement;
  email: HTMLInputElement;
}

function createUser(form: HTMLFormElement) {
  const data = form.elements as FormElements;
  const userCreator = new UserCreator(new DummyUserRepository());

  return userCreator.create({
    firstName: data.firstName.value,
    lastName: data.lastName.value,
    email: data.email.value,
  });
}

function validateRequiredField(field: HTMLInputElement) {
  const isValid = !!field.value;

  if (isValid === false) {
    field.classList.add("error");
  }

  return isValid;
}

function validateEmail() {
  const field = document.getElementById("email") as HTMLInputElement;
  const isValid = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$").test(field.value);
  if (!isValid) {
    field.classList.add("error");
  }
  return isValid;
}

function validateBio() {
  const field = document.getElementById("bio") as HTMLInputElement;
  const fieldLength = field.value.length;
  const isValid = fieldLength > 0 && field.value.length <= 200;

  if (isValid === false) {
    field.classList.add("error");
  }

  return isValid;
}

function validateDob() {
  const field = document.getElementById("dob") as HTMLInputElement;
  const date = +new Date(field.value);
  const now = +new Date();
  const isValid = Math.abs(new Date(now - date).getUTCFullYear() - 1970) > 18;

  if (!isValid) {
    field.classList.add("error");
  }

  return isValid;
}

function isFormValid() {
  hide(document.getElementById("user_form_error")!);
  const formControls = document.querySelectorAll(".js-form-control");
  formControls.forEach(function (control) {
    control.classList.remove("error");
  });
  const isValid =
    validateRequiredField(document.getElementById("firstName") as HTMLInputElement) &&
    validateRequiredField(document.getElementById("lastName") as HTMLInputElement) &&
    validateEmail() &&
    validateBio() &&
    validateDob() &&
    validateRequiredField(document.getElementById("country") as HTMLInputElement) &&
    validateRequiredField(document.getElementById("courseCategory") as HTMLInputElement);
  if (!isValid) {
    show(document.getElementById("user_form_error")!);
  }
  return isValid;
}

function sanitize(strings: TemplateStringsArray, ...values: string[]) {
  let output = "";
  let index = 0;
  for (index = 0; index < values.length; index++) {
    let valueString = values[index].toString();

    if (valueString.indexOf(">") !== -1) {
      valueString = "-";
    }

    output += strings[index] + valueString;
  }

  output += strings[index];
  return output;
}

function handleFormError() {
  show(document.getElementById("network_form_error")!);
}

function handleFormSuccess(form: HTMLFormElement, newUser: User) {
  const thanksBlock = document.getElementById("thanks")!;
  const title = thanksBlock.querySelector("h3")!;
  const content = thanksBlock.querySelector("p")!;

  title.innerHTML = sanitize`Thank you ${newUser.firstName} for registering!`;
  content.innerHTML = sanitize`We sent a confirmation email to <strong>${newUser.email}</strong>`;

  hide(form);
  show(thanksBlock);
}

export function initUserForm() {
  document.getElementById("user_form")!.addEventListener("submit", async function (ev) {
    ev.preventDefault();
    const form = ev.target as HTMLFormElement;

    if (isFormValid()) {
      const { success, data: newUser } = await createUser(form);

      if (!success) {
        handleFormError();
        return;
      }

      handleFormSuccess(form, newUser);
    }
  });
}
