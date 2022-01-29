import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  img = "https://i0.wp.com/www.linoresende.jor.br/wp-content/uploads/2022/01/Erro404-1.png?fit=1200%2C592&ssl=1"

  constructor() { }

  ngOnInit(): void {
  }

}
