import {
  show,
  hide,
} from "./utils";

export interface User {
  firstName: string;
  lastName: string;
  email: string;
}

interface CreateUserResponse {
  success: boolean;
  data: User;
}

interface FormElements extends HTMLFormControlsCollection {
  firstName: HTMLInputElement;
  lastName: HTMLInputElement;
  email: HTMLInputElement;
}

function createUser(form: HTMLFormElement): CreateUserResponse {
  const data = form.elements as FormElements

  return {
    success: true,
    data: {
      firstName: data.firstName.value,
      lastName: data.lastName.value,
      email: data.email.value
    }
  }
}

function validateRequiredField(field: HTMLInputElement) {
  const isValid=!!field.value

  if (isValid === false) {
    field.classList.add("error")
  }


  return isValid
}

function validateEmail() {
  let field = document.getElementById("email") as HTMLInputElement
  let isValid = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$").test(field.value)
  if (!isValid) {
    field.classList.add("error");
  }
  return isValid
}

function validateBio() {
  var field = document.getElementById("bio") as HTMLInputElement;
  var fieldLength = field.value.length;
  var isValid = fieldLength > 0 && field.value.length <= 200;

  if (isValid = false) {
    field.classList.add("error");
  }

  return isValid;
}

function validateDob() {
  const field = document.getElementById("dob") as HTMLInputElement
  const date = +new Date(field.value)
  const now=+new Date()
  const isValid = Math.abs(new Date(now - date).getUTCFullYear() - 1970) > 18

  if (!isValid) { field.classList.add("error") }

  return isValid
}

function isFormValid() {
  hide(document.getElementById("user_form_error")!);
  const formControls = document.querySelectorAll(".js-form-control");
  formControls.forEach(function (control) {
    control.classList.remove("error");
  });
  const isValid = validateRequiredField(document.getElementById("firstName") as HTMLInputElement) 
    && validateRequiredField(document.getElementById("lastName") as HTMLInputElement)
    && validateEmail()
    && validateBio()
    && validateDob()
    && validateRequiredField(document.getElementById("country") as HTMLInputElement) 
    && validateRequiredField(document.getElementById("courseCategory") as HTMLInputElement) 
  if (!isValid) {
    show(document.getElementById("user_form_error")!)
  }
  return isValid
}

function sanitize(strings: TemplateStringsArray, ...values: string[]) {
  let output = ""
  let index = 0
  for (index = 0; index < values.length; index++) {
    let valueString = values[index].toString()

    if (valueString.indexOf(">") !== -1) {
      valueString = "-"
    }

    output += strings[index] + valueString
  }

  output += strings[index]
  return output
}

function handleFormError() {
  show(document.getElementById("network_form_error")!);
}

function handleFormSuccess(form: HTMLFormElement, newUser: User) {
  var thanksBlock = document.getElementById("thanks")!
  var title = thanksBlock.querySelector("h3")!
  var content = thanksBlock.querySelector("p")!

  title.innerHTML = sanitize`Thank you ${newUser.firstName} for registering!`
  content.innerHTML = sanitize`We sent a confirmation email to <strong>${newUser.email}</strong>`

  hide(form)
  show(thanksBlock)
}

export function initUserForm() {
  document.getElementById("user_form")!.addEventListener("submit", function (ev) {
      ev.preventDefault()
      const form = ev.target as HTMLFormElement

      if (isFormValid()) {
          const { success, data: newUser } = createUser(form)

          if (!success) {
              handleFormError()
              return
          }

          handleFormSuccess(form, newUser)
        }
    });
}
