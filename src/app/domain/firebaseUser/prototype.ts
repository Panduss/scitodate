import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';

export class FirebaseUser {
    public email = '';
    public password = '';
    public displayName?: string | null;
    public phoneNumber?: string | null;
    public photoURL?: string | null;
    public providerId?: string;
    public uid?: string;
    public token: Observable<string|null> = Observable.of(null);
}

export { FirebaseUser as FirebaseUserPrototype };
