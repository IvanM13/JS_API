"use strict";

const localStorageKey = "activities";
const data = localStorage.getItem(localStorageKey);

if (!data) {
  localStorage.setItem(localStorageKey, activitiesJSON);
}

const activities = JSON.parse(localStorage.getItem(localStorageKey));

const activitiesHtml = activities
  .map((activity) => getActivityHtml(activity))
  .join("");

const containerEl = document.querySelector(".container");

containerEl.innerHTML = activitiesHtml;


const joinBtnElems = document.querySelectorAll('.join');
const cancelBtnElems = document.querySelectorAll('.cancel');
cancelBtnElems.forEach(element => element.disabled = true);

containerEl.addEventListener("click", function (e) {
  const parentEl = e.target.closest(".activity");
  const id = +parentEl.dataset.id;
  const indexActivity = activities.findIndex((activity) => activity.id === id);

  const currentMembersEl = parentEl.querySelector(".current-number");
  const currentMembers = activities[indexActivity].currentParticipants;

  const maxMembers = activities[indexActivity].maxParticipants;
  if (currentMembers === maxMembers) {
    joinBtnElems[indexActivity].disabled = true;
  }

  if (e.target.classList.contains("join")) {
    currentMembersEl.textContent = currentMembers + 1;

    activities[indexActivity].currentParticipants += 1;
    localStorage.setItem(localStorageKey, JSON.stringify(activities));

    joinBtnElems[indexActivity].disabled = true;
    cancelBtnElems[indexActivity].disabled = false;
  }
  if (e.target.classList.contains("cancel")) {
    currentMembersEl.textContent = currentMembers - 1;

    activities[indexActivity].currentParticipants -= 1;
    localStorage.setItem(localStorageKey, JSON.stringify(activities));

    joinBtnElems[indexActivity].disabled = false;
    cancelBtnElems[indexActivity].disabled = true;
  }
});

function getActivityHtml(activity) {
  return (`<div class="activity" data-id="${activity.id}">
      <div class="name">${activity.name}</div>
      <div class="time">${activity.time}</div>
      <div class="max-members">Количество мест: <span class=""max-number>${activity.maxParticipants}</span></div>
      <div class="current-members">Занято: <span class="current-number">${activity.currentParticipants}</span></div>
      <button class="join">Записаться</button>
      <button class="cancel">Отменить запись</button>
  </div>`);
}
