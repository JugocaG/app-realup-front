import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  FormArray,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { UgcService } from 'src/app/service/ugc.service';
import { CitiesService } from 'src/app/service/cities.service';

@Component({
  selector: 'app-ugc',
  templateUrl: './ugc.component.html',
  styleUrls: ['./ugc.component.css'],
})
export class UgcComponent implements OnInit {
  citiesFinal: { name: string; code: string }[] = [];

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

  countryHtml: string = 'Selecciona el pais';

  // name_client = new FormControl('', Validators.required);
  // campaign_name = new FormControl('', Validators.required);
  // country = new FormControl('');
  // campaign_objective = new FormControl('');
  // brief_campaign_objective = new FormControl('', Validators.required);
  // type_product = new FormControl('', Validators.required);
  // name_product = new FormControl('', Validators.required);
  // brief = new FormControl('', Validators.required);
  // guideline = new FormControl('', Validators.required);
  // delivery = new FormControl('', Validators.required);
  // cities = new FormControl('', Validators.required);
  // number_creators = new FormControl(null, Validators.required);
  // number_short_videos = new FormControl('', Validators.required);
  // number_long_videos = new FormControl('', Validators.required);
  // number_carrousel = new FormControl('', Validators.required);

  // saveUGCForm = new FormGroup({
  //   name_client: this.name_client,
  //   country: this.country,
  //   campaign_objective: this.campaign_objective,
  //   campaign_name: this.campaign_name,
  //   type_product: this.type_product,
  //   name_product: this.name_product,
  //   brief: this.brief,
  //   guideline: this.guideline,
  //   brief_campaign_objective: this.brief_campaign_objective,
  //   delivery: this.delivery,
  //   // cities: this.cities,
  //   // number_short_videos: this.number_short_videos,
  //   // number_long_videos: this.number_long_videos,
  //   // number_carrousel: this.number_carrousel,
  //   // number_creators: this.number_creators,
  // });

  //Implementacion combinacion de forms
  combinedForm: FormGroup;
  formGroupCities: FormGroup;
  saveUGCForm: FormGroup;

  summary: number = 0;
  selectedCountry: string = '';
  videoCount: number = 0;
  selectedVideoType: string = '';

  //  Number of contents for each country
  ValorTotal: number = 0;
  numeroCarrousel: number = 1;
  numeroLongVideos: number = 1;
  numeroShortVideos: number = 1;
  numeroCreadores: number = 10;

  ValorTotalArgentina: number = 0;
  numeroCarrouselArgentina: number = 1;
  numeroLongVideosArgentina: number = 1;
  numeroShortVideosArgentina: number = 1;
  numeroCreadoresArgentina: number = 11;

  ValorTotalBolivia: number = 0;
  numeroCarrouselBolivia: number = 1;
  numeroLongVideosBolivia: number = 1;
  numeroShortVideosBolivia: number = 1;
  numeroCreadoresBolivia: number = 10;

  ValorTotalBrasil: number = 0;
  numeroCarrouselBrasil: number = 1;
  numeroLongVideosBrasil: number = 1;
  numeroShortVideosBrasil: number = 1;
  numeroCreadoresBrasil: number = 10;

  ValorTotalChile: number = 0;
  numeroCarrouselChile: number = 1;
  numeroLongVideosChile: number = 1;
  numeroShortVideosChile: number = 1;
  numeroCreadoresChile: number = 10;

  ValorTotalColombia: number = 0;
  numeroCarrouselColombia: number = 1;
  numeroLongVideosColombia: number = 1;
  numeroShortVideosColombia: number = 1;
  numeroCreadoresColombia: number = 10;

  ValorTotalEcuador: number = 0;
  numeroCarrouselEcuador: number = 1;
  numeroLongVideosEcuador: number = 1;
  numeroShortVideosEcuador: number = 1;
  numeroCreadoresEcuador: number = 10;

  ValorTotalParaguay: number = 0;
  numeroCarrouselParaguay: number = 1;
  numeroLongVideosParaguay: number = 1;
  numeroShortVideosParaguay: number = 1;
  numeroCreadoresParaguay: number = 10;

  ValorTotalPeru: number = 0;
  numeroCarrouselPeru: number = 1;
  numeroLongVideosPeru: number = 1;
  numeroShortVideosPeru: number = 1;
  numeroCreadoresPeru: number = 10;

