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
  numeroCreadores: number = 0;
  name_client = new FormControl('', Validators.required);
  country = new FormControl('');
  number_creators = new FormControl(null, Validators.required);
  type_content = new FormControl('');

  saveUGCForm = new FormGroup({
    name_client: this.name_client,
    country: this.country,
    type_content: this.type_content,
    number_creators: this.number_creators
  });

  summary: number = 0;
  selectedCountry: string = '';
  videoCount: number = 0;
  selectedVideoType: string = '';

  constructor(
    private service: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private UGCService: UgcService,
  ) {}

  submitForm() {
    console.log("Formulario enviado:", {
      country: this.selectedCountry,
      videoCount: this.videoCount,
      videoType: this.selectedVideoType
    });
  }

  ngOnInit(){
    this.service.verificarToken()
    this.saveUGCForm = this.fb.group({
      name_client: ['', Validators.required],
      country: ['', Validators.required],
      type_content: ['', Validators.required],
      number_creators: [null, Validators.required]
    })
  }

  saveSaleUGC(){
    console.log(this.saveUGCForm.value);
    this.UGCService.saveSaleUGC(this.saveUGCForm.value).subscribe(() => {
      console.log();
      alert("¡La compra se envio con exito!")
      this.router.navigateByUrl('/ugc');
    
    })

  }
  // price: number = 0;
  // price = 
  // calcultatePrice(event: Event) {
  //   this.price = (event.target as HTMLInputElement).value;
  // }




  
}
