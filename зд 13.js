function hexStringToRGB(hexString) {
  let rStr = hexString[1] + hexString[2];
  let gStr = hexString[3] + hexString[4];
  let bStr = hexString[5] + hexString[6];

  return {
    r: parseInt(rStr, 16),
    g: parseInt(gStr, 16),
    b: parseInt(bStr, 16)
  };
}