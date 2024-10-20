const { exec } = require('child_process');

//function to run c programs directly and use their codes
function mainfunction() {
    exec('./rap', (error, stdout, stderr) => {
        // Parse the output from the wrapper
        const m = parseInt(stdout)      
        exec('./wrapper', (error, stdout, stderr) => {
            // parse output from second wrapper
            const s = parseInt(stdout)      
            console.log(m + s)
            //this means that in our nodejs applications, we can directly utilize c for faster and more powerful processing and get the results directly in c with no overhead
        });        
    }); 
}
 // Start measuring time
// Call the function to read shared memory
mainfunction();

