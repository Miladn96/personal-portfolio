import { ToolbarItemModel } from '@@portfolio/app-model';
import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'itls-toolbar-item',
  templateUrl: './itls-toolbar-item.component.html',
  styleUrls: ['./itls-toolbar-item.component.scss'],
  standalone: true,
})
export class ItlsToolbarItemComponent {
  @Input() toolbarItem?: ToolbarItemModel
}
