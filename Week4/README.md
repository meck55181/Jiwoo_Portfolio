# Week 4: Pearl Earring’s Journey

A small platform game controlled by a phone. I reimagined *Girl with a Pearl Earring* so that the earring becomes the player and moves through platforms to reach the original painting.

## How It Works

The laptop displays the game. The player moves with phone tilt or touch controls sent through a socket connection. The player can also move with the keyboard and the space bar.

I added image assets and multiple platforms to the original `laptop.js`.
Each images are created by altering the original image using AI(removal, background removal).
I also added a `Platform` class displays each platform and checks when the player lands on it.

## Files

- `index.html`
- `laptop.js`
- `phone.js`
- `server.js`
- `girl.png`
- `earring.png`

Comment: I first tried placing `girl.png` and `pearl-earring.png` in an `assets` folder, but kept getting file errors. I placed them beside the HTML and JavaScript files instead.


## Documentation

[video](documentation/week4-video.mp4)

## Attribution

The original `laptop.js` and `phone.js` were provided as the course starter code. I modified `laptop.js` by adding the images, platforms, and `Platform` class.