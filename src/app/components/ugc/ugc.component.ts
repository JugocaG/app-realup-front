import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { UgcService } from 'src/app/service/ugc.service';

@Component({
  selector: 'app-ugc',
  templateUrl: './ugc.component.html',
  styleUrls: ['./ugc.component.css']
})


export class UgcComponent {


  citiesFinal: string[] = [''];

  citiesListColombia: string[] = [
    'Armenia', 'Barranquilla', 'Bogotá', 'Bucaramanga', 'Cali', 'Cartagena', 'Cúcuta', 'Ibagué', 'Manizales', 'Medellín',
    'Montería', 'Neiva', 'Pereira', 'Pasto', 'Popayán', 'Santa Marta', 'Sincelejo', 'Tunja', 'Valledupar', 'Villavicencio',
    'Soledad', 'Bello', 'Palmira', 'Valle del Cauca', 'Buenaventura', 'Barrancabermeja', 'Floridablanca', 'Itagüí', 'Tuluá',
    'Envigado', 'Dosquebradas', 'Maicao', 'Cartago', 'Florencia', 'Girardot', 'Sogamoso', 'Buenaventura', 'Riohacha', 'Duitama',
    'Sincelejo', 'Magangué', 'Girón', 'Ipiales', 'Tumaco', 'Ocaña', 'Barrancas', 'Túquerres', 'Mocoa'
];

  citiesListArgentina: string[] = [
    'Bahía Blanca', 'Buenos Aires', 'Córdoba', 'La Plata', 'Mar del Plata', 'Mendoza', 'Rosario', 'Salta', 'San Juan', 'Santa Fe',
    'Tucumán', 'Corrientes', 'Posadas', 'Resistencia', 'Neuquén', 'Formosa', 'San Salvador de Jujuy', 'Paraná', 'Santiago del Estero',
    'San Miguel de Tucumán', 'San Fernando del Valle de Catamarca', 'Santa Rosa', 'Rawson', 'Viedma', 'San Luis', 'La Rioja',
    'Ushuaia', 'Rio Grande', 'Comodoro Rivadavia', 'San Carlos de Bariloche', 'Puerto Madryn', 'Tandil', 'Río Cuarto', 'Zárate',
    'Campana', 'Gualeguaychú', 'Concordia', 'Pergamino', 'Junín', 'Olavarría', 'Chivilcoy', 'Azul', 'Trenque Lauquen', 'Chacabuco',
    'Mercedes', 'General Pico', 'Santa Rosa', 'Villa María', 'Venado Tuerto'
];

  citiesListBolivia: string[] = [
    'La Paz', 'Santa Cruz de la Sierra', 'Cochabamba', 'Sucre', 'Oruro', 'Tarija', 'Potosí', 'Sacaba', 'Montero', 'Quillacollo',
    'Trinidad', 'El Alto', 'Yacuiba', 'Riberalta', 'Guayaramerín', 'Cobija', 'Villazón', 'Warnes', 'La Guardia', 'Viacha',
    'Cotoca', 'Camiri', 'Villa Montes', 'Tiquipaya', 'Vinto', 'Llallagua', 'Villamontes', 'San Ignacio de Velasco', 'Entre Ríos',
    'Portachuelo', 'Bermejo', 'Puerto Suárez', 'Santiago del Torno', 'Reyes', 'Padilla', 'Cliza', 'Monteagudo', 'Achacachi',
    'Tarabuco', 'San Borja', 'Aiquile', 'San Julián', 'Colomi', 'Patacamaya', 'Capinota', 'Rurrenabaque', 'San Ramón', 'Ascensión de Guarayos'
];

  citiesListBrasil: string[] = [
    'São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador', 'Fortaleza', 'Belo Horizonte', 'Manaus', 'Curitiba', 'Recife', 'Goiânia',
    'Belém', 'Porto Alegre', 'São Luís', 'Natal', 'Campo Grande', 'Teresina', 'João Pessoa', 'Cuiabá', 'Aracaju', 'Florianópolis',
    'Macapá', 'Maceió', 'Vitória', 'Rio Branco', 'Porto Velho', 'Boa Vista', 'Palmas', 'São José do Rio Preto', 'Campinas', 'Sorocaba',
    'Ribeirão Preto', 'Uberlândia', 'Santo André', 'Osasco', 'Duque de Caxias', 'São Bernardo do Campo', 'Jaboatão dos Guararapes',
    'São José dos Campos', 'Contagem', 'Feira de Santana', 'Joinville', 'Ribeirão das Neves', 'Campos dos Goytacazes', 'Carapicuíba',
    'Olinda', 'Campina Grande', 'Santarém', 'Caxias do Sul', 'Diadema'
];

