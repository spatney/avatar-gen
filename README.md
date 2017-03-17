### Avatar Generator

A Typescript library that generates an Avatar from a name string.

```typescript
import { generateAvatar } from 'avatar-gen'

generateAvatar('Sachin Patney'); // returns a image data url

generateAvatar('Sachin Patney', 96, '#DDD'); // optionally you can supply size (in pixels) & fill color
```
