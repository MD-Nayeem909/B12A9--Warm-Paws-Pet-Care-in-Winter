// Initialize tooltips
document.addEventListener("DOMContentLoaded", function () {
  // Snowflakes effect
  if (!document.getElementById("vanta-canvas")) {
    const snowflakes = ["❄", "❅", "❆", "✻", "✼"];
    const count = 30;

    for (let i = 0; i < count; i++) {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflake.innerHTML =
        snowflakes[Math.floor(Math.random() * snowflakes.length)];
      snowflake.style.left = Math.random() * 100 + "vw";
      snowflake.style.opacity = Math.random();
      snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
      snowflake.style.animationDuration = Math.random() * 15 + 5 + "s";
      snowflake.style.animationDelay = Math.random() * 5 + "s";
      document.body.appendChild(snowflake);
    }
  }
});
