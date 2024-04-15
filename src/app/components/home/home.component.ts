import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {trigger, state, style, animate, transition, } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class HomeComponent {

  imagen = 'assets/images/MOCKUP CELULAR Brand.png';

  showImageUGC: boolean;
  showImageCrowdposting: boolean;
  showImageBrand: boolean;

  constructor(private router: Router,){
    this.showImageUGC = false,
    this.showImageCrowdposting = false,
    this.showImageBrand = false
  }

  ngOnInit(): void {
  }

  linkUCG(){
    this.router.navigateByUrl('/ugc');
  }

  linkCrowdposting(){
    this.router.navigateByUrl('/crowdposting');
  }

  linkBrand(){
    this.router.navigateByUrl('/brand-ambassador');
  }

  linkUCGHover(show: boolean){
    this.showImageUGC = show,
    this.showImageBrand = false,
    this.showImageCrowdposting = false
  }

  linkCrowdpostingHover(show: boolean){
    this.showImageCrowdposting = show,
    this.showImageUGC = false,
    this.showImageBrand = false
    const imagen = document.getElementById('imagen');
    if(imagen){
      imagen.style.animation = 'imagen-flotar 2s ease-in-out';
    }
    
    
  }

  linkBrandHover(show: boolean){
    this.showImageBrand = show,
    this.showImageCrowdposting = false,
    this.showImageUGC = false
    
  }

  animarImagen() {
    const imagen = document.getElementById('imagen');
    if (imagen) {
      imagen.style.animation = 'imagen-flotar 1s ease-in-out';
    }
  }

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
