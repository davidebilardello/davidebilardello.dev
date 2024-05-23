import {Injectable} from '@angular/core';
import {Scenes} from "../class/Scenes";

@Injectable({
  providedIn: 'root'
})
export class CanvaService {

  canva!: Scenes

  constructor() {
  }

  setColor(color: number) {

    this.canva.color= color

    this.canva.updateElement()

  }

}
