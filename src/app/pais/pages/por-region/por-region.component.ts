import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Country } from '../../interfaces/interfacePais';
import { Region } from '../../interfaces/interfaceRegion';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    #boton{
      margin-bottom: 10px;  
    }
  `]
})
export class PorRegionComponent{

  constructor(private PaisService: PaisService) { }

  public resultados: Country[] = []
  hayError: boolean = false;
  region: string = "";

  EU: Region = {
    code: "EU",
    description: "(European Union)"
  };

  EFTA: Region = {
    code: "EFTA",
    description: "(European Free Trade Association)"
  }

  CARICOM: Region = {
    code: "CARICOM",
    description: "(Caribbean Community)"
  }

  PA: Region = {
    code: "PA",
    description: "(Pacific Alliance)"
  }
  
  AU: Region = {
    code: "AU",
    description: "(African Union)"
  }

  USAN: Region = {
    code: "USAN",
    description: "(Union of South American Nations)"
  }

  EEU: Region = {
    code: "USAN",
    description: "(Eurasian Economic Union)"
  
  }

  AL: Region = {
    code: "AL",
    description: "(Arab League)"
  }

  ASEAN: Region = {
    code: "AL",
    description: "(Association of Southeast Asian Nations)"
  }

  CEFTA: Region = {
    code: "CEFTA",
    description: "(Central European Free Trade Agreement)"
  }

  CAIS: Region = {
    code: "CAIS",
    description: "(Central American Integration System)"
  }

  NAFTA: Region = {
    code: "NAFTA",
    description: "(North American Free Trade Agreement)"
  }

  SAARC: Region = {
    code: "AL",
    description: "(South Asian Association for Regional Cooperation)"
  }

  regiones: Array<Region> = [this.EU,this.EFTA,this.CARICOM,this.PA,this.AU,this.USAN,this.EEU,this.AL,this.ASEAN,this.CAIS,this.CEFTA,this.NAFTA,this.SAARC]
  regionesl: string[] = ["africa","asia","oceania","europe","americas"]
  regionActiva: string = "";

  buscar(region: Region){
 
    this.hayError = false;
    this.region = region.code;
    this.PaisService.buscarPaisV2("/regionalbloc/"+region.code).subscribe(resp =>{
      this.resultados = resp;
      console.log(this.resultados);
    },(error =>{
      console.log(error)
      this.hayError = true;
    }))
  }

  activarRegion (region: string) {
    
    this.hayError = false
    this.region = region;
    this.PaisService.buscarPaisV3("/region/" + region).subscribe(resp =>{
      this.resultados = resp;
      console.log(resp);

    },(error =>{
      this.hayError = true;
      console.log(error);
    }))

  }


}
