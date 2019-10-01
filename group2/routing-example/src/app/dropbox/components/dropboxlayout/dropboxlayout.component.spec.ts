import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropboxlayoutComponent } from './dropboxlayout.component';

describe('DropboxlayoutComponent', () => {
  let component: DropboxlayoutComponent;
  let fixture: ComponentFixture<DropboxlayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropboxlayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropboxlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
