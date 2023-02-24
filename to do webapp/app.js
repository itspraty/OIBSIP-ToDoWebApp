a = [];
let btn_add = document.getElementById("additem");
let btn_delete = document.getElementById("deleted");

function get_update(){
    let title = document.getElementById('title').value;
    let desc = document.getElementById('description').value;
    a.push([title, desc]);
    update();
   

}

function update(){
    
    str ='';
    a.forEach((element,index) => {
        str = str +
        `<tr>
        <th scope="row">${index+1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button type="submit" class="btn btn-danger  " onclick="deleted(${index})" >Remove</button></td>
        </tr>`
    });
    document.getElementById("tableBody").innerHTML = str;

}

function deleted(item_index){
    a.splice(item_index,1);
    console.log(a);
    update();

}

btn_add.addEventListener("click", () => {
    get_update();
    
});
