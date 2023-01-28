"use strict";
let myValidJson = `{
    "name": "Steve Rogers",
    "alias": "Captain America"
}`;
let myInvalidJson = `{
    "name": "Tony Stark,
    "alias": "Iron Man"
}`; // missing quote for name value
let json = isValidJson(myValidJson) ? JSON.parse(myValidJson) : 'Invalid JSON';
console.log(json);
json = isValidJson(myInvalidJson) ? JSON.parse(myInvalidJson) : 'Invalid JSON';
console.log(json);
function isValidJson(text) {
    try {
        JSON.parse(text);
        return true;
    }
    catch (_a) {
        return false;
    }
}
