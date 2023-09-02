import { t } from '@/utils/i18n';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, Edit, Edit2 } from 'lucide-react';
import Link from 'next/link';
import { Fragment } from 'react';

export const DevToolsMenu = () => {
  return (
    <div className='text-left'>
      <Menu as='div' className='relative inline-block text-left'>
        <Menu.Button className='inline-flex w-full items-center text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 transition-all'>
          DevTools
          <ChevronDownIcon
            className='ml-2 -mr-1 h-5 w-5 text-primary'
            aria-hidden='true'
          />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute left-0 mt-2 w-80 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <div className='px-1 py-1 '>
              <Menu.Item>
                {({ active }) => (
                  <Link href={'/dev-tools/cpf-generator'}>
                    <button
                      className={`${
                        active ? 'bg-violet-600 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm transition-all`}
                    >
                      {active ? (
                        <Edit className='mr-2 h-5 w-5' aria-hidden='true' />
                      ) : (
                        <Edit2 className='mr-2 h-5 w-5' aria-hidden='true' />
                      )}
                      {t('cpf_generator_page_title')}
                    </button>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link href={'/dev-tools/react-playground'}>
                    <button
                      className={`${
                        active ? 'bg-violet-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm transition-all`}
                    >
                      {active ? (
                        <Edit className='mr-2 h-5 w-5' aria-hidden='true' />
                      ) : (
                        <Edit2 className='mr-2 h-5 w-5' aria-hidden='true' />
                      )}
                      React playground
                    </button>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link href={'/dev-tools/obj-to-interface'}>
                    <button
                      className={`${
                        active ? 'bg-violet-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm transition-all`}
                    >
                      {active ? (
                        <Edit className='mr-2 h-5 w-5' aria-hidden='true' />
                      ) : (
                        <Edit2 className='mr-2 h-5 w-5' aria-hidden='true' />
                      )}
                      {t('obj_to_interface_generator')}
                    </button>
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
