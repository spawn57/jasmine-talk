var userRoute = require('../userRoute');
var userController = require('../userController');

describe('getUserDetails', function () {	
	it('getUserDetails', function () {
		var mockUser;
		mockUser = {};
		mockUser.getId = jasmine.createSpy('getid').and.returnValue(1);
		mockUser.getName = jasmine.createSpy('getName').and.returnValue('Sunil');
		
		spyOn(userController, 'getUser').and.returnValue(mockUser);
		
		var mockReq = {}
		mockReq.id = 1;
		
		var mockRes = {};
		mockRes.send = jasmine.createSpy('send');
		
		userRoute.getUserDetails(mockReq, mockRes);
		
		expect(userController.getUser).toHaveBeenCalled();
		expect(mockRes.send).toHaveBeenCalled();
		
		var sendCalls = mockRes.send.calls.mostRecent();
		var user = sendCalls.args[0];
		expect(user).toBe(mockUser);
		expect(user.getId()).toBe(1);
		expect(user.getName()).toBe('Sunil');
	});	
});