  ValorTotalUruguay: number = 0;
  numeroCarrouselUruguay: number = 1;
  numeroLongVideosUruguay: number = 1;
  numeroShortVideosUruguay: number = 1;
  numeroCreadoresUruguay: number = 10;

  ValorTotalVenezuela: number = 0;
  numeroCarrouselVenezuela: number = 1;
  numeroLongVideosVenezuela: number = 1;
  numeroShortVideosVenezuela: number = 1;
  numeroCreadoresVenezuela: number = 10;

  constructor(
    private service: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private UGCService: UgcService,
    private citiesService: CitiesService
  ) {
    this.formGroupCities = this.fb.group({
      cities: ['', Validators.required],
      number_creators: ['', Validators.required],
      number_short_videos: ['', Validators.required],
      number_long_videos: ['', Validators.required],
      number_carrousel: ['', Validators.required],
      guideline: [''],
    });
    this.saveUGCForm = this.fb.group({
      name_client: ['', Validators.required],
      campaign_name: ['', Validators.required],
      country: ['', Validators.required],
      campaign_objective: this.fb.array([]),
      brief_campaign_objective: ['', Validators.required],
      type_product: ['', Validators.required],
      name_product: ['', Validators.required],
      brief: ['', Validators.required],
      delivery: ['', Validators.required],
    });

    this.combinedForm = this.fb.group({
      saveUGCForm: this.saveUGCForm,
      formGroupCities: this.formGroupCities,
    });
  }

  ngOnInit() {
    this.service.verificarToken();
    this.getCities();
  }

  getCitiesNames(citiesList: { name: string; code: string }[]): string[] {
    return citiesList.map((city) => city.name);
  }

  saveSaleUGC() {
    if (this.combinedForm.valid) {
      const combinedFormData = this.combinedForm.value;

      // Obtener los nombres de las ciudades y ajustarlos
      const citiesData: { name: string }[] =
        combinedFormData.formGroupCities.cities;
      const citiesArray = citiesData.map((cityObject) => cityObject.name);
      this.formGroupCities.value.cities = citiesArray;

      const combinedData = {
        ...this.saveUGCForm.value,
        ...this.formGroupCities.value,
      };

      console.log(combinedData);

      this.UGCService.saveSaleUGC(combinedData).subscribe(() => {
        console.log();
        this.router.navigateByUrl('/home');
      });
    } else {
      console.log('Form is invalid');
    }
  }
  // Sum buttons types of contents
  // -------------------------------------- General -------------------------------------------------

  sumCarrousel() {
    this.numeroCarrousel += 1;
  }

  restCarrousel() {
    if (this.numeroCarrousel > 0) {
      this.numeroCarrousel--;
    }
  }

  sumLong() {
    this.numeroLongVideos += 1;
  }

  restLong() {
    if (this.numeroLongVideos > 0) {
      this.numeroLongVideos--;
    }
  }

  sumShort() {
    this.numeroShortVideos += 1;
  }

  restShort() {
    if (this.numeroShortVideos > 0) {
      this.numeroShortVideos--;
    }
  }

  sumCreators() {
    this.numeroCreadores += 1;
  }

  restCreators() {
    if (this.numeroCreadores > 10) {
      this.numeroCreadores--;
    }
  }

  putCreators(event: number) {
    this.numeroCreadores = event;
  }

  // -------------------------------------- Argentina -------------------------------------------------

  sumCarrouselArgentina() {
    this.numeroCarrouselArgentina += 1;
  }

  restCarrouselArgentina() {
    if (this.numeroCarrouselArgentina > 0) {
      this.numeroCarrouselArgentina--;
    }
  }

  sumLongArgentina() {
    this.numeroLongVideosArgentina += 1;
  }

  restLongArgentina() {
    if (this.numeroLongVideosArgentina > 0) {
      this.numeroLongVideosArgentina--;
    }
  }

  sumShortArgentina() {
    this.numeroShortVideosArgentina += 1;
  }

  restShortArgentina() {
    if (this.numeroShortVideosArgentina > 0) {
      this.numeroShortVideosArgentina--;
    }
  }

  sumCreatorsArgentina() {
    this.numeroCreadoresArgentina += 1;
  }

  restCreatorsArgentina() {
    if (this.numeroCreadoresArgentina > 10) {
      this.numeroCreadoresArgentina--;
    }
  }

