let tasks = []

let btn = document.getElementById('btn')
const ul = document.getElementById('ul')

btn.addEventListener('click',(e)=>{
    e.preventDefault()
    const title = document.getElementById('title').value
    const desc = document.getElementById('description').value
    const dueDate = document.getElementById('dueDate').value
    
    const task = {
        title,
        desc,
        dueDate
    }
    tasks.push(task);
    
    ul.innerHTML=''
    displayAllTasks()
})

function displayAllTasks(){
    tasks.forEach((t,idx)=>{
        const li = document.createElement('li');
        li.innerHTML = `
        <p><b>Title :</b>${t.title}</p>
        <p><b>Description :</b>${t.desc}</p>
        <p><b>Due Date :</b>${t.dueDate}</p>

        <button onclick="edit(${idx})">Edit</button>
        <button onclick="deleteTask(${idx})">Delete</button>
        `

        ul.appendChild(li);
    })
}

function edit(idx){
    document.getElementById('title').value = tasks[idx].title
    document.getElementById('description').value = tasks[idx].desc
    document.getElementById('dueDate').value = tasks[idx].dueDate

    tasks.splice(idx,1)
}

function deleteTask(idx){
    if (confirm("Are you sure you want to delete the task ?")){
        tasks.splice(idx,1)
        ul.innerHTML=''
        console.log(tasks);
    
        displayAllTasks()
    }
    
}