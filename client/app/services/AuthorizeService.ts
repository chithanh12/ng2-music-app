import {Injectable, provide} from 'angular2/core'

@Injectable()
export class AuthService{
    login(username:string, password:string): boolean{
        if(username === 'admin' && password === 'admin@123'){
            localStorage.setItem('username', username);
            return true;
        }
        return false;
    }
    getUser(): any{
        return  localStorage.getItem('username');
    }
    logout():void{
        localStorage.removeItem('username');
    }
    isLogged():boolean{
        return this.getUser() !== null;
    }
}
export var AUTH_PROVIDERS: Array<any> = [
    provide(AuthService, {useClass: AuthService})
];