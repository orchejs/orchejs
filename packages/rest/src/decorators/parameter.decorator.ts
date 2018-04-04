// Copyright Mauricio Gemelli Vigolo and contributors.
// Use of this source code is governed by a MIT-style license that can be
// found in the LICENSE file at https://github.com/orchejs/orchejs/rest/LICENSE

import * as Reflect from 'reflect-metadata';

export interface ParamOptions {
  format?: string;
  validators?: any[];
}

export interface ParamDetails {
  name: string;
  type?: any;
  validators?: any[];
  format?: string;
}

export function requestParam() {
  return function(
    target: object,
    propertyKey: string,
    parameterIndex: number,
  ) {};
}

export function responseParam() {
  return function(
    target: object,
    propertyKey: string,
    parameterIndex: number,
  ) {};
}

export function queryParam(param: string, options: ParamOptions = {}) {
  return function(target: object, propertyKey: string, parameterIndex: number) {
    const paramDetails = loadParam(
      target,
      propertyKey,
      param,
      parameterIndex,
      options,
    );
  };
}

export function pathParam(param: string, options: ParamOptions = {}) {
  return function(target: object, propertyKey: string, parameterIndex: number) {
    const paramDetails = loadParam(
      target,
      propertyKey,
      param,
      parameterIndex,
      options,
    );
  };
}

export function requestParamMapper() {
  return function(
    target: object,
    propertyKey: string,
    parameterIndex: number,
  ) {};
}

export function bodyParam(options?: ParamOptions) {
  return function(target: object, propertyKey: string, parameterIndex: number) {
    const paramDetails = loadParam(
      target,
      propertyKey,
      undefined,
      parameterIndex,
      options,
    );
  };
}

export function headerParam(param: string, options: ParamOptions = {}) {
  return function(target: object, propertyKey: string, parameterIndex: number) {
    const paramDetails = loadParam(
      target,
      propertyKey,
      param,
      parameterIndex,
      options,
    );
  };
}

function loadParam(
  target: object,
  key: string,
  param: string,
  paramIndex: number,
  options: ParamOptions = {},
): ParamDetails {
  const paramTypes = Reflect.getMetadata('design:paramtypes', target, key);
  let details: ParamDetails = {
    validators: options.validators,
    name: param,
    format: options.format,
    type: paramTypes[paramIndex],
  };
  return details;
}
