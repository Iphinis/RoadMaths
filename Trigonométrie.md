---
updated: 2024-06-13T19:57
succ:
  - "[[Fourier]]"
done: true
---
[📐L'origine de la trigonométrie. (Réupload) - YouTube](https://www.youtube.com/watch?v=KF4qorGhXxA)
# Cah Soh Toa
![[Trigonométrie 2024-06-13 16.26.36.excalidraw]]
Les points $A$ et $M$ sont fixés.
Le point $B$ est la projection de C sur l'axe des abscisses ou des ordonnées, selon si on veut calculer le cosinus ou le sinus.
## Sinus
$\sin(\alpha)=\dfrac{BC}{AC}=y$ avec $y$ qui est la coordonnée $y$ de $B$ (la projection orthogonale de $C$ sur l'axe des ordonnées dans le cercle unité)
NB: on peut démontrer l'équivalence entre les $2$ en appliquant la formule dans le cercle unité, où $AC=1$ 

Valeurs usuelles :
$\sin(0)=0$
$\sin(\pi/2)=1$
$\sin(\pi)=0$

### Graphe
```functionplot
---
title: Sinus
xLabel: 
yLabel: 
bounds: [-10,10,-1.5,1.5]
disableZoom: false
grid: true
---
f(x)=sin(x)
```

## Cosinus
$\cos(\alpha)=\dfrac{AB}{AC}=x$  avec $x$ qui est la coordonnée $x$ de $B$ (la projection orthogonale de $C$ sur l'axe des abscisses dans le cercle unité)

Valeurs usuelles :
$\cos(0)=1$
$\cos(\pi/2)=0$
$\cos(\pi)=-1$

On remarque aussi que $\cos(\pi/4)=\sin(\pi/4)$

### Graphe
```functionplot
---
title: Cosinus
xLabel: 
yLabel: 
bounds: [-10,10,-1.5,1.5]
disableZoom: false
grid: true
---
f(x)=cos(x)
```

## Tangente
On remarque que $BC=yAC$ et que $AB=xAC$
$\tan(\alpha)=\dfrac{BC}{AB}=\dfrac{y}{x}=\dfrac{sin(\alpha)}{\cos(\alpha)}$ pour $\alpha \neq \frac{\pi}{2}\mod \pi$

Valeurs usuelles :
$\tan(0)=0$
$\tan(\pi/2)=\text{undefined}$
$\tan(\pi/4)=1$
$\tan(\pi)=0$

### Graphe
```functionplot
---
title: Tangente
xLabel: 
yLabel: 
bounds: [-10,10,-1.5,1.5]
disableZoom: false
grid: true
---
f(x)=tan(x)
```

