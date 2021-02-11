const url = 'http://localhost:3000/account';
let firstName = "";
let lastName = "";

async function getUser() {
//  document.getElementById("loader").style.display = "block";

  let strTrans ="";
  strTrans = await initData(strTrans);
  console.log(strTrans);
//  document.getElementById("loader").style.display = "none";
  let tAddr = document.querySelector(".transTable");
  tAddr.innerHTML = strTrans;
  
  let nAddr = document.getElementById("customerName");
  nAddr.innerHTML = `Welcome ${lastName} ${firstName}`;
}

async function initData(strTrans) {
  let val1 = document.getElementById("user").value;
  let val2 = document.getElementById("pw").value;
  let payload ={
    params: {
      "username" : val1,
      "password" : val2
    }
  };
  
  await axios.get(url, payload)
  .then((response) => {
    console.log(response.data);
    response.data.forEach(function(item){ 
      
    item.Date_created = convertDate(item.Date_created);  
    let y= item.Date_created.getFullYear();
    let m =item.Date_created.getMonth()+1;
    let d = item.Date_created.getDate();

        strTrans += `<tr> 
        <td>${item.Account_Number} </td>  
        <td> ${item.Account_Type} </td> 
        <td> ${item.Balance} </td> 
        <td>  ${d}-${m}-${y} </td> 
        <td> ${item.Max_Limit} </td> 
        </tr>`
        });
    firstName = response.data[0].First_Name;
    lastName = response.data[0].Last_Name;
     })
    .catch(function (error) {
        console.log(error);
      });
    return writeTableHead(strTrans);  
  }

  let convertDate = strDate => {
    let firstSh = strDate.indexOf('-');
    let lastSh = strDate.lastIndexOf('-');

    y=strDate.substring(0,firstSh);
      m=strDate.substring(firstSh+1, lastSh);  
      d=strDate.substr(lastSh+1,2);;

    return  new Date(y, m, d);
  }

//  function writeTableHead(str){
  let writeTableHead = str =>
    `
      <thead>
      <tr>
      <th>Account_Number</th>
      <th>Account_Type</th>
      <th>Balance</th>      
      <th>Date_created</th>
      <th>Max_Limit</th>
      </tr>
      </thead>
      <tbody>
        ${str}
      </tbody>
      </tr>
    `
