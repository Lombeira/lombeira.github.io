import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, Edit, Edit2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

export const LanguageMenu = () => {
  const router = useRouter();
  const { pathname, asPath, query } = router;

  const handleClickLocale = (locale: string) => {
    router.push({ pathname, query }, asPath, { locale });
  };

  return (
    <div className='text-right'>
      <Menu as='div' className='relative inline-block text-left'>
        <div>
          <Menu.Button className='inline-flex w-full justify-center rounded-md bg-black opacity-primary px-4 py-2 text-sm font-medium text-primary hover:bg-opacity-20 dark:hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 transition-all'>
            Language
            <ChevronDownIcon
              className='ml-2 -mr-1 h-5 w-5 text-primary'
              aria-hidden='true'
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <div className='px-1 py-1 '>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleClickLocale('pt')}
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm transition-all`}
                  >
                    {active ? (
                      <Edit className='mr-2 h-5 w-5' aria-hidden='true' />
                    ) : (
                      <Edit2 className='mr-2 h-5 w-5' aria-hidden='true' />
                    )}
                    Português
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleClickLocale('en')}
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm transition-all`}
                  >
                    {active ? (
                      <Edit className='mr-2 h-5 w-5' aria-hidden='true' />
                    ) : (
                      <Edit2 className='mr-2 h-5 w-5' aria-hidden='true' />
                    )}
                    English
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
