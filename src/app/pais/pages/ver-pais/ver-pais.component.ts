import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap } from 'rxjs/operators';
import { Country, Languages } from '../../interfaces/interfacePais';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [ 
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private PaisService: PaisService) { }

  pais!:Country[];
  

  ngOnInit(){
    this.activatedRoute.params
    .pipe(
      switchMap((resp)=>
        this.PaisService.buscarPaisV3("/alpha/"+resp['id'])
      )
    )
    .subscribe(pais =>{
      this.pais = pais;
      console.log(pais);
      
    })

  
  }

}
