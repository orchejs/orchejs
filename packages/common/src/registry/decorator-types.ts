// Copyright Mauricio Gemelli Vigolo and contributors.
// Use of this source code is governed by a MIT-style license that can be
// found in the LICENSE file at https://github.com/orchejs/orchejs/LICENSE

/**
 * TODO: TBD add documentation
 */
export abstract class AbstractDecorator {
  private _decoratedItemName: string;
  private _decoratorName: string;
  private _type: string;
  private _value: any;
  private _metadata: any;
}

/**
 * TODO: TBD add documentation
 */
export class ClassDecorator extends AbstractDecorator {
  private _properties: PropertyDecorator[];
  private _methods: MethodDecorator[];
  private _constructor: Function;
}

/**
 * TODO: TBD add documentation
 */
export class PropertyDecorator extends AbstractDecorator {}

/**
 * TODO: TBD add documentation
 */
export class MethodDecorator extends AbstractDecorator {
  private _parameters: ParameterDecorator[];
}

/**
 * TODO: TBD add documentation
 */
export class ParameterDecorator extends AbstractDecorator {
  private _paramIndex: number;
  private _paramName: string;
}
