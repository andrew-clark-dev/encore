import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { TablesService } from '../../services';
import { Customer, Employee } from '../../models';

@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrls: ['./items-page.component.scss']
})
export class ItemsPageComponent {
  public materialTableData$: Observable<Customer[]>

  constructor(private service: TablesService) {
    this.materialTableData$ = service.loadMaterialTableData();
  }
}
