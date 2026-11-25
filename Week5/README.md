# Week 5: Knit Filter

A webcam filter that turns the live video into a cross-stitch pattern. Each small part of the image is drawn as an X-shaped stitch using a limited set of thread colors.

## How It Works

The webcam captures a live image. The code samples the color at the center of each grid cell and chooses the closest color from the thread palette. It draws two diagonal lines in each cell to create a cross-stitch.

A slider below the canvas controls the thickness of the stitches.

## Files

- `index.html`
- `sketch.js`


## Documentation

[image](documentation/week5-image.png)
[video](documentation/week5-video.mp4)

## Attribution

The original webcam filter code was provided as course starter code. I modified it to draw the webcam image as cross-stitches and added a winter-inspired color palette and a slider to control stitch thickness.