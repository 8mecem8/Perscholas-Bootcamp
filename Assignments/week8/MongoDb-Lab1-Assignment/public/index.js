

let allFruits
let allVeggies



let getAllItems = async () =>
{
    allFruits = await (async()=>{ let res = await fetch(`/fruits`); let data = await res.json(); return data })()
    allVeggies = await (async()=>{ let res = await fetch(`/veggies`); let data = await res.json(); return data })()

}  


 
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
  <div id="fruit-main-wrapper">
              <h2>Fruits List</h2>
    <div id="fruit-display">
      <ul>
          ${ allFruits.map((arg)=>
                {
                  return`
                  
                      <li><p onclick="(()=>{showOne('fruit',this.getAttribute('name'))})()" name='${arg.name}'>${arg.name}</p></li>
                  `

                }).join('\n')
            }
      </ul> 



    </div>
    <div id="fruit-create">
        <form action="/create_fruit" method="post" target="_blank">

          <label for="name">Name: </label>
          <input type="text" id="name" name="name" />

          <label for="color">Color: </label>
          <input type="text" id="color" name="color" />

          <label for="age">Age: </label>
          <input type="number" id="age" name="age" />

          <select name="readyToEat" id="ready-bool">
            <option value="true">Ready To Eat</option>
            <option value="false">Not Ready</option>
          </select>

          <input type="submit" value="Submit">

        </form> 
  
  
    </div>
  </div>
  <div id="veggie-main-wrapper">
                  <h2>Vegetables List</h2>
    <div id="veggie-display">
          <ul>
              ${ allVeggies.map((arg)=>
                    {
                      return`
                      
                      <li><p onclick="(()=>{showOne('veggie',this.getAttribute('name'))})()" name='${arg.name}'>${arg.name}</p></li>

                      `

                    }).join('\n')
                }
          </ul> 
  
  
    </div>
    <div id="veggie-create">
        <form action="/create_veggie" method="post" target="_blank">

          <label for="name">Name: </label>
          <input type="text" id="name" name="name" />

          <label for="color">Color: </label>
          <input type="text" id="color" name="color" />

          <label for="age">Age: </label>
          <input type="number" id="age" name="age" />

          <select name="readyToEat" id="ready-bool">
            <option value="true">Ready To Eat</option>
            <option value="false">Not Ready</option>
          </select>

          <input type="submit" value="Submit"">

      </form> 
  
  
    </div>
  </div>
  `
  

  
  fragment.appendChild(mainCon)
  mainEl.insertBefore(fragment,null)
  
}

 



async function Start() 
{
  await getAllItems()
  await renderHtml()
}





Start() 