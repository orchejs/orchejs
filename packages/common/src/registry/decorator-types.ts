// Copyright Mauricio Gemelli Vigolo and contributors.
// Use of this source code is governed by a MIT-style license that can be
// found in the LICENSE file at https://github.com/orchejs/orchejs/LICENSE

/**
 * TODO: TBD add documentation
 */
export abstract class AbstractDecorator {
  private _decoratedItemName: string;
}

/**
 * TODO: TBD add documentation
 */
export class ClassDecorator extends AbstractDecorator {}

/**
 * TODO: TBD add documentation
 */
export class PropertyDecorator extends AbstractDecorator {}

/**
 * TODO: TBD add documentation
 */
export class MethodDecorator extends AbstractDecorator {}

/**
 * TODO: TBD add documentation
 */
export class ParameterDecorator extends AbstractDecorator {}
