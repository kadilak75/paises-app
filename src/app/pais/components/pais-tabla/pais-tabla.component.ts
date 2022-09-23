import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/interfacePais';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent {

  constructor(private paisService: PaisService) { }

  @Input() resultados: Country[] = [];
  @Input() hayError: boolean = false;

  @Input() buscar(){}


}
