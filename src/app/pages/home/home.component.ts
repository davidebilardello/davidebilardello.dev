import {Component, HostListener, inject, signal} from '@angular/core';
import {TypographyComponent} from "../../components/typography/typography.component";
import {TextFont, TextType} from "../../components/typography/TypographyEnums";
import {ProjectComponent} from "../../components/project/project.component";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    TypographyComponent,
    ProjectComponent
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  window: any
  route = inject(ActivatedRoute);

  showNickName = signal(false);

  constructor() {
    this.route.queryParams.subscribe(params => {
      if (params['redirect'] === 'true') {
        this.showNickName.set(true);
      }
    });
  }

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    }
  }

  scrollToTop(): void {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    if (!this.window)
      this.window = window

  }

  protected readonly TextFont = TextFont;
  protected readonly TextType = TextType;
}
