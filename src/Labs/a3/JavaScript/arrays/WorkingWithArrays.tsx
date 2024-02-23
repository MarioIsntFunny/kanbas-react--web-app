function WorkingWithArrays() {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  let numberArray1 = [1, 2, 3, 4, 5];
  let stringArray1 = ["string1", "string2"];

  let variableArray1 = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1,
  ];
  return (
  <>
  <h2>Working With Arrays</h2>
  <>numberArray1 = {numberArray1}</><br></br>
  <>stringArray1 = {stringArray1}</><br></br>
  <>variableArray1 = {variableArray1}</><br></br>
  </>)
}

export default WorkingWithArrays;
