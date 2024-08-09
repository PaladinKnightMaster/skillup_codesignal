// function audienceOverlap(blog1, blog2) {
//     // implement this
// }


// let blog1 = [1, 2, 3, 4, 5];
// let blog2 = [6, 7, 8, 9, 10];

// if(audienceOverlap(blog1, blog2))
//     console.log("Yes, there is an audience overlap between both blogs.");
// else
//     console.log("No, there is no audience overlap between both blogs.");

function audienceOverlap(blog1, blog2) {
    // implement this
    return blog1.length > blog2.length
    ? blog2.some(user => new Set(blog1).has(user))
    : blog1.some(user => new Set(blog2).has(user));
}


let blog1 = [1, 2, 3, 4, 5];
let blog2 = [6, 7, 8, 9, 10];

if(audienceOverlap(blog1, blog2))
    console.log("Yes, there is an audience overlap between both blogs.");
else
    console.log("No, there is no audience overlap between both blogs.");