import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CaretakerComponent } from '../caretaker/caretaker.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    MatCardModule,
    FormsModule,
    NgbCarouselModule,
    CaretakerComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  text: string = '';
  recognizing: boolean = false;
  recognition: any;

  photos: Array<{ src: string; title: string }> = [
    { src: '/images/p1.jpg', title: 'Family Photo 1' },
    { src: '/images/p2.jpg', title: 'Family Photo 2' },
    { src: '/images/caretaker.jfif', title: 'Family Photo 2' },
    { src: '/images/p1.jfif', title: 'Family Photo 2' },

    // Add more photos here
  ];

  speak(text: string) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.volume = 1; // 0 to 1
    speech.rate = 1; // 0.1 to 10
    speech.pitch = 1; //0 to 2
    window.speechSynthesis.speak(speech);
  }
}
