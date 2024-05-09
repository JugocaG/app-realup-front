import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { BrandAmbassadorService } from 'src/app/service/brand-ambassador.service';


@Component({
  selector: 'app-brand-ambassador',
  templateUrl: './brand-ambassador.component.html',
  styleUrl: './brand-ambassador.component.css'
})
export class BrandAmbassadorComponent {

  citiesFinal: string[] = [''];
  selectedCountry: string = '';
  numeroCreadores: number = 1;

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
  generalInterests: string[] = ['Automobiles and vehicles','Career and professional development','Cultural events and festivals','DIY projects and crafts','Environmental sustainability','Fashion and beauty','Food and cooking','Gardening and landscaping','Health and fitness','Hobbies and leisure activities','Home decor and interior design','Movies and entertainment','Music and concerts','Parenting and child-rearing','Reading and literature','Spirituality and mindfulness','Sports and athletics','Technology and innovation','Travel and adventure','Volunteering and community service','Art and creativity','Books and literature','Finance and investment','Gaming and esports','History and historical events','Music and concerts','Nature and the outdoors','Philosophy and ideas','Relationships and dating','Self-improvement and personal development'
  ];
  

  client = new FormControl('', Validators.required);
  campaign_name = new FormControl('', Validators.required);
  campaign_objective = new FormControl('', Validators.required);
  brief_campaign_objective = new FormControl('', Validators.required);
  location = new FormControl('', Validators.required);
  cities = new FormControl('', Validators.required);
  audience_interests = new FormControl('', Validators.required);
  audience_language = new FormControl('', Validators.required);
  audience_ages = new FormControl('', Validators.required);
  audience_genders = new FormControl('', Validators.required);
  content_type = new FormControl('', Validators.required);
  creator_gender = new FormControl('', Validators.required);
  brief_video_content = new FormControl('', Validators.required);
  date_publish = new FormControl('', Validators.required);
  minimum_followers = new FormControl('', Validators.required);
  number_creators = new FormControl('', Validators.required)
  
  
  saveClientForm = new FormGroup({
    client: this.client,
    campaign_objective: this.campaign_objective,
    brief_campaign_objective: this.brief_campaign_objective,
    campaign_name: this.campaign_name,
    location: this.location,
    cities: this.cities,
    audience_interests: this.audience_interests,
    audience_language: this.audience_language,
    audience_ages: this.audience_ages,
    audience_genders: this.audience_genders,
    content_type: this.content_type,
    creator_gender: this.creator_gender,
    brief_video_content: this.brief_video_content,
    date_publish: this.date_publish,
    minimum_followers: this.minimum_followers,
    number_creators: this.number_creators
    
  })

  ngOnInit(){
    this.service.verificarToken()
    
  }

  constructor(
    private service: AuthService,
    
    private BrandAmbassadorService: BrandAmbassadorService,
    private router: Router,
  ) {}

  saveClientCrowdposting(){
    console.log(this.saveClientForm.value);
    this.BrandAmbassadorService.saveSaleBrandAmbassador(this.saveClientForm.value).subscribe(() => {
      console.log();
      alert("¡La compra se envio con exito!")
      this.router.navigateByUrl('/ugc');
    })

  }

  // changeCountry(){
  //   if(this.selectedCountry == 'Colombia'){
  //     this.citiesFinal = this.citiesListColombia
  //   }
  //   if(this.selectedCountry == 'Panama'){
  //     this.citiesFinal = this.citiesListPanama
  //   }
  //   if(this.selectedCountry == 'Brasil'){
  //     this.citiesFinal = this.citiesListBrazil
  //   }
  //   if(this.selectedCountry == 'Peru'){
  //     this.citiesFinal = this.citiesListPeru
  //   }
  //   if(this.selectedCountry == 'Estados Unidos'){
  //     this.citiesFinal = this.citiesListUSA
  //   }
  // }

  sumCreators(){
    this.numeroCreadores += 1
  }

  restCreators(){
    if (this.numeroCreadores > 1) {
      this.numeroCreadores--;
    }
  }

  putCreators(event: number){
    this.numeroCreadores = event
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

  showCities(){
    if(this.selectedCountry.includes('Argentina')){
      this.verificarArgentina = true
      console.log(this.selectedCountry) 

    }
    else{
      this.verificarArgentina = false
    }
    if(this.selectedCountry.includes('Bolivia')){
      this.verificarBolivia = true
      console.log(this.selectedCountry) 
    }
    else{
      this.verificarBolivia = false
    }
    if(this.selectedCountry.includes('Brasil')){
      this.verificarBrasil = true
      console.log(this.selectedCountry) 

    }
    else{
      this.verificarBrasil = false
    }
    if(this.selectedCountry.includes('Chile')){
      this.verificarChile = true
      console.log(this.selectedCountry) 

    }
    else{
      this.verificarChile = false
    }
    if(this.selectedCountry.includes('Colombia')){
      this.verificarColombia = true
      console.log(this.selectedCountry) 

    }
    else{
      this.verificarColombia = false
    }
    if(this.selectedCountry.includes('Ecuador')){
      this.verificarEcuador = true
      console.log(this.selectedCountry) 

    }
    else{
      this.verificarEcuador = false
    }
    if(this.selectedCountry.includes('Paraguay')){
      this.verificarParaguay = true
      console.log(this.selectedCountry) 

    }
    else{
      this.verificarParaguay = false
    }
    if(this.selectedCountry.includes('Peru')){
      this.verificarPeru = true
      console.log(this.selectedCountry) 

    }
    else{
      this.verificarPeru = false
    }
    if(this.selectedCountry.includes('Uruguay')){
      this.verificarUruguay = true
      console.log(this.selectedCountry) 

    }
    else{
      this.verificarUruguay = false
    }
    if(this.selectedCountry.includes('Venezuela')){
      this.verificarVenezuela = true
      console.log(this.selectedCountry) 

    }
  }

  

}
