import React, { useState } from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import scope from './react-live-scope';
import { t } from '@/utils/i18n';

function ReactLiveBlock({ rawCode, ...rest }: { rawCode: string }) {
  const code = rawCode.trim();
  const [editorCode, setEditorCode] = useState(code.trim());

  const onChange = (newCode: string) => setEditorCode(newCode.trim());

  const handleClick = () => navigator.clipboard.writeText(editorCode);

  const liveProviderProps = {
    code: editorCode,
    scope,
    ...rest,
  };
  return (
    <LiveProvider {...liveProviderProps}>
      <div className='w-screen h-calc flex justify-center'>
        <div className='w-2/5 relative'>
          <div className='bg-[#011627] overflow-x-auto rounded-lg h-[95%]'>
            <LiveEditor onChange={onChange} />
          </div>
          <button
            onClick={handleClick}
            className='absolute top-2 right-2 z-10 px-2 py-1 rounded-md bg-violet-600 hover:bg-violet-700 transition-all'
          >
            {t('chakra_playground_copy')}
          </button>
          <LiveError className='overflow-x-auto bg-red-600 p-2' />
        </div>
        <LivePreview className='w-2/5 py-2 px-2 rounded-lg h-calc overflow-x-auto border' />
      </div>
    </LiveProvider>
  );
}

export default ReactLiveBlock;
