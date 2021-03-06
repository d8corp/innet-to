import innet from 'innet'
import renderElement from 'innet/utils/test/renderElement'
import getHtml from 'innet/utils/test/getHtml'

import to from '.'

describe('to', () => {
  test('simple', () => {
    const element = renderElement((
      <div>
        <div />
      </div>
    ), {div: to('span')})
    expect(getHtml(element)).toBe('<span><span></span></span>')
  })
})
