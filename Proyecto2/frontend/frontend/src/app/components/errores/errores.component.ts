import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-errores',
  templateUrl: './errores.component.html',
  styleUrls: ['./errores.component.css']
})
export class ErroresComponent implements OnInit {

  htmlContent = this.prueba.salidaeeee;
  
  constructor(private service:UserService, private prueba: DashboardComponent) {  }

  ngOnInit(): void {
  }

  VerErrores2(){
    this.service.probandoerrores().subscribe(
      (res)=>{
        console.log(res);
        let salida = res
        //let htmlContent = res;
        let prueba = document.getElementById('salidaerrores');
        //document.getElementById('salidaerrores')?.innerHTML;
        //var errors = document.getElementById('errors');
        //errors.innerHTML = res;
        //alert("Reporte Generado");
        //this._router.navigate(['errores']);
      },

      (err)=>{
        console.log(err);
      }
    )
    }

  // VerErrores1(){
  //   this.service.probandoerrores().subscribe(
  //     (res)=>{
  //       console.log(res);
  //       //var errors = document.getElementById('errors');
  //       //errors.innerHTML = res;
  //       alert("Reporte Generado");
  //       //this._router.navigate(['errores']);
  //     },

  //     (err)=>{
  //       console.log(err);
  //     }
  //   )
  //   }



  


}
