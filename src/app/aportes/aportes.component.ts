import { Component, OnInit } from '@angular/core';
import { Aportes } from '../model/aportes';

@Component({
  selector: 'app-aportes',
  templateUrl: './aportes.component.html',
  styleUrls: ['./aportes.component.css']
})
export class AportesComponent implements OnInit {

  aportes:Aportes=new Aportes();
  SMV:number=1000000;
  suma:Number=0;
  constructor() { }

  ngOnInit(): void {
  }

  salario: number = 0;
  tipoDeRiesgo:String = "";
  tipoDeTrabajador:String = "Trabajador dependiente."

  cambiarTipoEmpleado(valor:any){
    this.tipoDeTrabajador = valor
  }

  capturarSalario(){
    let aux=((this.aportes.Salario*40)/100);
    if( aux< this.SMV){
      this.aportes.IBC= this.SMV;
    }else if(aux>=this.SMV){
      this.aportes.IBC=aux;
    }
    this.aportes.TipoTrabajador = this.tipoDeTrabajador
    this.CapturarTipoRiesgo(this.tipoDeRiesgo);
    this.CalcularAportes();
  }



  CapturarTipoRiesgo(val:any){
    if(val=="I Riesgo mínimo"){
      this.aportes.ValotRiesgo=0.522;
    }else if(val=="II Riesgo bajo"){
      this.aportes.ValotRiesgo=1.044;
    }else if(val=="III Riesgo medio"){
      this.aportes.ValotRiesgo=2.436;
    }else if(val=="IV Riesgo alto"){
      this.aportes.ValotRiesgo=4.350;
    }else if(val=="V Riesgo máximo"){
      this.aportes.ValotRiesgo=6.960;
    }

  }

  CalcularAportes(){
    debugger
    if(this.aportes.TipoTrabajador=="Trabajador dependiente."){
     this.aportes.AFPE =( (this.aportes.Salario*12)/100);
     this.aportes.AFPT =( (this.aportes.Salario*4)/100);
     this.aportes.EPSE=( (this.aportes.Salario*8.5)/100);
     this.aportes.EPST=( (this.aportes.Salario*4)/100);
     this.aportes.ARLE=( (this.aportes.Salario*this.aportes.ValotRiesgo)/100);
     this.aportes.ARLT=0;
    
    }else if(this.aportes.TipoTrabajador=="Trabajador independiente."){
      this.aportes.AFPE = 0;
      this.aportes.AFPT =( (this.aportes.IBC*16)/100);
      this.aportes.EPSE=0;
      this.aportes.EPST=( (this.aportes.IBC*12.5)/100);
      if((this.aportes.ValotRiesgo==0.522 ) || (this.aportes.ValotRiesgo ==1.044) || (this.aportes.ValotRiesgo==2.436)){
        this.aportes.ARLE=0;
        this.aportes.ARLT=( (this.aportes.IBC*this.aportes.ValotRiesgo)/100);
      }else{
        this.aportes.ARLE=( (this.aportes.IBC*this.aportes.ValotRiesgo)/100);
        this.aportes.ARLT=0;
      }
    }
    this.aportes.SubtotalEmpleador=(this.aportes.AFPE+this.aportes.EPSE+this.aportes.ARLE);
    this.aportes.SubtotalTrabajador=( this.aportes.AFPT+ this.aportes.EPST+this.aportes.ARLT);
    this.aportes.Total=(this.aportes.SubtotalEmpleador+this.aportes.SubtotalTrabajador);
    //alert("Total: "+this.aportes.Total+ " SubTotalEmpleador: "+ this.aportes.SubtotalEmpleador+ " subTotalTrabajador: " + this.aportes.SubtotalTrabajador)
  }
}
