import innet from 'innet'
import renderElement from 'innet/renderElement'
import getHtml from 'innet/getHtml'

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
