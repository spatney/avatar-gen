[![Npm Version](https://img.shields.io/npm/v/avatar-gen.svg?style=flat)](https://www.npmjs.com/package/avatar-gen)
[![Npm Downloads](https://img.shields.io/npm/dm/avatar-gen.svg?style=flat)](https://www.npmjs.com/package/avatar-gen)

### Avatar Generator

A Typescript library that generates an Avatar from a name string.

```typescript
import { generateAvatar } from 'avatar-gen'

generateAvatar('Sachin Patney'); // returns a image data url

generateAvatar('Sachin Patney', 96, '#DDD'); // optionally you can supply size (in pixels) & fill color
```
