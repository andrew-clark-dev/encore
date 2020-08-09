import { Component, Input, OnInit } from '@angular/core';

import { Customer } from '../../models';
import { Item } from 'build/openapi/model/item';

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.scss']
})
export class ItemTableComponent implements OnInit {
  @Input() itemTableDate: Item[];
  public displayedColumns: string[] = ['id', 'category', 'name', 'photo', 'tags', 'status'];
  public dataSource: Item[];

  public ngOnInit() {
    this.dataSource = this.itemTableDate;
  }
}
