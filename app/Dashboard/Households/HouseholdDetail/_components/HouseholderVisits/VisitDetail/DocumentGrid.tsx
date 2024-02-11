import type { Document } from '@camp/domain';
import { SimpleGrid } from '@mantine/core';

import { VisitDetailDocumentItem } from './VisitDetailDocumentItem';

export const DocumentGrid = ({
  documents,
  selectedDocument,
  onSelect,
  onDelete,
}: {
  documents: Document[];
  selectedDocument?: Document;
  onSelect: (d: Document) => void;
  onDelete: (d: Document) => Promise<void>;
}) => (
  <SimpleGrid sx={{ padding: '40px', flexShrink: 0 }} cols={2}>
    {documents.map(doc => (
      <VisitDetailDocumentItem
        key={doc.id}
        document={doc}
        isSelected={selectedDocument?.url === doc.url}
        onSelect={d => onSelect(d)}
        onDelete={onDelete}
      />
    ))}
  </SimpleGrid>
);
