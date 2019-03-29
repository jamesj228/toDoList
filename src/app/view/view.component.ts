import { Component, OnInit } from '@angular/core';
import {Item } from '../item';
import { LocalStorageService } from 'angular-2-local-storage';
import { ITEMS } from '../mock-items';

@Component({
  selector: 'app-viewList',
  templateUrl: './view.component.html',
  styleUrls: [`./view.component.css`]
})

export class ViewComponent implements OnInit {
  message: string;
  description: string;
  keyNum = ITEMS.length+ 1;
  item: Item;
  adding = false;

  constructor() { }

  add(){
    this.item = new Item;
    this.item.id = this.keyNum++;
    this.item.name = this.message;
    this.item.desc = this.description;
    window.localStorage.setItem(String(this.keyNum), JSON.stringify(this.item));
    this.message = '';
    this.description = '';
  }

  ngOnInit() {
  }

}
