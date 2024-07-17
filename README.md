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

#### useCountDown

```tsx
import { useCountDown } from "@hayitbek/realpay-utils";

const Component = () => {
  const { timer, setTimer } = useCountDown(59);

  return (
    <button onClick={() => setTimer(59)}>
      {timer < 10 ? `00:0${timer}` : `00:${timer}`}
    </button>
  )
}
```

#### useDebounce

```tsx
import { useDebounce } from "@hayitbek/realpay-utils";

const Component = () => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}
```

#### useFocus

```tsx
import { useFocus } from "@hayitbek/realpay-utils";

const Component = () => {
  const ref = useRef<HTMLInputElement>(null);

const [isFocused, setIsFocused] = useState(false);
  const {ref} = useFocus(ref,!isFocused)

  return <div>
    <input ref={ref} />
    <button onClick={() => setIsFocused(!isFocused)}>
      {isFocused ? "Unfocus" : "Focus"}
    </button>
  </div>
}
```

#### useInput

```tsx
import { useInput } from "@hayitbek/realpay-utils";

const Component = () => {
  const [value, setValue] = useState({
    name: "",
  });
  const { handleChange, ref} = useInput(value)

  return <input ref={ref} onChange={handleChange} />
}
```

#### useRequestOnEnter

```tsx
import { useRequestOnEnter } from "@hayitbek/realpay-utils";

const Component = () => {
  const [isRequestEnabled, setIsRequestEnabled] = useState(false);
  const [shouldFilter, setShouldFilter] = useState(false);

  useRequestOnEnter(shouldFilter, setIsRequestEnabled);
}
```

### Helper functions

#### classnames

```tsx
import {classnames} from "@hayitbek/realpay-utils"

const Component = () => {
  const [isBlue, setIsBlue] = useState(false);

  return (
    <div className={classnames("bg-white", isBlue && "bg-blue-500")}>
      <button onClick={() => setIsBlue(!isBlue)}>
        {isBlue ? "Close" : "Open"}
      </button>
    </div>
  )
}
```

#### formatDate

```tsx
import {formatDate} from "@hayitbek/realpay-utils"

const Component = () => {
  return <div>
    {formatDate("2024-07-17T09:59:26.249Z")}
  </div>
}
```

#### formatToAmount

```tsx
import {formatToAmount} from "@hayitbek/realpay-utils"

const Component = () => {
  return <div>
    {formatToAmount(1000000)}
  </div>
}

```

#### getBaseUrl

```tsx
import {getBaseUrl} from "@hayitbek/realpay-utils"

const baseUrl = getBaseUrl(import.meta.env,import.meta.env.MODE);
```

#### memoize

```tsx
import {memoize} from "@hayitbek/realpay-utils"

const memoizedFn = memoize(fn);
```

### Types

## License

[MIT](LICENSE)