// find DOM by ID
const grandparent = document.getElementById("grandparent-id")
grandparent.style.backgroundColor = "red"
changeColor(grandparent)
changeBack(grandparent)

// find by className
const parents = document.getElementsByClassName("parent")  // return html collection which does not have foreach method
const parents_array = Array.from(document.getElementsByClassName("parent"))
parents_array.forEach(changeColor)

// QuerySelector
const grandpa = document.querySelector('#grandparent-id')
const grandpa_div = document.querySelector('.parent')
changeColor(grandpa)
changeBack(grandpa)
changeSingle(grandpa_div)
const parents_all = document.querySelectorAll('.parent')
parents_all.forEach(changeBack)

// find children
const parents_children = Array.from(grandparent.children)
parents_children.forEach(changeColor)
const parentOne = parents_children[0]
const grandchild = parentOne.children
changeBack(grandchild[0])
const allChildren = grandparent.querySelectorAll('.child')  // method works for all elements, not just document
allChildren.forEach(changeColor)

// upward, find parent by child
const child_one = document.querySelector('#child-one')
const hisparent = child_one.parentElement
changeBack(hisparent)
const hisgrandparent = child_one.closest('.grandparent') // find the closest grandparent
changeColor(hisgrandparent)

// find siblings
const child_two = child_one.nextElementSibling
changeSingle(child_two)
changeSingle(child_two.previousElementSibling) // back to child one


function changeColor(element){
    element.style.backgroundColor = "#333"
}
function changeBack(element){
    element.style.backgroundColor = "pink"
}
function changeSingle(element){
    element.style.backgroundColor = "yellow"
}