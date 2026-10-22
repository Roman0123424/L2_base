function bingo(ticket, win){
  let count = 0;

  for (const [str, code] of ticket) {
    if (str.includes(String.fromCharCode(code))) {
      count++;
    }
  }

  return count >= win ? 'Winner!' : 'Loser!';
}