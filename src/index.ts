import innet, {JSXElement, Plugin} from 'innet'

export default function to (type: JSXElement['type']): Plugin {
  return (target, parent, plugins, plugin) => {
    target.type = type
    innet(target, parent, plugins, plugin)
  }
}
