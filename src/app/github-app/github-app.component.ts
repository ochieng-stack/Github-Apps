import { GithubRepoComponent } from './../github-repo/github-repo.component';
import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { error } from 'protractor';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit{

  public githubUserQuery:string;
  public githubProfile:any;
  public errorMessage:string;
  public githubRepos:any[];

  constructor(private githubService:GithubService) { }

  //to get git hub profile

  public searchUser(){
     this.githubService.getProfile(this.githubUserQuery).subscribe((data) => {
      this.githubProfile = data;
     } , (error) => {
       this.errorMessage = error;
     });

     //get the github repos
     this.githubService.getrepos(this.githubUserQuery).subscribe( (data) => {
       this.githubRepos = data;
     } , (error) => {
       this.errorMessage = error;
     });
  
    }

  ngOnInit(): void {
  }

}
