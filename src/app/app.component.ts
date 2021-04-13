import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  title:String ="Contador";
  numero: number= 10;
  base: number =5;

acumular(valor: number){
this.numero +=  valor;
}
desacumular(valor: number){
this.numero -=  valor;
}


}