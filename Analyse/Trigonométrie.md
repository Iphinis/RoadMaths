---
sources:
  - https://www.youtube.com/watch?v=KF4qorGhXxA
  - https://www.youtube.com/watch?v=N6E4il2GGQo
---
# Cah Soh Toa
Soit un triangle $ABC$ rectangle en $B$
![[Trigonométrie 2024-08-10 17.51.25.excalidraw]]

On le place dans un cercle unité (de rayon $1$) où le centre coïncide avec $A$ et $AB$ avec $AM$ :
![[Trigonométrie 2024-08-10 17.52.58.excalidraw]]
Cette configuration est utilisée pour définir le cosinus, nous le verrons dans la suite.
Dans le cas du sinus on aurait :
![[Trigonométrie 2024-08-10 18.16.36.excalidraw]]
Le segment $BC$ est uniquement translaté dans les 2 configurations, sa longueur reste la même.

Notons que les points $A$ et $M$ sont fixés.

Le point $B$ est la projection de C sur l'axe des abscisses ou des ordonnées, selon si on veut calculer le cosinus ou le sinus.

On note $x=BC$ et $y=AB$ dans la seconde configuration (l'inverse dans la première)

Voici quelques situations particulières où $\alpha=\dfrac{\pi}{2}$ et $\alpha=\pi$ qui seront utiles pour la suite :

![[Trigonométrie 2024-06-13 16.26.36.excalidraw]]

![[Trigonométrie 2024-08-10 18.26.24.excalidraw]]
## Sinus
On définit la fonction sinus par :
$\forall \alpha \in \mathbb{R}, \sin(\alpha)=\dfrac{BC}{AC}=y$

### propriétés
- $\sin$ est $2\pi-\text{périodique}$
![[Trigonométrie 2024-08-11 12.37.58.excalidraw]]
- $\sin(\alpha+\pi)=-\sin(\alpha)$
- $\sin(\alpha)=-\sin(-\alpha)$ donc $\sin$ est impaire
### valeurs usuelles :
$\sin(0)=0$
$\sin(\pi/2)=1$
$\sin(\pi)=0$

### graphe
#todo
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

## dérivée
Dérivée de $f:x \mapsto \sin(x)$ en $a$ :
$$
\begin{align*}
f'(a)&= \underset{h\to 0}{\lim}\dfrac{f(a+h)-f(a)}{h}\\
&= \underset{h\to 0}{\lim}\dfrac{\sin(a+h)-\sin(a)}{h}\\

\end{align*}
$$

## Cosinus
On définit la fonction cosinus par :
$\forall \alpha \in \mathbb{R}, \cos(\alpha)=\dfrac{AB}{AC}=x$

C'est l'angle complémentaire au sinus, d'où "co"-sinus
### propriétés
- $\cos$ est $2\pi-\text{périodique}$
![[Trigonométrie 2024-08-11 12.37.58.excalidraw]]
- $\cos(\alpha+\pi)=-\cos(\alpha)$
- $\cos(\alpha)=\cos(-\alpha)$ donc $\cos$ est paire
### valeurs usuelles :
$\cos(0)=1$
$\cos(\pi/2)=0$
$\cos(\pi)=-1$

On remarque aussi que $\cos(\pi/4)=\sin(\pi/4)$ :
![[Trigonométrie 2024-08-10 18.10.41.excalidraw]]

### graphe
#todo
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

## dérivée
Dérivée de $f:x \mapsto \cos(x)$ en $a$ :
$$
\begin{align*}
f'(a)&= \underset{h\to 0}{\lim}\dfrac{f(a+h)-f(a)}{h}\\
&= \underset{h\to 0}{\lim}\dfrac{\cos(a+h)-\cos(a)}{h}\\

\end{align*}
$$
## Tangente
On définit la fonction tangente par :
$\forall \alpha \in \mathbb{R}\backslash\left\{\dfrac{\pi}{2} + k\pi,k\in \mathbb{Z}\right\},  \tan(\alpha)=\dfrac{BC}{AB}=\dfrac{y}{x}=\dfrac{\sin(\alpha)}{\cos(\alpha)}$
En effet, $BC=yAC$ et $AB=xAC$
### propriétés
- $\tan$ est $\pi-périodique$
En effet :
$$
\begin{align*}
\tan(\alpha+\pi)&=\dfrac{\sin(\alpha+\pi)}{\cos(\alpha+\pi)}\\
&=\dfrac{-\sin(\alpha)}{-\cos(\alpha)}\\
&= \tan(\alpha)
\end{align*}
$$
- $\tan(\alpha)=\dfrac{\sin(\alpha)}{\cos(\alpha)}=\dfrac{-\sin(-\alpha)}{\cos(-\alpha)}=-\tan(-\alpha)$ donc $\tan$ est impaire

### valeurs usuelles
$\tan(0)=0$
$\tan(\pi/2)=\text{undefined}$
$\tan(\pi)=0$
$\tan(\pi/4)=1$
### graphe
#todo
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
## dérivée

# Propriétés
Grâce au théorème de Pythagore, on a :
$$\cos^2(\alpha)+sin^2(\alpha)=r^2$$

![[Trigonométrie 2024-08-11 13.29.28.excalidraw]]

#todo

$$
\begin{align*}
\sin(a+b)&=
\end{align*}
$$