  putCreatorsArgentina(event: number) {
    this.numeroCreadoresArgentina = event;
  }

  // -------------------------------------- Bolivia -------------------------------------------------

  sumCarrouselBolivia() {
    this.numeroCarrouselBolivia += 1;
  }

  restCarrouselBolivia() {
    if (this.numeroCarrouselBolivia > 0) {
      this.numeroCarrouselBolivia--;
    }
  }

  sumLongBolivia() {
    this.numeroLongVideosBolivia += 1;
  }

  restLongBolivia() {
    if (this.numeroLongVideosBolivia > 0) {
      this.numeroLongVideosBolivia--;
    }
  }

  sumShortBolivia() {
    this.numeroShortVideosBolivia += 1;
  }

  restShortBolivia() {
    if (this.numeroShortVideosBolivia > 0) {
      this.numeroShortVideosBolivia--;
    }
  }

  sumCreatorsBolivia() {
    this.numeroCreadoresBolivia += 1;
  }

  restCreatorsBolivia() {
    if (this.numeroCreadoresBolivia > 10) {
      this.numeroCreadoresBolivia--;
    }
  }

  putCreatorsBolivia(event: number) {
    this.numeroCreadoresBolivia = event;
  }

  // -------------------------------------- Brasil -------------------------------------------------

  sumCarrouselBrasil() {
    this.numeroCarrousel += 1;
  }

  restCarrouselBrasil() {
    if (this.numeroCarrousel > 0) {
      this.numeroCarrousel--;
    }
  }

  sumLongBrasil() {
    this.numeroLongVideos += 1;
  }

  restLongBrasil() {
    if (this.numeroLongVideos > 0) {
      this.numeroLongVideos--;
    }
  }

  sumShortBrasil() {
    this.numeroShortVideos += 1;
  }

  restShortBrasil() {
    if (this.numeroShortVideos > 0) {
      this.numeroShortVideos--;
    }
  }

  sumCreatorsBrasil() {
    this.numeroCreadores += 1;
  }

  restCreatorsBrasil() {
    if (this.numeroCreadores > 10) {
      this.numeroCreadores--;
    }
  }

  putCreatorsBrasil(event: number) {
    this.numeroCreadores = event;
  }

  // -------------------------------------- Chile -------------------------------------------------

  sumCarrouselChile() {
    this.numeroCarrousel += 1;
  }

  restCarrouselChile() {
    if (this.numeroCarrousel > 0) {
      this.numeroCarrousel--;
    }
  }

  sumLongChile() {
    this.numeroLongVideos += 1;
  }

  restLongChile() {
    if (this.numeroLongVideos > 0) {
      this.numeroLongVideos--;
    }
  }

  sumShortChile() {
    this.numeroShortVideos += 1;
  }

  restShortChile() {
    if (this.numeroShortVideos > 0) {
      this.numeroShortVideos--;
    }
  }

  sumCreatorsChile() {
    this.numeroCreadores += 1;
  }

  restCreatorsChile() {
    if (this.numeroCreadores > 10) {
      this.numeroCreadores--;
    }
  }

  putCreatorsChile(event: number) {
    this.numeroCreadores = event;
  }

  // -------------------------------------- Colombia -------------------------------------------------

  sumCarrouselColombia() {
    this.numeroCarrousel += 1;
  }

  restCarrouselColombia() {
    if (this.numeroCarrousel > 0) {
      this.numeroCarrousel--;
    }
  }

  sumLongColombia() {
    this.numeroLongVideos += 1;
  }

  restLongColombia() {
    if (this.numeroLongVideos > 0) {
      this.numeroLongVideos--;
    }
  }

  sumShortColombia() {
    this.numeroShortVideos += 1;
  }

  restShortColombia() {
    if (this.numeroShortVideos > 0) {
      this.numeroShortVideos--;
    }
  }

  sumCreatorsColombia() {
    this.numeroCreadores += 1;
  }

  restCreatorsColombia() {
    if (this.numeroCreadores > 10) {
      this.numeroCreadores--;
    }
  }

  putCreatorsColombia(event: number) {
    this.numeroCreadores = event;
  }
  // -------------------------------------- Ecuador -------------------------------------------------

  sumCarrouselEcuador() {
    this.numeroCarrousel += 1;
  }

