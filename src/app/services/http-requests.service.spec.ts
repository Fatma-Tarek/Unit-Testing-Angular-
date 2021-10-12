import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpRequestsService } from './http-requests.service';

/*describe('HttpRequestsService', () => {
  let service: HttpRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});*/

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string
}

//  Fake Data
const postMock = {
  userId: 1,
  id: 2,
  title: 'my title',
  body: 'my body',
 // hello: 'world'
}

describe('HttpRequestsService', () => {
  let service: HttpRequestsService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
    service = TestBed.inject(HttpRequestsService)
  })

  it('should get the data successfully', (done: DoneFn) => {
    service.getPost(1).subscribe((post: Post) => {
      console.log(post);
      expect(post.id).toEqual(1);
      done();
    })
  })
})


describe('Authentication inside HttpRequest', () => {
  let service: HttpRequestsService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
    service = TestBed.inject(HttpRequestsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it("getPost must get data as expected", () => {
    service.getPost(1).subscribe((data: Post) => {
      console.log('data is', data)
      expect(data).toEqual(postMock)
    })
    const req = httpMock.expectOne(
      `https://jsonplaceholder.typicode.com/posts/1`
    );
    console.log('req is', req);
    expect(req.request.method).toEqual('GET')
    req.flush(postMock)
    httpMock.verify()
  })
});
