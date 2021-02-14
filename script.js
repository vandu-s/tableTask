const table= document.getElementById('table');
const tableBody= document.getElementById('table_body');
let data=[['machine_name','machine_id','current','voltage','power_factor','active_power','apparent_power','reactive_power','daily_energy','monthly_energy','yearly_energy','idle_daily','idle_monthly','idle_yearly'], 
['Auto Winding Machine', 'machine001', 0, 0, 0, '0.0', '0.0', '0.0', 0, 0, 0, 0, 0, 0], 
['Boiler Machine', 'machine004', 0, 0, 0, '0.0', '0.0', '0.0', 0, 0, 0, 0, 0, 0]]
data.map((data, pos) => {
    createTable(data);

});
console.log(data);
console.log(table);
function createTable(data){
    var tr = document.createElement('tr');   
    tableBody.appendChild(tr);

    var td1 = document.createElement('td');
    td1.innerHTML=data[0];
    var td2 = document.createElement('td');
    td2.innerHTML=data[1];   
    var td3 = document.createElement('td');
    td3.innerHTML=data[2];
    var td4 = document.createElement('td');
    td4.innerHTML=data[3];
    var td5 = document.createElement('td');
    td5.innerHTML=data[4];
    var td6 = document.createElement('td');
    td6.innerHTML=data[5];
    var td7 = document.createElement('td');
    td7.innerHTML=data[6];
    var td8 = document.createElement('td');
    td8.innerHTML=data[7];
    var td9 = document.createElement('td');
    td9.innerHTML=data[8];
    var td10 = document.createElement('td');
    td10.innerHTML=data[9];
    var td11 = document.createElement('td');
    td11.innerHTML=data[10];
    var td12 = document.createElement('td');
    td12.innerHTML=data[11];
    var td13 = document.createElement('td');
    td13.innerHTML=data[12];
    var td14 = document.createElement('td');
    td14.innerHTML=data[13];


    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    tr.appendChild(td8);
    tr.appendChild(td9);
    tr.appendChild(td10);
    tr.appendChild(td11);
    tr.appendChild(td12);
    tr.appendChild(td13);
    tr.appendChild(td14);

 


}

