# Introduction
Les chiffres que l'on connaît sont en base $b=10$ (dite décimale) : de $0$ à $9$, c'est-à-dire que tout chiffre est compris entre $0$ et $b-1$.
Cependant on peut compter avec plus de chiffres (ou symboles) dans une base supérieure, comme l'hexadécimal, ou bien avec moins comme le binaire.

Dit de manière informelle, on peut écrire une infinité de nombres en mettant bout à bout ces chiffres. Les mettre bout à bout mathématiquement, c'est faire la somme de chiffres multipliés par des puissances de la base.
De manière plus avancée mathématiquement, on dit les puissances de la base $b$ forment une base $B=(b^0,b^1,b^2,b^3,\dots)=(1,b,b^2,b^3,\dots)$ qui engendre l'espace polynomial $\mathbb{K}[b]$.
Un nombre est une combinaison linéaire de la base $B$.

Par exemple, $13 = 1\times 10^1 + 3\times 10^0$

On en déduit l'écriture en base $b$ :
$$
(x)_{b}= \sum\limits_{i=0}^{n} a_{i}\times b^i=a_{0}\times b^{0} + \dots a_{n}\times b^{n}=(a_n\dots a_0)_b
$$
avec $n \in \mathbb{N}$ et $\forall i, a_i \in \{0,\dots,b-1\}$

Remarque: on pourrait définir la base unaire pour $b=1$ et les coefficients $a_i$, elle est inutile car elle revient à compter chaque élément un à un.

On peut par exemple écrire $13$ dans la base $2$ : $1101$
En effet, $(1101)_{2}=1\times 2^3+ 1\times 2^2+ 0\times 2^1+1\times 2^0 =(13)_{10}$

Nous allons expliquer comment les conversions s'effectuent dans le paragraphe suivant.
# Comment passer d'une base à l'autre ?
Soient $b_1,b_2 \in \mathbb{N}^*\backslash{\{1\}}$ des bases distinctes.

On désire passer de la base $b_1$ à $b_2$.

Soient $n,m \in \mathbb{N}^*$.

Soit $x=(a_n\dots a_0)_{b_1}=\sum\limits_{i=0}^{n}a_i {b_1}^i$
## Cas $b_1 < b_2$

On a $\forall i \in [|0,n|], 0 \leq a_i \leq b_1 - 1 < b_1 < b_2$
Ainsi, on peut évaluer le calcul et obtenir directement la valeur dans la base $b_2$

## Cas $b_1 > b_2$

On va effectuer la division euclidienne de $x$ par $b_2$ un certain nombre $d \in N$ de fois jusqu'à obtenir un quotient de $0$ pour la dernière division imbriquée effectuée.

Cela va permettre de décomposer $x$ sous forme de fonction polynomiale de $b_2$.

En effet :
$$
\begin{align*}
x &= b_2 \times q_1 + r_1\\
&= b_2 \times (b_2\times q_2 + r_2) + r_1\\
&= b_2 \times (b_2\times (b_2\times q_3 + r_3) + r_2) + r_1\\
&= \dots\\
&= b_2 \times (b_2\times (...\times (b_2\times (\underbrace{b_2\times q_d}_{=0} + r_d)+r_{d-1})+\dots)+r_2) + r_1\\
&= b_2 (b_2 (...b_2 r_d+r_{d-1})\dots+r_2) + r_1\\
&= r_db_2^{d-1} + \dots + r_3 b_2^2 + r_2 b_2 + r_1\\
&= \sum\limits_{i=0}^{d-1}r_{i+1} {b_2}^i
\end{align*}
$$

# Exemples
Ce paragraphe est une application pratique du chapitre.
Les méthodes pour passer du binaire aux bases $8$ et $16$ sont à démontrer #todo.
## Base 10 à 2
![[4. Règles de conversion entre bases 2024-07-31 00.01.56.excalidraw]]
## Base 2 à 16
![[4. Règles de conversion entre bases 2024-07-31 00.09.05.excalidraw]]
## Base 2 à 8
![[4. Règles de conversion entre bases 2024-07-31 00.14.05.excalidraw]]