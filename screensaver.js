// Set up canvas and context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set up image and image size
const image = new Image();
image.src = 'DISC.png';
let imageSize = 150;

// Set up initial position and velocity
let x = Math.random() * (canvas.width - imageSize);
let y = Math.random() * (canvas.height - imageSize);
let velocityX = (Math.random() - 0.5) * 3;
let velocityY = (Math.random() - 0.5) * 3;

// Set up rotation angle and angular velocity
let angle = 0;
let angularVelocity = 1;

// Set up animation loop
function animate() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update position and angle
  x += velocityX;
  y += velocityY;
  angle += angularVelocity;

  // Check if image has reached a screen edge and reverse velocity if necessary
  if (x + imageSize > canvas.width || x < 0) {
    velocityX = -velocityX;
  }
  if (y + imageSize > canvas.height || y < 0) {
    velocityY = -velocityY;
  }

  // Save context and rotate canvas
  ctx.save();
  ctx.translate(x + imageSize / 2, y + imageSize / 2);
  ctx.rotate(angle * Math.PI / 180);

  // Draw image on rotated canvas
  ctx.drawImage(image, -imageSize / 2, -imageSize / 2, imageSize, imageSize);

  // Restore context
  ctx.restore();

  // Request another frame
  requestAnimationFrame(animate);
}

// Start animation
animate();