  citiesListChile: string[] = [
    'Santiago', 'Puente Alto', 'Maipú', 'Antofagasta', 'Viña del Mar', 'Valparaíso', 'La Serena', 'Temuco', 'Concepción', 'Talcahuano',
    'Rancagua', 'Arica', 'Talca', 'Chillán', 'Iquique', 'Los Ángeles', 'San Bernardo', 'Calama', 'Quilpué', 'Copiapó',
    'Valdivia', 'Punta Arenas', 'Curicó', 'Osorno', 'Copiapó', 'Quilicura', 'Villa Alemana', 'Huechuraba', 'Concón', 'Lampa',
    'La Pintana', 'Colina', 'Puerto Montt', 'La Florida', 'San Felipe', 'Peñaflor', 'Melipilla', 'Lo Prado', 'Linares',
    'Coyhaique', 'Penco', 'Los Andes', 'Chiguayante', 'San Antonio', 'Buin', 'Talagante', 'Tomé', 'Paine', 'La Granja'
];

  citiesListEcuador: string[] = [
    'Guayaquil', 'Quito', 'Cuenca', 'Santo Domingo', 'Machala', 'Durán', 'Manta', 'Portoviejo', 'Ambato', 'Riobamba',
    'Esmeraldas', 'Quevedo', 'Loja', 'Ibarra', 'Quito', 'Milagro', 'La Libertad', 'Ventanas', 'Latacunga', 'Babahoyo',
    'La Troncal', 'Sangolquí', 'Pasaje', 'Chone', 'Santa Elena', 'Cayambe', 'Machachi', 'Nueva Loja', 'Tulcán', 'Huaquillas',
    'Montecristi', 'Yaguachi', 'Otavalo', 'El Carmen', 'Puerto Francisco de Orellana', 'Naranjal', 'Playas', 'Salinas',
    'La Concordia', 'Daule', 'Atuntaqui', 'Azogues', 'Tena', 'Santa Rosa', 'Balzar', 'Banos', 'Macas'
];

  citiesListParaguay: string[] = [
  'Asunción', 'Ciudad del Este', 'San Lorenzo', 'Capiatá', 'Lambaré', 'Fernando de la Mora', 'Limpio', 'Ñemby', 'Encarnación', 'Mariano Roque Alonso',
  'Pedro Juan Caballero', 'Villa Elisa', 'Coronel Oviedo', 'Itauguá', 'Presidente Franco', 'Concepción', 'Villarrica', 'Caaguazú', 'Caacupé', 'Salto del Guairá',
  'Caazapá', 'San Juan Bautista', 'Paraguarí', 'Pilar', 'Caapucú', 'Areguá', 'San Antonio', 'Ypacaraí', 'Guarambaré', 'Quiindy', 'Colonia Mariano Roque Alonso',
  'San Estanislao', 'San Pedro del Ycuamandiyú', 'Ybycuí', 'Yuty', 'Coronel Bogado', 'Ygatimí', 'San Ignacio', 'Hohenau', 'Puerto Rosario', 'San Pablo',
  'Benjamín Aceval', 'San Bernardino', 'Ybytimí', 'José Leandro Oviedo', 'Bella Vista', 'Doctor Juan León Mallorquín', 'Altos', 'J. Augusto Saldívar',
  'San Cosme y Damián'
];

  citiesListPeru: string[] = [
  'Lima', 'Arequipa', 'Trujillo', 'Chiclayo', 'Piura', 'Iquitos', 'Cusco', 'Chimbote', 'Huancayo', 'Tacna',
  'Ica', 'Juliaca', 'Sullana', 'Chincha Alta', 'Huanuco', 'Ayacucho', 'Cajamarca', 'Pucallpa', 'Tumbes', 'Talara',
  'Huaraz', 'Puno', 'Tarapoto', 'Moquegua', 'Huacho', 'Pisco', 'Puerto Maldonado', 'Chosica', 'Yurimaguas', 'Chocope',
  'Camaná', 'Imperial', 'Abancay', 'Tarma', 'Tingo Maria', 'Jaén', 'Barranca', 'Moyobamba', 'Lambayeque', 'Zaña',
  'Sicuani', 'Huancavelica', 'San Vicente de Cañete', 'Huanta', 'Rioja', 'Virú', 'Moche', 'Marcavelica', 'Jauja',
  'Chota', 'San Ramón'
];

