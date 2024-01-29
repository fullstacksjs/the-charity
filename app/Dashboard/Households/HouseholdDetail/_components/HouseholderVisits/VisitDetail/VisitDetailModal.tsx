import { tid } from '@camp/test';
import { openModal } from '@mantine/modals';

import type { VisitDetailProps } from './VisitDetail';
import { VisitDetail } from './VisitDetail';
import { VisitDetailHeader } from './VisitDetailHeader';
import { visitDetailModalId as modalId } from './VisitDetailModal.ids';

export const VisitDetailModal = (props: VisitDetailProps) => (
  <VisitDetail {...props} />
);

type Props = VisitDetailProps;

export const openVisitDetailModal = (props: Props) =>
  openModal({
    modalId,
    children: <VisitDetailModal {...props} />,
    styles: t => ({
      content: {
        display: 'flex',
        flexDirection: 'column',
      },
      header: {
        borderBottom: `1px solid ${t.colors.bg[5]}`,
        alignItems: 'flex-start',
      },
      body: {
        flexGrow: 1,
        padding: 0,
        display: 'flex',
      },
    }),
    title: <VisitDetailHeader id={props.id} />,

    padding: '40px',
    fullScreen: true,
    centered: true,
    ...tid(modalId),
  });
