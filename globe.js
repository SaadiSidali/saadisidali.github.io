import { grid } from "./grid";

let globe;

function createGlobe() {
  globe = new ENCOM.Globe(
    document.body.clientWidth,
    document.body.clientHeight,
    {
      font: "sans-serif",
      baseColor: "#000000",
      markerColor: "#aacfd1",
      pinColor: "#aacfd1",
      satelliteColor: "#aacfd1",
      tiles: grid.tiles,
      data: [],
      dayLength: 14000,
      scale: 1,
      viewAngle: 0.1,
      introLinesDuration: 2000,
      maxPins: 500,
      maxMarkers: 4,
    }
  );
  document.getElementById("globe").append(globe.domElement);
}

function animate() {
  if (globe) {
    globe.tick();
  }
  requestAnimationFrame(animate);
}

function addMarkers() {
  const myLocation = [36.7593303, 2.9291194];
  globe.addMarker(...myLocation, "I'm here!");
}

export const startGlobe = () => {
  createGlobe();
  globe.init();
  animate();
  addMarkers();
  window.addEventListener("resize", () => {
    let h = window.innerHeight;
    globe.camera.aspect = window.innerWidth / h;
    globe.camera.updateProjectionMatrix();
    globe.renderer.setSize(window.innerWidth, h);
  });
};
