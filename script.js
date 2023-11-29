"use strict";

const userInputs = document.querySelectorAll(".form__input");
const yearInput = document.querySelector(".form__input--year");
const monthInput = document.querySelector(".form__input--month");
const dayInput = document.querySelector(".form__input--day");

const dayInputErrorMsg = document.querySelector(".error-msg--day");
const monthInputErrorMsg = document.querySelector(".error-msg--month");
const yearInputErrorMsg = document.querySelector(".error-msg--year");

const formBtn = document.querySelector(".form__btn");

const ageResultYears = document.querySelector(".age-result__years");
const ageResultMonth = document.querySelector(".age-result__months");
const ageResultDay = document.querySelector(".age-result__days");

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;
const currentDay = new Date().getDate();

dayInputErrorMsg.textContent = "Must be a valid day";
monthInputErrorMsg.textContent = "Must be a valid month";
yearInputErrorMsg.textContent = "Must be in the past";

let isDayInputValid = false;
let isMonthInputValid = false;
let isYearInputValid = false;

function addError(inputErrMsg, userInput) {
  userInput.classList.add("error");
  inputErrMsg.classList.remove("hidden");
}

function removeError(inputErrMsg, userInput) {
  userInput.classList.remove("error");
  inputErrMsg.classList.add("hidden");
}

formBtn.addEventListener("click", function () {
  dayInput.value > 31 || dayInput.value === ""
    ? addError(dayInputErrorMsg, dayInput)
    : removeError(dayInputErrorMsg, dayInput);

  monthInput.value > 12 || monthInput.value === ""
    ? addError(monthInputErrorMsg, monthInput)
    : removeError(monthInputErrorMsg, monthInput);

  yearInput.value > currentYear || yearInput.value === ""
    ? addError(yearInputErrorMsg, yearInput)
    : removeError(yearInputErrorMsg, yearInput);

  dayInput.value <= 31 && dayInput.value !== ""
    ? (isDayInputValid = true)
    : (isDayInputValid = false);

  monthInput.value <= 12 && monthInput.value !== ""
    ? (isMonthInputValid = true)
    : (isMonthInputValid = false);
  yearInput.value <= currentYear && yearInput.value !== ""
    ? (isYearInputValid = true)
    : (isYearInputValid = false);

  if (isDayInputValid && isMonthInputValid && isYearInputValid) {
    const yearsSpent = currentYear - yearInput.value;
    const monthsSpent = currentMonth - monthInput.value;

    if (currentMonth < monthInput.value) {
      ageResultYears.textContent = yearsSpent - 1;
      ageResultMonth.textContent = currentMonth - 1;
      ageResultDay.textContent = currentDay - 1;
    } else if (
      Number(monthInput.value) === currentMonth &&
      Number(dayInput.value) === currentDay
    ) {
      ageResultYears.textContent = yearsSpent;
      ageResultMonth.textContent = "0";
      ageResultDay.textContent = "0";
    } else {
      ageResultYears.textContent = yearsSpent;
      ageResultMonth.textContent = monthsSpent - 1;
      ageResultDay.textContent = currentDay - 1;
    }
  }

  // if (isDayInputValid && isMonthInputValid && isYearInputValid) {
  //   const yearsDifference = currentYear - yearInput.value;
  //   const monthDifference = currentMonth - monthInput.value;
  //   const dayDifference = currentDay - 1;

  //   if (
  //     currentMonth < monthInput.value ||
  //     (Number(monthInput.value) === currentMonth &&
  //       Number(dayInput.value) === currentDay)
  //   ) {
  //     ageResultYears.textContent = yearsDifference - 1;
  //     ageResultMonth.textContent =
  //       currentMonth === monthInput.value && currentDay === dayInput.value
  //         ? "--"
  //         : currentMonth - 1;
  //     ageResultDay.textContent = dayDifference;
  //   } else {
  //     ageResultYears.textContent = yearsDifference;
  //     ageResultMonth.textContent = monthDifference - 1;
  //     ageResultDay.textContent = dayDifference;
  //   }
  // }
});
