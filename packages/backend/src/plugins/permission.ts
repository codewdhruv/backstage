/*
 * Copyright 2021 The Backstage Authors
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

import { BackstageIdentityResponse } from '@backstage/plugin-auth-node';
import { createRouter } from '@backstage/plugin-permission-backend';
import {
  AuthorizeResult,
  isPermission,
  PolicyDecision,
} from '@backstage/plugin-permission-common';
import {
  PermissionPolicy,
  PolicyQuery,
} from '@backstage/plugin-permission-node';
import {
  DefaultPlaylistPermissionPolicy,
  isPlaylistPermission,
} from '@backstage/plugin-playlist-backend';
import {
  createScaffolderActionConditionalDecision,
  scaffolderActionConditions,
} from '@backstage/plugin-scaffolder-backend';
import { actionExecutePermission } from '@backstage/plugin-scaffolder-common';
import { Router } from 'express';
import { z } from 'zod';
import zodToJsonSchema from 'zod-to-json-schema';
import { PluginEnvironment } from '../types';

const inputSchema = zodToJsonSchema(
  z.object({ message: z.enum(['hello']) }).strict(),
);

class ExamplePermissionPolicy implements PermissionPolicy {
  private playlistPermissionPolicy = new DefaultPlaylistPermissionPolicy();

  async handle(
    request: PolicyQuery,
    user?: BackstageIdentityResponse,
  ): Promise<PolicyDecision> {
    if (isPlaylistPermission(request.permission)) {
      return this.playlistPermissionPolicy.handle(request, user);
    }

    if (isPermission(request.permission, actionExecutePermission)) {
      return createScaffolderActionConditionalDecision(
        request.permission,
        scaffolderActionConditions.hasInputProperty({
          action: 'debug:log',
          key: 'message',
          value: 'Test',
        }),
        // scaffolderActionConditions.matchesInput({
        //   action: 'debug:log',
        //   schema: inputSchema,
        // }),
      );
    }

    return {
      result: AuthorizeResult.ALLOW,
    };
  }
}

export default async function createPlugin(
  env: PluginEnvironment,
): Promise<Router> {
  return await createRouter({
    config: env.config,
    logger: env.logger,
    discovery: env.discovery,
    policy: new ExamplePermissionPolicy(),
    identity: env.identity,
  });
}
