import React, { forwardRef, LegacyRef } from 'react';
import classNames from 'classnames';

export interface Props {
  className?: string;
  children?: React.ReactNode;
}

const SidebarHeader: React.ForwardRefRenderFunction<unknown, Props> = (
  { children, className, ...rest },
  ref,
) => {
  const sidebarHeaderRef: LegacyRef<HTMLDivElement> =
    (ref as any) || React.createRef<HTMLDivElement>();
  return (
    <div {...rest} ref={sidebarHeaderRef} className={classNames('pro-sidebar-header', className)}>
      {children}
    </div>
  );
};

export default forwardRef<unknown, Props>(SidebarHeader);
