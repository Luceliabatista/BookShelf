import { Injectable, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from 'firebase/auth';
import { authState } from 'rxfire/auth';
import { from, pipe, switchMap } from 'rxjs';
import { GoogleAuthProvider, signInWithPopup, getAuth} from "firebase/auth";

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

  loginGoogle(){

  const provider = new GoogleAuthProvider();

  const auth = getAuth();
  signInWithPopup(auth, provider).then((result)=>{
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential!.accessToken;
    const user = result.user
  }).catch((error)=>{
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(credential, email,  errorMessage, errorCode )
  })}

}
