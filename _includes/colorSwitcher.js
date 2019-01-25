 let switcherCount = 0;
    const palettes = [
      { flasha: "#f2cb6c", flashb: "#cffff4", ticker: "#99f347"}, //0
      { flasha: "#f2cb6c", flashb: "#cffff4", ticker: "#333"}, //0
      { flasha: "#f2cb6c", flashb: "#ff259b", ticker: "#1bdfff"}, //2
      { flashb: "#f2cb6c", flasha: "var(--c-text", ticker: "#62bfad"} //5
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
      document.documentElement.style.setProperty("--c-ticker-bg", palettes[switcherCount].ticker)
      document.documentElement.style.setProperty("--flash--a-shadow", shadowA);
      document.documentElement.style.setProperty("--flash--b-shadow", shadowB);
      document.getElementById('count').textContent = switcherCount
      switcherCount = switcherCount < palettes.length -1 ? switcherCount + 1 : 0;
      // console.log('switcher el', switcherEl);
    });