import {afterNextRender, Component, inject, NgZone} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CanvaService} from "./service/canva.service";
import {gsap} from "gsap";

import {ScrollTrigger} from "gsap/ScrollTrigger";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  canva = inject(CanvaService)
  ngZone = inject(NgZone)

  constructor() {

    afterNextRender(() => {
      this.ngZone.runOutsideAngular(() => {
        import("./class/Scenes").then(({Scenes}) => {
          this.canva.canva = new Scenes();

          gsap.registerPlugin(ScrollTrigger);

          gsap.timeline({

            scrollTrigger: {
              onEnter: () => {
                this.canva.setColor(CanvaService.secondColor)
                this.canva.setSpeed(0.01)
                this.canva.setDensity(6)
              },
              onLeaveBack: () => {
                this.canva.setColor(CanvaService.defaultColor)
                this.canva.setSpeed(0.1)
                this.canva.setDensity(2)
              },
              trigger: ".title",
              scrub: true,
              end: "+=600"
            }
          }).to(this.canva.canva.scene.position, {
            x: -1.5
          })
          gsap.timeline({

            scrollTrigger: {
              refreshPriority: 10,

              onEnter: () => {
                this.canva.setColor(CanvaService.thirdColor)
                this.canva.setSpeed(0.01)
                this.canva.setDensity(3.5)
              },

              onLeaveBack: () => {
                this.canva.setColor(CanvaService.secondColor)
                this.canva.setSpeed(0.01)
                this.canva.setDensity(6)
              },
              trigger: ".aboutme",
              scrub: true,
              end: "+=600"
            }
          }).to(this.canva.canva.scene.position, {
            x: 1.5
          })

          let rot = gsap.timeline().to(this.canva.canva.scene.rotation, {
            y: 2,

            scrollTrigger: {
              start: "top top",
              end: "bottom bottom",
              scrub: true
            }
          })

        })

      });
    })

  }

}