  citiesListUruguay: string[] = [
  'Montevideo', 'Salto', 'Paysandú', 'Las Piedras', 'Rivera', 'Maldonado', 'Tacuarembó', 'Meloo', 'Mercedes', 'Artigas',
  'Minas', 'San José de Mayo', 'Durazno', 'Florida', 'Barros Blancos', 'San Carlos', 'Colonia del Sacramento', 'Pando', 'Treinta y Tres',
  'Rocha', 'Fray Bentos', 'Trinidad', 'Delta del Tigre', 'Canelones', 'Carmelo', 'Santa Lucía', 'Progreso', 'Young', 'Dolores',
  'Nueva Helvecia', 'Nueva Palmira', 'Tranqueras', 'Paso de los Toros', 'Rosario', 'Juan L. Lacaze', 'Sarandí del Yi', 'Bella Unión',
  'La Paz', 'Libertad', 'José Pedro Varela', 'Tala', 'Guichón', 'San Jacinto', 'La Paloma', 'Vergara', 'Santa Rosa'
];

  citiesListVenezuela: string[] = [
  'Caracas', 'Maracaibo', 'Valencia', 'Barquisimeto', 'Maracay', 'Ciudad Guayana', 'San Cristóbal', 'Maturín', 'Barcelona', 'Puerto La Cruz',
  'Petare', 'Turmero', 'Barinas', 'Mérida', 'Los Teques', 'Cabimas', 'Coro', 'Guacara', 'Ciudad Bolívar', 'Cumaná',
  'Guanare', 'Punto Fijo', 'Acarigua', 'Carúpano', 'Santa Teresa del Tuy', 'Cúa', 'Guarenas', 'Ocumare del Tuy', 'El Tigre',
  'El Limón', 'Porlamar', 'La Victoria', 'Tinaquillo', 'San Fernando de Apure', 'Valera', 'El Cafetal', 'San Carlos',
  'San Felipe', 'Villa de Cura', 'El Vigía', 'Chacao', 'Las Tejerías', 'La Asunción', 'Los Dos Caminos', 'Santa Rita',
  'Guatire', 'San Juan de los Morros', 'Machiques', 'Tariba'
];

  countryHtml: string = "Selecciona el pais"
  numeroCreadores: number = 10;
  ValorTotal: number = 0;

  name_client = new FormControl('', Validators.required);
  campaign_name = new FormControl('', Validators.required);
  country = new FormControl('');
  number_creators = new FormControl(null, Validators.required);
  campaign_objective = new FormControl('');
  type_product = new FormControl('', Validators.required);
  name_product = new FormControl('', Validators.required);
  brief = new FormControl('', Validators.required);
  cities = new FormControl('', Validators.required);
  guideline = new FormControl('', Validators.required);
  delivery = new FormControl('', Validators.required);
  number_short_videos = new FormControl('', Validators.required);
  number_long_videos = new FormControl('', Validators.required);
  number_carrousel = new FormControl('', Validators.required);

  saveUGCForm = new FormGroup({
    name_client: this.name_client,
    country: this.country,
    campaign_objective: this.campaign_objective,
    number_creators: this.number_creators,
    campaign_name: this.campaign_name,
    type_product: this.type_product,
    name_product: this.name_product,
    brief: this.brief,
    cities: this.cities,
    guideline: this.guideline,
    delivery: this.delivery,
    number_short_videos: this.number_short_videos,
    number_long_videos: this.number_long_videos,
    number_carrousel: this.number_carrousel,

  });

  summary: number = 0;
  selectedCountry: string = '';
  videoCount: number = 0;
  selectedVideoType: string = '';
  numeroCarrousel: number = 1;
  numeroLongVideos: number = 1;
  numeroShortVideos: number = 1;

  constructor(
    private service: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private UGCService: UgcService,
  ) {}
  
  ngOnInit(){
    this.service.verificarToken()
  }

  saveSaleUGC(){
    console.log(this.saveUGCForm.value);
    this.UGCService.saveSaleUGC(this.saveUGCForm.value).subscribe(() => {
      console.log();
      this.router.navigateByUrl('/home');
    
    })

  }
  

  changeCountry(){
    this.changeContents()
    
    if(this.selectedCountry == 'Argentina'){
      this.citiesFinal = this.citiesListArgentina
    }
    if(this.selectedCountry == 'Bolivia'){
      this.citiesFinal = this.citiesListBolivia
    }
    if(this.selectedCountry == 'Brasil'){
      this.citiesFinal = this.citiesListBrasil
    }
    if(this.selectedCountry == 'Chile'){
      this.citiesFinal = this.citiesListChile
    }
    if(this.selectedCountry == 'Colombia'){
      this.citiesFinal = this.citiesListColombia
    }
    if(this.selectedCountry == 'Ecuador'){
      this.citiesFinal = this.citiesListEcuador
    }
    if(this.selectedCountry == 'Paraguay'){
      this.citiesFinal = this.citiesListParaguay
    }
    if(this.selectedCountry == 'Peru'){
      this.citiesFinal = this.citiesListPeru
    }
    if(this.selectedCountry == 'Uruguay'){
      this.citiesFinal = this.citiesListUruguay
    }
    if(this.selectedCountry == 'Venezuela'){
      this.citiesFinal = this.citiesListVenezuela
    }
    
  }

