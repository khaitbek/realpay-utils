# realpay-utils

## Installation

```bash
npm install realpay-utils
```
```bash
pnpm install realpay-utils
```
```bash
yarn add realpay-utils
```

## Usage

### Hooks

#### useComponentVisible

```tsx
import { useComponentVisible } from '@hayitbek/realpay-utils'

const Component = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {ref} = useComponentVisible({ setVisible: setIsOpen })

  return <div ref={ref}></div>
}
```

### Helper functions

### Types

## License

[MIT](LICENSE)