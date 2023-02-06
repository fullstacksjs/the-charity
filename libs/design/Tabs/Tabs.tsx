import { Badge, Tabs as MantineTabs } from '@mantine/core';
import { useState } from 'react';

interface Tab {
  value: string;
  isBusy?: boolean;
  tab: React.ReactNode;
}

interface Panel {
  value: string;
  panel: React.ReactNode;
}

interface Props {
  tabs: Tab[];
  panels: Panel[];
}

const BusyIcon = () => (
  <Badge w="8px" h="8px" p="0" variant="filled" color="yellow" />
);

export const Tabs = ({ tabs, panels }: Props) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]!.value);

  return (
    <MantineTabs
      variant="outline"
      mx="-40px"
      radius="xs"
      value={activeTab}
      onTabChange={value => {
        setActiveTab(value!);
      }}
    >
      <MantineTabs.List px="40px">
        {tabs.map(({ tab, value, isBusy = false }) => (
          <MantineTabs.Tab
            key={value}
            value={value}
            bg={value === activeTab ? 'bgSurface' : 'bgCanvas'}
            rightSection={isBusy ? <BusyIcon /> : undefined}
          >
            {tab}
          </MantineTabs.Tab>
        ))}
      </MantineTabs.List>

      {panels.map(({ panel, value }) => (
        <MantineTabs.Panel
          bg="bgSurface"
          pt="34px"
          px="40px"
          key={value}
          value={value}
        >
          {panel}
        </MantineTabs.Panel>
      ))}
    </MantineTabs>
  );
};
