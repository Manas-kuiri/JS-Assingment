const paragraph = document.querySelectorAll("p");
const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

paragraph.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    let iteration = 0;
    const text = elem.innerText;
    const interval = setInterval(() => {
      const newString = text
        .split("")
        .map((char, index) => {
          if (index < iteration) {
            return char;
          }
          return letter.split("")[Math.floor(Math.random() * letter.length)];
        })
        .join("");

      iteration += 0.3;

      elem.innerText = newString;

      if (iteration >= text.length) {
        clearInterval(interval);
      }
    }, 30);
  });
});
