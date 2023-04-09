import './styles/index.scss'

import { RButton } from './BComponents'

export const BComponents = [RButton]

export default (app: any) => {
  BComponents.forEach((component) => {
    app.component(component.name, component)
  })
}
