import { Component, OnInit } from '@angular/core';

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
  
  tabActive: Map<Tabs, boolean> = new Map([
    [Tabs.Settings, false],
    [Tabs.HowTo, false],
    [Tabs.Home, false],
    [Tabs.Leaderboard, false],
    [Tabs.Modes, false]
  ]);

  constructor() {}

  ngOnInit(): void {}

  toggleDarkMode(): void {
    document.documentElement.classList.toggle('dark');
  }


  // Toggle based on the selected enum value
  toggleMenu(tab:Tabs): void {

    // Reset all tabs to false
    this.tabActive.forEach((_, key) => this.tabActive.set(key, false));

    // activate selected popup
    this.tabActive.set(tab, true);

  }

  updateTabActive(tab: Tabs, isActive: boolean) {
    this.tabActive.set(tab, isActive);
  }

}
