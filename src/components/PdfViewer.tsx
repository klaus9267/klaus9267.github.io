import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const PdfViewer = ({ pdfUrl }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'resume.pdf'; // 다운로드될 파일의 이름
    link.click();
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'auto',
      }}
    >
      <button
        onClick={handleDownload}
        style={{
          backgroundColor: '#3ecc5f', // Docusaurus 초록색
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
          transition: 'background-color 0.3s',
        }}
        onMouseOver={e => (e.target.style.backgroundColor = '#20a187')} // Hover 시 색상 변경
        onMouseOut={e => (e.target.style.backgroundColor = '#25c2a0')} // Hover 후 원래 색상 복구
      >
        PDF 다운로드
      </button>
      <br />
      <div style={{ width: '50%', marginBottom: '10px' }}>
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <Viewer fileUrl={pdfUrl} />
        </Worker>
      </div>
    </div>
  );
};

export default PdfViewer;
