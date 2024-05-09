import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { CitiesService } from 'src/app/service/cities.service';
import { CrowdpostingService } from 'src/app/service/crowdposting.service';

interface SaleInstagramUno {
  country: string;
  number_nano: number;
  number_micro: number;
  number_reels_nano: number;
  number_stories_nano: number;
  number_reels_micro: number;
  number_stories_micro: number;
  price: number;
  reach_package: number;
  cpv: number;
}

interface SaleTikTokUno {
  country: string;
  number_nano: number;
  number_micro: number;
  number_tiktok_nano: number;
  number_tiktok_micro: number;
  price: number;
  reach_package: number;
  cpv: number;
}

interface SaleInstagramDos {
  country: string;
  number_nano: number;
  number_micro: number;
  number_reels_nano: number;
  number_stories_nano: number;
  number_reels_micro: number;
  number_stories_micro: number;
  price: number;
  reach_package: number;
  cpv: number;
}

interface SaleTikTokDos {
  country: string;
  number_nano: number;
  number_micro: number;
  number_tiktok_nano: number;
  number_tiktok_micro: number;
  price: number;
  reach_package: number;
  cpv: number;
}

@Component({
  selector: 'app-crowdposting',
  templateUrl: './crowdposting.component.html',
  styleUrls: ['./crowdposting.component.css'],
})
export class CrowdpostingComponent {
  selectedCountry: string = '';
  citiesFinal: string[] = [''];

  citiesListArgentina: { name: string; code: string }[] = [];

  citiesListColombia: { name: string; code: string }[] = [];

  citiesListBolivia: { name: string; code: string }[] = [];

  citiesListBrasil: { name: string; code: string }[] = [];

  citiesListChile: { name: string; code: string }[] = [];

  citiesListEcuador: { name: string; code: string }[] = [];

  citiesListParaguay: { name: string; code: string }[] = [];

  citiesListPeru: { name: string; code: string }[] = [];

  citiesListUruguay: { name: string; code: string }[] = [];

  citiesListVenezuela: { name: string; code: string }[] = [];

  //Instagram
  salesListInstagramUno: SaleInstagramUno[] = [];

  newSaleInstagramUno: SaleInstagramUno = {
    country: '',
    number_nano: 30,
    number_micro: 15,
    number_reels_nano: 2,
    number_stories_nano: 3,
    number_reels_micro: 1,
    number_stories_micro: 3,
    price: 0,
    reach_package: 0,
    cpv: 0,
  };

  salesListInstagramDos: SaleInstagramDos[] = [];

  newSaleInstagramDos: SaleInstagramDos = {
    country: '',
    number_nano: 90,
    number_micro: 45,
    number_reels_nano: 2,
    number_stories_nano: 3,
    number_reels_micro: 1,
    number_stories_micro: 3,
    price: 0,
    reach_package: 0,
    cpv: 0,
  };

  addSaleInstagramUno() {
    this.salesListInstagramUno.push({ ...this.newSaleInstagramUno });
    // Limpiar el formulario después de agregar la venta
    console.log(this.salesListInstagramUno);
  }

  addSaleInstagramDos() {
    this.salesListInstagramDos.push({ ...this.newSaleInstagramDos });
    // Limpiar el formulario después de agregar la venta
    console.log(this.salesListInstagramDos);
  }

  resetFormInstagramUno() {
    this.newSaleInstagramUno = {
      country: '',
      number_nano: 0,
      number_micro: 0,
      number_reels_nano: 0,
      number_stories_nano: 0,
      number_reels_micro: 0,
      number_stories_micro: 0,
      price: 0,
      reach_package: 0,
      cpv: 0,
    };
  }

  resetFormInstagramDos() {
    this.newSaleInstagramUno = {
      country: '',
      number_nano: 0,
      number_micro: 0,
      number_reels_nano: 0,
      number_stories_nano: 0,
      number_reels_micro: 0,
      number_stories_micro: 0,
      price: 0,
      reach_package: 0,
      cpv: 0,
    };
  }

