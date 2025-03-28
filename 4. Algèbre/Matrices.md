---
prérequis:
  - "[[4. Opérations]]"
  - "[[3. Théorie des ensembles]]"
  - "[[6. Equations et inéquations]]"
sources:
  - https://www.mathoutils.fr/cours-et-exercices/mathematiques-expertes/calcul-matriciel/
  - https://people.richland.edu/james/lecture/m116/matrices/inverses.html
---
3# Introduction
Une matrice est une structure de données sous forme de tableau de données.

Par exemple :

$$
A=
\begin{pmatrix}
1 & 2 & 3 \\
4 & 5 & 6
\end{pmatrix}
$$

On dit que $A$ est de taille $(2,3)$ : $2$ lignes et $3$ colonnes

## Ensemble
L'ensemble des matrices est nommé $\mathcal{M}$

On précise l'ensemble des coefficients (termes) de la matrice de la manière suivante : $\mathcal{M}(E)$ où $E$ est un ensemble quelconque.

Par exemple, $A \in \mathcal{M}(\mathbb{R})$

Soient $n,m \in N^*$
Pour être plus précis et gagner du temps, on limite l'ensemble des matrices à une taille fixée.
En effet, $\mathcal{M}_{n,m}(E)$ désigne l'ensemble des matrices de taille $(n,m)$ à coefficients dans $E$.
Une écriture alternative parfois utilisée est $E^{n\times m}$.

## Coefficients
Soit $M\in \mathcal{M}_{n,m}(E)$

### Coefficient à une certaine coordonnée
Le coefficient de $M$ à la position $(i,j)$ avec $i\in \{1,\dots,n\}$ et $j\in \{1,\dots,m\}$ est généralement noté $M_{i,j}$. On trouve parfois la notation $m_{i,j}$.

Par exemple, $A_{2,1}=4$

On peut donc dire que $A \in \mathcal{M}_{2,3}(\mathbb{R})$
### Coefficients d'une certaine ligne/colonne
On peut désigner toute une ligne $i$ de la matrice $M$ à l'aide de la notation suivante :

$$
M_{i,:}=
\begin{pmatrix}
M_{i,1} & \dots & M_{i,m}
\end{pmatrix}
\in \mathcal{M}_{1,m}(E)
$$

On peut également désigner toute une colonne $j$ de la matrice $M$ à l'aide de la notation suivante :

$$
M_{:,j}=
\begin{pmatrix}
M_{1,j} \\
\vdots \\
M_{n,j}
\end{pmatrix}
\in \mathcal{M}_{n,1}(E)
$$

# Opérations
Soient $A,B \in \mathcal{M}_{n,m}(\mathbb{R})$.
Soit $\star$ une opération quelconque.
Soit $C \in \mathcal{M}_{n,m}(\mathbb{R})$ tel que $C = A \star B$.
## Addition/Soustraction
Nous pouvons additionner $A+B=C$ :

$$
\forall (i,j) \in \{1,\dots,n\}\times\{1,\dots,m\},C_{i,j}=A_{i,j}+B_{i,j}
$$

Remarquons que cela n'aurait pas de sens de calculer la somme de 2 matrices de tailles différentes.

Nous pouvons faire de même pour la soustraction $A-B=C$ :

$$
\forall (i,j) \in \{1,\dots,n\}\times\{1,\dots,m\},C_{i,j}=A_{i,j}-B_{i,j}
$$

## Multiplication
### terme à terme
Nous pouvons faire de même que pour les 2 opérations précédentes pour la multiplication terme à terme $A\otimes B=C$ :

$$
\forall (i,j) \in \{1,\dots,n\}\times\{1,\dots,m\},C_{i,j}=A_{i,j}\times B_{i,j}
$$

### matricielle
Soient $q\in\mathbb{N}^*$, $A \in \mathcal{M}_{n,q}(\mathbb{R})$ et $B \in \mathcal{M}_{q,m}(\mathbb{R})$.

Définissons le produit matriciel $A.B=AB=A@B=C$ :

$$
\forall (i,j) \in \{1,\dots,n\}\times\{1,\dots,m\},C_{i,j}=\sum\limits_{k=1}^{q}a_{i,k}b_{k,j}
$$

Il peut être plus aisé de visualiser l'illustration de cette opération :

![[Pasted image 20250207190827.png]]

Il est important de noter qu'il faut que le nombre de colonnes de $A$ et le nombre de lignes de $B$ soient égaux pour pouvoir utiliser cette opération.

Remarquons aussi que le produit matriciel n'est pas commutatif : $AB \neq BA$
#todo

#### explication (probable)
Il est également intéressant de remarquer que nous pouvons représenter un système dans plusieurs matrices.

Prenons pour exemple un système $(S)$ à $n$ lignes/équations et $m$ colonnes/inconnues.
Soit ses inconnues $(x_{j})_{j \in \{1,\dots,m\}}$, ses coefficients $(a_{i,j})_{(i,j) \in \{1,\dots,n\}\times\{1,\dots,m\}}$ et ses solutions $(b_{j})_{j \in \{1,\dots,m\}}$.

$$
(S) :
\begin{cases}
a_{1,1}x_1 +\dots +a_{1,m}x_m &= b_1 \\
\quad \quad \quad \quad \vdots &= \vdots\\
a_{n,1}x_1+\dots+a_{n,m}x_m &= b_n
\end{cases}
$$

Soit $A\in \mathcal{M}_{n,m}(E)$.
Notons, de manière équivalente, les inconnues et solutions dans l'ensemble $\mathcal{M}$ : 
$x\in\mathcal{M}_{m,1}$ et $b\in\mathcal{M}_{n,1}$

Montrons que:

$$(S) \iff Ax=b$$

#todo
## Division
#todo
### terme à terme

### matricielle
?