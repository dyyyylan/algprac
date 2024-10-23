function parkingspaces(s, y, t) {
    let count = 0;
    for (let i = 0; i < spaces; i++) {
        if(y[i] === "C" && t[i] === "C") {
            count++;
        }
    }
    return count;
}
console.log(parkingspaces(5, "CC..C", ".CC.."));