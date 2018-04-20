# second-conversion

Convert seconds into clock time and back

```
yarn add second-conversion
```

```js
import { toSeconds, toClockTime } from 'second-conversion'

toSeconds({ hours: 8, minutes: 33, meridiem: 'PM' })
=> 73980

toClockTime(73980)
=> { hours: 8, minutes: 33, meridiem: 'PM' }
```
