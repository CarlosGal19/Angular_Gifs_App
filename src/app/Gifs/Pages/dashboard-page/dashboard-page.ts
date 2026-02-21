import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarMenu } from "../../components/side-bar-menu/side-bar-menu";

@Component({
  selector: 'dashboard-page',
  imports: [RouterOutlet, SideBarMenu],
  templateUrl: './dashboard-page.html',
})
export default class DashboardPage { }
