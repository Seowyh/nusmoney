const url = 'http://localhost:3000/category';

async function getCat(choice) {
//  document.getElementById("loader").style.display = "block";

switch (choice) {
    case "put":
        putCat();
        break;
    case "del":
        delCat();
        break;
    case "post":
        postCat();
        break;
    }
 
  let strTrans ="";
  strTrans = await initData(strTrans);
  console.log(strTrans);
//  document.getElementById("loader").style.display = "none";
  let tAddr = document.querySelector(".transTable");
  tAddr.innerHTML = strTrans;  
}

async function initData(strTrans) {
  let payload =
    {
      "Category_ID" : "8009",
      "Category_Type" : "Clothings"
    };
  
  await axios.get(url)
  .then((response) => {
    console.log(response.data);
    response.data.forEach(function(item){ 
        strTrans += `<tr> 
        <td>${item.Category_ID} </td>  
        <td> ${item.Category_Type} </td> 
        </tr>`
        });
     })
    .catch(function (error) {
        console.log(error);
      });
    return writeTableHead(strTrans);  
  }


  async function postCat() {
    let val1 = document.getElementById("catID1").value;
    let val2 = document.getElementById("catType1").value;
      let payload = {
            "catID" : val1,
            "catType" : val2
         };
  
    await axios.post(url,payload)
    .then((response) => {
        console.log(response.data);
       })
      .catch(function (error) {
          console.log(error);
        });
    }
  
    async function putCat() {
        let val1 = document.getElementById("catID2").value;
        let val2 = document.getElementById("catType2").value;
          let payload = {
                "catID" : val1,
                "catType" : val2
             };
      
        await axios.put(url,payload)
        .then((response) => {
            console.log(response.data);
           })
          .catch(function (error) {
              console.log(error);
            });
        }
     
    function delCat() {
        let val1 = document.getElementById("catID3").value;
        console.log(val1);
        let payload ={
          params: {
            "catID" : val1,
            "catType" : "Things"
          }
        };
        
        axios.delete(url,payload)
        .then((response) => {
            console.log(response.data);
           })
          .catch(function (error) {
              console.log(error);
            });
        }

//  function writeTableHead(str){
  let writeTableHead = str =>
    `
      <thead>
      <tr>
      <th>Category ID</th>
      <th>Category Type</th>
      </tr>
      </thead>
      <tbody>
        ${str}
      </tbody>
      </tr>
    `
