const colours = [
  "#08856C",
  "#0C6654",
  "#09873E",
  "#166638",
  "#267CB5",
  "#135480",
  "#9B59B6",
  "#73378C",
  "#34495E",
  "#2C3E50",
  "#BF5900",
  "#994B08",
  "#D14636",
  "#A63124",
  "#6C7778",
  "#505959"
];

export function generateAvatar(name: string, size = 96, fill = "#fff") {
  if (!name || name.length === 0) {
    name = '-';
  }

  let nameTokens = name.split(' ');
  let initials = nameTokens[0].charAt(0).toUpperCase() + (nameTokens.length > 1 ? nameTokens[1].charAt(0).toUpperCase() : '');
  let index = (initials.charCodeAt(0) - 65) + (isNaN(initials.charCodeAt(1)) ? 0 : initials.charCodeAt(1) - 65);

  let canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;

  let context = canvas.getContext("2d");
  let canvasWidth = size;
  let canvasHeight = size;

  context.fillStyle = colours[index % colours.length];
  context.fillRect(0, 0, canvasWidth, canvasHeight);
  context.font = size / 2 + "px Arial";
  context.textAlign = "center";
  context.fillStyle = fill;
  context.textBaseline = "top";
  context.fillText(initials, canvasWidth / 2, canvasHeight / 4);

  return canvas.toDataURL();
}
