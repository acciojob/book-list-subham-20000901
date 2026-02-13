//your JS code here. If required.
let addBtn = document.getElementById("submit");
addBtn.addEventListener("click",function(e){
	 e.preventDefault(); 
	let title = document.getElementById("title").value;
	let author = document.getElementById("author").value;
	let isbn = document.getElementById("isbn").value;

	let booklist = document.getElementById("book-list");
	let row = document.createElement("tr");
	row.innerHTML = 
		`<td>${title}</td>
	     <td>${author}</td>
		 <td>${isbn}</td>
		 <td><button class="delete">X</button></td>`;
	
	 booklist.appendChild(row);

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
})

document.getElementById("book-list").addEventListener("click",function(e){
	if(e.target.classList.contains("delete")) {
		e.target.parentElement.parentElement.remove();
	}
})