import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { disableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  objForm: FormGroup;
  datos:any[] = [];
  habilitar=true;
  deshabilitar=false;
  // is-valid
  // is-invalid

  get encabezado(): AbstractControl{
   return this.objForm.get('encabezado');
  }
  get consecutivo(): AbstractControl{
    return this.objForm.get('consecutivo');
   }
   get Prefijo(): AbstractControl{
    return this.objForm.get('Prefijo');
   }
   get numerores(): AbstractControl{
    return this.objForm.get('numerores');
   }
   get FechaInicio(): AbstractControl{
    return this.objForm.get('FechaInicio');
   }
   get FechaFin(): AbstractControl{
    return this.objForm.get('FechaFin');
   }
   get NumeroInicio(): AbstractControl{
    return this.objForm.get('NumeroInicio');
   }
   get NumeroFin(): AbstractControl{
    return this.objForm.get('NumeroFin');
   }
   get tipo_doc(): AbstractControl{
    return this.objForm.get('tipo_doc');
   }



  constructor(private fb: FormBuilder){

  }

  ngOnInit(): void {
    this.objForm = this.fb.group({
      encabezado:[null,[Validators.required, Validators.maxLength(50)]],
      consecutivo:[{ value: null, disabled: true }],
      Prefijo:[null,[Validators.required, Validators.maxLength(5)]],
      numerores:[{ value: null, disabled: true }],
      FechaInicio:[{ value: null, disabled: true }],
      FechaFin:[{ value: null, disabled: true }],
      NumeroInicio:[{ value: null, disabled: true }],
      NumeroFin:[{ value: null, disabled: true }],
      tipo_doc:[{ value: '0', disabled: true }],
    })


    this.objForm.disable();
  }

  save(): void{
    const FORM= this.objForm.getRawValue();
    this.datos.unshift(FORM)
    console.log(this.datos);
    this.objForm.reset();
    this.objForm.disable();
    this.habilitar=true;

  }

  delete(... fila:any): void{
    this.datos.splice(fila[0],1)
  }

  add(): void {
    this.encabezado.setValidators([Validators.required]);
    this.consecutivo.setValidators([Validators.required]);
    this.Prefijo.setValidators([Validators.required, Validators.maxLength(5)]);
    this.numerores.setValidators([Validators.required]);
    this.FechaInicio.setValidators([Validators.required]);
    this.FechaFin.setValidators([Validators.required]);
    this.NumeroInicio.setValidators([Validators.required]);
    this.NumeroFin.setValidators([Validators.required]);
    this.tipo_doc.setValidators([Validators.required]);
    this.objForm.enable();
    this.objForm.reset();
    this.habilitar=false;
    this.deshabilitar=true;
  }
  cancel():void{
    this.objForm.disable();
    this.objForm.reset()
    this.habilitar=true;
    this.deshabilitar=false;
}}

