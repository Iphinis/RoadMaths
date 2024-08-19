# Addition
Cette loi est représentée par "$+$". Pour additionner $2$ chiffres, il faut les ajouter :
![[Opérations 2024-03-29 23.05.20.excalidraw]]
Cela équivaut à $2+3=5$ en base $b \geq 6$

Cependant, si on vaut ou dépasse la base $b$, alors il faut utiliser la notation adéquate dans celle-ci.
$8+7=15=(8+2)+5=10^1*1+10^0*5$

De manière équivalente lorsqu'on "pose" l'addition, on va se décaler d'un cran vers la gauche lorsque la base est atteinte.

Un autre exemple :
![[Opérations 2024-03-30 00.00.37.excalidraw|200]]

# Soustraction
C'est l'opération "$-$", réciproque à l'addition. Elle fonctionne de la même manière
On peut donc maintenant obtenir des nombres négatifs, inférieurs à zéro.
Ils peuvent avoir une signification dans le commerce et les finances notamment, mais pas pour compter des objets physiques à proprement parler par exemple.

On peut représenter ces nombres sur un axe :
![[Opérations 2024-03-29 23.17.45.excalidraw]]

On peut également poser la soustraction :

Soit $x-y=(x_n\dots x_0)_b - (y_m,\dots, y_0)_b$ avec $x \geq y$

![[Opérations 2024-03-30 00.06.54.excalidraw|200]]

Dans un cran $i$, si $x_i < y_i$, alors il faut prendre une unité de $x_{i+1}$ (on module alors $x_{i+1}$ par la base $b$) pour que le résultat reste correct. Si $x_{i+1}$ est nul, alors le résultat de la soustraction est négatif.

![[Opérations 2024-04-01 02.34.22.excalidraw|500]]

On ne tient pas compte de la virgule dans le cas des nombres décimaux.

![[Opérations 2024-04-01 02.46.38.excalidraw]]
# Multiplication
C'est l'opération "$\times$", qui simplifie l'addition répétitive d'un même nombre :
$\underbrace{3+3+3+3+3}_{\text{5 fois 3}}=3*5=5*3=\underbrace{5+5+5}_{\text{3 fois 5}}$

La multiplication est commutative dans l'espace des ensembles usuels de nombres.

![[Opérations 2024-04-01 03.23.18.excalidraw]]

![[Opérations 2024-04-01 03.26.46.excalidraw|500]]

On peut comprendre la règle de multiplication de nombres relatifs en les voyant comme des vecteurs, le signe $-$ ne fait que renverser le sens du nombre multiplié, cela revient à un signe positif dans le cas où les deux ont le même signe, ou sens, selon le point de vue.

![[Opérations 2024-04-01 03.10.08.excalidraw|200]]
# Division (euclidienne)
C'est l'opération $/$ ou la barre de fraction $\frac{\,\,\,}{}$,de manière équivalente.
$x/y$ donne comme résultat le nombre entier de fois que $y$ est contenu dans $x$, le résultat est $q$ dans les notations qui suivent.
On appelle le reste ce qui ne peut pas être représenté entièrement.
On aura donc $x=q*y+r$ avec $r>0$

![[Opérations 2024-03-29 23.54.39.excalidraw|300]]

Dans le cas négatif, cela revient au même que la multiplication, par la même analogie vectorielle.

![[Opérations 2024-04-01 04.11.16.excalidraw]]

# Fractions
addition/soustraction de fractions :
![[Opérations 2024-04-01 16.46.06.excalidraw]]

multiplication par un facteur:
![[Opérations 2024-04-01 18.12.55.excalidraw]]
On a $\frac{a}{b}\times c = \frac{ac}{b}$

multiplication de 2 fractions :
![[Opérations 2024-04-01 18.21.38.excalidraw]]

fraction de fraction :
![[Opérations 2024-04-01 18.05.41.excalidraw]]
On comprend ainsi la phrase "diviser c'est multiplier par l'inverse"
# Puissance

# Factorielle
# Somme
Soient $i,j\in \mathbb{N}$ tels que $i<j$ et $a\in \mathbb{C}\backslash\{1\}$.
$$
\sum\limits_{k=i}^{j}a^k=\dfrac{a^{j+1}-a^{i}}{(a-1)}
$$
## démonstration
Posons $S=\sum\limits_{k=i}^{j}a^k$
$$
\begin{align*}
aS &= \sum\limits_{k=i}^{j}a^{k+1}\\
aS-S&= S(a-1)=\sum\limits_{k=i+1}^{j+1}a^{k}-\sum\limits_{k=i}^{j}a^k=a^{j+1}-a^{i}\\
S&=\begin{cases}
\dfrac{a^{j+1}-a^{i}}{(a-1)} &\text{ si } a\neq 1\\
j-i+1 &\text{sinon}

\end{cases}
\end{align*}
$$
