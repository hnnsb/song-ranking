import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {KeyValuePipe, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {User} from "../../models/user";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    NgForOf,
    KeyValuePipe,
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
  currentUser: User | undefined;
  imageUrl:string="";
  playlists: any;

  constructor(public userService: UserService) {

  }

  ngOnInit() {
    this.userService.getUser().subscribe(res=> {
      this.currentUser = res
      this.imageUrl = res.images[0].url
    })
    this.userService.getPlaylists().subscribe(res => {
      this.playlists = res
    })
  }

}
