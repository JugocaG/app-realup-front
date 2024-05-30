import { Component, ViewChild, ElementRef } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NgModel,
  Validators,
  FormArray,
} from '@angular/forms';
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

  countries: string[] = [
    'Argentina',
    'Bolivia',
    'Brasil',
    'Canada',
    'Chile',
    'Colombia',
    'Costa Rica',
    'Cuba',
    'Dominican Republic',
    'Ecuador',
    'El Salvador',
    'Guatemala',
    'Honduras',
    'Mexico',
    'Nicaragua',
    'Panama',
    'Paraguay',
    'Peru',
    'Puerto Rico',
    'United States',
    'Uruguay',
    'Venezuela',
  ];

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

  citiesListCostaRica: { name: string; code: string }[] = [];

  citiesListCuba: { name: string; code: string }[] = [];

  citiesListElSalvador: { name: string; code: string }[] = [];

  citiesListGuatemala: { name: string; code: string }[] = [];

  citiesListHonduras: { name: string; code: string }[] = [];

  citiesListMexico: { name: string; code: string }[] = [];

  citiesListNicaragua: { name: string; code: string }[] = [];

  citiesListPanama: { name: string; code: string }[] = [];

  citiesListPuertoRico: { name: string; code: string }[] = [];

  citiesListDominicanRepublic: { name: string; code: string }[] = [];

  citiesListUnitedStates: { name: string; code: string }[] = [];

  citiesListCanada: { name: string; code: string }[] = [];

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
  brief_campaign_objective = new FormControl('', Validators.required);
  countryFinal: string = 'Nada';
  saveClientForm: FormGroup;

  constructor(
    private service: AuthService,
    private crowdpostingService: CrowdpostingService,
    private router: Router,
    private citiesService: CitiesService
  ) {
    (this.showInstagramPackage = false), (this.showTikTokPackage = false);
    this.saveClientForm = new FormGroup({
      name_client: this.name_client,
      country: this.country,
      cities: this.cities,
      price: this.price,
      campaign_objective: this.campaign_objective,
      brief_campaign_objective: this.brief_campaign_objective,
    });
  }

  ngOnInit() {
    this.service.verificarToken();
    this.getCities();
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
      });

    console.log(this.salesListTikTokUno);
    this.crowdpostingService
      .savePackageCrowdpostingTikTok(this.salesListTikTokUno)
      .subscribe(() => {
        console.log();
        alert('¡La compra se envio con exito!');
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

  //Personalizados
  ValorTotalPaqueteUnoNormal: number = 0;
  ValorTotalPaqueteDosNormal: number = 0;
  ValorTotalPaqueteTresNormal: number = 0;

  ReachTotalPaqueteUnoNormal: number = 0;
  ReachTotalPaqueteDosNormal: number = 0;
  ReachTotalPaqueteTresNormal: number = 0;

  changeValor() {
    setTimeout(() => {
      if (
        this.selectedCountry == 'Argentina' ||
        this.selectedCountry == 'Bolivia' ||
        this.selectedCountry == 'Brasil' ||
        this.selectedCountry == 'Chile' ||
        this.selectedCountry == 'Paraguay' ||
        this.selectedCountry == 'Peru' ||
        this.selectedCountry == 'Uruguay' ||
        this.selectedCountry == 'Venezuela' ||
        this.selectedCountry == 'Guatemala' ||
        this.selectedCountry == 'Honduras' ||
        this.selectedCountry == 'Mexico' ||
        this.selectedCountry == 'Nicaragua'
      ) {
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
      if (
        this.selectedCountry == 'Ecuador' ||
        this.selectedCountry == 'Costa Rica' ||
        this.selectedCountry == 'Cuba' ||
        this.selectedCountry == 'El Salvador' ||
        this.selectedCountry == 'Panama' ||
        this.selectedCountry == 'Puerto Rico' ||
        this.selectedCountry == 'Dominican Republic' ||
        this.selectedCountry == 'Canada'
      ) {
        this.valorStoryMicro = 45;
        this.valorReelMicro = 70;
        this.valorStoryNano = 28;
        this.valorReelNano = 48;

        this.reachStoryMicro = 400;
        this.reachReelMicro = 650;
        this.reachStoryNano = 250;
        this.reachReelNano = 450;
      }

      if (this.selectedCountry == 'United States') {
        this.valorStoryMicro = 60;
        this.valorReelMicro = 90;
        this.valorStoryNano = 30;
        this.valorReelNano = 50;

        this.reachStoryMicro = 400;
        this.reachReelMicro = 650;
        this.reachStoryNano = 250;
        this.reachReelNano = 450;
      }

      //Preselectos

      this.ValorTotalPaqueteUnoNormal =
        this.valorStoryMicro * (15 * 3) +
        this.valorReelMicro * (15 * 1) +
        this.valorStoryNano * (30 * 3) +
        this.valorReelNano * (30 * 1);

      this.ValorTotalPaqueteDosNormal =
        this.valorReelMicro * (15 * 1) + this.valorReelNano * (30 * 1);

      this.ValorTotalPaqueteTresNormal =
        this.valorStoryMicro * (15 * 3) +
        this.valorReelMicro * (15 * 1) +
        this.valorStoryNano * (30 * 3) +
        this.valorReelNano * (30 * 1);

      //Reach

      this.ReachTotalPaqueteUnoNormal =
        this.reachStoryMicro * (15 * 3) +
        this.reachReelMicro * (15 * 1) +
        this.reachStoryNano * (30 * 3) +
        this.reachReelNano * (30 * 1);

      this.ReachTotalPaqueteDosNormal =
        this.reachReelMicro * (15 * 1) + this.reachReelNano * (30 * 1);

      this.ReachTotalPaqueteTresNormal =
        this.reachStoryMicro * (15 * 3) +
        this.reachReelMicro * (15 * 1) +
        this.reachStoryNano * (30 * 3) +
        this.reachReelNano * (30 * 1);

      //Personalizados

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
      this.totalContentTikTokOne =
        this.newSaleTikTokUno.number_micro *
          this.newSaleTikTokUno.number_tiktok_micro +
        this.newSaleTikTokUno.number_nano *
          this.newSaleTikTokUno.number_tiktok_nano;
      this.totalContentTikTokTwo =
        this.newSaleTikTokDos.number_micro *
          this.newSaleTikTokDos.number_tiktok_micro +
        this.newSaleTikTokDos.number_nano *
          this.newSaleTikTokDos.number_tiktok_nano;

      // Paquetes personalizados
      this.totalContenidos =
        this.numeroContentIgOne * 180 +
        this.numeroContentTikTokOne * 45 +
        this.numeroContentTikTokTwo * 180 +
        this.totalContentIgOne * this.numeroContentIgPersonal +
        this.totalContentTikTokOne * this.numeroContentTikTokPersonal;
    }, 100);
  }

  ValorPromedioContenidos: number = 0;
  totalContenidos: number = 0;
  citiesSelected = [];
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
        this.newSaleInstagramUno.number_micro += 1;
        break;

      case 'newSaleInstagramUno.number_stories_micro':
        this.newSaleInstagramUno.number_stories_micro += 1;
        break;

      case 'newSaleInstagramUno.number_reels_micro':
        this.newSaleInstagramUno.number_reels_micro += 1;
        break;

      case 'newSaleInstagramUno.number_nano':
        this.newSaleInstagramUno.number_nano += 1;
        break;

      case 'newSaleInstagramUno.number_stories_nano':
        this.newSaleInstagramUno.number_stories_nano += 1;
        break;

      case 'newSaleInstagramUno.number_reels_nano':
        this.newSaleInstagramUno.number_reels_nano += 1;
        break;

      // Paquete 2 Instagram

      case 'newSaleInstagramDos.number_micro':
        this.newSaleInstagramDos.number_micro += 1;
        break;

      case 'newSaleInstagramDos.number_stories_micro':
        this.newSaleInstagramDos.number_stories_micro += 1;
        break;

      case 'newSaleInstagramDos.number_reels_micro':
        this.newSaleInstagramDos.number_reels_micro += 1;
        break;

      case 'newSaleInstagramDos.number_nano':
        this.newSaleInstagramDos.number_nano += 1;
        break;

      case 'newSaleInstagramDos.number_stories_nano':
        this.newSaleInstagramDos.number_stories_nano += 1;
        break;

      case 'newSaleInstagramDos.number_reels_nano':
        this.newSaleInstagramDos.number_reels_nano += 1;
        break;

      // Paquete Uno TikTok

      case 'newSaleTikTokUno.number_micro':
        this.newSaleTikTokUno.number_micro += 1;
        break;

      case 'newSaleTikTokUno.number_tiktok_micro':
        this.newSaleTikTokUno.number_tiktok_micro += 1;
        break;

      case 'newSaleTikTokUno.number_nano':
        this.newSaleTikTokUno.number_nano += 1;
        break;

      case 'newSaleTikTokUno.number_tiktok_nano':
        this.newSaleTikTokUno.number_tiktok_nano += 1;
        break;

      // Paquete Dos TikTok

      case 'newSaleTikTokDos.number_micro':
        this.newSaleTikTokDos.number_micro += 1;
        break;

      case 'newSaleTikTokDos.number_tiktok_micro':
        this.newSaleTikTokDos.number_tiktok_micro += 1;
        break;

      case 'newSaleTikTokDos.number_nano':
        this.newSaleTikTokDos.number_nano += 1;
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

      case 'numeroContentTikTokOne':
        this.numeroContentTikTokOne += 1;
        break;

      case 'numeroContentTikTokTwo':
        this.numeroContentTikTokTwo += 1;
        break;

      case 'numeroContentIgPersonal':
        this.numeroContentIgPersonal += 1;
        break;

      case 'numeroContentTikTokPersonal':
        this.numeroContentTikTokPersonal += 1;
        break;
    }
  }

  restShort(variable: string) {
    this.changeValor();
    switch (variable) {
      case 'newSaleInstagramUno.number_micro':
        if (this.newSaleInstagramUno.number_micro > 0) {
          this.newSaleInstagramUno.number_micro -= 1;
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
        if (this.newSaleInstagramUno.number_nano > 0) {
          this.newSaleInstagramUno.number_nano -= 1;
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
        if (this.newSaleInstagramDos.number_micro > 0) {
          this.newSaleInstagramDos.number_micro -= 1;
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
        if (this.newSaleInstagramDos.number_nano > 0) {
          this.newSaleInstagramDos.number_nano -= 1;
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
        if (this.newSaleTikTokUno.number_micro > 0) {
          this.newSaleTikTokUno.number_micro -= 1;
        }
        break;

      case 'newSaleTikTokUno.number_tiktok_micro':
        if (this.newSaleTikTokUno.number_tiktok_micro > 0) {
          this.newSaleTikTokUno.number_tiktok_micro -= 1;
        }
        break;

      case 'newSaleTikTokUno.number_nano':
        if (this.newSaleTikTokUno.number_nano > 0) {
          this.newSaleTikTokUno.number_nano -= 1;
        }
        break;

      case 'newSaleTikTokUno.number_tiktok_nano':
        if (this.newSaleTikTokUno.number_tiktok_nano > 0) {
          this.newSaleTikTokUno.number_tiktok_nano -= 1;
        }
        break;

      // Paquete Dos TikTok

      case 'newSaleTikTokDos.number_micro':
        if (this.newSaleTikTokDos.number_micro > 0) {
          this.newSaleTikTokDos.number_micro -= 1;
        }
        break;

      case 'newSaleTikTokDos.number_tiktok_micro':
        if (this.newSaleTikTokDos.number_tiktok_micro > 0) {
          this.newSaleTikTokDos.number_tiktok_micro -= 1;
        }
        break;

      case 'newSaleTikTokDos.number_nano':
        if (this.newSaleTikTokDos.number_nano > 0) {
          this.newSaleTikTokDos.number_nano -= 1;
        }
        break;

      case 'newSaleTikTokDos.number_tiktok_nano':
        if (this.newSaleTikTokDos.number_tiktok_nano > 0) {
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

      case 'numeroContentTikTokOne':
        if (this.numeroContentTikTokOne > 0) {
          this.numeroContentTikTokOne -= 1;
        }
        break;

      case 'numeroContentTikTokTwo':
        if (this.numeroContentTikTokTwo > 0) {
          this.numeroContentTikTokTwo -= 1;
        }
        break;

      case 'numeroContentIgPersonal':
        if (this.numeroContentIgPersonal > 0) {
          this.numeroContentIgPersonal -= 1;
        }
        break;

      case 'numeroContentTikTokPersonal':
        if (this.numeroContentTikTokPersonal > 0) {
          this.numeroContentTikTokPersonal -= 1;
        }
        break;
    }
  }

  // Calculo totales
  numeroContentIgPersonal: number = 0;
  numeroContentTikTokPersonal: number = 0;
  totalContentIgOne: number = 0;
  totalContentIgTwo: number = 0;
  totalContentTikTokOne: number = 0;
  totalContentTikTokTwo: number = 0;
  numeroContentIgOne: number = 0;
  numeroContentIgTwo: number = 0;
  numeroContentTikTokOne: number = 0;
  numeroContentTikTokTwo: number = 0;

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
  verificarCostaRica: boolean = false;
  verificarCuba: boolean = false;
  verificarElSalvador: boolean = false;
  verificarGuatemala: boolean = false;
  verificarHonduras: boolean = false;
  verificarMexico: boolean = false;
  verificarNicaragua: boolean = false;
  verificarPanama: boolean = false;
  verificarPuertoRico: boolean = false;
  verificarDominicanRepublic: boolean = false;
  verificarUnitedStates: boolean = false;
  verificarCanada: boolean = false;

  showCities() {
    this.verificarArgentina = false;
    this.verificarBolivia = false;
    this.verificarBrasil = false;
    this.verificarChile = false;
    this.verificarColombia = false;
    this.verificarEcuador = false;
    this.verificarParaguay = false;
    this.verificarPeru = false;
    this.verificarUruguay = false;
    this.verificarVenezuela = false;
    this.verificarCostaRica = false;
    this.verificarCuba = false;
    this.verificarElSalvador = false;
    this.verificarGuatemala = false;
    this.verificarHonduras = false;
    this.verificarMexico = false;
    this.verificarNicaragua = false;
    this.verificarPanama = false;
    this.verificarPuertoRico = false;
    this.verificarDominicanRepublic = false;
    this.verificarUnitedStates = false;
    this.verificarCanada = false;
    if (this.selectedCountry.includes('Argentina')) {
      this.verificarArgentina = true;
    } else {
      this.verificarArgentina = false;
    }
    if (this.selectedCountry.includes('Bolivia')) {
      this.verificarBolivia = true;
    } else {
      this.verificarBolivia = false;
    }
    if (this.selectedCountry.includes('Brasil')) {
      this.verificarBrasil = true;
    } else {
      this.verificarBrasil = false;
    }
    if (this.selectedCountry.includes('Chile')) {
      this.verificarChile = true;
    } else {
      this.verificarChile = false;
    }
    if (this.selectedCountry.includes('Colombia')) {
      this.verificarColombia = true;
    } else {
      this.verificarColombia = false;
    }
    if (this.selectedCountry.includes('Ecuador')) {
      this.verificarEcuador = true;
    } else {
      this.verificarEcuador = false;
    }
    if (this.selectedCountry.includes('Paraguay')) {
      this.verificarParaguay = true;
    } else {
      this.verificarParaguay = false;
    }
    if (this.selectedCountry.includes('Peru')) {
      this.verificarPeru = true;
    } else {
      this.verificarPeru = false;
    }
    if (this.selectedCountry.includes('Uruguay')) {
      this.verificarUruguay = true;
    } else {
      this.verificarUruguay = false;
    }
    if (this.selectedCountry.includes('Venezuela')) {
      this.verificarVenezuela = true;
    }
    if (this.selectedCountry.includes('Costa Rica')) {
      this.verificarCostaRica = true;
    }
    if (this.selectedCountry.includes('Cuba')) {
      this.verificarCuba = true;
    }
    if (this.selectedCountry.includes('El Salvador')) {
      this.verificarElSalvador = true;
    }
    if (this.selectedCountry.includes('Guatemala')) {
      this.verificarGuatemala = true;
    }
    if (this.selectedCountry.includes('Honduras')) {
      this.verificarHonduras = true;
    }
    if (this.selectedCountry.includes('Mexico')) {
      this.verificarMexico = true;
    }
    if (this.selectedCountry.includes('Nicaragua')) {
      this.verificarNicaragua = true;
    }
    if (this.selectedCountry.includes('Panama')) {
      this.verificarPanama = true;
    }
    if (this.selectedCountry.includes('Puerto Rico')) {
      this.verificarPuertoRico = true;
    }
    if (this.selectedCountry.includes('Dominican Republic')) {
      this.verificarDominicanRepublic = true;
    }
    if (this.selectedCountry.includes('United States')) {
      this.verificarUnitedStates = true;
    }
    if (this.selectedCountry.includes('Canada')) {
      this.verificarCanada = true;
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

    this.citiesService.seeCitiesCostaRica().subscribe(
      (cities: { name: string; code: string }[]) => {
        this.citiesListCostaRica = cities;
      },
      (error) => {
        console.error('Error al obtener las ciudades:', error);
      }
    );

    this.citiesService.seeCitiesCuba().subscribe(
      (cities: { name: string; code: string }[]) => {
        this.citiesListCuba = cities;
      },
      (error) => {
        console.error('Error al obtener las ciudades:', error);
      }
    );

    this.citiesService.seeCitiesElSalvador().subscribe(
      (cities: { name: string; code: string }[]) => {
        this.citiesListElSalvador = cities;
      },
      (error) => {
        console.error('Error al obtener las ciudades:', error);
      }
    );

    this.citiesService.seeCitiesGuatemala().subscribe(
      (cities: { name: string; code: string }[]) => {
        this.citiesListGuatemala = cities;
      },
      (error) => {
        console.error('Error al obtener las ciudades:', error);
      }
    );

    this.citiesService.seeCitiesHonduras().subscribe(
      (cities: { name: string; code: string }[]) => {
        this.citiesListHonduras = cities;
      },
      (error) => {
        console.error('Error al obtener las ciudades:', error);
      }
    );

    this.citiesService.seeCitiesMexico().subscribe(
      (cities: { name: string; code: string }[]) => {
        this.citiesListMexico = cities;
      },
      (error) => {
        console.error('Error al obtener las ciudades:', error);
      }
    );

    this.citiesService.seeCitiesNicaragua().subscribe(
      (cities: { name: string; code: string }[]) => {
        this.citiesListNicaragua = cities;
      },
      (error) => {
        console.error('Error al obtener las ciudades:', error);
      }
    );

    this.citiesService.seeCitiesPanama().subscribe(
      (cities: { name: string; code: string }[]) => {
        this.citiesListPanama = cities;
      },
      (error) => {
        console.error('Error al obtener las ciudades:', error);
      }
    );

    this.citiesService.seeCitiesPuertoRico().subscribe(
      (cities: { name: string; code: string }[]) => {
        this.citiesListPuertoRico = cities;
      },
      (error) => {
        console.error('Error al obtener las ciudades:', error);
      }
    );

    this.citiesService.seeCitiesDominicanRepublic().subscribe(
      (cities: { name: string; code: string }[]) => {
        this.citiesListDominicanRepublic = cities;
      },
      (error) => {
        console.error('Error al obtener las ciudades:', error);
      }
    );

    this.citiesService.seeCitiesUnitedStates().subscribe(
      (cities: { name: string; code: string }[]) => {
        this.citiesListUnitedStates = cities;
      },
      (error) => {
        console.error('Error al obtener las ciudades:', error);
      }
    );

    this.citiesService.seeCitiesCanada().subscribe(
      (cities: { name: string; code: string }[]) => {
        this.citiesListCanada = cities;
      },
      (error) => {
        console.error('Error al obtener las ciudades:', error);
      }
    );
  }

  // Check Platform

  checkPlatform: boolean = false;

  changePlatform() {
    this.checkPlatform = !this.checkPlatform;
  }

  // Campaing Objetives

  options = [
    { id: 'awareness', label: 'Awareness', value: 0 },
    { id: 'consideration', label: 'Consideration', value: 1 },
    { id: 'conversion', label: 'Conversion', value: 2 },
    { id: 'loyalty', label: 'Loyalty', value: 3 },
  ];

  onCheckboxChange(event: any) {
    const formArray: FormArray = this.saveClientForm.get(
      'campaign_objective'
    ) as FormArray;

    if (event.target.checked) {
      formArray.push(new FormControl(Number(event.target.value)));
    } else {
      const index = formArray.controls.findIndex(
        (x) => x.value === Number(event.target.value)
      );
      formArray.removeAt(index);
    }
  }

  //
}
