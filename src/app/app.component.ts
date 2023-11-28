import { Component } from '@angular/core';
import { FormControl ,FormGroup, Validators} from '@angular/forms'
import { ApiServiceService } from './Service/api-service.service';
import {  Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GitHubRepositoryProject';

  searchBar = new FormGroup({
    username: new FormControl('', Validators.required),
  })
  loader = false;
  userProfile: any;
  error: any;
  constructor (private gitServiceApi : ApiServiceService , private router : Router){}

  search(){
    if (this.searchBar.valid) {
      const username = this.searchBar.value.username;
      this.loader = true;

      this.gitServiceApi.getUser(username).subscribe((users) => {
        console.log(users);
        this.userProfile = users;
        this.loader = false;
        this.router.navigate(['/repository', { user: username }]);
      },

        ((error) => {
          console.error(error);
          this.loader = false;
          if (error.status === 404) {
            this.error = "ures not found";
            this.router.navigate(['/user-not-found',{ user: username}])

          } else {
            this.router.navigate(['/user-not-found',{ user: username}])
            this.error = 'An error occurred. Please try sometime later...';
          }
        })
      );
    }
   
  }

  

}
