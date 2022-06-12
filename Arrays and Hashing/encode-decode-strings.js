function encode(strs) {
  let encoded = "";
  for (let str of strs) {
    encoded += `${str.length}#${str}`;
  }
  return encoded;
}

function decode(str) {
  console.log(str);
  let i = 0;
  result = [];
  while (i < str.length) {
    let j = i;
    while (str[j] != "#") {
      j++;
    }

    let length = +str.slice(i, j);
    result.push(str.slice(j + 1, j + 1 + length));
    i = j + 1 + length;
  }
  return result;
}
