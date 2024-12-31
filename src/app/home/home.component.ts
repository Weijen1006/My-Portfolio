import { Component, signal } from '@angular/core';
import { APP_NAME } from '@/config/constants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 myAppTitle = signal<string>(APP_NAME)
}
