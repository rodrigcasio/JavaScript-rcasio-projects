// Example of identifying "code block"

// 1
const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';           // 2
    console.log(lightWaves);
}

logVisibleLightWaves();
logVisibleLightWaves(lightWaves); // output : *reference error*