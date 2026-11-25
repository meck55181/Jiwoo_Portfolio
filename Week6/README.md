# Week 6: Trending Poses

A webcam project that recognizes different poses. When the model detects a pose, related images appear quickly at random positions over the camera feed.

## How It Works

The laptop displays the webcam video. The video is sent to a pose classification model made with `Google Teachable Machine`. When a pose is recognized, p5.js displays images connected to that label in random positions.

## Files

- `index.html`
- `yaho.jpg`
- `mooyaho.jpeg`
- `67.jpg`


## Documentation

[image](documentation/teachable-machine.jpg)
[video](documentation/trending-pose-video.mp4)

## Attribution

The original image classification model is hosted on `Google Teachable Machine`. This project uses `p5.js` and `ml5.js`.