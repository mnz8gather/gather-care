import { SplitterLayout } from '@/shared/SplitterLayout';
import type { CustomRouteObject } from './genMenu';
import { HomePage } from '@/pages';
import { NotFound } from '@/pages/404';
import { UseAntdTableIssuePage } from '@/pages.p/ahooks.useAntdTable.issue';
import { UseAntdTablePage } from '@/pages.p/ahooks.useAntdTable';
import { UseControllableValuePage } from '@/pages.p/ahooks.useControllableValue';
import { UseInfiniteScrollPage } from '@/pages.p/ahooks.useInfiniteScroll';
import { UseRequestPage } from '@/pages.p/ahooks.useRequest';
import { UseUrlStatePage } from '@/pages.p/ahooks.useUrlState';
import { DatasetPage } from '@/pages.p/dataset';
import { ClassComponentPage } from '@/pages.p/react.ClassComponent';
import { RenderPropsPage } from '@/pages.p/react.RenderProps';

export const routeConfig: CustomRouteObject[] = [
  {
    path: '/',
    element: <SplitterLayout />,
    children: [
      {
        path: 'paradigm-use-request',
        element: <UseRequestPage />,
        label: 'ahooks useRequest',
      },
      {
        path: 'paradigm-use-antd-table',
        element: <UseAntdTablePage />,
        label: 'ahooks useAntdTable',
      },
      {
        path: 'issue-use-antd-table',
        element: <UseAntdTableIssuePage />,
        label: 'ahooks useAntdTable issues',
      },
      {
        path: 'paradigm-use-infinite-scroll',
        element: <UseInfiniteScrollPage />,
        label: 'ahooks useInfiniteScroll',
      },
      {
        path: 'paradigm-use-controllable-value',
        element: <UseControllableValuePage />,
        label: 'ahooks useControllableValue',
      },
      {
        path: 'paradigm-use-url-state',
        element: <UseUrlStatePage />,
        label: 'ahooks useUrlState',
      },
      {
        path: 'paradigm-dataset',
        element: <DatasetPage />,
        label: 'dataset',
      },
      {
        path: 'paradigm-class-component',
        element: <ClassComponentPage />,
        label: 'React Class 组件',
      },
      {
        path: 'paradigm-render-props',
        element: <RenderPropsPage />,
        label: 'React Render Props',
      },
      {
        index: true,
        element: <HomePage />,
        label: '首页',
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
