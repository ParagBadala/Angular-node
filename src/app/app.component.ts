import { Component } from '@angular/core';
import { UserService } from './user.service';
import { DataStruct } from './dataStruct';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  uname:string="";
  public data: DataStruct[] = []; 
  constructor(private user: UserService) { }
 
  getData(){
    this.user.getData().subscribe(data => this.data=data);
    console.log(this.data);
    return false;
  }
   postData() {
     //console.log(uname)
      this.user.postData(this.uname).subscribe();
    }
}
