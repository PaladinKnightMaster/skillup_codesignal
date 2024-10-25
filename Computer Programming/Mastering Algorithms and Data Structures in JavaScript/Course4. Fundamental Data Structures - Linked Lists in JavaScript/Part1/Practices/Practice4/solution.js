// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class PhotoGallery {
//     constructor() {
//         this.head = null;
//     }

//     append(photo) {
//         let node = new Node(photo);
//         if (!this.head) {
//             this.head = node;
//         } else {
//             let current;
//             for(current = this.head; current.next; current = current.next);
//             current.next = node;
//         }
//     }

//     remove(data) {
//         if (!this.head) return; // If list is empty

//         // TODO: if the head is to be removed, remove the head and return

//         // TODO: otherwise, find and remove element
//     }

//     show() {
//         let current = this.head;
//         while (current) {
//             console.log(current.data);
//             current = current.next;
//         }
//     }
// }

// // Usage
// const gallery = new PhotoGallery();
// gallery.append('photo1.jpg');
// gallery.append('photo2.jpg');
// gallery.remove('photo2.jpg');
// gallery.append('photo3.jpg');
// gallery.show();

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class PhotoGallery {
    constructor() {
        this.head = null;
    }

    append(photo) {
        let node = new Node(photo);
        if (!this.head) {
            this.head = node;
        } else {
            let current;
            for(current = this.head; current.next; current = current.next);
            current.next = node;
        }
    }

    remove(data) {
        if (!this.head) return; // If list is empty

        // TODO: if the head is to be removed, remove the head and return
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
        // TODO: otherwise, find and remove element
        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    show() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Usage
const gallery = new PhotoGallery();
gallery.append('photo1.jpg');
gallery.append('photo2.jpg');
gallery.remove('photo2.jpg');
gallery.append('photo3.jpg');
gallery.show();