export function heigth(h){
    const firstHeigth = 2000000;
    const ratio = 1/2.5;
    const totalHeight = firstHeigth * (1 - Math.pow(ratio, h + 1)) / (1-ratio);
    return parseFloat(totalHeight.toFixed(3));
}

console.log(heigth(0));