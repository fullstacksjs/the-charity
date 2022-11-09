import { messages } from '@camp/messages';
import { Table } from '@mantine/core';

export const FamilyTable = () => {
  const t = messages.families.list.table;

  const columns = t.columns.map(msg => <th key={msg}>{msg}</th>);
  return (
    <Table
      horizontalSpacing="lg"
      verticalSpacing="md"
      striped
      highlightOnHover
      withBorder
    >
      <thead>
        <tr>{columns}</tr>
      </thead>
      <tbody>
        <tr key="hey">
          <td>{'hey'}</td>
          <td>{'hey'}</td>
          <td>{'hey'}</td>
          <td>{'hey'}</td>
        </tr>
      </tbody>
    </Table>
  );
};
