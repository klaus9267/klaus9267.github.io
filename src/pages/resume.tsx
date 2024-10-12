import Layout from '@theme/Layout';
import PdfViewer from '../components/PdfViewer';

export default function Resume(): JSX.Element {
  return (
    <Layout title="PDF Viewer">
      <div style={{ padding: '20px' }}>
        <PdfViewer pdfUrl="/resume.pdf" />
      </div>
    </Layout>
  );
}
