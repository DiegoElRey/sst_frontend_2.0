import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { jsPDF } from "jspdf";
@Component({
  selector: 'app-metodologia-arbol',
  templateUrl: './metodologia-arbol.component.html',
  styleUrls: ['./metodologia-arbol.component.css']
})
export class MetodologiaArbolComponent implements OnInit {
  causas: string[] = [''];
  efectos: string[] = [''];
  causa = new FormControl('')
  problema = new FormControl('')
  efecto = new FormControl('')
  c: string = ''
  p: string = ''
  e: string = ''
  constructor() { }
  
  ngOnInit(): void {
  }
  agregarProblema(event: Event){
    event.preventDefault()
    this.p = this.problema.value + '';
  }
  agregarCausa(event: Event){
    event.preventDefault()
    this.c = this.causa.value + '';
    this.causas.push(this.c)
  }
  
  agregarEfecto(event: Event){
    event.preventDefault()
    this.e = this.efecto.value + '';
    this.efectos.push(this.e)
  }

  generarPdf(){
    const pdf = new jsPDF();
    var url = pdf.loadFile('assets/images/others/arbol2.png');
    pdf.addImage(url,10,10,0,200)
    pdf.text('Efectos',10,80)
    pdf.text(this.efectos[0],30,40)
    pdf.text(this.efectos[1],50,60)
    pdf.text(this.efectos[2],80,40)
    pdf.text(this.efectos[3],120,60)
    pdf.text(this.efectos[4],150,50)
    pdf.text(this.efectos[5],60,80)
    // pdf.text(this.efectos[6],110,90)
    // pdf.text(this.efectos[7],80,100)
    pdf.text(this.p,100,150)
    pdf.text('Problema',10,150)
    pdf.text(this.causas[0],30,180)
    pdf.text(this.causas[1],50,200)
    pdf.text(this.causas[2],80,185)
    pdf.text(this.causas[3],100,195)
    pdf.text(this.causas[4],80,200)
    pdf.text(this.causas[5],60,190)
    pdf.text('Causas',10,180)
    // pdf.text(this.causas[6],110,180)
    // pdf.text(this.causas[7],80,185)
    pdf.save("arbolDeCausas.pdf");
  }
}
