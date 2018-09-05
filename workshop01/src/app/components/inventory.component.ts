import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LineItem } from '../model';
import { EventEmitter } from '@angular/core'

interface Fruit {
  image: string;
  label: string;
}

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  fruitList: Fruit[] = [
    {image: "assets/fruits/acorn_squash.png", label: "Acorn Squash"},
    {image: "assets/fruits/apple.png", label: "Apple"},
    {image: "assets/fruits/lettuce.png", label: "Lettuce"},
    {image: "assets/fruits/squash.png", label: "Squash"}
  ]

  fruitImg = "";
  selectedFruit = "";

  @Output()
  newLineItem = new EventEmitter<LineItem>(); 

  constructor() { }

  ngOnInit() {
  }
  
  displayFruit(event : any) {
    console.log(">>", event.target.value);
    this.fruitImg = this.fruitList[event.target.value].image;
    this.selectedFruit = this.fruitList[event.target.value].label;
  }

  add(form : NgForm) {
    console.log("form: ", form.value);

    //construct payload
    const lineItem: LineItem = {
      label: this.selectedFruit,
      quantity: form.value.quantity
    };

    //fire event with payload
    this.newLineItem.next(lineItem);

    form.resetForm();
    this.selectedFruit = "";
    this.fruitImg = "";
    
  }

}
