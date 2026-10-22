function toWeirdCase(string){
  let index = 0;
  return string.replace(/./g, char => {
    if (char === ' ') {
      index = 0;
      return char;
    }
    return (index++ % 2 === 0) ? char.toUpperCase() : char.toLowerCase();
  });
}