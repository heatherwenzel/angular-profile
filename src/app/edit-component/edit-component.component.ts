import { Component, OnInit } from "@angular/core";
import { ProfileServiceService } from "../profile-service.service";

@Component({
  selector: "app-edit-component",
  templateUrl: "./edit-component.component.html",
  styleUrls: ["./edit-component.component.css"]
})
export class EditComponentComponent implements OnInit {
  userProfile: any;

  constructor(private profileService: ProfileServiceService) {}

  ngOnInit() {
    this.userProfile = this.profileService.getUserProfile();
  }

  setUserProfile(newProfile) {
    this.profileService.setUserProfile(newProfile);
  }
}
