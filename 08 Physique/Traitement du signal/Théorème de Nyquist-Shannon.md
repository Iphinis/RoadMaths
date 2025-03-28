---
sources:
  - https://www.youtube.com/watch?v=8l6meWY2mvI
---
Pour échantillonner correctement un signal, c'est-à-dire prendre le moins de points possibles sur un signal pour bien le représenter, il y a une condition à respecter.

Soit $s$ un signal composé de $n$ signaux sinusoïdaux $s_1,\dots,s_n$, donc périodiques de période $T_1,\dots,T_n$, et de fréquences $f_1,\dots,f_n$.

Représentons $s$ pour $2$ signaux afin de comprendre par la suite la généralisation du théorème :
![[4. Théorème de Nyquist-Shannon 2024-09-19 15.38.29.excalidraw]]
Ici, $T_\min=T_1<T_2$, c'est-à-dire que $f_1=\dfrac{1}{T_1}>\dfrac{1}{T_2}=f_2$

Pour bien échantillonner, il faut ainsi que la période d'échantillonnage $T_e$, la période où l'on prend un point du signal, soit telle que $T_e<\dfrac{T_\min}{2}$ sinon on perd l'information du signal qui varie le plus (ici $s_1$).

On a donc par équivalence $f_e=\dfrac{1}{T_e}>\dfrac{2}{T_\min}=2f_\max$
En effet, si la période est minimale, la fréquence sera maximale pour celle-ci.

![[4. Théorème de Nyquist-Shannon 2024-09-19 15.59.41.excalidraw]]

Ainsi, pour que le signal $s$ soit bien échantillonné, il faut que :
$$
\boxed{f_e>2f_\max}
$$
