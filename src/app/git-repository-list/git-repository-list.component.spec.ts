import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitRepositoryListComponent } from './git-repository-list.component';

describe('GitRepositoryListComponent', () => {
  let component: GitRepositoryListComponent;
  let fixture: ComponentFixture<GitRepositoryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GitRepositoryListComponent]
    });
    fixture = TestBed.createComponent(GitRepositoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
