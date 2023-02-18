import type { App } from 'vue'
import GfgButtonInstall, { GfgButton } from "./gfg-button"
import GlowButtonInstall, { GlowButton } from "./glow-button"
import MultiButtonGroupInstall, { MultiButtonGroup } from "./multi-button-group"
import MultiButtonInstall, { MultiButton } from "./multi-button"
import overlayInstall, { Overlay } from "./overlay"
import drawerInstall, { Drawer } from "./drawer"
import nobleButtonInstall, { NobleButton } from './noble-button'
import nobleCardInstall,{NobleCard} from "./noble-card"
import nobleSwiperInstall,{Swiper,SwiperItem} from "./swiper"
import "./styles/global.scss"
const installs = [
    GfgButtonInstall,
    GlowButtonInstall,
    MultiButtonGroupInstall,
    MultiButtonInstall,
    overlayInstall,
    drawerInstall,
    nobleButtonInstall,
    nobleCardInstall,
    nobleSwiperInstall
]

export {
    Overlay,
    GfgButton,
    GlowButton,
    MultiButtonGroup,
    MultiButton,
    NobleButton,
    Drawer,
    NobleCard,
    Swiper,
    SwiperItem
}
export default {
    verison: '0.0.1',
    install(app: App): void {
        installs.forEach(comp => app.use(comp))
    }
} 