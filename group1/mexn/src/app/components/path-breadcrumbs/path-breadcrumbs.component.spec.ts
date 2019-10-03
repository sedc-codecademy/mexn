import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathBreadcrumbsComponent } from './path-breadcrumbs.component';

describe('PathBreadcrumbsComponent', () => {
  let component: PathBreadcrumbsComponent;
  let fixture: ComponentFixture<PathBreadcrumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathBreadcrumbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
