import { Injectable } from "@angular/core";
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class ProfileServiceService {
  userProfile: any = {
    name: "Heather Wenzel",
    contactInfo: "heather@heatherwenzel.com",
    bio: "I like to drink chocolate milk and take naps"
  };

  constructor(private router: Router) {}

  getUserProfile() {
    return this.userProfile;
  }

  setUserProfile(newProfile) {
    this.userProfile = newProfile;this.router.navigate(['/profile']);
  }

  editProfile() {
    this.router.navigate(['/edit-profile']);
  }
}