import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ItlsToolbarComponent } from '@@portfolio/web/ui';

@Component({
  standalone: true,
  imports: [RouterModule, ItlsToolbarComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
