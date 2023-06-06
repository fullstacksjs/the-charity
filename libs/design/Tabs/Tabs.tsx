import { useHash } from '@camp/router';
import { createTestAttr } from '@camp/test';
import { Badge, Tabs as MantineTabs } from '@mantine/core';
import { useState } from 'react';

interface Tab {
  id: string;
  isDefault?: boolean;
  isBusy?: boolean;
  tab: React.ReactNode;
  panel: React.ReactNode;
}

interface Props {
  tabs: Tab[];
}

const BusyIcon = () => (
  <Badge w="8px" h="8px" p="0" variant="filled" color="yellow" />
);

export const Tabs = ({ tabs }: Props) => {
  const [hash, setHash] = useHash();

  const defaultTab = tabs.find(({ isDefault }) => isDefault)?.id;
  const tabFromHash = tabs.find(({ id }) => id === hash)?.id;
  const [activeTab, setActiveTab] = useState<string>(
    tabFromHash ?? defaultTab ?? tabs[0]!.id,
  );

  return (
    <MantineTabs
      variant="outline"
      mx="-40px"
      radius="xs"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
      }}
      value={activeTab}
      onTabChange={value => {
        setHash(value!);
        setActiveTab(value!);
      }}
    >
      <MantineTabs.List px="40px" bg="bgCanvas">
        {tabs.map(({ tab, id, isBusy = false }) => (
          <MantineTabs.Tab
            key={id}
            value={id}
            bg={id === activeTab ? 'bgSurface' : 'bgCanvas'}
            rightSection={isBusy ? <BusyIcon /> : undefined}
            {...createTestAttr(id)}
          >
            {tab}
          </MantineTabs.Tab>
        ))}
      </MantineTabs.List>

      {tabs.map(({ panel, id }) => (
        <MantineTabs.Panel
          sx={{
            flexGrow: 1,
          }}
          bg="bgSurface"
          pt="34px"
          pb="30px"
          px="40px"
          key={id}
          value={id}
        >
          {panel}
        </MantineTabs.Panel>
      ))}
    </MantineTabs>
  );
};
