import { Component, OnInit } from '@angular/core';
import { Aportes } from '../model/aportes';
import { Test } from '../model/test';

@Component({
  selector: 'app-test-burnout',
  templateUrl: './test-burnout.component.html',
  styleUrls: ['./test-burnout.component.css']
})
export class TestBurnoutComponent implements OnInit {

  test: Test = new Test();
  aportes:Aportes=new Aportes();
  SMV:number=1000000;
  suma:Number=0;
  constructor() { }

  ngOnInit(): void {
  }

  calcular(){
    this.sumaTotal();
    console.log(this.test.Total);
    this.resultado();
    console.log(this.test.ResultadoTipoEstres);
  }

  capturarP1(vanr:any){
    this.test.P1=vanr;
  }
  capturarP2(vanr:any){
    this.test.P2=vanr;
  }
  capturarP3(vanr:any){
    this.test.P3=vanr;
  }
  capturarP4(vanr:any){
    this.test.P4=vanr;
  }
  capturarP5(vanr:any){
    this.test.P5=vanr;
  }
  capturarP6(vanr:any){
    this.test.P6=vanr;
  }
  capturarP7(vanr:any){
    this.test.P7=vanr;
  }
  capturarP8(vanr:any){
    this.test.P8=vanr;
  }
  capturarP9(vanr:any){
    this.test.P9=vanr;
  }
  capturarP10(vanr:any){
    this.test.P10=vanr;
  }
  capturarP11(vanr:any){
    this.test.P11=vanr;
  }
  capturarP12(vanr:any){
    this.test.P12=vanr;
  }
  capturarP13(vanr:any){
    this.test.P13=vanr;
  }
  capturarP14(vanr:any){
    this.test.P14=vanr;
  }
  capturarP15(vanr:any){
    this.test.P15=vanr;
  }

  sumaTotal(){
    var total = (this.test.P1 +this.test.P2+this.test.P3+this.test.P4+this.test.P5
      +this.test.P6+this.test.P7+this.test.P8+this.test.P9+this.test.P10+
      this.test.P11+this.test.P12+this.test.P13+this.test.P14+this.test.P15)
      this.test.Total=total;
  }

  resultado(){
    if(this.test.Total<=15){
      this.test.ResultadoTipoEstres = "Usted no presenta estres";
      this.test.ResultadoDescripcion = "Según este breve test, no presentas síntomas de estrés laboral. A grandes rasgos, te sientes seguro/a en tu puesto de trabajo y sientes que tus responsabilidades son coherentes con tus capacidades. Prueba a mantener las mismas dinámicas en tu entorno laboral para cuidar de tu bienestar psicológico."
    }else if(this.test.Total<=30){
      this.test.ResultadoTipoEstres = "Uste presenta estres moderado";
      this.test.ResultadoDescripcion = "Según este breve test, presentas estrés moderado es señal de que pocos factores de tu entorno laboral pueden producirte malestar y estrés. A pesar de que actualmente no presentas síndrome de Burnout, puedes tomar acciones para mejorar estos factores que te ocasionan molestias."
    }else if(this.test.Total<=45){
      this.test.ResultadoTipoEstres = "Uste presenta estres medio";
      this.test.ResultadoDescripcion = "Según este breve test, presentas estrés medio es señal de que algunos factores de tu entorno laboral pueden producirte malestar y estrés. A pesar de que actualmente no presentas síndrome de Burnout, puntuar en estrés medio en este test refleja una tendencia a padecerlo en un futuro. En este caso, es importante detectar aquello que te causa incomodidad y malestar para poder gestionarlo de la mejor manera posible."
    }else if(this.test.Total<=60){
      this.test.ResultadoTipoEstres = "Uste presenta estres alto";
      this.test.ResultadoDescripcion = "Según este breve test, presentas estrés alto es señal de que muchos factores de tu entorno laboral pueden producirte malestar y estrés, lo que llega a ocasionarte daños en tu bienestar emocional y físico."
    }else if (this.test.Total<=75){
      this.test.ResultadoTipoEstres = "Uste presenta estres grave";
      this.test.ResultadoDescripcion = "Según este breve test, presentas estrés grave en el test burnout sugiere que tu nivel de estrés laboral está afectando gravemente a tu bienestar emocional. El síndrome del burnout puede tener consecuencias muy negativas en nuestro cuerpo y mente, por lo tanto, es importante que acudas a un especialista para que te sugiera nuevas dinámicas y así mejorar tu ambiente laboral."
    }
  }
}
