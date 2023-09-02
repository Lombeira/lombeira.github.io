import { MainProps } from './Main.interface';

export const Main = ({ children }: MainProps) => {
  return (
    <div className='flex min-h-screen flex-col items-center bg-slate-200 dark:bg-slate-800'>
      {children}
    </div>
  );
};
