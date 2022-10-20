## CSS
- aby som mohol vo flexboxe pouzit aj `align-items: center;`, tak potrebujem aj urcit vysku napr. `100vh`

### footer
- vdaka tomuto bude footer stale dole
```CS
display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
    width: 99.9%;
    height: 2.5rem; 
```