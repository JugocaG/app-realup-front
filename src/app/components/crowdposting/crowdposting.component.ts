import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { CrowdpostingService } from 'src/app/service/crowdposting.service';

@Component({
  selector: 'app-crowdposting',
  templateUrl: './crowdposting.component.html',
  styleUrls: ['./crowdposting.component.css']
})
export class CrowdpostingComponent {

  constructor(
    private service: AuthService,
    private crowdpostingService: CrowdpostingService,
    private router: Router,
  ) {}
  
  name_client= new FormControl('', Validators.required);
  reach= new FormControl('', Validators.required);
  country= new FormControl(null, Validators.required);
  number_cities= new FormControl('', Validators.required);
  price= new FormControl(null, Validators.required);
  
  saveCrowdpostingForm = new FormGroup({
    name_client: this.name_client,
    country: this.country,
    reach: this.reach,
    number_cities: this.number_cities,
    price: this.price
  });

  ngOnInit(){
    this.service.verificarToken()
  }
  

  saveSaleUGC(){
    console.log(this.saveCrowdpostingForm.value);
    this.crowdpostingService.saveSaleCrowdposting(this.saveCrowdpostingForm.value).subscribe(() => {
      console.log();
      alert("¡La compra se envio con exito!")
      this.router.navigateByUrl('/ugc');
    
    })

  }

}
