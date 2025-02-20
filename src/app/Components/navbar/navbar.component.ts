import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export enum Tabs {
  Settings,
  Modes,
  Home,
  HowTo,
  Leaderboard
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  Tabs = Tabs;
  
  tabActive: Map<Tabs, boolean> = new Map();
  current_tab:string = ""

  constructor(private router: Router) {
    this.current_tab = "Home"
    this.tabActive = new Map([
      [Tabs.Settings, false],
      [Tabs.HowTo, false],
      [Tabs.Home, false],
      [Tabs.Leaderboard, false],
      [Tabs.Modes, false]
    ]);
  }

  ngOnInit(): void {}

  toggleMenu(tab:Tabs): void {
    const isActive = this.tabActive.get(tab);

    if (isActive) {
        this.tabActive.set(tab, false);
    } else {
        // Set all tabs to false (close all popups)
        this.tabActive.forEach((_, key) => this.tabActive.set(key, false));
        // Activate the selected tab
        this.tabActive.set(tab, true);
    }

  }

  update_tabs(): void{
    this.tabActive.forEach((_, key) => this.tabActive.set(key, false));
  }

  navigateHome(): void {
    console.log('Navigating to Home...');
    this.router.navigate(['/']);
  }
}