  sumCarrousel(){
    this.numeroCarrousel += 1
  }

  restCarrousel(){
    if (this.numeroCarrousel > 0) {
      this.numeroCarrousel--;
    }
  }

  sumLong(){
    this.numeroLongVideos += 1
  }

  restLong(){
    if (this.numeroLongVideos > 0) {
      this.numeroLongVideos--;
    }
  }

  sumShort(){
    this.numeroShortVideos += 1
  }

  restShort(){
    if (this.numeroShortVideos > 0) {
      this.numeroShortVideos--;
    }
  }

  sumCreators(){
    this.numeroCreadores += 1
  }

  restCreators(){
    if (this.numeroCreadores > 10) {
      this.numeroCreadores--;
    }
  }

  putCreators(event: number){
    this.numeroCreadores = event
  }
  
  // Carrito de compras

  changeContents(){
    if (this.selectedCountry == 'Argentina'){
      this.ValorTotal = ((this.numeroCarrousel * 100) + (this.numeroLongVideos * 300) + (this.numeroShortVideos * 150)) * this.numeroCreadores
    }
    if(this.selectedCountry == 'Bolivia'){
      this.ValorTotal = ((this.numeroCarrousel * 40) + (this.numeroLongVideos * 70) + (this.numeroShortVideos * 90)) * this.numeroCreadores
    }
    if(this.selectedCountry == 'Brasil'){
      this.ValorTotal = ((this.numeroCarrousel * 100) + (this.numeroLongVideos * 250) + (this.numeroShortVideos * 150)) * this.numeroCreadores
    }
    if(this.selectedCountry == 'Chile'){
      this.ValorTotal = ((this.numeroCarrousel * 20) + (this.numeroLongVideos * 70) + (this.numeroShortVideos * 50)) * this.numeroCreadores
    }
    if(this.selectedCountry == 'Colombia'){
      this.ValorTotal = ((this.numeroCarrousel * 50) + (this.numeroLongVideos * 77) + (this.numeroShortVideos * 44)) * this.numeroCreadores
    }
    if(this.selectedCountry == 'Ecuador'){
      this.ValorTotal = ((this.numeroCarrousel * 50) + (this.numeroLongVideos * 66) + (this.numeroShortVideos * 90)) * this.numeroCreadores
    }
    if(this.selectedCountry == 'Paraguay'){
      this.ValorTotal = ((this.numeroCarrousel * 75) + (this.numeroLongVideos * 65) + (this.numeroShortVideos * 95)) * this.numeroCreadores
    }
    if(this.selectedCountry == 'Peru'){
      this.ValorTotal = ((this.numeroCarrousel * 80) + (this.numeroLongVideos * 150) + (this.numeroShortVideos * 100)) * this.numeroCreadores
    }
    if(this.selectedCountry == 'Uruguay'){
      this.ValorTotal = ((this.numeroCarrousel * 80) + (this.numeroLongVideos * 100) + (this.numeroShortVideos * 50)) * this.numeroCreadores
    }
    if(this.selectedCountry == 'Venezuela'){
      this.ValorTotal = ((this.numeroCarrousel * 10) + (this.numeroLongVideos * 30) + (this.numeroShortVideos * 20)) * this.numeroCreadores
    }
  }

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
  showCities(){
    if(this.selectedCountry.includes('Argentina')){
      this.verificarArgentina = true
      console.log(this.selectedCountry) 

    }
    if(this.selectedCountry.includes('Bolivia')){
      this.verificarBolivia = true
      console.log(this.selectedCountry) 

    }
    if(this.selectedCountry.includes('Brasil')){
      this.verificarBrasil = true
      console.log(this.selectedCountry) 

    }
    if(this.selectedCountry.includes('Chile')){
      this.verificarChile = true
      console.log(this.selectedCountry) 

    }
    if(this.selectedCountry.includes('Colombia')){
      this.verificarColombia = true
      console.log(this.selectedCountry) 

    }
    if(this.selectedCountry.includes('Ecuador')){
      this.verificarEcuador = true
      console.log(this.selectedCountry) 

    }
    if(this.selectedCountry.includes('Paraguay')){
      this.verificarParaguay = true
      console.log(this.selectedCountry) 

    }
    if(this.selectedCountry.includes('Peru')){
      this.verificarPeru = true
      console.log(this.selectedCountry) 

    }
    if(this.selectedCountry.includes('Uruguay')){
      this.verificarUruguay = true
      console.log(this.selectedCountry) 

    }
    if(this.selectedCountry.includes('Venezuela')){
      this.verificarVenezuela = true
      console.log(this.selectedCountry) 

    }
  }




  
}
