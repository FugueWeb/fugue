import { Logger } from './logger.service';
import { Injectable } from '@angular/core';

@Injectable()
export class SoundcloudService {
  logger = new Logger(this.constructor.name);
  constructor() {}

  openSoundcloudLink(value?: string | null) {
    this.logger.log('Should open Track with Name: ' + value);
  }
}
