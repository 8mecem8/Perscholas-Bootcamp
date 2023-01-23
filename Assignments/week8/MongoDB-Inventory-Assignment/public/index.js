




 
async function showOne(type,arg)
{
 
 let item = await (async()=>{ let res = await fetch(`/${type}/${arg}`); let data = await res.json(); return data })()
 


 const body = document.querySelector('body')
 const fragment = document.createDocumentFragment() // create and append new elements faster with method


 const forOne = document.createElement("dialog");
 forOne.id = 'forOneContainer'



   forOne.innerHTML = `
        <h2>Here is our great ${type}s</h2>
        <form method="dialog" style="width:100%;">
          <p style="font-size: 28px;"> name:${item.name}<br> color:${item.color}<br> age:${item.age}<br> eatable: ${item.readyToEat}</p>
          <button class="close-modal" value="cancel">Close Dialog Box</button>
        </form>
      ` 



      fragment.appendChild(forOne)
      body.appendChild(fragment,null)



      forOne.showModal();

}



const renderHtml = async() => 
{
  const mainEl = document.querySelector("main")
  const fragment = document.createDocumentFragment() // create and append new elements faster with method
  
  
  
  const mainCon = document.createElement("div");
  mainCon.id = 'mainContainer'
  
  
  mainCon.innerHTML= `
  <div id="Data-main-wrapper">
    <div id="Data-display">
        <h2>Displaying Item Inventory</h2>
        <div id="contain"></div>

    </div>

    
  </div>
 
  <div id="Data-create-wrapper">

        <h2 style="text-align:center">Create Items</h2>

        <div id="data-create">
            <div class="inputcontain">
              <label for="name-i"> Name of Product </label>
              <input type="text" id="name-i">
            </div>
            <div class="inputcontain">
              <label for="price-i"> Price of Product </label>
              <input type="number" id="price-i">
             </div>
            <div class="inputcontain">
              <label for="inv-i"> Inventory of Product </label>
              <input type="number" id="inv-i">
            </div>
            <div class="inputcontain">
              <label for="date-i"> Delivery Date </label>
              <input type="date" id="date-i">
            </div>
            <div class="inputcontain">
              <label for="delivery-i"> Amount to be Delivered </label>
              <input type="number" id="delivery-i">
            </div>
            <button id="send-item">Add Product to Inventory</button>

            <p id="upload-status"></p>
      </div>


    
  </div>
  `
  

  
  fragment.appendChild(mainCon)
  mainEl.insertBefore(fragment,null)
  
}

 



const getData = async () => 
{
    let data = await fetch('/items');
    data.json().then((parsed) => {
    parsed.forEach((object) => 
    {
        //console.log('object.nextDelivery is',object.nextDelivery.slice(0,10))
        let containerElement = document.getElementById('contain')
        let pTag = document.createElement('p');
        pTag.textContent = `${object.name}, Price: ${object.price}, Inventory: ${object.inventory}, Next Delivery: ${object.nextDelivery.slice(0,10)}, Delivery Amount: ${object.deliveryAmt}`
        containerElement.appendChild(pTag)
    })});
}



const createData = async()=>
{
  document.getElementById('send-item').addEventListener('click', async () =>
    {
        let nameString = document.getElementById('name-i').value
        let priceNum = +document.getElementById('price-i').value
        let invNum = +document.getElementById('inv-i').value
        let dateVal = document.getElementById('date-i').value
        let deliveryNum = +document.getElementById('delivery-i').value
        let uploadStatusTag = document.getElementById('upload-status');



        const item = {
            nameString,
            priceNum,
            invNum,
            dateVal,
            deliveryNum
        }

        let response = await fetch('/create_items',{method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(item),})


    
        if (response.status === 200) 
        {
            uploadStatusTag.textContent = "Upload Completed";
            uploadStatusTag.style.color = "green";
            setTimeout(() => { window.location.reload()}, 1000);
        } 
        else 
        {
            uploadStatusTag.textContent = "Upload Failed";
            uploadStatusTag.style.color = "red";
        }

    })

}



async function Start() 
{
  
  await renderHtml()
  await getData()
  await createData()
}





Start() 