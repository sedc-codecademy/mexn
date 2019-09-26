import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileListingComponent } from './file-listing.component';

describe('FileListingComponent', () => {
  let component: FileListingComponent;
  let fixture: ComponentFixture<FileListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
