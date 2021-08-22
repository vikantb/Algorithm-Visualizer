import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-sort',
  templateUrl: './quick-sort.component.html',
  styleUrls: ['./quick-sort.component.css']
})
export class QuickSortComponent implements OnInit {

  visualSpeed:number =0;
  constructor() { }

  ngOnInit(): void {
  }

  sort(arr:number[],visualSpeed:number){
	    this.visualSpeed = 2*visualSpeed;
    	this.quickSort(arr,0,arr.length-1);
  }

  partition(arr:number[],low:number,high:number) { 
	  return new Promise<number>( (resolve, reject) => {
			let pivot= arr[ Math.floor((low+high)/2) ];
			let interval =setInterval(() =>{
				this.updateLow(arr,low,pivot).then(data=>{
					low=data;
					this.updateHigh(arr,high,pivot).then(data=>{
						high=data;
						if( low<=high ) {
							this.swap( arr,low,high);
							low++;
							high--;
						}
						if(low>high){ 
							resolve(low);
							clearInterval(interval);
						}
					})
				});
			},this.visualSpeed);
	  });
		
	}
	
	quickSort(arr:number[],low:number,high:number) {
		return new Promise(resolve =>{
			if(low<high){
				this.partition(arr,low,high).then(data => {
					this.quickSort(arr,low,data-1).then(()=> {
						this.quickSort(arr,data,high).then(()=> {resolve(1)}) ;
					})
				});
			}
			else{
				resolve(1);
			}
		});
		
	}

	swap(array:number[],i:number,j:number){
		let temp=array[i];
		array[i]=array[j];
		array[j]=temp;
	}
	
	updateLow(arr:number[],low:number,pivot:number){
		return new Promise<number>( (resolve, reject) => {
			while( arr[low]<pivot ) {
				low++;
			}
			resolve(low);
		});
	  }
	  updateHigh(arr:number[],high:number,pivot:number){
		return new Promise<number>( (resolve, reject) => {
			while( arr[high]>pivot ) {
				high--;
			}
			resolve(high);
		});
	  }
}
