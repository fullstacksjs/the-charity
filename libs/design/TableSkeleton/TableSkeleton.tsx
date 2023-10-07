/* eslint-disable @typescript-eslint/no-shadow */

import { TableCell } from '../Table/TableCell';
import { TableRow } from '../Table/TableRow';

export const TableSkeleton = () => {
  const numberOfSkeletonRows = 10;
  const numberOfSkeletonCells = 4;

  const skeletonRows = Array.from(
    { length: numberOfSkeletonRows },
    (_, rowIndex) => (
      <TableRow key={`skeleton-row-${rowIndex}`}>
        {Array.from({ length: numberOfSkeletonCells }, (_, cellIndex) => (
          <TableCell key={`skeleton-cell-${cellIndex}`}>
            {cellIndex === 0 ? (
              <svg
                width="40"
                height="10"
                viewBox="0 0 40 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="10" rx="5" fill="#DEE2E6" />
              </svg>
            ) : (
              <svg
                width="130"
                height="10"
                viewBox="0 0 130 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="130" height="10" rx="5" fill="#DEE2E6" />
              </svg>
            )}
          </TableCell>
        ))}
      </TableRow>
    ),
  );

  return skeletonRows;
};
