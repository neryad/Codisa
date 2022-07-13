import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', '../../../../styles.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  onSales = ['Casas', 'Apartamentos', 'Oficinas', 'Desarrollos' ,'nuevos'];
  onRents = ['Brokers', 'Dueños'];
  mortgages= ['Entidades financieras', 'Buscar preaprobación']
  needHelp = ['Guías para comprar una propiedad']

  ngOnInit(): void {
  }

}
