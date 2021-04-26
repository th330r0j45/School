import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import {MatSidenavModule} from '@angular/material/sidenav'

@NgModule({
    imports: [
        MatSidenavModule,
    ],
    exports: [
        MatSidenavModule,
    ]
})
export class MaterialModule {}