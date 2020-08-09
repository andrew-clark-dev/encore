import { Component, Input, OnInit } from '@angular/core';

import { Customer } from '../../models';

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.scss']
})
export class ItemTableComponent implements OnInit {
  @Input() materialTableDate: Customer[];
  public displayedColumns: string[] = ['name', 'email', 'product', 'price', 'date', 'city', 'status'];
  public dataSource: Customer[];

  public ngOnInit() {
    this.dataSource = this.materialTableDate;
  }
}
