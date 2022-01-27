import { TestBed } from '@angular/core/testing';

import { NgxMaterialFileDragDropService } from './ngx-material-file-drag-drop.service';

describe('NgxMaterialFileDragDropService', () => {
  let service: NgxMaterialFileDragDropService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMaterialFileDragDropService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
