import { Component } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardComponent } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-techstack',
  standalone: true,
  imports: [NzGridModule, NzCardComponent],
  templateUrl: './techstack.component.html',
  styleUrl: './techstack.component.css'
})
export class TechstackComponent {

}
