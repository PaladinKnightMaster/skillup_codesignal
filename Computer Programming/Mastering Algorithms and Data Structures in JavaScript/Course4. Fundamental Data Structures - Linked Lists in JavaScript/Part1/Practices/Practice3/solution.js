// class Node {
//   constructor(data) {
//       this.data = data;
//       this.next = null;
//   }
// }

// class PhotoGallery {
//   constructor() {
//       this.head = null;
//   }

//   append(photo) {
//       let node = new Node(photo);
//       if (!this.head) {
//           this.head = node;
//       } else {
//           // TODO: implement this
//       }
//   }

//   show() {
//       let current = this.head;
//       while (current) {
//           console.log(current.data);
//           current = current.next;
//       }
//   }
// }

// // Usage
// const gallery = new PhotoGallery();
// gallery.append('photo1.jpg');
// gallery.append('photo2.jpg');
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
          // TODO: implement this
          let current = this.head;
          while (current.next) {
              current = current.next;
          }
          current.next = node;
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
gallery.append('photo3.jpg');
gallery.show();