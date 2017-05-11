var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountDown = require('CountDown');

describe('CountDown', () => {
   it('should exist', () => {
      expect(CountDown).toExist();
   });

   describe('handleSetCountDown', () => {
      it('should set state to started and count down', (done) => {
         var countDown = TestUtils.renderIntoDocument(<CountDown />);
         countDown.handleSetCountDown(10);

         expect(countDown.state.count).toBe(10);
         expect(countDown.state.countDownStatus).toBe('started');

         setTimeout(() => {
            expect(countDown.state.count).toBe(9);
            done();
         }, 1001);
      });

      it('should never set count less than zero', (done) => {
         var countDown = TestUtils.renderIntoDocument(<CountDown />);
         countDown.handleSetCountDown(1);

         setTimeout(() => {
            expect(countDown.state.count).toBe(0);
            done();
         }, 3001);
      });

      it('should pause count down on paused status', (done) => {
         var countDown = TestUtils.renderIntoDocument(<CountDown />);
         countDown.handleSetCountDown(3);
         countDown.handleStatusChange('paused');

         setTimeout(() => {
            expect(countDown.state.count).toBe(3);
            expect(countDown.state.countDownStatus).toBe('paused');
            done();
         }, 1001);
      });

      it('should reset count on stopped', (done) => {
         var countDown = TestUtils.renderIntoDocument(<CountDown />);
         countDown.handleSetCountDown(3);
         countDown.handleStatusChange('stopped');

         setTimeout(() => {
            expect(countDown.state.count).toBe(0);
            expect(countDown.state.countDownStatus).toBe('stopped');
            done();
         }, 1001);
      });
   });
});
