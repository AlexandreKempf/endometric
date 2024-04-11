// uno.config.ts
import { defineConfig } from 'unocss'
import { presetIcons, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
    presets: [
        presetUno(),
        presetIcons({ /* options */ }),
        presetWebFonts({
            fonts: {
                sans: 'Montserrat:200,300,900',
                mono: ['Fira Code', 'Fira Mono:400,700'],

            }
        })]
})