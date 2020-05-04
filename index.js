'use strict';

console.log('funguju!');

let tasks = ['Nakrmit prasata', 'Podojit krávu', 'Vyčistit kurník', 'Utlouct máslo'];

const updateTasks = () => {
  const todoTasksElm = document.querySelector('.todo__tasks');
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


