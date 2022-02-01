import { Component, OnInit } from '@angular/core';
import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {

  usuario$ = this.autenticacaoFirebaseService.usuarioLogado$;

  constructor(private autenticacaoFirebaseService:  AutenticacaoFirebaseService ) { }

  ngOnInit(): void {
  }

}
