// multiple named export
export const grayscale = (foto) => `Foto: ${foto || "undefined"}, Filter: grayscale`;
export const sepia = (foto) => `Foto: ${foto || "undefined"}, Filter: sepia`;

// default export
export default function editFoto(foto, filter) {
  return `Foto: ${foto || "undefined"}, Edit dengan filter: ${filter}`;
}
