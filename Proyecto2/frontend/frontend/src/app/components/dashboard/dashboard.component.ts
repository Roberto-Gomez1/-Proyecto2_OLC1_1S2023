import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';

export interface Errores{
  line:number,
  column:number,
  type:number,
  message:string
}

interface Ventana{
  nombre:string;
  code:string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public archivos: any = []
  entrada: string;
  salidaeeee: string = "";
  ImagePath: string = "";
  ASTstring:string = "";

  constructor(private service: UserService, private _router:Router) { this.entrada = "de unaaaa" }
      
  ngOnInit(): void {
  }


  CapturarArchivo(event:any, index:any){
    try {
      let a =event.target.files[0]
      let text=""
      if(a){
          let reader=new FileReader()
          reader.onload=ev=>{
          const resultado=ev.target?.result
          text=String(resultado)
          console.log(text.toString());
          this.entrada = text.toString();
          index.textarea.value = text.toString();
        }
        reader.readAsText(a)
      }
    } catch (error) {
      console.log(error);
    }
  }

  AbrirArchivo(archivo:HTMLInputElement){
    
    archivo.click();
    
  }

  AbrirAST(){
    console.log("Aqui saldra el arbol");
    this.ImagePath = '/myfirstProject/servidor.png'
  }

  GuardarArchivo(index:any){
    try {
      let nombre = "ventana1" + ".olc";
      let content = index.textarea;
      let type = "text/plain";
        this.DescargarArchivo(content, nombre, type);
        console.log("SE HA GUARDADO");
    } catch (error) {
      console.log("Hola");
      
    }
    
  }


  DescargarArchivo(content:string, fileName:string,contenType:string)
  {
    var a = document.createElement("a");
    var archivo = new Blob([content], {type: contenType});
    a.href = URL.createObjectURL(archivo);
    a.download = fileName;
    a.click();
  }

  mostrar(valor:string) {
    console.log(valor);
  }

  getAst2(){
    this.service.probando().subscribe(
      (res)=>{
        console.log(res);
        
      },
      (err)=>{
        console.log(err);
        
      }
    )
  }

  setdata(values:any):void{
    console.log("values", values.txtarea);
    var json={
      "peticion": values.textarea
    }
    this.service.setdata(json).subscribe(
      (res)=>{
        console.log(res);
        alert("Archivo Analizado con exito")
      }, (err)=>{
        console.log(err);
      }
    )
    
  }

  VerErrores(index:any):void{
    //private _errores:Array<Errores> = new Array();
    var json={
      "peticion": index.textarea
    }
    this.service.seterrores(json).subscribe(
      (res)=>{
        this.service.seterrores(res);
        console.log(res);

        alert(res.toString())
      }, (err)=>{
        console.log(err);
      }
    )
  }

  VerErrores1(){
    this.service.probandoerrores().subscribe(
      (res)=>{
        console.log(res);
        var prueba = res;
        
        var errors = document.getElementById('errors');
        this.salidaeeee += res;
        alert("Reporte Generado");
        //this._router.navigate(['errores']);
      },

      (err)=>{
        console.log(err);
      }
    )
    }


    GenerarErrores(){
    //this.servicio.setErrores(this.tablaError);
    this._router.navigate(['errores']);
  }

  Ultimo(){
    console.log(this.salidaeeee);
  }



}
