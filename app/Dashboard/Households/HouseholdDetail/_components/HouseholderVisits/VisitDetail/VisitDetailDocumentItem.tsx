import { debug, DebugScopes } from '@camp/debug';
import type { Document } from '@camp/domain';
import { VerticalMenuIcon } from '@camp/icons';
import { messages } from '@camp/messages';
import { getFileName } from '@camp/router';
import {
  ActionIcon,
  Card,
  Center,
  clsx,
  createStyles,
  Group,
  Image,
  Loader,
  Menu,
  Text,
} from '@mantine/core';
import { useState } from 'react';

const useStyles = createStyles(theme => ({
  selected: {
    backgroundColor: theme.colors.primary[0],
    border: `1px solid ${theme.colors.primary[5]}`,
    boxShadow: '0px 0px 0px 5px #4C6EF533',
  },
  default: {
    cursor: 'pointer',
    userSelect: 'none',
    transition: 'all 300ms ease-in-out',
  },
}));

interface Props {
  isSelected: boolean;
  document: Document;
  onSelect: (doc: Document) => void;
  onDelete: (doc: Document) => Promise<void>;
}

export const VisitDetailDocumentItem = ({
  isSelected,
  document,
  onDelete,
  onSelect,
}: Props) => {
  const { classes } = useStyles();
  const [loading, setLoading] = useState(false);
  return (
    <Card
      w="150px"
      h="150px"
      className={
        loading
          ? undefined
          : clsx([classes.default, isSelected ? classes.selected : undefined])
      }
      onClick={() => {
        onSelect(document);
      }}
      padding={15}
      withBorder={!isSelected || loading}
      radius="md"
      key={document.id}
    >
      <Card.Section inheritPadding withBorder py="xs">
        {loading ? (
          <Loader variant="dots" />
        ) : (
          <Group position="apart" noWrap>
            <Menu width={100} shadow="md" withArrow>
              <Menu.Target>
                <ActionIcon size="sm" onClick={e => e.stopPropagation()}>
                  <VerticalMenuIcon />
                </ActionIcon>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item
                  color="error"
                  onClick={e => {
                    e.stopPropagation();
                    setLoading(true);
                    onDelete(document)
                      .catch(err => debug.error(DebugScopes.All, err))
                      .finally(() => setLoading(false));
                  }}
                >
                  {messages.actions.delete}
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
            <Text
              fw={500}
              size={10}
              sx={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {getFileName(document.url)}
            </Text>
          </Group>
        )}
      </Card.Section>
      <Card.Section>
        {loading ? (
          <Center h={108}>
            <Loader variant="oval" />
          </Center>
        ) : (
          <Image
            src={document.url}
            height={108}
            sx={{ objectPosition: 'top' }}
            alt={document.id}
          />
        )}
      </Card.Section>
    </Card>
  );
};
