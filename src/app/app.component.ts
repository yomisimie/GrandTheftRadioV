import {Component, OnInit} from "@angular/core";
import {BlainCountyRadio} from './radios/BlainCountyRadio';
import {BlueArk} from './radios/BlueArk';
import {ChannelX} from './radios/ChannelX';
import {EastLosFM} from './radios/EastLosFM';
import {FlyLoFM} from './radios/FlyLoFM';
import {LosSantosRockRadio} from './radios/LosSantosRockRadio';
import {NonStopPopFM} from './radios/NonStopPopFM';
import {RadioLosSantos} from './radios/RadioLosSantos';
import {RadioMirrorPark} from './radios/RadioMirrorPark';
import {RebelRadio} from './radios/RebelRadio';
import {SoulWaxFM} from './radios/SoulWaxFM';
import {Space103} from './radios/Space103.2';
import {TheLab} from './radios/TheLab';
import {TheLowdown911} from './radios/TheLowdown91.1';
import {VinewoodBoulevardRadio} from './radios/VinewoodBoulevardRadio';
import {WCTR} from './radios/WCTR';
import {WestCoastClassics} from './radios/WestCoastClassics';
import {WorldWideFM} from './radios/WorldWideFM';
import {Title} from '@angular/platform-browser';
import {CustomFavicon} from '../favicon.config';
import {NgxFaviconService} from 'ngx-favicon';
import {Radio} from './model/radio';
import {Song} from './model/song';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public CustomFavicon: typeof CustomFavicon = CustomFavicon;

  elSize = 64;
  innerHeight = window.innerHeight;

  title = 'GrandTheftRadioV';
  musicID: string;
  player: YT.Player;
  radios = [
    BlainCountyRadio,
    BlueArk,
    ChannelX,
    EastLosFM,
    FlyLoFM,
    LosSantosRockRadio,
    NonStopPopFM,
    RadioLosSantos,
    RadioMirrorPark,
    RebelRadio,
    SoulWaxFM,
    Space103,
    TheLab,
    TheLowdown911,
    VinewoodBoulevardRadio,
    WCTR,
    WestCoastClassics,
    WorldWideFM
  ];
  radiosPause = [];
  currentRadio: Radio;
  currentSong: Song;
  degrees = 360 / this.radios.length;
  levelRangeElement = 0;

  public constructor(
    private titleService: Title,
    private ngxFaviconService: NgxFaviconService<CustomFavicon>
  ) { }

  ngOnInit() {
    this.currentRadio = new Radio(this.radios[Math.floor(Math.random() * this.radios.length)]);
    this.changeStation(this.currentRadio, true);
  }

  savePlayer(player) {
    this.player = player;
    this.player.playVideo();
    this.player.setPlaybackQuality('small');
    this.setTitle(this.currentSong.artist + ' - ' + this.currentSong.name + ' | ' + this.currentRadio.name);
    this.setCustomFavicon(this.currentRadio.favicon);
  }

  onStateChange(event) {
    console.log('player state', event.data);
  }

  changeStation(radio: Radio, init = false) {
    if (!init && radio.name && this.currentRadio.name === radio.name) {
      if(this.player.getPlayerState() === YT.PlayerState.PLAYING) {
        this.player.pauseVideo();
        this.currentRadio.paused = true;
      } else {
        this.player.playVideo();
        this.currentRadio.paused = false;
      }
      return;
    }
    this.currentRadio = radio;
    this.currentSong = radio.songs[Math.floor(Math.random() * radio.songs.length)];
    this.musicID = this.currentSong.song;
    if (this.player) {
      this.player.stopVideo();
      this.player.loadVideoById(this.musicID);
      this.savePlayer(this.player);
    }
  }

  setTitle(title) {
    this.titleService.setTitle(title);
  }

  setCustomFavicon(faviconName: CustomFavicon): void {
    if (typeof faviconName === 'undefined') {
      this.setDefaultFavicon();
    } else {
      this.ngxFaviconService.setCustomFavicon(faviconName);
    }
  }

  public setDefaultFavicon(): void {
    this.ngxFaviconService.setDefaultFavicon();
  }
}
