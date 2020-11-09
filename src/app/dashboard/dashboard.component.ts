import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import { RepositoryService } from '../services/repository.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  githubUsername: String = '';
  userProfile = {
    avatar_url: "",
    bio: "",
    blog: "",
    company: "",
    created_at: "",
    email: "",
    events_url: "",
    followers: 0,
    followers_url: "",
    following: 0,
    following_url: "",
    gists_url: "",
    gravatar_id: "",
    hireable: null,
    html_url: "",
    id: 64461160,
    location: null,
    login: "",
    name: null,
    node_id: "",
    organizations_url: "",
    public_gists: 0,
    public_repos: 0,
    received_events_url: ",",
    repos_url: "",
    site_admin: false,
    starred_url: "",
    subscriptions_url: "",
    twitter_username: null,
    type: "",
    updated_at: "",
    url: ""
  }
  repos:[];
  constructor(private userService:UserService, private repoService: RepositoryService) {

  }

  ngOnInit(): void {
  }

  searchUser(){
    console.log(this.githubUsername);

    this.userService.getGithubUser(this.githubUsername).subscribe(response =>{

      this.userProfile= {...this.userProfile, ...response};

      //get the repos
      this.repoService.getRepos(this.userProfile.repos_url).subscribe(response =>{
        this.repos = response;
      });
    })


  }
}
