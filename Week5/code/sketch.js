let video;
let stitchSize = 12;
let threadColors;

function setup() {
  createCanvas(640, 460);
  pixelDensity(1);

  // Filped the video to create a mirror effect.
  video = createCapture(VIDEO, { flipped: true });
  video.size(width, height);
  video.hide();

  // Colors inspired by winter clothes.
  threadColors = [
    color("#e9005a"),
    color("#111144"),
    color("#111111"),
    color("#83cde0")
  ];

  // Add a slider to control stitch thickness
  weightSlider = createSlider(1, 10, 3, 0.5);
  weightSlider.position(10, height + 10);
  weightSlider.style("width", "200px");
}

function draw() {
  background(255);
  video.loadPixels();

  if (video.pixels.length === 0) return;

  strokeWeight(weightSlider.value()); // Uses slider value!
  strokeCap(ROUND);

  for (let y = 0; y < height; y += stitchSize) {
    for (let x = 0; x < width; x += stitchSize) {
      // Sample the color from the center of each grid cell
      let sampleX = min(x + floor(stitchSize / 2), video.width - 1);
      let sampleY = min(y + floor(stitchSize / 2), video.height - 1);
      let index = (sampleX + sampleY * video.width) * 4;

      
      let pixelColor = color(
        video.pixels[index],
        video.pixels[index + 1],
        video.pixels[index + 2]
      );

      stroke(getClosestThread(pixelColor));

      // Draw one cross-stitch
      line(x, y, x + stitchSize, y + stitchSize);
      line(x + stitchSize, y, x, y + stitchSize);
    }
  }
}

function getClosestThread(pixelColor) {
  let closest = threadColors[0];
  let smallestDistance = Infinity;

  for (let thread of threadColors) {
    let distance =
      pow(red(pixelColor) - red(thread), 2) +
      pow(green(pixelColor) - green(thread), 2) +
      pow(blue(pixelColor) - blue(thread), 2);

    if (distance < smallestDistance) {
      smallestDistance = distance;
      closest = thread;
    }
  }

  return closest;
}