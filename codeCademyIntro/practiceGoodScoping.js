// Example of practicing good scoping

// declaring a new local variable with the same name, but within the code block of 'if'

const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
    let region = 'The Arctic';

    if(region === 'The Arctic'){
       let lightWaves = 'Northern Lights';
       console.log(lightWaves);                 // log: Northern Lights
    }   
    console.log(lightWaves);      // log: MoonLigt
};

logVisibleLightWaves();
