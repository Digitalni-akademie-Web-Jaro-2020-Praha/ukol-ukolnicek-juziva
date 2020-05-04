'use strict';

console.log('funguju!');


/* U buttonu zmena kurzoru na pointer */

const btnPointer = () => {
  const buttonElm = document.querySelector('button');
  buttonElm.style.cursor = "pointer";
}
btnPointer();


/* Vytvoreni pole a jeho pridani do seznamu */

let tasks = ['Nakrmit prasata', 'Podojit krávu', 'Vyčistit kurník', 'Utlouct máslo'];
const todoTasksElm = document.querySelector('.todo__tasks');

const updateTasks = () => {
  for (let i = 0; i < tasks.length; i++) {
    todoTasksElm.innerHTML += `<div class="task">
    ${tasks[i]}
  </div>`
  }
}
updateTasks();


/* delsi reseni bez pouziti cyklu

const updateTasks = () => {
todoTasksElm.innerHTML = `<div class="task">
${tasks[0]}
</div>
<div class="task">
${tasks[1]}
</div>
<div class="task">
${tasks[2]}
</div>
<div class="task">
${tasks[3]}
</div>`
}
updateTasks();
*/



/* Pridani funkce, kdy uzivatel muze pridat novou polozku na seznam */

const submitTask = () => {
  const newTaskElm = document.querySelector('#new-task');

  if (newTaskElm.value === '') {
    alert("Takhle to nejde. Zadej opravdový úkol.")
  } else {
    tasks.push(newTaskElm.value);
    todoTasksElm.innerHTML = '';
    updateTasks();
    newTaskElm.value = '';
  }
}

const btnAddElm = document.querySelector('.btn-add');
btnAddElm.addEventListener('click', submitTask);





