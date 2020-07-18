
async function getPeople() {
    const peopleData =await fetch("https://randomuser.me/api/?results=50");
    const peopleValue = await peopleData.json()
    const name =peopleValue.results.filter(item=>item.name).map(th=>th.name.first)
    const lastName =peopleValue.results.filter(item=>item.name).map(th=>th.name.last)
    const gender =peopleValue.results.filter(item=>item.name).map(th=>th.gender)

  function drawTable(){
    const table=document.querySelector("#table")
    for(let i =0;i<name.length;i++) {
        const tr=document.createElement("TR")
        const td=document.createElement("Td")
        const td1=document.createElement("Td")
        const td2=document.createElement("Td")
        td.innerHTML=`${name[i]} `
        td1.innerHTML=`${lastName[i]}  `
        td2.innerHTML=`${gender[i]} `
        tr.appendChild(td)
        tr.appendChild(td1)
        tr.appendChild(td2)
        table.appendChild(tr)
      }
return table
  }
 $("#btn").on("click", drawTable ) 
 $("#btn").on("click", drawTableHead ) 
} getPeople()

function drawTableHead(){
    const table=document.querySelector("#table")
    const thead =document.createElement("THEAD")
    const tr =document.createElement("TR")
    const th1 =document.createElement("TH")
    th1.innerText="Name"
    const th2 =document.createElement("TH")
    th2.innerText="Last Name"
    const th3 =document.createElement("TH")
    th3.innerText="Gender"
        tr.appendChild(th1)
        tr.appendChild(th2)
        tr.appendChild(th3)
        thead.appendChild(tr)
        table.appendChild(thead)
}

