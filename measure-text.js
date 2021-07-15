const { join } = require('path')

const { createCanvas, GlobalFonts } = require('./index.js')

const fontPath = join(__dirname, '__test__', 'fonts', 'iosevka-slab-regular.ttf')

GlobalFonts.registerFromPath(fontPath)

const canvas = createCanvas(1024, 768)
const ctx = canvas.getContext('2d')

ctx.font = '50px Iosevka Slab'

const metrics = ctx.measureText('@napi-rs/canvas')

console.info(metrics)
