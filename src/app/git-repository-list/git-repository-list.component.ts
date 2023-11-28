import { Component } from '@angular/core';
import { ApiServiceService } from '../Service/api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-git-repository-list',
  templateUrl: './git-repository-list.component.html',
  styleUrls: ['./git-repository-list.component.scss']
})
export class GitRepositoryListComponent {

  username: any;
  users: any;
  language: any;
  repos: any[] = [];

  pageItems: any[] = [];
  pageSize: number = 10;
  currentPages: number = 1;
  loader = true;
  totalcount = 10;

  constructor (private githubService : ApiServiceService, private route : ActivatedRoute) {
    this.route.paramMap.subscribe((users)=>{
      this.username = users.get('user');
      this.updatePages();
      this.updatePageItems();
    });
  }

  updatePageItems() {
    const startIndex = (this.currentPages - 1) * this.pageSize;
    this.pageItems = this.repos.slice(startIndex, startIndex + this.pageSize);
  }

  pageChanges(event: any) {
    this.currentPages = event;
    this.updatePageItems();
  }



  updatePages() {

    this.githubService.getUser(this.username).subscribe((data) => {
      setTimeout(() => {
        this.users = data
        this.loader = false;
      }, 1000);
      
    })

    this.githubService.getRepos(this.username).subscribe((data) => {
      console.log(data);
      this.repos = data;
      this.updatePageItems();
    })
  }

  updatePage(event: any) {
    this.username = event;
    this.updatePages();
  }



}
