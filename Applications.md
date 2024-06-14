---
updated: 2024-06-13T20:03
succ:
  - "[[Régularité]]"
  - "[[Trigonométrie]]"
  - "[[Mesure]]"
done: 
---

Une fonction $f$ associe à toute entrée $x$ d'un ensemble de départ $E$ une sortie $y$ d'un ensemble d'arrivée $F$ par des opérations mathématiques telle que l'association $(x,y)$ soit unique :
$\forall x \in E, \exists ! y \in F,f(x)=y$

#todo inj, surj, bij
# Fonctions réciproques
$g : F \to E$ est la fonction réciproque de $f : E \to F$ ssi $\forall x \in E, \forall y \in F, f(g(x))=g(f(x))=x$

Attention, $E$ et $F$ peuvent être des sous-ensembles respectivement de l'ensemble de départ et d'arrivée de $f$, tels que $f$ soit bijective sur ces derniers (et donc g aussi).
## carrée
```functionplot
---
title: Fonction carré
xLabel: x
yLabel: x²
bounds: [-5,5,-1,18]
disableZoom: false
grid: true
---
f(x)=x^2
```

$\begin{array}{ccccc} \cdot^2 &:& \mathbb{R} & \to & \mathbb{R^+} \\  && x & \mapsto & x^2\end{array}$

## racine carrée
```functionplot
---
title: Fonction racine carrée
xLabel: y
yLabel: √y
bounds: [-1,18,-1,5]
disableZoom: false
grid: true
---
g(x)=sqrt(x)
```
$\begin{array}{ccccc} \sqrt \cdot &:& \mathbb{R^+} & \to & \mathbb{R^+} \\  && x & \mapsto & \sqrt{x}\end{array}$

C'est la fonction qui à $x$ associe $y$ tel que $y^2=x$


#todo exp, ln

#todo cos, sin, tan