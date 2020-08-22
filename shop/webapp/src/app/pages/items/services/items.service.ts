import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {Customer} from '../models';
import { Item } from 'build/openapi/model/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  public loadItemTableData(): Observable<Item[]> {
    return of([
      {id: 1, category: null, name: 'Item One', photoUrls: null, tags: null, status: Item.StatusEnum.Available },
      {id: 2, category: null, name: 'Item Two', photoUrls: null, tags: null, status: Item.StatusEnum.Pending },
      {id: 3, category: null, name: 'Item Three', photoUrls: null, tags: null, status: Item.StatusEnum.Sold },
      {id: 4, category: null, name: 'Item Other', photoUrls: null, tags: null, status: Item.StatusEnum.Available },
      {id: 5, category: null, name: 'Item Other', photoUrls: null, tags: null, status: Item.StatusEnum.Available },
      {id: 6, category: null, name: 'Item Other', photoUrls: null, tags: null, status: Item.StatusEnum.Available },
      {id: 7, category: null, name: 'Item Other', photoUrls: null, tags: null, status: Item.StatusEnum.Available },
      {id: 8, category: null, name: 'Item Other', photoUrls: null, tags: null, status: Item.StatusEnum.Available },
      {id: 9, category: null, name: 'Item Other', photoUrls: null, tags: null, status: Item.StatusEnum.Available },
      {id: 10, category: null, name: 'Item Other', photoUrls: null, tags: null, status: Item.StatusEnum.Available },
      {id: 11, category: null, name: 'Item Other', photoUrls: null, tags: null, status: Item.StatusEnum.Available },
      {id: 12, category: null, name: 'Item Other', photoUrls: null, tags: null, status: Item.StatusEnum.Available },
      {id: 13, category: null, name: 'Item Other', photoUrls: null, tags: null, status: Item.StatusEnum.Available },
      {id: 14, category: null, name: 'Item Other', photoUrls: null, tags: null, status: Item.StatusEnum.Available },
      {id: 15, category: null, name: 'Item Other', photoUrls: null, tags: null, status: Item.StatusEnum.Available },
      {id: 16, category: null, name: 'Item Other', photoUrls: null, tags: null, status: Item.StatusEnum.Available },
      {id: 17, category: null, name: 'Item Other', photoUrls: null, tags: null, status: Item.StatusEnum.Available },
      {id: 18, category: null, name: 'Item Other', photoUrls: null, tags: null, status: Item.StatusEnum.Available },
    ]);
  }
}
