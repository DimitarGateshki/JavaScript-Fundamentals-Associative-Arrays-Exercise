function solve(arr) {

    let lords=arr[0].split(' ');

    let words={};

    for (let e of lords) {
        words[e]=0;
    }

    for (let i = 1; i < arr.length; i++) {
        
        if (words.hasOwnProperty(arr[i])) {
            words[arr[i]]+=1;
        }
    }

    let sorted=Object.keys(words).sort((a,b)=>words[b]-words[a]).map(w=>console.log(`${w} - ${words[w]}`));    

    
    
}