  restCarrouselEcuador() {
    if (this.numeroCarrousel > 0) {
      this.numeroCarrousel--;
    }
  }

  sumLongEcuador() {
    this.numeroLongVideos += 1;
  }

  restLongEcuador() {
    if (this.numeroLongVideos > 0) {
      this.numeroLongVideos--;
    }
  }

  sumShortEcuador() {
    this.numeroShortVideos += 1;
  }

  restShortEcuador() {
    if (this.numeroShortVideos > 0) {
      this.numeroShortVideos--;
    }
  }

  sumCreatorsEcuador() {
    this.numeroCreadores += 1;
  }

  restCreatorsEcuador() {
    if (this.numeroCreadores > 10) {
      this.numeroCreadores--;
    }
  }

  putCreatorsEcuador(event: number) {
    this.numeroCreadores = event;
  }

  // -------------------------------------- Paraguay -------------------------------------------------

  sumCarrouselParaguay() {
    this.numeroCarrousel += 1;
  }

  restCarrouselParaguay() {
    if (this.numeroCarrousel > 0) {
      this.numeroCarrousel--;
    }
  }

  sumLongParaguay() {
    this.numeroLongVideos += 1;
  }

  restLongParaguay() {
    if (this.numeroLongVideos > 0) {
      this.numeroLongVideos--;
    }
  }

  sumShortParaguay() {
    this.numeroShortVideos += 1;
  }

  restShortParaguay() {
    if (this.numeroShortVideos > 0) {
      this.numeroShortVideos--;
    }
  }

  sumCreatorsParaguay() {
    this.numeroCreadores += 1;
  }

  restCreatorsParaguay() {
    if (this.numeroCreadores > 10) {
      this.numeroCreadores--;
    }
  }

  putCreatorsParaguay(event: number) {
    this.numeroCreadores = event;
  }

  // -------------------------------------- Peru -------------------------------------------------

  sumCarrouselPeru() {
    this.numeroCarrousel += 1;
  }

  restCarrouselPeru() {
    if (this.numeroCarrousel > 0) {
      this.numeroCarrousel--;
    }
  }

  sumLongPeru() {
    this.numeroLongVideos += 1;
  }

  restLongPeru() {
    if (this.numeroLongVideos > 0) {
      this.numeroLongVideos--;
    }
  }

  sumShortPeru() {
    this.numeroShortVideos += 1;
  }

  restShortPeru() {
    if (this.numeroShortVideos > 0) {
      this.numeroShortVideos--;
    }
  }

  sumCreatorsPeru() {
    this.numeroCreadores += 1;
  }

  restCreatorsPeru() {
    if (this.numeroCreadores > 10) {
      this.numeroCreadores--;
    }
  }

  putCreatorsPeru(event: number) {
    this.numeroCreadores = event;
  }

  // -------------------------------------- Uruguay -------------------------------------------------

  sumCarrouselUruguay() {
    this.numeroCarrousel += 1;
  }

  restCarrouselUruguay() {
    if (this.numeroCarrousel > 0) {
      this.numeroCarrousel--;
    }
  }

  sumLongUruguay() {
    this.numeroLongVideos += 1;
  }

  restLongUruguay() {
    if (this.numeroLongVideos > 0) {
      this.numeroLongVideos--;
    }
  }

  sumShortUruguay() {
    this.numeroShortVideos += 1;
  }

  restShortUruguay() {
    if (this.numeroShortVideos > 0) {
      this.numeroShortVideos--;
    }
  }

  sumCreatorsUruguay() {
    this.numeroCreadores += 1;
  }

  restCreatorsUruguay() {
    if (this.numeroCreadores > 10) {
      this.numeroCreadores--;
    }
  }

  putCreatorsUruguay(event: number) {
    this.numeroCreadores = event;
  }

  // -------------------------------------- Venezuela -------------------------------------------------

  sumCarrouselVenezuela() {
    this.numeroCarrousel += 1;
  }

  restCarrouselVenezuela() {
    if (this.numeroCarrousel > 0) {
      this.numeroCarrousel--;
    }
  }

  sumLongVenezuela() {
    this.numeroLongVideos += 1;
  }

  restLongVenezuela() {
    if (this.numeroLongVideos > 0) {
      this.numeroLongVideos--;
    }
  }

