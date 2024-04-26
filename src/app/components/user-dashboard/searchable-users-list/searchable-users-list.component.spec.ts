import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchableUsersListComponent } from './searchable-users-list.component';

describe('SearchableUsersListComponent', () => {
  let component: SearchableUsersListComponent;
  let fixture: ComponentFixture<SearchableUsersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchableUsersListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchableUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
