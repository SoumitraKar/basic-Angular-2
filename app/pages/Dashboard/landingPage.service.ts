import { Injectable } from '@angular/core';
import { USERDETAILS } from './mock.landingPage';
import { landingPage } from './landingPage';

@Injectable()
export class landingPageService {
    getUserDetails() {
        return Promise.resolve(USERDETAILS);
    }
    addUserDetails(user: landingPage) {
        Promise.resolve(USERDETAILS).then((userDetails: landingPage[]) => userDetails.push(user));
    }
}