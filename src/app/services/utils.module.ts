import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Web3Service} from './web3.service';
import {SoundcloudService} from './soundcloud.service';
import {MapsService} from './maps.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    Web3Service,
    SoundcloudService,
    MapsService
  ],
  exports: [],
  declarations: []
})
export class UtilsModule {
}