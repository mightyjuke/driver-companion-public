const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const distanceNodes = document.querySelectorAll("[data-distance], [data-phone-distance]");
const vehicleMarker = document.querySelector("[data-vehicle-marker]");

if (!prefersReducedMotion && distanceNodes.length && vehicleMarker) {
  let startTime = 0;
  const duration = 9000;

  const animateApproach = (time) => {
    if (!startTime) startTime = time;
    const progress = ((time - startTime) % duration) / duration;
    const eased = 0.5 - Math.cos(progress * Math.PI * 2) / 2;
    const distance = Math.round(420 - eased * 300);
    const markerY = 650 - eased * 360;
    distanceNodes.forEach((node) => { node.textContent = String(distance); });
    vehicleMarker.setAttribute("transform", `translate(${320 + eased * 21} ${markerY})`);
    requestAnimationFrame(animateApproach);
  };

  requestAnimationFrame(animateApproach);
}

const steps = [...document.querySelectorAll("[data-step]")];
const trackCar = document.querySelector("[data-track-car]");
const trackSweep = document.querySelector("[data-track-sweep]");
const consoleDistance = document.querySelector("[data-console-distance]");
const stepStates = [
  { top: 410, distance: 400, sweep: 288 },
  { top: 320, distance: 280, sweep: 198 },
  { top: 222, distance: 150, sweep: 100 },
  { top: 66, distance: 0, sweep: 0 },
];

const setStep = (index) => {
  const state = stepStates[index];
  steps.forEach((step, stepIndex) => {
    const active = stepIndex === index;
    step.classList.toggle("is-active", active);
    step.setAttribute("aria-pressed", String(active));
  });
  if (trackCar) {
    trackCar.style.top = `${state.top}px`;
    trackCar.style.background = index === 3 ? "#53d391" : "#f4f0e5";
  }
  if (trackSweep) trackSweep.style.transform = `translateX(-50%) scaleY(${state.sweep / 288})`;
  if (consoleDistance) consoleDistance.textContent = String(state.distance);
};

steps.forEach((step, index) => step.addEventListener("click", () => setStep(index)));

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});
