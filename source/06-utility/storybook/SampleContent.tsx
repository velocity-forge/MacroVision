import { ReactNode } from 'react';

function SampleContent({ children }: { children?: ReactNode }): JSX.Element {
  return (
    <div
      style={{
        background: '#333',
        border: '1px solid #fff',
        color: '#fff',
        padding: '1em',
      }}
    >
      {children}
    </div>
  );
}

export default SampleContent;
