
    
function arr_summ(arr, arr2){
    var len = arr.length;
    var len2 = arr2.length;
    var res = [];
    
    if (len == len2){
    
    arr.forEach(function(val, i){
    res[i] = arr[i]+arr2[i] ;
    })
    
    return res;
    }else{
    console.log('Error '+len +' ! '+ len2)
    }
    }
    
    console.log(arr_summ([2,3,1,4,6,7,],[4,2,7,9,4,6]));
    
    
   
    