import { TestBed, inject } from '@angular/core/testing';

import { NgxAppMsgService } from './ngx-app-msg.service';
import { INgxAppMsg } from './interfaces';

describe('NgxAppMsgService', () => {
  let value: INgxAppMsg;
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxAppMsgService]
    });
    service = TestBed.get(NgxAppMsgService);
    service.messages$.subscribe(val => value = val);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should start off with null', () => {
    expect(value).toBe(null);
  });

  describe('show()', () => {
    it('should set the defaults', () => {
      service.show('success', 'foo');
      expect(value.context).toBe('success');
      expect(value.message).toBe('foo');
      expect(value.autohide).toBe(true);
      expect(value.modal).toBe(false);
      expect(value.dismissible).toBe(false);
    });
    it('should set not the defaults', () => {
      service.show('success', 'foo', false, true, true);
      expect(value.context).toBe('success');
      expect(value.message).toBe('foo');
      expect(value.autohide).toBe(false);
      expect(value.modal).toBe(true);
      expect(value.dismissible).toBe(true);
    });
  });

  describe('wait()', () => {
    it('should set the defaults', () => {
      service.wait('foo');
      expect(value.context).toBe('wait');
      expect(value.message).toBe('foo');
      expect(value.autohide).toBe(false);
      expect(value.modal).toBe(true);
      expect(value.dismissible).toBe(false);
    });
    it('should set not the defaults', () => {
      service.wait('foo', true, false, true);
      expect(value.context).toBe('wait');
      expect(value.message).toBe('foo');
      expect(value.autohide).toBe(true);
      expect(value.modal).toBe(false);
      expect(value.dismissible).toBe(true);
    });
  });
  describe('success()', () => {
    it('should set the defaults', () => {
      service.success('foo');
      expect(value.context).toBe('success');
      expect(value.message).toBe('foo');
      expect(value.autohide).toBe(true);
      expect(value.modal).toBe(false);
      expect(value.dismissible).toBe(true);
    });
    it('should set not the defaults', () => {
      service.success('foo', false, true, false);
      expect(value.context).toBe('success');
      expect(value.message).toBe('foo');
      expect(value.autohide).toBe(false);
      expect(value.modal).toBe(true);
      expect(value.dismissible).toBe(false);
    });
  });

  describe('warn()', () => {
    it('should set the defaults', () => {
      service.warn('foo');
      expect(value.context).toBe('warning');
      expect(value.message).toBe('foo');
      expect(value.autohide).toBe(false);
      expect(value.modal).toBe(true);
      expect(value.dismissible).toBe(true);
    });
    it('should set not the defaults', () => {
      service.warn('foo', true, false, false);
      expect(value.context).toBe('warning');
      expect(value.message).toBe('foo');
      expect(value.autohide).toBe(true);
      expect(value.modal).toBe(false);
      expect(value.dismissible).toBe(false);
    });
  });
  describe('error()', () => {
    it('should set the defaults', () => {
      service.error('foo');
      expect(value.context).toBe('error');
      expect(value.message).toBe('foo');
      expect(value.autohide).toBe(false);
      expect(value.modal).toBe(true);
      expect(value.dismissible).toBe(true);
    });
    it('should set not the defaults', () => {
      service.error('foo', true, false, false);
      expect(value.context).toBe('error');
      expect(value.message).toBe('foo');
      expect(value.autohide).toBe(true);
      expect(value.modal).toBe(false);
      expect(value.dismissible).toBe(false);
    });
  });

  describe('hide()', () => {
    it('should set the val to null', () => {
      service.error('foo', true, false, false);
      expect(value).not.toBe(null);
      service.hide();
      expect(value).toBe(null);
    });
  });

});
