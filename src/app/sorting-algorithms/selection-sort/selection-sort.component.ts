import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selection-sort',
  templateUrl: './selection-sort.component.html',
  styleUrls: ['./selection-sort.component.css']
})
export class SelectionSortComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }

  sort(array:number[],visualSpeed:number){ 
    let row=0;
    let column =0;
    let numOfElements:number=array.length;

    const interval=setInterval(()=>{
      let min=column;
      for(let i=column+1;i<numOfElements;i++){
        if(array[i]<array[min]){
          min=i;
        }
      }
      this.swap(array,column,min);
      column += 1;
      if(column===numOfElements) clearInterval(interval);
    },visualSpeed);
  }

  swap(array:number[],i:number,j:number){
    let temp=array[i];
    array[i]=array[j];
    array[j]=temp;
  }

}
