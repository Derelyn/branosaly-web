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

# 25.10.2022
## CSS
- position:
  - relative - ovplivnuje aj ine pozicie (stranka)
  - absolute - nic neovplivnuje (napr. navbar)
  - fixed - je fixna
  - sticky
- jednotky:
  - rem - staticke, relativne k zakladnemu fontsize z html{}. font-size, nastavit jednotny font size v html{} na 62.5%
  - em - relative to parent fontsize
  - % - podla ich rodica. Napr. 50% child a ked parent znizim o 40% tak sa znizi aj childaby sa vopchal na 50% do parentu.
  - vw/vh - sere na rodica, berie podiel z obrazovky. 1vh je 1% obrazovky
  - em a % funguju podobne

# 26.10.2022
## CSS
### Grid
```CSS
Display: grid;
grid-template-columns: 50% 20% 30%; 
```
- grid-template-columns - ako rozdelit stlpce.
  - pouziva sa aj jednotka `fr` (fractions). Nieco ako col-6 v bootstrape
  - `grid-template-columns: repeat(3, 1fr);` - 3x zopakuje 1fr. Mozem aj pouzit 1fr 2fr a bude sa to opakovat.
- grid-column/row-gap - gap medzi stlpcami/riadkami
  - alebo pouzit na vsetky rovnako `grid-gap`
- `grid-auto-rows: 100px;` - height of rows
  - : minmax(100px, auto) - zaklad (min) je 100px, pokial bude vacsie tak auto
- justify-items: ;/align-items: ; - podobne ako flexbox len pre grid
- `grid-column/row: 1/3;` - expandne column/row od 1 po 3

# 31.10.2022
- najprv funkcionalita az potom style
- npm i react-scroll moze mat problem s efektom na navbare. Nefunguje ani pri overflow: hidden;

# 5.11.2022
## Responsive web design
- max-width: 60rem/600px
- margin: 0 auto; - toto da objekt automticky do stredu
- %, vh, vw, em, rem

# 7.11.2022
## ReactJS
- pokial chcem spravit download v recte, subor musim hodit do public a iba ho potom jednoducho privolat tym, ako sa vola.

# 9.11.2022
## CSS
- `transform: scale(-1);` - otoci vec, obrázok. Flip img.
- `html { scroll-behavior: smooth; }`
```CS
h1{
  background: linear-gradient(to right, rgb(57,124, 205), rgb(69, 214, 202));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

# 10.11.2022
## CSS
### Responsive
- pouzivat max-width
- pouzivat viac padding a margin ako position (napr. v tutoriali pouzil position 1-2x)
- viac pouzivat %
- % z parentu
- kodit css aspon trosku organizovanejsie(mozno spravit na vrchu table of content)
- pre grid: `grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))` alebo auto-fill
  - grid-auto-rows: 240px
  - grid-row: span 2 / auto;
  - grid-column: span 2 / auto;
  - (tento kod mi prisposobuje grid podla velkosti obrazkov)
