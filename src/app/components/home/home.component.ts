import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('crowdposting', [
      // Crowdposting
      state(
        'open',
        style({
          opacity: 1,
          filter: 'drop-shadow(1px 1px 20px #d8007f)',
          transform: 'scale(1.5)',
          left: '30%',
          zIndex: 1,
        })
      ),
      state(
        'close',
        style({
          opacity: 0.3,
          zIndex: 0,
        })
      ),
      transition('open => close', [animate('0.7s ease-in-out')]),
      transition('close => open', [animate('0.7s ease-in-out')]),
    ]),

    trigger('ugc', [
      // UGC
      state(
        'open',
        style({
          opacity: 1,
          filter: 'drop-shadow(1px 1px 20px #d8007f)',
          transform: 'scale(1.5)',
          left: '30%',

          zIndex: 1,
        })
      ),
      state(
        'close',
        style({
          opacity: 0.3,
          zIndex: 0,
        })
      ),
      transition('open => close', [animate('0.7s ease-in-out')]),
      transition('close => open', [animate('0.7s ease-in-out')]),
    ]),
    trigger('brand', [
      // UGC
      state(
        'open',
        style({
          opacity: 1,
          filter: 'drop-shadow(1px 1px 20px #d8007f)',
          transform: 'scale(1.5)',
          left: '30%',

          zIndex: 1,
        })
      ),
      state(
        'close',
        style({
          opacity: 0.3,
          zIndex: 0,
        })
      ),
      transition('open => close', [animate('0.7s ease-in-out')]),
      transition('close => open', [animate('0.7s ease-in-out')]),
    ]),

    trigger('row-crowdposting', [
      // UGC
      state(
        'open',
        style({
          transform: 'rotate(-90deg)',
        })
      ),
      state('close', style({})),
      transition('open => close', [animate('0.7s ease-in-out')]),
      transition('close => open', [animate('0.7s ease-in-out')]),
    ]),

    trigger('row-ugc', [
      // UGC
      state(
        'open',
        style({
          transform: 'rotate(-90deg)',
        })
      ),
      state('close', style({})),
      transition('open => close', [animate('0.7s ease-in-out')]),
      transition('close => open', [animate('0.7s ease-in-out')]),
    ]),

    trigger('row-brand', [
      // UGC
      state(
        'open',
        style({
          transform: 'rotate(-90deg)',
        })
      ),
      state('close', style({})),
      transition('open => close', [animate('0.7s ease-in-out')]),
      transition('close => open', [animate('0.7s ease-in-out')]),
    ]),
  ],
})
export class HomeComponent {
  imagen = 'assets/images/MOCKUP CELULAR Brand.png';

  showImageUGC: boolean;
  showImageCrowdposting: boolean;
  showImageBrand: boolean;

  constructor(private router: Router) {
    (this.showImageUGC = false),
      (this.showImageCrowdposting = false),
      (this.showImageBrand = false);
  }

  ngOnInit(): void {}

  linkUCG() {
    this.router.navigateByUrl('/ugc');
  }

  linkCrowdposting() {
    this.router.navigateByUrl('/crowdposting');
  }

  linkBrand() {
    this.router.navigateByUrl('/brand-ambassador');
  }

  isOpenCrowdposting = true;
  isOpenUGC = false;
  isOpenBrand = false;
  isOpenRowCrowdposting = false;
  isOpenRowUGC = false;
  isOpenRowBrand = false;

  toggleCrowdposting() {
    this.isOpenRowCrowdposting = true;
    this.isOpenRowUGC = false;
    this.isOpenRowBrand = false;
    this.isOpenCrowdposting = true;
    this.isOpenUGC = false;
    this.isOpenBrand = false;
  }

  toggleUGC() {
    this.isOpenRowCrowdposting = false;
    this.isOpenRowUGC = true;
    this.isOpenRowBrand = false;
    this.isOpenUGC = true;
    this.isOpenBrand = false;
    this.isOpenCrowdposting = false;
  }

  toggleBrand() {
    this.isOpenRowCrowdposting = false;
    this.isOpenRowUGC = false;
    this.isOpenRowBrand = true;
    this.isOpenUGC = false;
    this.isOpenBrand = true;
    this.isOpenCrowdposting = false;
  }
}
