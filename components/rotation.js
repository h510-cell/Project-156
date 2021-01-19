//island Rotation
AFRAME.registerComponent("island-rotation-reader", {
    schema: {
      speedOfRoation: { type: "number", default: 0 }    
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
          if (this.data.speedOfRoation < 0.1) {
            this.data.speedOfRoation += 0.01;
          }
        }
        if (e.key === "ArrowLeft") {
          if (this.data.speedOfRoation > -0.1) {
            this.data.speedOfRoation -= 0.01;
          }
        }
      });
    },
    tick: function () {
      var island_Rotation = this.el.getAttribute("rotation");
  
      island_Rotation.y += this.data.speedOfRoation;
  
      this.el.setAttribute("rotation", {
        x: island_Rotation.x,
        y: island_Rotation.y,
        z: island_Rotation.z
      });
    }
  });

//scuba diver rotation component
AFRAME.registerComponent("scuba-diver-rotation-reader", {
  schema: {
    speedOfRoation: { type: "number", default: 0 },
    speedOfAscent: { type: "number", default: 0 },
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      //get the data from the attributes
      this.data.speedOfRoation = this.el.getAttribute("rotation");
      this.data.speedOfAscent = this.el.getAttribute("position");

      var scuba_diver_Rotation = this.data.speedOfRoation;
      var scuba_diver_Position = this.data.speedOfAscent;

      //control the attributes with the Arrow Keys
      if (e.key === "ArrowRight") {
        if ( scuba_diver_Rotation.x < 10) {
          scuba_diver_Rotation.x += 0.5;
          this.el.setAttribute("rotation",  scuba_diver_Rotation);
        }
      }
      if (e.key === "ArrowLeft") {
        if ( scuba_diver_Rotation.x > -10) {
          scuba_diver_Rotation.x -= 0.5;
          this.el.setAttribute("rotation",  scuba_diver_Rotation);
        }
      }
      if (e.key === "ArrowUp") {
        if ( scuba_diver_Rotation.z < 20) {
          scuba_diver_Rotation.z += 0.5;
          this.el.setAttribute("rotation",  scuba_diver_Rotation);
        }
        if ( scuba_diver_Position.y < 2) {
          scuba_diver_Position.y += 0.01;
          this.el.setAttribute("position",  scuba_diver_Position);
        }
      }
      if (e.key === "ArrowDown") {
        if ( scuba_diver_Rotation.z > -10) {
          scuba_diver_Rotation.z -= 0.5;
          this.el.setAttribute("rotation",  scuba_diver_Rotation);
        }
        if ( scuba_diver_Position.y > -2) {
          scuba_diver_Position.y -= 0.01;
          this.el.setAttribute("position",  scuba_diver_Position);
        }
      }
    });
  },
});
