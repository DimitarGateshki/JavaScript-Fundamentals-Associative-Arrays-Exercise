function solve(arr) {

    

    let result=new Set();

    for (let line of arr) {
        let input=line.split(', ');

        if (input[0]=='IN') {
            result.add(input[1]);
        }else{
            if (result.has(input[1])) {
                result.delete(input[1]);
            }
        }
    }


    if (result.size==0) {
        console.log('Parking Lot is Empty');
    }else{

        let end=Array.from(result);
        
        end.sort((a,b)=>a.localeCompare(b)).forEach(e=>console.log(e));

            
        

    }

   
    

      

    
    
}