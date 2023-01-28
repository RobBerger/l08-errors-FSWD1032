let myValidJson = `{
    "name": "Steve Rogers",
    "alias": "Captain America"
}`;

let myInvalidJson = `{
    "name": "Tony Stark,
    "alias": "Iron Man"
}`; // missing quote for name value

console.log(JSON.parse(myValidJson));
console.log(JSON.parse(myInvalidJson));

function isValidJson(text: string): boolean {
    try {
        JSON.parse(text);
        return true;
    } catch {
        return false;
    }
}