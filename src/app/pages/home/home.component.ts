import {afterNextRender, Component} from '@angular/core';
import {TypographyComponent} from "../../components/typography/typography.component";
import {TextFont, TextType} from "../../components/typography/TypographyEnums";
import {CanvaService} from "../../service/canva.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [

    TypographyComponent
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor() {
  }

  protected readonly TextFont = TextFont;
  protected readonly TextType = TextType;
  protected readonly window = window;
}
