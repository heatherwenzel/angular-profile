import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { ProfileComponentComponent } from "./profile-component/profile-component.component";
import { EditComponentComponent } from "./edit-component/edit-component.component";
import { ProfileServiceService } from "./profile-service.service";
import { FormsModule } from "@angular/forms";

const appRoutes: Routes = [
  { path: "profile", component: ProfileComponentComponent },
  { path: "edit-profile", component: EditComponentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponentComponent,
    EditComponentComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule],
  providers: [ProfileServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
