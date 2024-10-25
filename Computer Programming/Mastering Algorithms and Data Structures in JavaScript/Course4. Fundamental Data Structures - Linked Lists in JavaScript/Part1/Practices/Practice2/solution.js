// class Photo {
//   constructor(imageID, nextPhoto = null) {
//       this.imageID = imageID;
//       this.nextPhoto = nextPhoto;
//   }
// }

// class PhotoGallery {
//   constructor() {
//       this.firstPhoto = null;
//   }

//   addPhoto(imageID) {
//       const newPhoto = new Photo(imageID);
//       this.firstPhoto = newPhoto;
//   }

//   show() {
//       let currentPhoto = this.firstPhoto;
//       while (currentPhoto) {
//           console.log(currentPhoto.imageID);
//           currentPhoto = currentPhoto.nextPhoto;
//       }
//   }
// }

// // Usage
// const gallery = new PhotoGallery();
// gallery.addPhoto(101);
// gallery.addPhoto(102);
// gallery.addPhoto(103);
// gallery.show();

class Photo {
  constructor(imageID, nextPhoto = null) {
      this.imageID = imageID;
      this.nextPhoto = nextPhoto;
  }
}

class PhotoGallery {
  constructor() {
      this.firstPhoto = null;
  }

  addPhoto(imageID) {
      const newPhoto = new Photo(imageID);
      if (!this.firstPhoto) {
        this.firstPhoto = newPhoto;
      } else {
        let currentPhoto = this.firstPhoto;
        while (currentPhoto.nextPhoto) {
          currentPhoto = currentPhoto.nextPhoto;
        }
        currentPhoto.nextPhoto = newPhoto;
      }
  }

  show() {
      let currentPhoto = this.firstPhoto;
      while (currentPhoto) {
          console.log(currentPhoto.imageID);
          currentPhoto = currentPhoto.nextPhoto;
      }
  }
}

// Usage
const gallery = new PhotoGallery();
gallery.addPhoto(101);
gallery.addPhoto(102);
gallery.addPhoto(103);
gallery.show();