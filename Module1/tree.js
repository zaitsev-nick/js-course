/*********
Tree Function

Цель:
Написать функцию tree(), которая принимает в качестве аргумента
иерархический объект со свойствами name, items и выводит
структурированный вывод дерева в консоль.
*********/


var objectTree = {
    name: 'A',
    items: [
      {
      name: 'B',
      items: [      
        {
          name: 'J',
          items: [{
            name: 'J1',
            items: []
          }],
        },
        {
          name: 'H',
          items: [{
            name: 'H1',
            items: []
          }],
        }
      ]
    },
    {
      name: 'C',
      items: [
        {
          name: 'D',
          items: [{
            name: 'D1',
            items: []
          }],
        },
        {
          name: 'E',
          items: [{
            name: 'E1',
            items: []
          }],
        }
      ]
    }
  ]
}



// function definition expression
const treeFirst = (objectTree) => {
  const { name, items } = objectTree;
  console.log(name)
  if(!items.lenght) return;
  items.map((element) => {
    console.log(element.name)
    element.items.forEach((el) => treeFirst(el))
  })
}

treeFirst(objectTree);

// function declaration statement
function treeSecond(objectTree) {

}

