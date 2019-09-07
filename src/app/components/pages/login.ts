import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
    selector: 'app-login',
    templateUrl: '../../templates/pages/login.html',
    styleUrls: [ '../../styles/pages/login.scss' ]
})
class Login {

    public form: FormGroup;
    public submitted = false;
    public showPassword = false;
    public signUpError = '';

    public constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private firebase: AngularFireAuth
    ) {
        this.form = new FormGroup(
            {
                email: new FormControl('', [
                    Validators.required,
                    Validators.email ]),
                password: new FormControl('', [
                    Validators.required,
                    Validators.minLength(6)
                ])
            }
        );
    }

    public getForm() {
        return this.form.controls;
    }

    public login(): void {

        this.submitted = true;

        if (this.form.invalid) {
            return;
        }

        this.firebase.auth.signInWithEmailAndPassword(this.form.value.email, this.form.value.password).then(
            (res: any) => {
                this.router.navigate(['/menu']);
            },
            (error: Error) => {
                alert(`Something went wrong: ${error.message}`);
            }
        );
    }

}

export { Login as LoginPage };
