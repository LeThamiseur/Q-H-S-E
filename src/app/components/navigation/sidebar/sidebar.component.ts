import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  activeMenu: string | null = null;
  sidebarVisible: boolean = false;

  constructor(private router: Router) {
    // Listen for route changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setActiveMenuOnRouteChange(event.urlAfterRedirects);
      }
    });
  }

  ngOnInit(): void {
    // Set active menu on initial load
    this.setActiveMenuOnRouteChange(this.router.url);
  }

  toggleMenu(menu: string): void {
    this.activeMenu = this.activeMenu === menu ? '' : menu;
  }

  setActiveMenu(menu: string): void {
    this.activeMenu = menu;
  }

  private setActiveMenuOnRouteChange(url: string): void {
    if (url.startsWith('/evenements') || url.startsWith('/plan_action')) {
      this.activeMenu = 'incidents';
    } else if (url.startsWith('/equipement') || url.startsWith('/dotation')) {
      this.activeMenu = 'equipements';
    } else if (url.startsWith('/SD') || url.startsWith('/RP') || url.startsWith('/uniteTrav')) {
      this.activeMenu = 'duer';
    } else if (url.startsWith('/Projets') || url.startsWith('/Habilitations') || url.startsWith('/Fournisseurs') || url.startsWith('Carto')) {
      this.activeMenu = 'Suivie des projets';
    }
    else {
      this.activeMenu = 'home';
    }
  }

  // Pour basculer la visibilité du sidebar sur les petits écrans
  toggleSidebar(): void {
    this.sidebarVisible = !this.sidebarVisible;
    const sidebar = document.querySelector('.sidebar');
    if (this.sidebarVisible) {
      sidebar?.classList.add('show');
    } else {
      sidebar?.classList.remove('show');
    }
  }

}
