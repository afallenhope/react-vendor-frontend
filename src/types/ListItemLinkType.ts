export type ListItemLinkType = {
  icon?: React.ReactElement;
  name?: string;
  title?: string;
  component?: React.ReactElement | React.Component
  to?: string;
  isDivider?: boolean;
  selected: boolean;
};
