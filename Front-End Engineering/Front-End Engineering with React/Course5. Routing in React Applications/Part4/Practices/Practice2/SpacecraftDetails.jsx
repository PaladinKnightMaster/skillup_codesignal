```
import { useParams } from 'react-router-dom';

export default function SpacecraftDetails() {
  const { name } = useParams();
  return <h1>Exploring the {name} spacecraft!</h1>;
}
```

import { useParams } from 'react-router-dom';

export default function SpacecraftDetails() {
  const { name, mission } = useParams();
  return <h1>Exploring the {name} spacecraft in {mission}!</h1>;
}