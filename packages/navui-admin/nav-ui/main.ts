import type { App } from 'vue'
import GfgButtonInstall, { GfgButton } from "./gfg-button"
import GlowButtonInstall, { GlowButton } from "./glow-button"
import MultiButtonGroupInstall, { MultiButtonGroup } from "./multi-button-group"
import MultiButtonInstall, { MultiButton } from "./multi-button"
import overlayInstall,{Overlay} from "./overlay"
import drawerInstall,{Drawer} from "./drawer"
import "./styles/global.scss"
const installs = [
    GfgButtonInstall,
     GlowButtonInstall, 
     MultiButtonGroupInstall, 
     MultiButtonInstall,
     overlayInstall,
     drawerInstall
    ]

export {
    Overlay,
    GfgButton,
    GlowButton,
    MultiButtonGroup,
    MultiButton,
    Drawer
}
export default {
    verison: '0.0.1',
    install(app: App): void {
        installs.forEach(comp => app.use(comp))
    }
} 