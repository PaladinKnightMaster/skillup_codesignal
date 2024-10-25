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

// Let's add some photos to our gallery!
const photoGallery = new LinkedList();
photoGallery.appendToGallery("photo1.jpg");
photoGallery.appendToGallery("photo2.jpg");
photoGallery.appendToGallery("photo3.jpg");
photoGallery.show();