function solve(input) {
 
    let resources={};
 
    for (let i = 0; i < input.length; i+=2) {
        let resource=input[i];
        let quan=Number(input[1+i]);
        if (resources.hasOwnProperty(resource)) {
            resources[resource]+=quan;
        }else{
            resources[resource]=quan;
        }
        
    }
 
    for (let key in resources) {
        console.log(`${key} -> ${resources[key]}`);
    }
  
     
  
  
 }
 