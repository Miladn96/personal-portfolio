import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItlsToolbarMobileComponent } from './components/itls-toolbar-mobile/itls-toolbar-mobile.component';
import { ItlsToolbarItemComponent } from './components/itls-toolbar-item/itls-toolbar-item.component';
import { TOOLBAR_ITEMS } from './constants/toolbar-items.const';

const COMPONENTS = [ItlsToolbarMobileComponent, ItlsToolbarItemComponent];

@Component({
  selector: 'itls-toolbar',
  standalone: true,
  imports: [CommonModule, ...COMPONENTS],
  templateUrl: './itls-toolbar.component.html',
  styleUrls: ['./itls-toolbar.component.scss'],
})
export class ItlsToolbarComponent {
  toolbarItems = TOOLBAR_ITEMS;
  x = {path: 'home', title: 'Home'}
}
