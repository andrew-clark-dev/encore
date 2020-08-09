import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { ItemsService } from '../../services';
import { Customer } from '../../models';

@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrls: ['./items-page.component.scss']
})
export class ItemsPageComponent {
  public materialTableData$: Observable<Customer[]>

  constructor(private service: ItemsService) {
    this.materialTableData$ = service.loadMaterialTableData();
  }
}
