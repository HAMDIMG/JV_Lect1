let taskCounter = 1; // taskCounter في حالة اضافة ترقيم مع اضافتها للدف 
function addTask() {
    let div = document.createElement('div'); // createElement صناعة إلِمينت جديد
  /*  div.innerHTML = document.getElementById('newTask').value;*/
    div.innerHTML = taskCounter +
        ' ' +
        document.getElementById('newTask').value;

    document.getElementById('newTask').value=' '; // لحذف المحتوى  

    div.className = 'task';

    document.body.append(div); //  append أضيف أو زود

    taskCounter++; // للترقيم 
}