import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-metodologia',
  templateUrl: './metodologia.component.html',
  styleUrls: ['./metodologia.component.css']
})
export class MetodologiaComponent implements OnInit {
  
  constructor() { }
  what = new FormControl('')
  why = new FormControl('')
  who = new FormControl('')
  when = new FormControl('')
  where = new FormControl('')
  how = new FormControl('')
  howm = new FormControl('')
  w1: string = ''
  w2: string = ''
  w3: string = ''
  w4: string = ''
  w5: string = ''
  w6: string = ''
  w7: string = ''
  ngOnInit(): void {
    
  }

  agregarPregunta1(event: Event){
    event.preventDefault()
    this.w1 = this.what.value + ''
  }
  agregarPregunta2(event: Event){
    event.preventDefault()
    this.w2 = this.why.value + ''
  }
  agregarPregunta3(event: Event){
    event.preventDefault()
    this.w3 = this.where.value + ''
  }
  agregarPregunta4(event: Event){
    event.preventDefault()
    this.w4 = this.when.value + ''
  }
  agregarPregunta5(event: Event){
    event.preventDefault()
    this.w5 = this.who.value + ''
  }
  agregarPregunta6(event: Event){
    event.preventDefault()
    this.w6 = this.how.value + ''
  }
  agregarPregunta7(event: Event){
    event.preventDefault()
  this.w7 = this.howm.value + ''    
  }
  generarPdf(){
    const pdf = new jsPDF();
    pdf.text('Metodología 5w-2h', 85, 10)
    autoTable(pdf, {html:'.table'})
    pdf.save('5w_2h.pdf')
  }
}
