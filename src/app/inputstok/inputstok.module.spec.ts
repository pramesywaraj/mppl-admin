import { InputstokModule } from './inputstok.module';

describe('InputstokModule', () => {
  let inputstokModule: InputstokModule;

  beforeEach(() => {
    inputstokModule = new InputstokModule();
  });

  it('should create an instance', () => {
    expect(inputstokModule).toBeTruthy();
  });
});
