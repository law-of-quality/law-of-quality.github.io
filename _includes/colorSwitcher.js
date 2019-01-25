 let switcherCount = 1;
    const palettes = [
      {flasha: "#f2cb6c", flashb: "#cffff4"},
      {flashb: "#f2cb6c", flasha: "#cffffe"},
      {flasha: "#f2cb6c", flashb: "#ff259b"},
      {flasha: "#1fc8a9", flashb: "#cdff06"},
      {flasha: "#1fc8a9", flashb: "#ff259b"},
      {flashb: "#f2cb6c", flasha: "var(--c-text"},
      {flashb: "#cffff4", flasha: "var(--c-text"}
    ];
    const styles = getComputedStyle(document.documentElement);
    const colorValue = styles.getPropertyValue('--flash--a');
    const switcherEl = document.getElementById('colorSwitcher');
    const percent = 10;
    switcherEl.addEventListener("mouseup", function() {
      const shadowA = tinycolor(palettes[switcherCount].flasha.toString()).darken(percent).desaturate(percent).toString();
      const shadowB = tinycolor(palettes[switcherCount].flashb.toString()).darken(18).desaturate(50).toString();
      document.documentElement.style.setProperty("--flash--a", palettes[switcherCount].flasha)
      document.documentElement.style.setProperty("--flash--b", palettes[switcherCount].flashb)
      document.documentElement.style.setProperty("--flash--a-shadow", shadowA);
      document.documentElement.style.setProperty("--flash--b-shadow", shadowB);
      switcherCount = switcherCount < palettes.length -1 ? switcherCount + 1 : 0;
    });