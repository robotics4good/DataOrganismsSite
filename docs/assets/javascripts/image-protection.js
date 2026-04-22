// Deterrence only: users can still save images via devtools/network.
// This just blocks common "right click" + drag interactions.

document.addEventListener(
  "contextmenu",
  (e) => {
    const img = e.target instanceof Element ? e.target.closest("img.team-avatar") : null;
    if (img) e.preventDefault();
  },
  { capture: true }
);

document.addEventListener(
  "dragstart",
  (e) => {
    const img = e.target instanceof Element ? e.target.closest("img.team-avatar") : null;
    if (img) e.preventDefault();
  },
  { capture: true }
);

