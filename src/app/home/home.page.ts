import { Component, Output } from '@angular/core';
import { Mech } from '../interfaces/interfaces';
import mechsData from '../../assets/data/mechs.json';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  mechs: any[] = mechsData;
  selectedMech: boolean = false;
  code: string;
  activeMech: Mech;
  isDanger: boolean = false;

  //@Output() danger: boolean;
 
  constructor() { }

  ngOnInit() {
  }

  setMech(){
    this.selectedMech = true;
    // if (this.code == 'EZ10'){
    //   this.activeMech = this.mechs[0];
    // }
    switch(this.code) {
      case 'EZ10': 
        this.activeMech = this.mechs[0];
        break;
      case 'T174': 
        this.activeMech = this.mechs[1];
        break;
      case '54M4': 
        this.activeMech = this.mechs[2];
        break;
      case 'D473': 
        this.activeMech = this.mechs[3];
        break;
      case 'M170': 
        this.activeMech = this.mechs[4];
        break;
      case 'VU40': 
        this.activeMech = this.mechs[5];
        break;
      case '4T50': 
        this.activeMech = this.mechs[6];
        break;
    }
  }

  addItem(danger: boolean) {
    this.isDanger = danger;
  }

}
