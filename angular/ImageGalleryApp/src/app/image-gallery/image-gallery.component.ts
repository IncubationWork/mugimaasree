import { Component } from '@angular/core';
import { ImageService } from '../image-service.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent {
  imageUrl: string = '';

  constructor(private imageService: ImageService) {}

  fetchRandomImage() {
    this.imageService.getRandomImage().subscribe(
      (data: any) => {
        this.imageUrl = data.urls.regular;
      },
      (error) => {
        console.error('Error fetching image:', error);
      }
    );
  }
}
