import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  Index: number = 0;
  
  
  
  currentIndex: number = 0;  // Track the current image index
  images: string[] = [  // Array of image URLs
    "https://t3.ftcdn.net/jpg/05/58/14/66/360_F_558146635_Pjgj1F8Au64JTeB9VGuas0Fm09OhEOGh.jpg",  // path to your image
        "https://img.freepik.com/premium-photo/happy-birthday-cake-with-flowers-3d-render-pink-background_994418-11995.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS86JGZBapFF0MhgRnLTNFh5MuzH8zX40SoGA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1taCQJG2I4BgGzZm-SryBJ2UW9e1HpF446g&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRReXBt69VZ76eEeRxw60le2LEBP91b9i2tyQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSCMhz1AnypexWhbvjdcDMs_GCkNAgG2oGuw&s"
      ];

  private autoSlideInterval: any;

  ngOnInit(): void {
    // Start the automatic slider when the component initializes
    this.autoSlideInterval = setInterval(() => {
      this.nextImage();
    }, 3000); // Change image every 3 seconds
  }

  ngOnDestroy(): void {
    // Clear the interval when the component is destroyed
    clearInterval(this.autoSlideInterval);
  }

  // Function to go to the next image
  nextImage(): void {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;  // Loop back to the first image
    }
  }

  // Function to go to the previous image
  prevImage(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 1;  // Loop back to the last image
    }
  }
  cart():void{
    alert("Product added to Cart")
  }
buy(){
  alert("Product will deliver as soon as possible")
}
}
  