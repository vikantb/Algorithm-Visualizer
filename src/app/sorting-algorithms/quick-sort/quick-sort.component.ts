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
	    this.visualSpeed = visualSpeed;
    	this.quickSort(arr,0,arr.length-1);
  }

  async partition(arr:number[],low:number,high:number) { 
		let pivot= arr[ Math.floor((low+high)/2) ];
	    while(low<=high){
			// let interval=setInterval(() => { if( low>high ) clearInterval(interval);
			while( arr[low]<pivot ) {
				low++;
			}
			while( arr[high]>pivot ) {
				high--;
			}
			if( low<=high ) {
				// this.sleep(100);
				this.swap( arr,low,high);
				low++;
				high--;
			}
		// },10);
		}
		return low ;
	}
	
	async quickSort(arr:number[],low:number,high:number) {
		if(low<high){
			let pi=await this.partition(arr,low,high)
			await this.quickSort(arr,low,pi-1) ;
			await this.quickSort(arr,pi,high) ;
		} return;
	}

	swap(array:number[],i:number,j:number){
		// this.sleep(1000);
		let temp=array[i];
		array[i]=array[j];
		array[j]=temp;
		return;
	}

	sleep(time:number){
		return new Promise((resolve) =>setTimeout(resolve,time));
	}

}
