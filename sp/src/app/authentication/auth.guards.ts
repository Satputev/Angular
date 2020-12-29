import {Injectable} from '@angular/core';
@Injectable ({
  providedIn: 'root'
})
export class AuthGuards {
  canActivate(): boolean {
    return confirm('Do you want to enter into first component??');
  }
  canDeactivate(): boolean {
return confirm(' Do you want to leave second component ???');
  }
canActivateChild(): boolean {
return confirm('Do you want to enter into child three component ??');
}
}
