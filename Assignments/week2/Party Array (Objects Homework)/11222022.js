let party = [
    {
        name: 'Joline',
        hitpoints: 15,
        belongings: ["spear", "bread", "Tums"],
        companion: {
            name: "Tabby",
            type: "cat",
        }
    },
    {
        name: 'Timothy',
        hitpoints: 10,
        belongings: ["sword", "potion", "Tums"],
        companion: {
            name: "Velma",
            type: "Bat",
        }
    },
    {
        name: 'Sarah',
        hitpoints: 20,
        belongings: ["bow", "arrows", "wood"],
        companion: {
            name: "Tony",
            type: "tiger",
        }
    },
]


let newGuy = 
{
    name: 'New Person',
    hitpoints: 30,
    belongings: ["axe", "pen", "wood"],
    companion: {
        name: "Henry",
        type: "Kissenger",
    }
}




const startParty = ((newGuy,gold=200) => 
{
    
    
    party.forEach((arg,i)=>
    {
    
        //double the hitpoints of everyone in the party
        arg.hitpoints = arg.hitpoints * 2
    
        //Timothy has been hit with an arrow, subtract 5 points from his hp
        arg.name == 'Timothy' ? arg.hitpoints - 5 : null
    
        //Sarah's tiger has been turned into a jellyfish by a wizard, please change it
        arg.name == 'Sarah' ? arg.companion.type = "jellyfish" : null
    
        //Timothy drank this potion. Raise his hitpoints by 20 and remove "potion" from his belongings.
        arg.name == 'Timothy' ? (arg.hitpoints += 20, arg.belongings.splice(1,1)) : null
    
        //Timothy got hungry and stole Joline's bread. Take it out of her belongings and put it  into Timothy's belongings.
        arg.name == 'Joline' ?  arg.belongings.splice(1,1) : null
        arg.name == 'Timothy' ? arg.belongings.push("bread") : null
    
        
    })
    
    console.log("\n\n-------------First forEach iteration-------------\n\n\n",party)

    //Joline got upset and left the party. Take her out of the array.
     party.splice(0,1)

    //Timothy and Sarah have been recruiting. Add a new adventurer to the party. (new adventurer is parameter)
    party.push(newGuy)

    party.forEach((arg,i)=>
    {
        //he party has been doing well! They found 200 gold. Create a new property called gold and split the gold evenly between everyone. (amount of gold is parameter)
        arg.gold = gold / party.length

        //Sarah is tired of taking care of a jellyfish. Subtract some gold from her and change her companion to a bear. 
        arg.name == 'Sarah' ? (arg.companion.type = "bear", arg.gold -=16) : null

        //Timothy’s sword has gotten old. Change it to “Rusty Sword" 
        arg.name == 'Timothy' ? arg.belongings = arg.belongings.map(arg=>{return arg == 'sword' ? arg = "Rusty Sword": arg }) : null

    })
    
    console.log("\n\n-------------Second forEach iteration-------------\n\n\n",party)
    
    // Write a function called setLeader that takes a name as a parameter. The member with that name should have a new property leader: true while the other members have leader: false.

    const setLeader = (ar) => ar.belongings.includes("pen") ? ar.leader = true : ar.leader = false

    party.forEach((arg,i)=>
    {
        setLeader(arg)
    })


    console.log("\n\n-------------Third forEach iteration-------------\n\n\n",party)

})(newGuy)

