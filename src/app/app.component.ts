import { Component } from '@angular/core';
import { DemoServices } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-ng';

  constructor(private demoService: DemoServices.DemoService) {}
}
