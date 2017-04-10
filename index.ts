const colours = [
  "#1abc9c",
  "#2ecc71",
  "#3498db",
  "#9b59b6",
  "#34495e",
  "#16a085",
  "#27ae60",
  "#2980b9",
  "#8e44ad",
  "#2c3e50",
  "#f1c40f",
  "#e67e22",
  "#e74c3c",
  "#95a5a6",
  "#f39c12",
  "#d35400",
  "#c0392b",
  "#bdc3c7",
  "#7f8c8d"
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
