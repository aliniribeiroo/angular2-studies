import {PersonTypePipe} from "../type-person.pipe";

describe('type-person.pipe.ts', () => {

  let typePersonPipe: PersonTypePipe = new PersonTypePipe();

  it('Should return PJ', ()=> {
    expect(typePersonPipe.transform('J')).toEqual('Pessoa Jurídica');
  });

  it('Should return PF', ()=> {
    expect(typePersonPipe.transform('J')).toEqual('Pessoa Física');
  });

  it('Should return' , ()=> {
    expect(typePersonPipe.transform('x')).toEqual('');
  });

})
