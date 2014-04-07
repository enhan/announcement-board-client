'use strict';

describe('Service: Announcements', function () {

  // load the service's module
  beforeEach(module('announcementBoardClientApp'));

  // instantiate service
  var Announcements;
  beforeEach(inject(function (_Announcements_) {
    Announcements = _Announcements_;
  }));

  it('should do something', function () {
    expect(!!Announcements).toBe(true);
  });

});
