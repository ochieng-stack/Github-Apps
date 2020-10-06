import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-github-repo',
  templateUrl: './github-repo.component.html',
  styleUrls: ['./github-repo.component.css']
})
export class GithubRepoComponent implements OnInit {
   @Input() githubRepos:any[];
  constructor() { }

  ngOnInit(): void {
  }

}
