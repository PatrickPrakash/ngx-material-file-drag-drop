import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMaterialFileDragDropComponent } from './ngx-material-file-drag-drop.component';

describe('NgxMaterialFileDragDropComponent', () => {
  let component: NgxMaterialFileDragDropComponent;
  let fixture: ComponentFixture<NgxMaterialFileDragDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMaterialFileDragDropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMaterialFileDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
