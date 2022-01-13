function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export function blackWhite(color) {
  let black = checkContrast(color, [0, 0, 0]);
  let white = checkContrast(color, [255, 255, 255]);
  if (black > white) return "black";
  else return "white";
}

function checkContrast(c1, c2) {
  const L1 = relLuminance(c1),
    L2 = relLuminance(c2);
  let ratio;
  if (L1 > L2) ratio = (L1 + 0.05) / (L2 + 0.05);
  else ratio = (L2 + 0.05) / (L1 + 0.05);
  return ratio;
}

function relLuminance(color) {
  color = color.map((c) => c / 255);
  let RGB = [];
  color.forEach((c, index) => {
    if (c < 0.03928) RGB[index] = c / 12.92;
    else RGB[index] = ((c + 0.055) / 1.055) ** 2.4;
  });
  const [R, G, B] = RGB;
  const L = 0.2126 * R + 0.7152 * G + 0.0722 * B;
  return L;
}

export default rgbToHex;
