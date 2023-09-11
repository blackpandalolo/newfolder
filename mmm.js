let noi = document.getElementById('noi');
let noq = document.getElementById('noq');
let ppq = document.getElementById('ppq');
let total = document.getElementById('total');
let disp = document.getElementById('display');
let t;
let tt = '';
let list = [];
let z;

function add(){
    t = Number(noq.value) * Number(ppq.value);
    tt = Number(tt) + t;
    total.innerHTML = tt
    disp.innerHTML = <tr>
                        <th scope ="col">#</th>
                        <th scope ="col">Item</th>
                        <th scope ="col">No of Item</th>
                        <th scope ="col">Amount</th>
                        <th scope ="col"></th>
                        <th scope ="col"></th>
                     </tr> ;

     list.push({item: noi.value, noItem: noq.value, amount: t});
     display(list)
     noi.value =''; noq.value =''; ppq.value '';                
}
function display(data){
    for (let index = 0; index< list.length; index++) {
        disp.innerHTML += <tr class = 'row_${index}'>
            <td scope = "row">${index + 1}</td>
            <td >${list[index].item}</td>
            <td >${list[index].noItem}</td>
            <td >${list[index].amount}</td>
            <td> <button class="btn btn-danger" onclick = "del(${index})">Delete</button></td>
            <td> <button class="btn btn-secondary" onclick = "edit(${index})">Edit</button></td>
        </tr>
    }
}
function del(element){
    z = tt - list[element].amount;
    list.splice
} t