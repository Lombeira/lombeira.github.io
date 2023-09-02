import { Header, Main } from '@/components';
import ReactLiveBlock from '@/components/codeblock/react-live-block';
import { t } from '@/utils/i18n';

export default function Home() {
  return (
    <Main>
      <Header />
      <ReactLiveBlock
        rawCode={`
<div>
    <div className="text-center text-2xl font-bold mb-4">
        ${t('chakra_ui_editable_example_title')}
    </div>
    <div className="text-center text-xl">
        It suports 
        <a href="https://tailwindcss.com/" target="_blank">
            {" "} TailwindCSS
        </a> 
            {" "} ${t('and')} {" "}
        <a href="https://headlessui.com/" target="_blank">
            {" "} HeadlessUI
        </a> 
    </div>
    <div className="flex gap-4 mt-4 justify-center">
        <div className="h-8 w-8 bg-red-500 rounded-full" />
        <div className="h-8 w-8 bg-violet-500 rounded-full" />
        <div className="h-8 w-8 bg-emerald-500 rounded-full" />
        <div className="h-8 w-8 bg-orange-500 rounded-full" />
        <div className="h-8 w-8 bg-sky-500 rounded-full" />
    </div>
    <div className="flex gap-4 mt-4 justify-center">
        <div className="h-8 w-8 border border-red-500 rounded-md" />
        <div className="h-8 w-8 border border-violet-500 rounded-md" />
        <div className="h-8 w-8 border border-emerald-500 rounded-md" />
        <div className="h-8 w-8 border border-orange-500 rounded-md" />
        <div className="h-8 w-8 border border-sky-500 rounded-md" />
    </div>
</div>
`}
      />
    </Main>
  );
}
