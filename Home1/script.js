const data = JSON.parse(work);

const root = document.getElementById('root');

data.forEach((lesson) => {
  const lessonElement = document.createElement("div");
  const titleElement = document.createElement("h2");
  const timeElement = document.createElement("h2");
  const maxParticipantsElement = document.createElement("p");
  const currentParticipantsElement = document.createElement("p");
  const buttonPlus = document.createElement("button");
  const buttonMinus = document.createElement("button");

  buttonPlus.setAttribute('type', 'button');
  buttonPlus.classList.add("btn");
  buttonPlus.classList.add("btn-success");

  buttonMinus.setAttribute('type', 'button');
  buttonMinus.classList.add("btn");
  buttonMinus.classList.add("btn-primary");

  lessonElement.classList.add("lesson");
  titleElement.classList.add("title");
  timeElement.classList.add("time");
  maxParticipantsElement.classList.add("max");
  currentParticipantsElement.classList.add("current");

  titleElement.innerHTML = lesson.title;
  timeElement.innerHTML = `Время проведения: ${lesson.time}`;
  maxParticipantsElement.innerHTML = `Максимальное количество участников: ${lesson.maxParticipants}`;
  currentParticipantsElement.innerHTML = `Текущее количество записанных участников: ${lesson.currentParticipants}`;
  buttonPlus.innerHTML = 'Записаться';
  buttonMinus.innerHTML = 'Отписаться';

  if (lesson.currentParticipants === lesson.maxParticipants) {
    buttonPlus.classList.remove("btn-primary");
    buttonPlus.classList.add("btn-danger");
  }

  buttonPlus.addEventListener("click", () => {
    if (lesson.currentParticipants < lesson.maxParticipants) {
      lesson.currentParticipants++;
      currentParticipantsElement.innerHTML = `Текущее количество записанных участников: ${lesson.currentParticipants}`;


      if (lesson.currentParticipants >= lesson.maxParticipants) {
        buttonPlus.classList.remove("btn-primary");
        buttonPlus.classList.add("btn-danger");
      } else {
        buttonMinus.classList.remove("btn-warning");
        buttonMinus.classList.add("btn-primary");
      }
    }
  });

  buttonMinus.addEventListener("click", () => {
    if (lesson.currentParticipants > 0) {
      lesson.currentParticipants--;
      currentParticipantsElement.innerHTML = `Текущее количество записанных участников: ${lesson.currentParticipants}`;

      if (lesson.currentParticipants === 0) {
        buttonMinus.classList.remove("btn-primary");
        buttonMinus.classList.add("btn-warning");
      } else {
        buttonPlus.classList.remove("btn-danger");
        buttonPlus.classList.add("btn-primary");
      }
    }

  });

  lessonElement.appendChild(titleElement);
  lessonElement.appendChild(timeElement);
  lessonElement.appendChild(maxParticipantsElement);
  lessonElement.appendChild(currentParticipantsElement);
  lessonElement.appendChild(buttonPlus);
  lessonElement.appendChild(buttonMinus);
  root.appendChild(lessonElement);
});

