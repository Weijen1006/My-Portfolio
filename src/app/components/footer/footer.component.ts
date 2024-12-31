import { Component, signal } from '@angular/core';
import { OWNER_NAME } from '@/config/constants';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  myName = signal(OWNER_NAME)
}
