import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, } from 'rxjs/operators';

@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.css']
})
export class BarraBusquedaComponent implements OnInit {
  

  @ViewChild ('paisBuscar') paisBuscar!:ElementRef<HTMLInputElement>
  hayError: boolean = false;
  @Output () onNewPais: EventEmitter<string> = new EventEmitter();
  @Output () onDebounce : EventEmitter<string> = new EventEmitter(); 
  pais: string = "";

  debouncer: Subject<string> = new Subject();

  ngOnInit() {
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(valor=>{
      console.log('debouncer: '+ valor)
      this.onDebounce.emit(valor);
    })
    
  }
  teclaPresionada(){
    this.pais = this.paisBuscar.nativeElement.value;
    this.debouncer.next(this.pais);
  }

  buscar(){
    this.pais = this.paisBuscar.nativeElement.value;
    this.onNewPais.emit(this.pais);
    this.paisBuscar.nativeElement.value = "";

  }


}
