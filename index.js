// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
// cats.push("Mercy");
// cats.unshift("Nancy");
function destructivelyAppendCat(cat) {
    cats.push(cat)
}
function destructivelyPrependCat(cat) {
    cats.unshift(cat);
}
function destructivelyRemoveLastCat() {
    return cats.pop();
}
function destructivelyRemoveFirstCat() {
    return cats.shift();
}
function appendCat(cat) {
    return [...cats, cat];
}
function prependCat(cat) {
    return [cat, ...cats];
}
function removeLastCat() {
    return cats.slice(0, 2);
}
function removeFirstCat() {
    return cats.slice(1);
}