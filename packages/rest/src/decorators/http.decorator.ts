// Copyright Mauricio Gemelli Vigolo and contributors.
// Use of this source code is governed by a MIT-style license that can be
// found in the LICENSE file at https://github.com/orchejs/orchejs/rest/LICENSE

export type CustomOrigin = (
  requestOrigin: string,
  callback: (err: Error | null, allow?: boolean) => void,
) => void;

export interface CorsOptions {
  origin?: boolean | string | RegExp | string[] | RegExp[] | CustomOrigin;
  methods?: string | string[];
  allowedHeaders?: string | string[];
  exposedHeaders?: string | string[];
  credentials?: boolean;
  maxAge?: number;
  preflightContinue?: boolean;
  optionsSuccessStatus?: number;
}

export interface CorsConfig {
  corsOptions?: CorsOptions;
  preflight?: boolean;
}

export interface ContentType {
  request?: string;
  response?: string;
}

export interface HttpDecoratorOptions {
  contentType?: ContentType;
  cors?: CorsConfig;
  middlewares?: Function[];
}

export function all(path: string = '/*', options: HttpDecoratorOptions = {}) {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {};
}

export function get(path: string = '', options: HttpDecoratorOptions = {}) {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {};
}

export function post(path: string = '', options: HttpDecoratorOptions = {}) {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {};
}

export function put(path: string = '', options: HttpDecoratorOptions = {}) {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {};
}

export function del(path: string = '', options: HttpDecoratorOptions = {}) {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {};
}

export function patch(path: string = '', options: HttpDecoratorOptions = {}) {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {};
}

export function head(path: string = '', options: HttpDecoratorOptions = {}) {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {};
}
