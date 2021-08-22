import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BubbleSortComponent } from './bubble-sort/bubble-sort.component';
import { QuickSortComponent } from './quick-sort/quick-sort.component';
import { SelectionSortComponent } from './selection-sort/selection-sort.component';

@Component({
  selector: 'app-sorting-algorithms',
  templateUrl: './sorting-algorithms.component.html',
  styleUrls: ['./sorting-algorithms.component.css']
})
export class SortingAlgorithmsComponent implements OnInit {

  array:number[]=[];
  numOfElements:number;
  screenWidth:number ;
  screenHeight:number ;
  visualSpeed:number ;

  bubble:BubbleSortComponent=new BubbleSortComponent();
  selection:SelectionSortComponent=new SelectionSortComponent();
  quick:QuickSortComponent=new QuickSortComponent();

  constructor() {
    this.screenHeight=window.screen.availHeight*.65;
    this.screenWidth=window.innerWidth;
    this.numOfElements=50;
    this.visualSpeed=10;
  }

  ngOnInit(): void {
    this.resetArray();
  }

  bubbleSort(){ 
    this.bubble.sort(this.array,this.visualSpeed);
  }

  selectionSort(){
    this.selection.sort(this.array,this.visualSpeed);
  }

  quickSort(){
    this.quick.sort(this.array,this.visualSpeed);
  }

  changeVisualSpeed(value:any){
    this.visualSpeed=value*2;
  }

  changeArraySize(value:any){
    this.numOfElements=value*3;
    this.resetArray();
  }

  resetArray(){
    this.array.splice(0, this.array.length)
    for(let i=0; i<this.numOfElements; i++) {
       this.array.push(Math.floor(Math.random()*this.screenHeight));
    }
  }

}
