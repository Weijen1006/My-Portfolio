import { Component, OnInit } from '@angular/core';
import { RouterLink, Router, IsActiveMatchOptions } from '@angular/router';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NzMenuModule, NzIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  constructor(private router : Router) {
  }

  ngOnInit(): void {}

  // Function to check if the current route is active
  isActiveRoute(route: string): boolean {
    const matchOptions: IsActiveMatchOptions = { 
      paths: 'exact',      // Match the exact path
      queryParams: 'exact', // Match query parameters exactly
      fragment: 'ignored',  // Ignore the fragment (hash) part of the URL
      matrixParams: 'ignored' // Ignore matrix parameters (optional parameters in paths)
    };

    return this.router.isActive(route, matchOptions);
  }

  onClickAbout(): void {
    console.log("user clicked")
  }
}
