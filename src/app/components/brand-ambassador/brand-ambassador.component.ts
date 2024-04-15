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

  citiesListColombia: string[] = ['Armenia', 'Barranquilla', 'Bogotá', 'Bucaramanga', 'Cali', 'Cartagena', 'Cúcuta', 'Ibagué', 'Manizales', 'Medellín', 'Montería', 'Neiva', 'Pereira', 'Pasto', 'Popayán', 'Santa Marta', 'Sincelejo', 'Tunja', 'Valledupar', 'Villavicencio'];
  citiesListPeru: string[] = ['Arequipa', 'Callao', 'Chiclayo', 'Chimbote', 'Cusco', 'Huancayo', 'Iquitos', 'Lima', 'Piura', 'Tacna', 'Trujillo'];
  citiesListPanama: string[] = ['Panamá', 'San Miguelito', 'Tocumen', 'David', 'Arraiján', 'Colón', 'Las Cumbres', 'La Chorrera', 'Pacora', 'Santiago de Veraguas'];
  citiesListBrazil: string[] = ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador', 'Fortaleza', 'Belo Horizonte', 'Manaus', 'Curitiba', 'Recife', 'Goiânia', 'Belém', 'Porto Alegre', 'São Luís', 'Campinas', 'Guarulhos', 'São Gonçalo', 'Maceió', 'Duque de Caxias', 'Natal', 'Teresina'];
  citiesListUSA: string[] = ['New York City', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'San Francisco', 'Indianapolis', 'Columbus', 'Fort Worth', 'Charlotte', 'Seattle', 'Denver', 'Washington'];
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

  changeCountry(){
    if(this.selectedCountry == 'Colombia'){
      this.citiesFinal = this.citiesListColombia
    }
    if(this.selectedCountry == 'Panama'){
      this.citiesFinal = this.citiesListPanama
    }
    if(this.selectedCountry == 'Brasil'){
      this.citiesFinal = this.citiesListBrazil
    }
    if(this.selectedCountry == 'Peru'){
      this.citiesFinal = this.citiesListPeru
    }
    if(this.selectedCountry == 'Estados Unidos'){
      this.citiesFinal = this.citiesListUSA
    }
  }

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

}
