import { Logger } from './logger.service';
import { Injectable } from '@angular/core';
import music from 'src/assets/data/music.json';

export interface SoundcloudTrack {
  title: string;
  short: string;
  composer: string;
  life: string;
  public: string;
  performer: string;
  link: string;
  uri: string;
  soundcloud: boolean;
}

export type SoundcloudTitles =
  | 'requiem'
  | 'raindrops'
  | 'fugato'
  | 'sonata31'
  | 'ricercar'
  | 'wtcFugueG'
  | 'fugueG'
  | 'away'
  | 'lullaby'
  | 'saved'
  | 'savedshort'
  | 'if'
  | 'road'
  | 'holdingFast'
  | 'fugueA'
  | 'shostakovich';
export interface MusicJson {
  tracks: {
    [title in SoundcloudTitles]: SoundcloudTrack;
  };
}
@Injectable()
export class SoundcloudService {
  logger = new Logger(this.constructor.name);
  constructor() {}

  openSoundcloudLink(value?: SoundcloudTitles | null) {
    this.logger.log('Should open Track with Name: ' + value);

    if (value) {
      const musicData = music.tracks[value];
      this.logger.log('Got Track Info: ', musicData);
    }
  }
}
