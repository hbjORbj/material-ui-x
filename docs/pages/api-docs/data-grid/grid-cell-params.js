import * as React from 'react';
import MarkdownDocs from '@material-ui/monorepo/docs/src/modules/components/MarkdownDocs';
import { demos, docs, demoComponents } from './grid-cell-params.md?@mui/markdown';

export default function Page() {
  return <MarkdownDocs demos={demos} docs={docs} demoComponents={demoComponents} />;
}
