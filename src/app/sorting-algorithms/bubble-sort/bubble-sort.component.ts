import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bubble-sort',
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['./bubble-sort.component.css']
})
export class BubbleSortComponent implements OnInit  {

  constructor() {  }

  ngOnInit(): void {
  }

  sort(array:number[],visualSpeed:number){
    let row=0;
    let column =0;
    let numOfElements:number=array.length;

    const interval=setInterval(()=>{ 
      if(array[ column]> array[ column+1]){
         this.swap(array, column, column+1);
      }
       column += 1;
      if(  column=== numOfElements ){
         row += 1;
         column =0;
      }
      if( row=== numOfElements) clearInterval(interval);
    }, visualSpeed);
  }

  swap(array:number[],i:number,j:number){
    let temp=array[i];
    array[i]=array[j];
    array[j]=temp;
  }

}
