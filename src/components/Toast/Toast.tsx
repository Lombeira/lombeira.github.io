import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

interface ToastProps {
  openModal: () => void;
  closeModal: () => void;
  isOpen: boolean;
}

export const Toast = ({ openModal, closeModal, isOpen }: ToastProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeModal}>
        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-end justify-start p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <Dialog.Title
                  as='h3'
                  className='text-lg font-medium leading-6 text-emerald-900'
                >
                  Sucesso!
                </Dialog.Title>
                <div className='mt-2'>
                  <p className='text-sm text-gray-600'>
                    O CPF gerado foi copiado para a área de transferência.
                  </p>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
