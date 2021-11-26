
function createHeaderColumn(tr, field){
  let th = document.createElement('th')
  th.style.border = '1px solid black'
  th.innerHTML = field
  tr.appendChild(th)
}

function createUserDataCell(tr, value){
  let td = document.createElement('td')
  td.style.border = '1px solid black'
  td.innerHTML = value
  tr.appendChild(td)
}

function createHeaders(table){
  let tr = document.createElement('tr')
  createHeaderColumn(tr, 'id')
  createHeaderColumn(tr, 'email')
  createHeaderColumn(tr, 'firstname')
  createHeaderColumn(tr, 'lastname')
  table.appendChild(tr)
}


function createRow(table, userRecord){
  let tr = document.createElement('tr')
  createUserDataCell(tr, userRecord.id)
  createUserDataCell(tr, userRecord.email)
  createUserDataCell(tr, userRecord.first_name)
  createUserDataCell(tr, userRecord.last_name)
  table.appendChild(tr)
}


function populateHtml(data)
{
  let div = document.getElementById('users')
  let old_table = document.getElementById('usertable')
  if(old_table) old_table.remove()
  let table = document.createElement('table')
  table.id = 'usertable'
  table.style.border = '1px solid black'
  createHeaders(table)
  for(let i=0; i<data.length;i++){
    createRow(table, data[i])
  }
  div.appendChild(table)
}
  
function processClick(){
    fetch('https://reqres.in/api/users')
    .then(res =>  res.json())
    .then(jsonData => 
      {
          console.log(jsonData)
          populateHtml(jsonData.data)
      })
    .catch(err => console.log(err))
}