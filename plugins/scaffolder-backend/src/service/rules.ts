/*
 * Copyright 2022 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { makeCreatePermissionRule } from '@backstage/plugin-permission-node';
import {
  RESOURCE_TYPE_SCAFFOLDER_TEMPLATE,
  RESOURCE_TYPE_SCAFFOLDER_ACTION,
} from '@backstage/plugin-scaffolder-common/alpha';

import {
  TemplateEntityStepV1beta3,
  TemplateParametersV1beta3,
} from '@backstage/plugin-scaffolder-common';

import { z } from 'zod';
import { JsonObject } from '@backstage/types';
import { get } from 'lodash';

export const createTemplatePermissionRule = makeCreatePermissionRule<
  TemplateEntityStepV1beta3 | TemplateParametersV1beta3,
  {},
  typeof RESOURCE_TYPE_SCAFFOLDER_TEMPLATE
>();

export const hasTag = createTemplatePermissionRule({
  name: 'HAS_TAG',
  resourceType: RESOURCE_TYPE_SCAFFOLDER_TEMPLATE,
  description: `Match parameters or steps with the given tag`,
  paramsSchema: z.object({
    tag: z.string().describe('Name of the tag to match on'),
  }),
  apply: (resource, { tag }) => {
    return resource['backstage:permissions']?.tags?.includes(tag) ?? false;
  },
  toQuery: () => ({}),
});

export const createActionPermissionRule = makeCreatePermissionRule<
  {
    action: string;
    input: JsonObject | undefined;
  },
  {},
  typeof RESOURCE_TYPE_SCAFFOLDER_ACTION
>();

export const hasActionId = createActionPermissionRule({
  name: 'HAS_ACTION_ID',
  resourceType: RESOURCE_TYPE_SCAFFOLDER_ACTION,
  description: `Match actions with the given actionId`,
  paramsSchema: z.object({
    actionId: z.string().describe('Name of the actionId to match on'),
  }),
  apply: (resource, { actionId }) => {
    return resource.action === actionId;
  },
  toQuery: () => ({}),
});

export const hasInputProperty = createActionPermissionRule({
  name: 'HAS_INPUT',
  resourceType: RESOURCE_TYPE_SCAFFOLDER_ACTION,
  description: `Matches the key and value of the input of an action`,
  paramsSchema: z.object({
    action: z.string().describe('Name of the actionId to match on'),
    key: z.string().describe('Name of the property to match on'),
    value: z.string().describe('Value of the property to match on').optional(),
  }),
  apply: (resource, { action, key, value }) => {
    if (resource.action !== action) {
      return true;
    }

    const foundValue = get(resource.input, key);

    if (Array.isArray(foundValue)) {
      if (value !== undefined) {
        return foundValue.includes(value);
      }
      return foundValue.length > 0;
    }
    if (value !== undefined) {
      return value === foundValue;
    }
    return !!foundValue;
  },
  toQuery: () => ({}),
});

export const scaffolderTemplateRules = { hasTag };
export const scaffolderActionRules = { hasActionId, hasInputProperty };