  //TikTok

  salesListTikTokUno: SaleTikTokUno[] = [];

  newSaleTikTokUno: SaleTikTokUno = {
    country: '',
    number_nano: 40,
    number_micro: 20,
    number_tiktok_nano: 2,
    number_tiktok_micro: 2,
    price: 0,
    reach_package: 0,
    cpv: 0,
  };

  salesListTikTokDos: SaleTikTokDos[] = [];

  newSaleTikTokDos: SaleTikTokDos = {
    country: '',
    number_nano: 30,
    number_micro: 40,
    number_tiktok_nano: 2,
    number_tiktok_micro: 2,
    price: 0,
    reach_package: 0,
    cpv: 0,
  };

  addSaleTikTokUno() {
    this.salesListTikTokUno.push({ ...this.newSaleTikTokUno });
    // Limpiar el formulario después de agregar la venta
    // this.resetFormTikTokUno();
    console.log(this.salesListTikTokUno);
  }

  addSaleTikTokDos() {
    this.salesListTikTokDos.push({ ...this.newSaleTikTokDos });
    // Limpiar el formulario después de agregar la venta
    console.log(this.salesListTikTokDos);
  }

  resetFormTikTokUno() {
    this.newSaleTikTokUno = {
      country: '',
      number_nano: 0,
      number_micro: 0,
      number_tiktok_nano: 0,
      number_tiktok_micro: 0,
      price: 0,
      reach_package: 0,
      cpv: 0,
    };
  }

  resetFormTikTokDos() {
    this.newSaleTikTokUno = {
      country: '',
      number_nano: 0,
      number_micro: 0,
      number_tiktok_nano: 0,
      number_tiktok_micro: 0,
      price: 0,
      reach_package: 0,
      cpv: 0,
    };
  }

  // General paquetes
  numeroMicro: number = 10;
  numeroNano: number = 10;

  // Paquetes Instagram
  numeroReelsNano: number = 10;
  numeroStoriesNano: number = 10;
  numeroReelsMicro = 10;
  numeroStoriesMicro: number = 10;

  // Paquetes TikTok
  numeroTikToksNano: number = 10;
  numeroTikToksMicro: number = 10;

  name_client = new FormControl('', Validators.required);
  country = new FormControl('', Validators.required);
  cities = new FormControl('', Validators.required);
  price = new FormControl(null, Validators.required);
  campaign_objective = new FormControl('', Validators.required);
  countryFinal: string = 'Nada';
  saveClientForm = new FormGroup({
    name_client: this.name_client,
    country: this.country,
    cities: this.cities,
    price: this.price,
    campaign_objective: this.campaign_objective,
  });

  constructor(
    private service: AuthService,
    private crowdpostingService: CrowdpostingService,
    private router: Router,
    private citiesService: CitiesService
  ) {
    (this.showInstagramPackage = false), (this.showTikTokPackage = false);
  }

  ngOnInit() {
    this.service.verificarToken();
  }

  saveClientCrowdposting() {
    console.log(this.saveClientForm.value);
    this.crowdpostingService
      .saveSaleCrowdposting(this.saveClientForm.value)
      .subscribe(() => {
        console.log();
      });
    localStorage.setItem('Country', this.countryFinal);
  }
  savePackagesCrowdposting() {
    this.saveClientCrowdposting();
    console.log(this.salesListInstagramUno);
    this.crowdpostingService
      .savePackageCrowdpostingInstagam(this.salesListInstagramUno)
      .subscribe(() => {
        console.log();
        alert('¡La compra se envio con exito!');
        this.router.navigateByUrl('/ugc');
      });

    console.log(this.salesListTikTokUno);
    this.crowdpostingService
      .savePackageCrowdpostingTikTok(this.salesListTikTokUno)
      .subscribe(() => {
        console.log();
        alert('¡La compra se envio con exito!');
        this.router.navigateByUrl('/ugc');
      });
  }

