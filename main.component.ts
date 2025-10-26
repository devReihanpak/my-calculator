import { Component } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  adad:string='';
  apendadad(num:string){
    this.adad += num;
  }
  clear(){
    this.adad='';
  }
  calculate() {try{
    this.adad=eval(this.adad)}
      catch(e){
        this.adad='Error'
      }
    }
  }
  
