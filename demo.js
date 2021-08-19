    function partition(arr,low,high) { 
		let pivot= arr[ Math.floor((low+high)/2) ];
		while( low<=high ) {
			while( arr[low]<pivot ) {
				low++;
			}
			while( arr[high]>pivot ) {
				high--;
			}
			if( low<=high ) {
				let temp=arr[low] ;
				arr[low]=arr[high] ;
				arr[high]=temp;
				low++;
				high--;
			}
		}
		return low ;
	}
	
	function quickSort(arr,low,high) {
        if(low<high){
            pi= partition(arr,low,high)
            
            quickSort(arr,low,pi-1) ;
            quickSort(arr,pi,high) ;
        }
	}

    let arr = [5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1 ];

    quickSort(arr,0,arr.length-1);

    console.log(arr)