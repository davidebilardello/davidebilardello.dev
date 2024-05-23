import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

import {TextFont, TextType} from "./TypographyEnums";

@Component({
  selector: 'app-typography',
  standalone: true,
  imports: [],
  template: `
    <div [class]="classes">
      <ng-content></ng-content>
    </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypographyComponent implements OnInit {
  @Input()
  typeText: TextType = TextType.h2;

  @Input()
  fontText: TextFont = TextFont.QuicksandRegular;

  @Input()
  cssClasses: string = ""

  classes: string = ""

  fontSize: String = "";
  fontFamily: String = "";

  ngOnInit(): void {
    switch (this.typeText) {
      case TextType.button:
        this.fontSize = "text-sm tracking-widest"
        break
      case TextType.h1:
        this.fontSize = " text-5xl "
        break
      case TextType.h2:
        this.fontSize = " text-4xl"
        break
      case TextType.h3:
        this.fontSize = " text-3xl"
        break
      case TextType.h4:
        this.fontSize = "text-2xl"
        break
      case TextType.h5:
        this.fontSize = "text-xl"
        break
      case TextType.h6:
        this.fontSize = "text-lg"
        break
      case TextType.p:
        this.fontSize = "text-base"
        break
      case TextType.logo:
        this.fontSize = "text-7xl tablet:logo-size"
        break
      case TextType.bagde:
        this.fontSize = "  badge-size-sm  laptop:badge-size"
        break
    }

    switch (this.fontText) {

      case TextFont.QuicksandBold:
        this.fontFamily = "font-QuicksandBold"
        break;
      case TextFont.QuicksandRegular:
        this.fontFamily = "font-QuicksandRegular"
        break;
      case TextFont.QuicksandLight:
        this.fontFamily = "font-QuicksandLight"
        break;
      case TextFont.QuicksandMedium:
        this.fontFamily = "font-QuicksandMedium"
        break;
      case TextFont.QuicksandSemibold:
        this.fontFamily = "font-QuicksandSemibold"
        break;

    }

    this.classes = this.fontSize + " " + this.fontFamily+ " "+ this.cssClasses

  }

}