  sumShortVenezuela() {
    this.numeroShortVideos += 1;
  }

  restShortVenezuela() {
    if (this.numeroShortVideos > 0) {
      this.numeroShortVideos--;
    }
  }

  sumCreatorsVenezuela() {
    this.numeroCreadores += 1;
  }

  restCreatorsVenezuela() {
    if (this.numeroCreadores > 10) {
      this.numeroCreadores--;
    }
  }

  putCreatorsVenezuela(event: number) {
    this.numeroCreadores = event;
  }

  // Carrito de compras antiguo
  // changeContents() {
  //   if (this.selectedCountry == 'Argentina') {
  //     this.ValorTotal =
  //       (this.numeroCarrousel * 100 +
  //         this.numeroLongVideos * 300 +
  //         this.numeroShortVideos * 150) *
  //       this.numeroCreadores;
  //   }
  //   if (this.selectedCountry == 'Bolivia') {
  //     this.ValorTotal =
  //       (this.numeroCarrousel * 40 +
  //         this.numeroLongVideos * 70 +
  //         this.numeroShortVideos * 90) *
  //       this.numeroCreadores;
  //   }
  //   if (this.selectedCountry == 'Brasil') {
  //     this.ValorTotal =
  //       (this.numeroCarrousel * 100 +
  //         this.numeroLongVideos * 250 +
  //         this.numeroShortVideos * 150) *
  //       this.numeroCreadores;
  //   }
  //   if (this.selectedCountry == 'Chile') {
  //     this.ValorTotal =
  //       (this.numeroCarrousel * 20 +
  //         this.numeroLongVideos * 70 +
  //         this.numeroShortVideos * 50) *
  //       this.numeroCreadores;
  //   }
  //   if (this.selectedCountry == 'Colombia') {
  //     this.ValorTotal =
  //       (this.numeroCarrousel * 50 +
  //         this.numeroLongVideos * 77 +
  //         this.numeroShortVideos * 44) *
  //       this.numeroCreadores;
  //   }
  //   if (this.selectedCountry == 'Ecuador') {
  //     this.ValorTotal =
  //       (this.numeroCarrousel * 50 +
  //         this.numeroLongVideos * 66 +
  //         this.numeroShortVideos * 90) *
  //       this.numeroCreadores;
  //   }
  //   if (this.selectedCountry == 'Paraguay') {
  //     this.ValorTotal =
  //       (this.numeroCarrousel * 75 +
  //         this.numeroLongVideos * 65 +
  //         this.numeroShortVideos * 95) *
  //       this.numeroCreadores;
  //   }
  //   if (this.selectedCountry == 'Peru') {
  //     this.ValorTotal =
  //       (this.numeroCarrousel * 80 +
  //         this.numeroLongVideos * 150 +
  //         this.numeroShortVideos * 100) *
  //       this.numeroCreadores;
  //   }
  //   if (this.selectedCountry == 'Uruguay') {
  //     this.ValorTotal =
  //       (this.numeroCarrousel * 80 +
  //         this.numeroLongVideos * 100 +
  //         this.numeroShortVideos * 50) *
  //       this.numeroCreadores;
  //   }
  //   if (this.selectedCountry == 'Venezuela') {
  //     this.ValorTotal =
  //       (this.numeroCarrousel * 10 +
  //         this.numeroLongVideos * 30 +
  //         this.numeroShortVideos * 20) *
  //       this.numeroCreadores;
  //   }
  // }

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

  // Mostrar ciudades
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

  // Extraer los datos de las ciudades
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

  // Seleccion de tipo de producto - funcion para aparecer el Delivery o no

  productType: boolean = false;
  productTypeProduct: string = '';

  changeProductType() {
    if (this.productTypeProduct == 'Physical product') {
      this.productType = true;
    }
    if (this.productTypeProduct == 'Service') {
      this.productType = false;
    }
  }

  // Pequeño cambio en las opciones de campaña

  options = [
    { id: 'brand-awarness', label: 'Brand Awarness', value: 0 },
    { id: 'consideration', label: 'Consideracion', value: 1 },
    { id: 'conversion', label: 'Conversion', value: 2 },
    { id: 'retention', label: 'Retencion', value: 3 },
  ];

  onCheckboxChange(event: any) {
    const formArray: FormArray = this.saveUGCForm.get(
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
}
