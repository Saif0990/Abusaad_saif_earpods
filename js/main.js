(() => {

    const model = document.querySelector("#model");
    const hotspots = document.querySelectorAll(".Hotspot");
  
  
  const infoBoxes = [ 
    {
      title: "charging pot",
      text: "Charging pot for the earpod.",
      image: "images/image1.png"
    },
    {
      title: "speaker1",
      text: "This is the outer speaker",
      image: "images/imag2.png"
    },
    {
      title: "speaker2",
      text: "This is the main speaker",
      image: "images/imag2.png"
    }
  
  ]
  
  function loadInfo() {
    infoBoxes.forEach((infoBox, index)=>{
  
      let selected = document.querySelector(`#hotspot-${index+1}`);
  
      const title = document.createElement("h2");
      title.textContent= infoBox.title;
  
      const text = document.createElement("p");
      text.textContent = infoBox.text;
  
      image = document.createElement('img');
        image.src = infoBox.image;
        image.style.width = "90%";
  
      selected.appendChild(image);
      selected.appendChild(title);
      selected.appendChild(text);
    })
  }
  
  function modelLoaded() {
    loadInfo();
  }
  
  
    function showInfo() {
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 1 });
    }
  
    function hideInfo() {
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 0 });
    }
  
    model.addEventListener("load", modelLoaded);
  
    hotspots.forEach(function (hotspot) {
      hotspot.addEventListener("mouseenter", showInfo);
      hotspot.addEventListener("mouseleave", hideInfo);
    });
  
  })();
  
  