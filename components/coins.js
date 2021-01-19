// Registering component in coins.js

AFRAME.registerComponent("target-coins", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `coin${i}`;
  
        //position variables     
        var posX =(Math.random() * 3000 + (-1000));      
        var posY = (Math.random() * 2 + (-1));
        var posZ = (Math.random() * 3000 + -1000);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createCoins(id, position);
      }
    } ,
  
    createRings: function(id,position) {
  
      var islandEl = document.querySelector("#island");
  
      var coinEl = document.createElement("a-entity");
  
      coinEl.setAttribute("id",id);
      coinEl.setAttribute("material","color","#ff9100");
      coinEl.setAttribute("position",position);
      coinEl.setAttribute("geometry",{ primitive: "torus",radius: 10 });   

      //set the static body attribute of physics system 
    coinEl.setAttribute("static-body", {
      shape: "sphere",
      sphereRadius: 2
    });

    coinEl.setAttribute("play", {
      elementId: `#${id}`
    });
  
      terrainEl.appendChild(coinEl);
    }
  });
  