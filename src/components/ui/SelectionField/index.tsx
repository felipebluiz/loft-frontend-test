import React from 'react'
import Select, { GroupBase, Props, StylesConfig } from 'react-select'

function SelectionField<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props: Props<Option, IsMulti, Group>): JSX.Element {
  const styles: StylesConfig<Option, IsMulti, Group> = {
    control: (styles, { isFocused }) => ({
      ...styles,
      height: '50px',
      borderRadius: '8px',
      borderColor: !isFocused
        ? 'var(--colors-regular)'
        : 'var(--colors-darker)',
      boxShadow: 'none ',
      fontSize: 'var(--fontSizes-sm)',

      svg: {
        color: !isFocused ? 'var(--colors-regular)' : 'var(--colors-darker)'
      },

      '&:hover': {
        borderColor: !isFocused
          ? 'var(--colors-regular)'
          : 'var(--colors-darker)',

        svg: {
          color: !isFocused ? 'var(--colors-regular)' : 'var(--colors-darker)'
        }
      }
    }),
    valueContainer: (styles) => ({ ...styles, padding: '0 14px' }),
    placeholder: (styles) => ({ ...styles, color: 'var(--colors-regular)' }),
    indicatorSeparator: (styles, { isFocused }) => ({
      ...styles,
      backgroundColor: !isFocused
        ? 'var(--colors-regular)'
        : 'var(--colors-darker)'
    }),
    menu: (styles) => {
      return {
        ...styles,
        boxShadow: '0 0 0px 1px var(--colors-regular)'
      }
    },
    option: (styles, { isSelected }) => {
      return {
        ...styles,
        padding: '12px',
        backgroundColor: !isSelected ? 'transparent' : 'var(--colors-primary)',
        fontSize: 'var(--fontSizes-sm)',

        ':hover': {
          backgroundColor: !isSelected ? '#f3f7fa' : 'var(--colors-primary)'
        }
      }
    }
  }

  return (
    <Select
      blurInputOnSelect
      noOptionsMessage={() => 'Sem resultados'}
      placeholder="Selecionar"
      styles={styles}
      {...props}
    />
  )
}

export { SelectionField }
