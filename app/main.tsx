import '@camp/zod-addons/monkey-patch';
import 'dayjs/locale/fa';

import { config } from '@camp/config';
import { debug, DebugScopes } from '@camp/debug';
import type { AllRouteIds } from '@camp/router';
import { createRouter, RouterProvider } from '@camp/router';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'

import { routeTree } from './routeTree.gen';

export interface RouterContext {
  getTitle: (to: AllRouteIds) => string;
}

export const router = createRouter({
  routeTree,
  context: {
    getTitle: x => {
      const routeTitles: Partial<Record<AllRouteIds, string>> = {
        '/dashboard/_layout/households/_layout': 'خانوار',
        '/dashboard/_layout/households/_layout/$householdId': 'خانواده',
      };

      return routeTitles[x] ?? '';
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root')!);
debug.log(DebugScopes.All, config);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
