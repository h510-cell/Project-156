// Registering component in fish.js
AFRAME.registerComponent("fishes", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `fishes${i}`;
  
        //position variables
        var posX = Math.random() * 3000 + (-1000);      
        var posY = Math.random() * 2 + (-1);
        var posZ = Math.random() * 3000 + (-1000);
  
        var position = { x: posX, y: posY, z: posZ }
  
        //call the function
        this.fish(id, position);
  
      }
    },
    fish:(id,position) => {
      
      //Get the island element
      var islandEl = document.querySelector("#island");
  
      //creating the bird model entity
      var fishEl = document.createElement("a-entity");
  
      //Setting multiple attributes
      fishEl.setAttribute("id", id);
      
      fishEl.setAttribute("position",position);
      fishEl.setAttribute("scale",{ x: 500,y: 500,z: 500 });
  
      fishEl.setAttribute(
        "gltf-model",
        "./assets/models/fish/scene.gltf"
      );
      
      //animated models
      fishEl.setAttribute("animation-mixer",{});

       //set the static body of the physic system
    fishEl.setAttribute("static-body", {
      shape: "sphere",
      sphereRadius: 5,
    });

    fishEl.setAttribute("play", {
      elementId: `#${id}`,
    });
      
  
      //append the fish entity as the child of the island entity
      islandEl.appendChild(fishEl);
  
    }
    
  });