function solve(words) {

    let input=words.split(' ');

    let result=new Map();

    for (let e of input) {
        let cr=e.toLowerCase();
        if (result.has(cr)) {
            result.set(cr,result.get(cr)+1);
        }else{
            result.set(cr,1);
        }
    }

    let end=Array.from(result.keys()).filter(e=>result.get(e)%2!=0).join(' ');

    console.log(end);

      

    
    
}