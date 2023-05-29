import type { ProjectStatus } from '../../domain/Project';
import { ApiProjectStatusEnum } from '../api';

export const toProjectStatus = (status: ApiProjectStatusEnum): ProjectStatus =>
  status === ApiProjectStatusEnum.Done
    ? 'done'
    : status === ApiProjectStatusEnum.InProgress
    ? 'inProgress'
    : status === ApiProjectStatusEnum.Planning
    ? 'planning'
    : 'suspended';
