import { proxy } from "valtio"

const state = proxy({
  intro: true,
  color: `#EFBD48`,
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./one-piece.png",
  fullDecal: "./one-piece.png",
})

export default state
