import { Component } from '@angular/core';
import { user } from './githubMockup';
import { User } from './githubUser';
import { GithubService } from './github.service'

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrl: './github.component.css'
})
export class GithubComponent {

  User!: User;       //Ayto einai aparadekto tha prepei na sto dinei ena repository service
  SearchName!: string;


  constructor(private githubService: GithubService) {   //Declaration githubService , instantiation, DI


  }

  ShowUser() {

    this.githubService.getUser(this.SearchName).subscribe(
      data => this.User = data,               //OnSucess or onFullFilled
      error => console.log(error),            //OnError 
      () => console.log("Teleiose i diadikasia")     //OnAlways       

    );



  }

}
