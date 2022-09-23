import { Component, ElementRef, ViewChild} from '@angular/core';
import { Country } from '../../interfaces/interfacePais';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [ `li{
    cursor: pointer; 
  }
  `
  ]
})
export class PorPaisComponent{

  constructor(private paisService: PaisService){}


   hayError: boolean = false; 
   public resultados: Country[] = [];
   porPais: string = "";
   public sugerenciaPais :Country[] = [];
  


  

  buscar(pais: string){
    
    if(pais.trim().length===0){
      return;
    }
    this.porPais = pais;
    console.log(pais);
    this.hayError = false;
    this.paisService.buscarPaisV3("/name/"+pais).subscribe(resp =>{
      console.log(resp);
      this.resultados = resp;
    },(err =>{
      this.hayError= true;
      console.log(err);
    }));
  }

  sugerencias(termino:string){
    this.hayError = false;
    this.porPais = termino;

    this.paisService.buscarPaisV2("/name/"+termino).subscribe(response =>{
      this.sugerenciaPais = response.splice(0,5);

    },(error=>{
      this.sugerenciaPais = [];
      console.log(error);
    }))
  }
//este metodo es inecesario
  buscarSugeridos(termino:string){
    this.buscar(termino);
    
  }

}
