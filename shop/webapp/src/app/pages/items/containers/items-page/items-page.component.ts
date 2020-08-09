import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { ItemsService } from '../../services';
import { Item } from 'build/openapi/model/item';

@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrls: ['./items-page.component.scss']
})
export class ItemsPageComponent {
  public itemTableData$: Observable<Item[]>

  constructor(private service: ItemsService) {
    this.itemTableData$ = service.loadItemTableData();
  }
}
