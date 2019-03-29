import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ITEMS } from '../mock-items';
import { LocalStorageService } from 'angular-2-local-storage';


@Component({
  selector: 'app-toDoList',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent implements OnInit {

  items = ITEMS;
  windowItems = [] as Item[];
  selectedItem: Item;


  constructor() { }

  ngOnInit() {
    for(var i = 0; i < window.localStorage.length; i++) {
      window.localStorage.getItem(String(window.localStorage.key(i)));
    }
  }

  onSelect(item: Item): void {
    this.selectedItem = item;
  }
}