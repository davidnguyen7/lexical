/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import {createRootNode, isRootNode, RootNode} from '../../OutlineRootNode';

import {initializeUnitTest} from '../utils';

describe('OutlineRootNode tests', () => {
  initializeUnitTest((testEnv) => {
    let rootNode;

    beforeEach(async () => {
      const {editor} = testEnv;
      await editor.update(() => {
        rootNode = new RootNode();
      });
    });

    test('constructor', async () => {
      const {editor} = testEnv;
      await editor.update(() => {
        expect(rootNode).toStrictEqual(createRootNode());
        expect(rootNode.getFlags()).toBe(0);
        expect(rootNode.getType()).toBe('root');
        expect(rootNode.getTextContent()).toBe('');
      });
    });

    test('clone()', async () => {
      const rootNodeClone = rootNode.clone();
      expect(rootNodeClone).not.toBe(rootNode);
      expect(rootNodeClone).toStrictEqual(rootNode);
    });

    test('createDOM()', async () => {
      expect(() => rootNode.createDOM()).toThrow();
    });

    test('updateDOM()', async () => {
      expect(rootNode.updateDOM()).toBe(false);
    });

    test('isAttached()', async () => {
      expect(rootNode.isAttached()).toBe(true);
    });

    test('isRootNode()', () => {
      expect(isRootNode(rootNode)).toBe(true);
    });
  });
});