  ValorTotalPaqueteUno: number = 0;
  ValorTotalPaqueteDos: number = 0;
  ValorTotalPaqueteTres: number = 0;
  ValorTotalPaqueteCuatro: number = 0;

  ReachTotalPaqueteUno: number = 0;
  ReachTotalPaqueteDos: number = 0;
  ReachTotalPaqueteTres: number = 0;
  ReachTotalPaqueteCuatro: number = 0;

  valorStoryMicro: number = 0;
  valorReelMicro: number = 0;
  valorStoryNano: number = 0;
  valorReelNano: number = 0;

  reachStoryMicro: number = 0;
  reachReelMicro: number = 0;
  reachStoryNano: number = 0;
  reachReelNano: number = 0;

  changeValor() {
    setTimeout(() => {
      if (this.selectedCountry == 'Argentina') {
        this.valorStoryMicro = 30;
        this.valorReelMicro = 50;
        this.valorStoryNano = 20;
        this.valorReelNano = 35;

        this.reachStoryMicro = 400;
        this.reachReelMicro = 650;
        this.reachStoryNano = 250;
        this.reachReelNano = 450;
      }
      if (this.selectedCountry == 'Bolivia') {
        this.valorStoryMicro = 30;
        this.valorReelMicro = 50;
        this.valorStoryNano = 20;
        this.valorReelNano = 35;

        this.reachStoryMicro = 400;
        this.reachReelMicro = 650;
        this.reachStoryNano = 250;
        this.reachReelNano = 450;
      }
      if (this.selectedCountry == 'Brasil') {
        this.valorStoryMicro = 30;
        this.valorReelMicro = 50;
        this.valorStoryNano = 20;
        this.valorReelNano = 35;

        this.reachStoryMicro = 400;
        this.reachReelMicro = 650;
        this.reachStoryNano = 250;
        this.reachReelNano = 450;
      }
      if (this.selectedCountry == 'Chile') {
        this.valorStoryMicro = 30;
        this.valorReelMicro = 50;
        this.valorStoryNano = 20;
        this.valorReelNano = 35;

        this.reachStoryMicro = 400;
        this.reachReelMicro = 650;
        this.reachStoryNano = 250;
        this.reachReelNano = 450;
      }
      if (this.selectedCountry == 'Colombia') {
        this.valorStoryMicro = 25;
        this.valorReelMicro = 38;
        this.valorStoryNano = 15;
        this.valorReelNano = 28;

        this.reachStoryMicro = 400;
        this.reachReelMicro = 650;
        this.reachStoryNano = 250;
        this.reachReelNano = 450;
      }
      if (this.selectedCountry == 'Ecuador') {
        this.valorStoryMicro = 30;
        this.valorReelMicro = 50;
        this.valorStoryNano = 20;
        this.valorReelNano = 35;

        this.reachStoryMicro = 400;
        this.reachReelMicro = 650;
        this.reachStoryNano = 250;
        this.reachReelNano = 450;
      }
      if (this.selectedCountry == 'Paraguay') {
        this.valorStoryMicro = 30;
        this.valorReelMicro = 50;
        this.valorStoryNano = 20;
        this.valorReelNano = 35;

        this.reachStoryMicro = 400;
        this.reachReelMicro = 650;
        this.reachStoryNano = 250;
        this.reachReelNano = 450;
      }
      if (this.selectedCountry == 'Peru') {
        this.valorStoryMicro = 30;
        this.valorReelMicro = 50;
        this.valorStoryNano = 20;
        this.valorReelNano = 35;

        this.reachStoryMicro = 400;
        this.reachReelMicro = 650;
        this.reachStoryNano = 250;
        this.reachReelNano = 450;
      }
      if (this.selectedCountry == 'Uruguay') {
        this.valorStoryMicro = 30;
        this.valorReelMicro = 50;
        this.valorStoryNano = 20;
        this.valorReelNano = 35;

        this.reachStoryMicro = 400;
        this.reachReelMicro = 650;
        this.reachStoryNano = 250;
        this.reachReelNano = 450;
      }
      if (this.selectedCountry == 'Venezuela') {
        this.valorStoryMicro = 30;
        this.valorReelMicro = 50;
        this.valorStoryNano = 20;
        this.valorReelNano = 35;

        this.reachStoryMicro = 400;
        this.reachReelMicro = 650;
        this.reachStoryNano = 250;
        this.reachReelNano = 450;
      }

      this.ValorTotalPaqueteUno =
        this.valorStoryMicro *
          (this.newSaleInstagramUno.number_micro *
            this.newSaleInstagramUno.number_stories_micro) +
        this.valorReelMicro *
          (this.newSaleInstagramUno.number_micro *
            this.newSaleInstagramUno.number_reels_micro) +
        this.valorStoryNano *
          (this.newSaleInstagramUno.number_nano *
            this.newSaleInstagramUno.number_stories_nano) +
        this.valorReelNano *
          (this.newSaleInstagramUno.number_nano *
            this.newSaleInstagramUno.number_reels_nano);

      this.ValorTotalPaqueteTres =
        this.valorReelMicro *
          (this.newSaleTikTokUno.number_micro *
            this.newSaleTikTokUno.number_tiktok_micro) +
        this.valorReelNano *
          (this.newSaleTikTokUno.number_nano *
            this.newSaleTikTokUno.number_tiktok_nano);

      this.ValorTotalPaqueteDos =
        this.valorStoryMicro *
          (this.newSaleInstagramDos.number_micro *
            this.newSaleInstagramDos.number_stories_micro) +
        this.valorReelMicro *
          (this.newSaleInstagramDos.number_micro *
            this.newSaleInstagramDos.number_reels_micro) +
        this.valorStoryNano *
          (this.newSaleInstagramDos.number_nano *
            this.newSaleInstagramDos.number_stories_nano) +
        this.valorReelNano *
          (this.newSaleInstagramDos.number_nano *
            this.newSaleInstagramDos.number_reels_nano);

      this.ValorTotalPaqueteCuatro =
        this.valorReelMicro *
          (this.newSaleTikTokDos.number_micro *
            this.newSaleTikTokDos.number_tiktok_micro) +
        this.valorReelNano *
          (this.newSaleTikTokDos.number_nano *
            this.newSaleTikTokDos.number_tiktok_nano);

      this.ReachTotalPaqueteUno =
        this.reachStoryMicro *
          (this.newSaleInstagramUno.number_micro *
            this.newSaleInstagramUno.number_stories_micro) +
        this.reachReelMicro *
          (this.newSaleInstagramUno.number_micro *
            this.newSaleInstagramUno.number_reels_micro) +
        this.reachStoryNano *
          (this.newSaleInstagramUno.number_nano *
            this.newSaleInstagramUno.number_stories_nano) +
        this.reachReelNano *
          (this.newSaleInstagramUno.number_nano *
            this.newSaleInstagramUno.number_reels_nano);

      this.ReachTotalPaqueteTres =
        this.reachReelMicro *
          (this.newSaleTikTokUno.number_micro *
            this.newSaleTikTokUno.number_tiktok_micro) +
        this.reachReelNano *
          (this.newSaleTikTokUno.number_nano *
            this.newSaleTikTokUno.number_tiktok_nano);

      this.ReachTotalPaqueteDos =
        this.reachStoryMicro *
          (this.newSaleInstagramDos.number_micro *
            this.newSaleInstagramDos.number_stories_micro) +
        this.reachReelMicro *
          (this.newSaleInstagramDos.number_micro *
            this.newSaleInstagramDos.number_reels_micro) +
        this.reachStoryNano *
          (this.newSaleInstagramDos.number_nano *
            this.newSaleInstagramDos.number_stories_nano) +
        this.reachReelNano *
          (this.newSaleInstagramDos.number_nano *
            this.newSaleInstagramDos.number_reels_nano);

      this.ReachTotalPaqueteCuatro =
        this.reachReelMicro *
          (this.newSaleTikTokDos.number_micro *
            this.newSaleTikTokDos.number_tiktok_micro) +
        this.reachReelNano *
          (this.newSaleTikTokDos.number_nano *
            this.newSaleTikTokDos.number_tiktok_nano);

      this.totalContentIgOne =
        this.newSaleInstagramUno.number_micro *
          (this.newSaleInstagramUno.number_reels_micro +
            this.newSaleInstagramUno.number_stories_micro) +
        this.newSaleInstagramUno.number_nano *
          (this.newSaleInstagramUno.number_reels_nano +
            this.newSaleInstagramUno.number_stories_nano);
      this.totalContentIgTwo =
        this.newSaleInstagramDos.number_micro *
          (this.newSaleInstagramDos.number_reels_micro +
            this.newSaleInstagramDos.number_stories_micro) +
        this.newSaleInstagramDos.number_nano *
          (this.newSaleInstagramDos.number_reels_nano +
            this.newSaleInstagramDos.number_stories_nano);
      this.totalContentTiktTokOne =
        this.newSaleTikTokUno.number_micro *
          this.newSaleTikTokUno.number_tiktok_micro +
        this.newSaleTikTokUno.number_nano *
          this.newSaleTikTokUno.number_tiktok_nano;
      this.totalContentTiktTokTwo =
        this.newSaleTikTokDos.number_micro *
          this.newSaleTikTokDos.number_tiktok_micro +
        this.newSaleTikTokDos.number_nano *
          this.newSaleTikTokDos.number_tiktok_nano;
    }, 100);
  }

