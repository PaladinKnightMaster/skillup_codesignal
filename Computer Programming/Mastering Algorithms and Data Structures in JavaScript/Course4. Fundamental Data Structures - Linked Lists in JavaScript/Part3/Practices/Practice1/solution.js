// class Node {
//     constructor(data, next = null) {
//         this.data = data;
//         this.next = next;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     appendToGallery(imageID) {
//         let newPhoto = new Node(imageID);
//         if (!this.head) {
//             this.head = newPhoto;
//         } else {
//             let currentPhoto = this.head;
//             while (currentPhoto.next) {
//                 currentPhoto = currentPhoto.next;
//             }
//             currentPhoto.next = newPhoto;
//         }
//     }

//     show() {
//         let currentPhoto = this.head;
//         while (currentPhoto) {
//             console.log(currentPhoto.data);
//             currentPhoto = currentPhoto.next;
//         }
//     }
// }


// function removeDuplicates(list) {
//     if (list.head === null || list.head.next === null) return head;

//     let currentNode = list.head;
//     // Imagine the set as a guest list where we mark off each attendee.
//     const seen = new Set([currentNode.data]);

//     while (currentNode.next !== null) {
//         // TODO: implement this
//     }
// }


// // Let's add some photos to our gallery!
// const photoGallery = new LinkedList();
// photoGallery.appendToGallery("photo1.jpg");
// photoGallery.appendToGallery("photo2.jpg");
// photoGallery.appendToGallery("photo2.jpg");
// removeDuplicates(photoGallery)
// photoGallery.show();

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    appendToGallery(imageID) {
        let newPhoto = new Node(imageID);
        if (!this.head) {
            this.head = newPhoto;
        } else {
            let currentPhoto = this.head;
            while (currentPhoto.next) {
                currentPhoto = currentPhoto.next;
            }
            currentPhoto.next = newPhoto;
        }
    }

    show() {
        let currentPhoto = this.head;
        while (currentPhoto) {
            console.log(currentPhoto.data);
            currentPhoto = currentPhoto.next;
        }
    }
}


function removeDuplicates(list) {
    if (list.head === null || list.head.next === null) return head;

    let currentNode = list.head;
    // Imagine the set as a guest list where we mark off each attendee.
    const seen = new Set([currentNode.data]);

    while (currentNode.next !== null) {
        // TODO: implement this
        if (seen.has(currentNode.next.data)) {
            currentNode.next = currentNode.next.next;
        } else {
            seen.add(currentNode.next.data);
            currentNode = currentNode.next;
        }
    }
}


// Let's add some photos to our gallery!
const photoGallery = new LinkedList();
photoGallery.appendToGallery("photo1.jpg");
photoGallery.appendToGallery("photo2.jpg");
photoGallery.appendToGallery("photo2.jpg");
removeDuplicates(photoGallery)
photoGallery.show();