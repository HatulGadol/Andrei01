import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/UserModel';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  public usr: UserModel;
  constructor() 
  {
    
  }

  ngOnInit(): void 
  {
    this.usr = new UserModel(346, "Hatul01", "hatulSTRUDELgmail");
    this.usr.inf.firstName ="Polievt";
    this.usr.inf.lastName ="Skoropulkin";
    this.usr.inf.jobTitle ="Junior Magician";
    this.usr.inf.phoneNumber = "054-678-99-89";
    this.usr.inf.avatar ="tyuyuuii";

  }

}
