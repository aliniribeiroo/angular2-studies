import {GiphySearchService} from "../giphy-search.service";
import createSpyObj = jasmine.createSpyObj;

describe('giphy-search.service.spec.ts', () => {

  const httpMock = jasmine.createSpyObj('Http', [ 'get' ]);

  let service: GiphySearchService;

  beforeEach(() => {
    service = new GiphySearchService(httpMock);
  });

  it ( 'SearchGiphy', () => {
    service.searchGiphy('10', 'Happy');
    expect(httpMock.get).toHaveBeenCalled();
    expect(httpMock.get).toHaveBeenCalledWith('https://api.giphy.com/v1/gifs/search?q=Happy&api_key=dc6zaTOxFJmzC&limit=10')
  });

  it('getURL', () => {
    const url = service.getUrl('10', 'Happy');

    expect(url).toBe('https://api.giphy.com/v1/gifs/search?q=Happy&api_key=dc6zaTOxFJmzC&limit=10');
  })
})
