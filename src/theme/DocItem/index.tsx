import React from 'react';
import DocItem from '@theme-original/DocItem';
import type DocItemType from '@theme/DocItem';
import type { WrapperProps } from '@docusaurus/types';
import Comment from '@site/src/components/Comment';

type Props = WrapperProps<typeof DocItemType>;

export default function DocItemWrapper(props: Props): JSX.Element {
  return (
    <div>
      <DocItem {...props} />
      <div className="row">
        <div className="col">
          <Comment />
        </div>
        <div className="col col--3"></div>
      </div>
    </div>
  );
}
