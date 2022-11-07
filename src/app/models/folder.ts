import { Dashboard } from './dashboard';

export interface Folder {
  id: number;
  uid: string;
  title: string;
  dashboards: Dashboard[] | [];
}