  // Mostrar paquetes
  showInstagramPackage: boolean;
  showTikTokPackage: boolean;
  @ViewChild('carrousel') carrousel!: ElementRef;

  InstagramSelect(show: boolean) {
    this.showInstagramPackage = show;
    if (this.carrousel) {
      // Hacer scroll al objeto específico
      setTimeout(() => {
        this.carrousel.nativeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    }
  }

  TikTokSelect(show: boolean) {
    this.showTikTokPackage = show;
    if (this.carrousel) {
      // Hacer scroll al objeto específico
      setTimeout(() => {
        this.carrousel.nativeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    }
  }
  color: ThemePalette = 'primary';

  // Sumar y restar datos

  sumShort(variable: string) {
    this.changeValor();
    switch (variable) {
      case 'newSaleInstagramUno.number_micro':
        this.newSaleInstagramUno.number_micro += 5;
        break;

      case 'newSaleInstagramUno.number_stories_micro':
        this.newSaleInstagramUno.number_stories_micro += 1;
        break;

      case 'newSaleInstagramUno.number_reels_micro':
        this.newSaleInstagramUno.number_reels_micro += 1;
        break;

      case 'newSaleInstagramUno.number_nano':
        this.newSaleInstagramUno.number_nano += 5;
        break;

      case 'newSaleInstagramUno.number_stories_nano':
        this.newSaleInstagramUno.number_stories_nano += 1;
        break;

      case 'newSaleInstagramUno.number_reels_nano':
        this.newSaleInstagramUno.number_reels_nano += 1;
        break;

      // Paquete 2 Instagram

      case 'newSaleInstagramDos.number_micro':
        this.newSaleInstagramDos.number_micro += 5;
        break;

      case 'newSaleInstagramDos.number_stories_micro':
        this.newSaleInstagramDos.number_stories_micro += 1;
        break;

      case 'newSaleInstagramDos.number_reels_micro':
        this.newSaleInstagramDos.number_reels_micro += 1;
        break;

      case 'newSaleInstagramDos.number_nano':
        this.newSaleInstagramDos.number_nano += 5;
        break;

      case 'newSaleInstagramDos.number_stories_nano':
        this.newSaleInstagramDos.number_stories_nano += 1;
        break;

      case 'newSaleInstagramDos.number_reels_nano':
        this.newSaleInstagramDos.number_reels_nano += 1;
        break;

      // Paquete Uno TikTok

      case 'newSaleTikTokUno.number_micro':
        this.newSaleTikTokUno.number_micro += 5;
        break;

      case 'newSaleTikTokUno.number_tiktok_micro':
        this.newSaleTikTokUno.number_tiktok_micro += 1;
        break;

      case 'newSaleTikTokUno.number_nano':
        this.newSaleTikTokUno.number_nano += 5;
        break;

      case 'newSaleTikTokUno.number_tiktok_nano':
        this.newSaleTikTokUno.number_tiktok_nano += 1;
        break;

      // Paquete Dos TikTok

      case 'newSaleTikTokDos.number_micro':
        this.newSaleTikTokDos.number_micro += 5;
        break;

      case 'newSaleTikTokDos.number_tiktok_micro':
        this.newSaleTikTokDos.number_tiktok_micro += 1;
        break;

      case 'newSaleTikTokDos.number_nano':
        this.newSaleTikTokDos.number_nano += 5;
        break;

      case 'newSaleTikTokDos.number_tiktok_nano':
        this.newSaleTikTokDos.number_tiktok_nano += 1;
        break;

      case 'numeroContentIgOne':
        this.numeroContentIgOne += 1;
        break;

      case 'numeroContentIgTwo':
        this.numeroContentIgTwo += 1;
        break;

      case 'numeroContentTiktTokOne':
        this.numeroContentTiktTokOne += 1;
        break;

      case 'numeroContentTiktTokTwo':
        this.numeroContentTiktTokTwo += 1;
        break;
    }
  }

  restShort(variable: string) {
    this.changeValor();
    switch (variable) {
      case 'newSaleInstagramUno.number_micro':
        if (this.newSaleInstagramUno.number_micro > 15) {
          this.newSaleInstagramUno.number_micro -= 5;
        }
        break;

      case 'newSaleInstagramUno.number_stories_micro':
        if (this.newSaleInstagramUno.number_stories_micro > 0) {
          this.newSaleInstagramUno.number_stories_micro -= 1;
        }
        break;

      case 'newSaleInstagramUno.number_reels_micro':
        if (this.newSaleInstagramUno.number_reels_micro > 0) {
          this.newSaleInstagramUno.number_reels_micro -= 1;
        }
        break;

      case 'newSaleInstagramUno.number_nano':
        if (this.newSaleInstagramUno.number_nano > 30) {
          this.newSaleInstagramUno.number_nano -= 5;
        }
        break;

      case 'newSaleInstagramUno.number_stories_nano':
        if (this.newSaleInstagramUno.number_stories_nano > 0) {
          this.newSaleInstagramUno.number_stories_nano -= 1;
        }
        break;

      case 'newSaleInstagramUno.number_reels_nano':
        if (this.newSaleInstagramUno.number_reels_nano > 0) {
          this.newSaleInstagramUno.number_reels_nano -= 1;
        }
        break;

      // Paquete 2 Instagram

      case 'newSaleInstagramDos.number_micro':
        if (this.newSaleInstagramDos.number_micro > 90) {
          this.newSaleInstagramDos.number_micro -= 5;
        }
        break;

      case 'newSaleInstagramDos.number_stories_micro':
        if (this.newSaleInstagramDos.number_stories_micro > 0) {
          this.newSaleInstagramDos.number_stories_micro -= 1;
        }
        break;

      case 'newSaleInstagramDos.number_reels_micro':
        if (this.newSaleInstagramDos.number_reels_micro > 0) {
          this.newSaleInstagramDos.number_reels_micro -= 1;
        }
        break;

      case 'newSaleInstagramDos.number_nano':
        if (this.newSaleInstagramDos.number_nano > 45) {
          this.newSaleInstagramDos.number_nano -= 5;
        }
        break;

      case 'newSaleInstagramDos.number_stories_nano':
        if (this.newSaleInstagramDos.number_stories_nano > 0) {
          this.newSaleInstagramDos.number_stories_nano -= 1;
        }
        break;

      case 'newSaleInstagramDos.number_reels_nano':
        if (this.newSaleInstagramDos.number_reels_nano > 0) {
          this.newSaleInstagramDos.number_reels_nano -= 1;
        }
        break;

      // Paquete Uno TikTok

      case 'newSaleTikTokUno.number_micro':
        if (this.newSaleTikTokUno.number_micro > 20) {
          this.newSaleTikTokUno.number_micro -= 5;
        }
        break;

      case 'newSaleTikTokUno.number_tiktok_micro':
        if (this.newSaleTikTokUno.number_tiktok_micro > 0) {
          this.newSaleTikTokUno.number_tiktok_micro -= 1;
        }
        break;

      case 'newSaleTikTokUno.number_nano':
        if (this.newSaleTikTokUno.number_nano > 40) {
          this.newSaleTikTokUno.number_nano -= 5;
        }
        break;

      case 'newSaleTikTokUno.number_tiktok_nano':
        if (this.newSaleTikTokUno.number_tiktok_nano > 0) {
          this.newSaleTikTokUno.number_tiktok_nano -= 1;
        }
        break;

      // Paquete Dos TikTok

      case 'newSaleTikTokDos.number_micro':
        if (this.newSaleTikTokDos.number_micro > 30) {
          this.newSaleTikTokDos.number_micro -= 5;
        }
        break;

      case 'newSaleTikTokDos.number_tiktok_micro':
        if (this.newSaleTikTokDos.number_tiktok_micro > 3) {
          this.newSaleTikTokDos.number_tiktok_micro -= 1;
        }
        break;

      case 'newSaleTikTokDos.number_nano':
        if (this.newSaleTikTokDos.number_nano > 40) {
          this.newSaleTikTokDos.number_nano -= 5;
        }
        break;

      case 'newSaleTikTokDos.number_tiktok_nano':
        if (this.newSaleTikTokDos.number_tiktok_nano > 3) {
          this.newSaleTikTokDos.number_tiktok_nano -= 1;
        }
        break;

      case 'numeroContentIgOne':
        if (this.numeroContentIgOne > 0) {
          this.numeroContentIgOne -= 1;
        }
        break;

      case 'numeroContentIgTwo':
        if (this.numeroContentIgTwo > 0) {
          this.numeroContentIgTwo -= 1;
        }
        break;

      case 'numeroContentTiktTokOne':
        if (this.numeroContentTiktTokOne > 0) {
          this.numeroContentTiktTokOne -= 1;
        }
        break;

      case 'numeroContentTiktTokTwo':
        if (this.numeroContentTiktTokTwo > 0) {
          this.numeroContentTiktTokTwo -= 1;
        }
        break;
    }
  }

  // Calculo totales

  totalContentIgOne: number = 0;
  totalContentIgTwo: number = 0;
  totalContentTiktTokOne: number = 0;
  totalContentTiktTokTwo: number = 0;
  numeroContentIgOne: number = 0;
  numeroContentIgTwo: number = 0;
  numeroContentTiktTokOne: number = 0;
  numeroContentTiktTokTwo: number = 0;

  // Mostrar ciudades

  verificarArgentina: boolean = false;
  verificarBolivia: boolean = false;
  verificarBrasil: boolean = false;
  verificarChile: boolean = false;
  verificarColombia: boolean = false;
  verificarEcuador: boolean = false;
  verificarParaguay: boolean = false;
  verificarPeru: boolean = false;
  verificarUruguay: boolean = false;
  verificarVenezuela: boolean = false;

  showCities() {
    if (this.selectedCountry.includes('Argentina')) {
      this.verificarArgentina = true;
      console.log(this.selectedCountry);
    } else {
      this.verificarArgentina = false;
    }
    if (this.selectedCountry.includes('Bolivia')) {
      this.verificarBolivia = true;
      console.log(this.selectedCountry);
    } else {
      this.verificarBolivia = false;
    }
    if (this.selectedCountry.includes('Brasil')) {
      this.verificarBrasil = true;
      console.log(this.selectedCountry);
    } else {
      this.verificarBrasil = false;
    }
    if (this.selectedCountry.includes('Chile')) {
      this.verificarChile = true;
      console.log(this.selectedCountry);
    } else {
      this.verificarChile = false;
    }
    if (this.selectedCountry.includes('Colombia')) {
      this.verificarColombia = true;
      console.log(this.selectedCountry);
    } else {
      this.verificarColombia = false;
    }
    if (this.selectedCountry.includes('Ecuador')) {
      this.verificarEcuador = true;
      console.log(this.selectedCountry);
    } else {
      this.verificarEcuador = false;
    }
    if (this.selectedCountry.includes('Paraguay')) {
      this.verificarParaguay = true;
      console.log(this.selectedCountry);
    } else {
      this.verificarParaguay = false;
    }
    if (this.selectedCountry.includes('Peru')) {
      this.verificarPeru = true;
      console.log(this.selectedCountry);
    } else {
      this.verificarPeru = false;
    }
    if (this.selectedCountry.includes('Uruguay')) {
      this.verificarUruguay = true;
      console.log(this.selectedCountry);
    } else {
      this.verificarUruguay = false;
    }
    if (this.selectedCountry.includes('Venezuela')) {
      this.verificarVenezuela = true;
      console.log(this.selectedCountry);
    }
  }

  getCities() {
    this.citiesService.seeCitiesArgentina().subscribe(
      (cities: { name: string; code: string }[]) => {
        this.citiesListArgentina = cities;
      },
      (error) => {
        console.error('Error al obtener las ciudades:', error);
      }
    );

    this.citiesService.seeCitiesBolivia().subscribe(
      (cities: { name: string; code: string }[]) => {
        this.citiesListBolivia = cities;
        console.log(this.citiesListBrasil);
      },
      (error) => {
        console.error('Error al obtener las ciudades:', error);
      }
    );

    this.citiesService.seeCitiesBrazil().subscribe(
      (cities: { name: string; code: string }[]) => {
        this.citiesListBrasil = cities;
      },
      (error) => {
        console.error('Error al obtener las ciudades:', error);
      }
    );

    this.citiesService.seeCitiesChile().subscribe(
      (cities: { name: string; code: string }[]) => {
        this.citiesListChile = cities;
      },
      (error) => {
        console.error('Error al obtener las ciudades:', error);
      }
    );

    this.citiesService.seeCitiesColombia().subscribe(
      (cities: { name: string; code: string }[]) => {
        this.citiesListColombia = cities;
      },
      (error) => {
        console.error('Error al obtener las ciudades:', error);
      }
    );

    this.citiesService.seeCitiesEcuador().subscribe(
      (cities: { name: string; code: string }[]) => {
        this.citiesListEcuador = cities;
      },
      (error) => {
        console.error('Error al obtener las ciudades:', error);
      }
    );

    this.citiesService.seeCitiesParaguay().subscribe(
      (cities: { name: string; code: string }[]) => {
        this.citiesListParaguay = cities;
      },
      (error) => {
        console.error('Error al obtener las ciudades:', error);
      }
    );

    this.citiesService.seeCitiesPeru().subscribe(
      (cities: { name: string; code: string }[]) => {
        this.citiesListPeru = cities;
      },
      (error) => {
        console.error('Error al obtener las ciudades:', error);
      }
    );

    this.citiesService.seeCitiesUruguay().subscribe(
      (cities: { name: string; code: string }[]) => {
        this.citiesListUruguay = cities;
      },
      (error) => {
        console.error('Error al obtener las ciudades:', error);
      }
    );

    this.citiesService.seeCitiesVenezuela().subscribe(
      (cities: { name: string; code: string }[]) => {
        this.citiesListVenezuela = cities;
      },
      (error) => {
        console.error('Error al obtener las ciudades:', error);
      }
    );
  }
}
