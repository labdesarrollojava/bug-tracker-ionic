import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-entities',
  templateUrl: 'entities.page.html',
  styleUrls: ['entities.page.scss']
})
export class EntitiesPage {
  entities: Array<any> = [
    {name: 'Label', component: 'LabelPage', route: 'label'},
    {name: 'Project', component: 'ProjectPage', route: 'project'},
    {name: 'Ticket', component: 'TicketPage', route: 'ticket'},
    /* jhipster-needle-add-entity-page - JHipster will add entity pages here */
  ];

  constructor(public navController: NavController) {}

  openPage(page) {
    this.navController.navigateForward('/tabs/entities/' + page.route);
  }

}
