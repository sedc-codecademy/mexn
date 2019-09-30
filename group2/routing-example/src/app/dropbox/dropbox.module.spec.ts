import { DropboxModule } from './dropbox.module';

describe('DropboxModule', () => {
  let dropboxModule: DropboxModule;

  beforeEach(() => {
    dropboxModule = new DropboxModule();
  });

  it('should create an instance', () => {
    expect(dropboxModule).toBeTruthy();
  });
});
