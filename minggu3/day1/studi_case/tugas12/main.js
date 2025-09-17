import { grayscale, sepia, edit } from "./foto/index.js";

const fotos = ["foto1.jpg", "foto2.png", undefined];

console.log("--- Uji Named Export ---");
fotos.forEach(f => {
  console.log(grayscale(f));
  console.log(sepia(f));
});

console.log("\n--- Uji Default (alias: edit) ---");
fotos.forEach(f => {
  console.log(edit(f, "blur"));
  console.log(edit(f, "saturation"));
});
