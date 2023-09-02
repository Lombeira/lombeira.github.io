import { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';
import { brazilStates } from '@/utils/brazilStates';
import unidecode from 'unidecode';
import { t } from '@/utils/i18n';

type IState = (typeof brazilStates)[0];

interface ComboBoxProps {
  shouldUseState: boolean;
  selectedState: IState;
  setSelectedState: (state: IState) => void;
}

export const StateComboBox = ({
  shouldUseState,
  selectedState,
  setSelectedState,
}: ComboBoxProps) => {
  const [query, setQuery] = useState('');

  const filteredStates =
    query === ''
      ? brazilStates
      : brazilStates.filter((state) => {
          const normalizedQuery = unidecode(
            query.toLowerCase().replace(/\s+/g, '')
          );
          const normalizedState = unidecode(
            state.state.toLowerCase().replace(/\s+/g, '')
          );
          return normalizedState.includes(normalizedQuery);
        });

  return (
    <Combobox
      value={selectedState}
      onChange={setSelectedState}
      disabled={!shouldUseState}
    >
      <div className='relative mt-1'>
        <div className='relative w-full cursor-default overflow-hidden rounded-lg text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-4 focus-visible:ring-offset-violet-300 sm:text-sm disabled:cursor-not-allowed'>
          <Combobox.Input
            className='w-full border-none py-2 pl-3 pr-10 text-sm bg-slate-300 text-slate-900 leading-5 focus:ring-0 disabled:opacity-25 disabled:cursor-not-allowed'
            displayValue={(state) => (state as IState).state}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Button className='absolute inset-y-0 right-0 flex items-center pr-2'>
            <ChevronsUpDownIcon
              className='h-5 w-5 text-slate-700'
              aria-hidden='true'
            />
          </Combobox.Button>
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
          <Combobox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
            {filteredStates.length === 0 && query !== '' ? (
              <div className='relative cursor-default select-none py-2 px-4 text-slate-700'>
                {t('cpf_generator_combo_label')}
              </div>
            ) : (
              filteredStates.map((state) => (
                <Combobox.Option
                  key={state.uf}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-violet-600 text-white' : 'text-slate-900'
                    }`
                  }
                  value={state}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {state.state}
                      </span>
                      {selected && (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? 'text-white' : 'text-violet-600'
                          }`}
                        >
                          <CheckIcon className='h-5 w-5' aria-hidden='true' />
                        </span>
                      )}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
};
