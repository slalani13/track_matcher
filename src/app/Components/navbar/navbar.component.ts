import { Component, OnInit } from '@angular/core';
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

  constructor(private router: Router) {
    this.tabActive = new Map([
      [Tabs.Settings, false],
      [Tabs.HowTo, false],
      [Tabs.Home, false],
      [Tabs.Leaderboard, false],
      [Tabs.Modes, false]
    ]);
  }

  ngOnInit(): void {}

  toggleDarkMode(): void {
    document.documentElement.classList.toggle('dark');
  }

  // Toggle based on the selected enum value
  toggleMenu(tab:Tabs): void {

    // activate selected popup
    if (this.tabActive.get(tab)){
      this.tabActive.set(tab, false);
    }
    else{
      this.tabActive.set(tab, true);
    }

  }

  tabClosed(tab: Tabs) {
    this.tabActive.set(tab, false);
  }

}
