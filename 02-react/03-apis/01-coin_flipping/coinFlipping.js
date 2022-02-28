const tossCoin = () => Math.random() > 0.5 ? "heads" :"tails"

// -----------------------------------------------------------------------------
function fiveHeadsSync() {
    let headsCount = 0;
    let attempts = 0;
    while( headsCount < 5 ) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if(result === "heads") { headsCount++; }
        else { headsCount = 0; }
    }
    return `It took ${attempts} tries to flip five "heads"`;
}

console.log( fiveHeadsSync() );
console.log( "This is run after the fiveHeadsSync function completes" );

// ------------------------------------------------------------------------------
function fiveHeads() {
    return new Promise( (resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        while( attempts < 101 ) {
            attempts++;
            let result = tossCoin();
            if( result === "heads" ) { headsCount++; }
            
            if( headsCount >= 5 ) { resolve(`It took ${attempts} tries to flip five "heads"`) }
            else if( attempts > 100 ) { reject(`Failed to flip 5 heads within ${attempts} tries`) }
        }
    });
}
fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );

console.log( "When does this run now?" );