import { Injectable, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  getAuth,
} from 'firebase/auth';
import { authState } from 'rxfire/auth';
import { from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoFirebaseService implements OnInit {
  usuarioLogado$ = authState(this.usuarioFb);

  constructor(private usuarioFb: Auth) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  loginUsuario(usuarioEmail: string, usuarioSenha: string) {
    return from(
      signInWithEmailAndPassword(this.usuarioFb, usuarioEmail, usuarioSenha)
    );
  }
  sairLogin() {
    return from(this.usuarioFb.signOut());
  }

  cadastrarUsuario(nome: string, email: string, senha: string) {
    return from(
      createUserWithEmailAndPassword(this.usuarioFb, email, senha)
    ).pipe(switchMap(({ user }) => updateProfile(user, { displayName: nome })));
  }
}
