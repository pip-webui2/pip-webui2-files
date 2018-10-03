import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { ExmapleListItem } from './shared/ExampleListItem';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'examples-list',
  templateUrl: './examples-list.component.html',
  styleUrls: ['./examples-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ExamplesListComponent {
  @Input() list: ExmapleListItem[];
  @Input() selectedItemIndex: number;
  @Output() selectedItemIndexChange = new EventEmitter();

  public onItemSelect(index: number): void {
    this.selectedItemIndex = index;
    this.selectedItemIndexChange.emit(index);
  }
}
