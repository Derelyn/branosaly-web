## CSS
- aby som mohol vo flexboxe pouzit aj `align-items: center;`, tak potrebujem aj urcit vysku napr. `100vh`
- position absolute mi robi ze mozem hybat objektom bez toho, aby mi robili niejake hranice a moze sa prekrivat

### footer
- vdaka tomuto bude footer stale dole
```CS
display: flex;
    justify-content: center;
    position: relative;
    // alebo absolute
    bottom: 0;
    width: 99.9%;
    height: 2.5rem; 
```
### z-index
- urcuje prioritu ze co moze co prekrit

## React
- npm config set legacy-peer-deps true - velmi uzitocne, odstranuje errory ked chcem npm i nieco