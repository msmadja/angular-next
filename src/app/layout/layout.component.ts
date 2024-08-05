import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SharedModule, RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
