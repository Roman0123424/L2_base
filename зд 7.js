function wave(str){
  return [...str].map((char, i) => {
    return str.slice(0, i) + char.toUpperCase() + str.slice(i + 1);
  }).filter((word, i) => str[i] !== ' ');
}