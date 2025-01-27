import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoryNavbarComponent } from '@layouts/category-navbar/category-navbar.component';
import { FooterComponent } from '@layouts/footer/footer.component';
import { HeaderComponent } from '@layouts/header/header.component';
import { PostCardComponent } from '@layouts/post-card/post-card.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { SinglePostComponent } from '@pages/single-post/single-post.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CategoryNavbarComponent, 
    FooterComponent, PostCardComponent, SubscriptionFormComponent, SinglePostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-blog-app';
}
