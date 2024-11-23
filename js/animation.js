(() => {

    // Get the canvas element and its context
    const canvas = document.querySelector("#explode-view");
    const ctx = canvas.getContext("2d");

    // Function to resize the canvas based on window size
    function canvasSize(){
        canvas.width = window.innerWidth; 
        canvas.height = window.innerWidth * 9 / 16;
        console.log("Canvas resized to:", canvas.width, canvas.height); // Debugging the canvas size
    }

    // Call canvasSize initially and whenever window is resized
    canvasSize();
    window.addEventListener('resize', canvasSize);

    // Number of frames and array to hold images
    const frameCount = 361; // Number of still images
    const images = []; // Array to hold images

    // Fill the array with image objects and set the src
    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        // Adjust this line to correctly generate filenames starting with animation0000
        img.src = `images/animation${i.toString().padStart(4, '0')}.png`;
        images.push(img);
    }

    const buds = {
        frame: 0
    };

    // GSAP scroll animation
    gsap.to(buds, {
        frame: 360,
        snap: "frame",
        scrollTrigger: { 
            trigger: "#explode-view", // Target element for scrolling animation
            pin: true, // Pin the element while scrolling
            scrub: 3, // Control scroll animation speed
            markers: true, // For debugging, see markers in the browser
            start: "top top", 
        },
        onUpdate: render // Function to update frame on scroll
    });

    // Render function to draw the current frame on the canvas
    function render() {
        // Ensure images are fully loaded before rendering
        if (images[buds.frame].complete) {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
            ctx.drawImage(images[buds.frame], 0, 0, canvas.width, canvas.height); // Draw the current image
        }
    }

    // Add event listener for when images are loaded, then start the animation
    images[0].addEventListener("load", render);

})();
