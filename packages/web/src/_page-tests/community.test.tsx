import Community from 'pages/community'
import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { TestProvider } from 'src/_page-tests/test-utils'

describe('Community', () => {
  it('renders', () => {
    const tree = renderer
      .create(
        <TestProvider>
          <Community />
        </TestProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
