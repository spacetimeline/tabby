import { Injectable } from '@angular/core'
import { SettingsTabProvider } from './api'
import { HotkeySettingsTabComponent } from './components/hotkeySettingsTab.component'
import { WindowSettingsTabComponent } from './components/windowSettingsTab.component'
import { VaultSettingsTabComponent } from './components/vaultSettingsTab.component'
import { ConfigSyncSettingsTabComponent } from './components/configSyncSettingsTab.component'
import { ProfilesSettingsTabComponent } from './components/profilesSettingsTab.component'
import { TranslateService } from 'tabby-core'

/** @hidden */
@Injectable()
export class HotkeySettingsTabProvider extends SettingsTabProvider {
    id = 'hotkeys'
    icon = 'keyboard'
    title = this.translate.instant('Hotkeys')

    constructor (private translate: TranslateService) { super() }

    getComponentType (): any {
        return HotkeySettingsTabComponent
    }
}


/** @hidden */
@Injectable()
export class WindowSettingsTabProvider extends SettingsTabProvider {
    id = 'window'
    icon = 'window-maximize'
    title = this.translate.instant('Window')

    constructor (private translate: TranslateService) { super() }

    getComponentType (): any {
        return WindowSettingsTabComponent
    }
}


/** @hidden */
@Injectable()
export class VaultSettingsTabProvider extends SettingsTabProvider {
    id = 'vault'
    icon = 'key'
    title = 'Vault'

    getComponentType (): any {
        return VaultSettingsTabComponent
    }
}


/** @hidden */
@Injectable()
export class ProfilesSettingsTabProvider extends SettingsTabProvider {
    id = 'profiles'
    icon = 'window-restore'
    title = this.translate.instant('Profiles & connections')
    prioritized = true

    constructor (private translate: TranslateService) { super() }

    getComponentType (): any {
        return ProfilesSettingsTabComponent
    }
}

/** @hidden */
@Injectable()
export class ConfigSyncSettingsTabProvider extends SettingsTabProvider {
    id = 'config-sync'
    icon = 'cloud'
    title = this.translate.instant('Config sync')

    constructor (private translate: TranslateService) { super() }

    getComponentType (): any {
        return ConfigSyncSettingsTabComponent
    }
}
