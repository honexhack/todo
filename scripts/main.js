const form = document.querySelector("#new-task-submit");
const input = document.querySelector("#new-task-input");
const list_el = document.querySelector("#tasks");

form.addEventListener('click', (e) => {

	e.preventDefault();

	const task = input.value;
	let i = 0
	if(task.length != 0){
		list_el.innerHTML += `
		<li class="col-2 m-2 rmdot" id="${i}">
			<div class="task row">
				<div class="content col-12" class="text-${i}">
					${task}
				</div>
				<div class="col-12 row justify-content-center">
					<button class="delete fa-solid fa-trash col-4 p-2" style="color:red;" id="del-${i}"></button>
					<button class="edit fa-solid fa-pen-to-square col-4 p-2" id="edit-${i}" style="color:red;"></button>
				</div>
			</div>
		</li>
		`
		document.querySelector(`#del-${i}`).addEventListener('click', (e)=>{
			console.log("OK")
			document.querySelector(`#${i}`).remove();
		})
		document.querySelector(`#edit-${i}`).addEventListener('click', (e) => {
			const x = prompt("Enter new val");
			if(x.length() != 0){
				document.querySelector(`#text-${i}`).innerHTML = x
			}
		})
		input.value = ""
		i++
	}
});

	
// localStorage.setItem("text",task);
// benstr.onclick = function(){
// 	let key =task_input_el.value;
// 	localStorage.setItem()
// }
