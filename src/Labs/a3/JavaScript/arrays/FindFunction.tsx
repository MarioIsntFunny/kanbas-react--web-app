function FindFunction() {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ["string1", "string2", "string3"];

    const four = numberArray1.find((a) => a === 4);
    const string3 = stringArray1.find((a) => a === "string3");

    return (
        <><h2>Find function</h2>
        <div>four = {four}</div>
        <div>string3 = {string3}</div></>
    )
}

export default FindFunction;