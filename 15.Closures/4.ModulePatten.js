// task 6
function createItemManager (){
    let items = []
    return {
        addItem:(item)=>{
            items.push(item)
            console.log(`${item} added`);
        },
        removeItem:(item)=>{
            const idx = items.indexOf(item)
            if (idx!=-1) {
                items.splice(idx,1)
                console.log(`${item} removed`);
            }
            else console.log(`${item} not found`);
        },
        listItems : ()=>{
            console.log(`Items : ${items}`);
        }
    }
}

const itemManager = createItemManager();
itemManager.addItem("one");
itemManager.addItem("two");
itemManager.addItem("three");
itemManager.addItem("four");
itemManager.listItems()
itemManager.removeItem("one");
itemManager.removeItem("four");
itemManager.listItems()