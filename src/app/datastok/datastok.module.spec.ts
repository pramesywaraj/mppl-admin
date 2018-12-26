import { DatastokModule } from './datastok.module';

describe('DatastokModule', () => {
  let datastokModule: DatastokModule;

  beforeEach(() => {
    datastokModule = new DatastokModule();
  });

  it('should create an instance', () => {
    expect(datastokModule).toBeTruthy();
  });
});
