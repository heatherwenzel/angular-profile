import { Component, OnInit } from "@angular/core";
import { ProfileServiceService } from "../profile-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile-component",
  templateUrl: "./profile-component.component.html",
  styleUrls: ["./profile-component.component.css"]
})
export class ProfileComponentComponent implements OnInit {
  userProfile: any;

  constructor(private profileService: ProfileServiceService, private router: Router) {}

  ngOnInit() {
    this.userProfile = this.profileService.getUserProfile();
  }

  editProfile() {
    this.router.navigate(['/edit-profile']);
  }
}
