import type { NavLinkProps } from '@camp/design';
import { Sidebar } from '@camp/design';
import { PackageIcon, PeopleIcon } from '@camp/icons';
import { messages } from '@camp/messages';

import { ExitNavLink } from '../ExitNavLink';
import { dashboardSidebarIds as ids } from './DashboardSidebar.ids';

export const links: NavLinkProps[] = [
  {
    label: messages.households.title,
    icon: <PeopleIcon width="24" height="24" />,
    to: '/dashboard/households',
    id: ids.households,
  },
  {
    label: messages.projects.title,
    icon: <PackageIcon width="24" height="24" />,
    to: '/dashboard/projects',
    id: ids.projects,
  },
];

export const DashboardSidebar = () => {
  return <Sidebar bottom={<ExitNavLink />} links={links} />;
};
