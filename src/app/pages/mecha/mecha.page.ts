import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Mech } from 'src/app/interfaces/interfaces';
import { NavCustomEvent } from '@ionic/angular';
import { RangeValue } from '@ionic/core';


@Component({
  selector: 'app-mecha',
  templateUrl: './mecha.page.html',
  styleUrls: ['./mecha.page.scss'],
})
export class MechaPage implements OnInit {

  @Input() code: string;
  @Input() activeMech: Mech;
  @Output() dangerEvent = new EventEmitter<boolean>();

  mecha: Mech;
  minhp: number = 0;
  minmp: number = 0;

  icon1: string;
  icon2: string;
  icon3: string;

  powerSelected: boolean;
  powerName: string;
  powerDesc: string;
  selectedPowerIcon: string;

  constructor() { }

  lastEmittedValueHP: RangeValue;
  lastEmittedValueMP: RangeValue;

  ngOnInit() {
    this.mecha = this.activeMech;
    this.lastEmittedValueHP = this.mecha.HP;
    this.lastEmittedValueMP = this.mecha.MP;
    this.icon1 = this.mecha.power1_icon;
    this.icon2 = this.mecha.power2_icon;
    this.icon3 = this.mecha.power3_icon;
    this.powerSelected = false;
  }

  onIonChangeHP(ev: Event) {
    this.lastEmittedValueHP = (ev as NavCustomEvent).detail.value;
    if (this.lastEmittedValueHP < 150) {
      this.addDanger(true);
    }
    else {
      this.addDanger(false);
    }
  }

  addDanger(value: boolean){
    this.dangerEvent.emit(value);
  }

  onIonChangeMP(ev: Event) {
    this.lastEmittedValueMP = (ev as NavCustomEvent).detail.value;
  }

  getPower1(){
    this.powerName = this.mecha.power1_name;
    this.powerDesc = this.mecha.power1_desc;
    this.selectedPowerIcon = this.mecha.power1_icon;
    this.powerSelected = true;
  }

  getPower2(){
    this.powerName = this.mecha.power2_name;
    this.powerDesc = this.mecha.power2_desc;
    this.selectedPowerIcon = this.mecha.power2_icon;
    this.powerSelected = true;
  }

  getPower3(){
    this.powerName = this.mecha.power3_name;
    this.powerDesc = this.mecha.power3_desc;
    this.selectedPowerIcon = this.mecha.power3_icon;
    this.powerSelected = true;
  }

  launch(){
    this.mecha.MP = this.mecha.MP - 1;
    if(this.mecha.MP <= 0){
      this.mecha.MP = 0;
    }
  }
}
