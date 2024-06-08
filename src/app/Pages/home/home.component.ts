import { Component } from '@angular/core';
import { ContactComponent } from "../../Components/contact/contact.component";
import { NavBarComponent } from '../../Components/nav-bar/nav-bar.component';
import { HeroComponent } from "../../Components/hero/hero.component";
import { FooterComponent } from '../../Components/footer/footer.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [NavBarComponent, HeroComponent, FooterComponent, ContactComponent]
})
export class HomeComponent {

}
