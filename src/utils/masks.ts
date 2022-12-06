/* eslint-disable @typescript-eslint/no-explicit-any */
import IMask from 'imask'

/**
 * https://stackoverflow.com/a/10452789/8786986
 * @param args
 */
const masker = ({
  masked,
  transform,
  maskDefault
}: {
  masked: any
  transform?: any
  maskDefault?: any
}) =>
  (function () {
    const mask = IMask.createPipe(
      masked,
      IMask.PIPE_TYPE.UNMASKED,
      IMask.PIPE_TYPE.MASKED
    )

    const unmask = IMask.createPipe(
      masked,
      IMask.PIPE_TYPE.MASKED,
      IMask.PIPE_TYPE.UNMASKED
    )

    const onChange = (e: any) => {
      const unmasked = unmask(e.target.value)
      const newValue = mask(unmasked)
      e.target.value = newValue
    }

    return {
      mask,
      onChange,
      transform: transform || unmask,
      unmask,
      maskDefault: maskDefault || mask
    }
  })()

export const phoneMask = masker({
  masked: {
    mask: [
      {
        mask: '(00) 00000-0000',
        phone: 'mobile'
      }
    ],
    dispatch: (_: any, dynamicMasked: { compiledMasks: any[] }) => {
      return dynamicMasked.compiledMasks.find(({ phone }) => phone === 'mobile')
    }
  }
})
