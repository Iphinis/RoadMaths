---
sources:
  - https://www.youtube.com/watch?v=9EO0cEFdfvU
---
# Introduction
Lorsque 2 quantités sont égales, lorsqu'on leur applique une opération (addition, soustraction, multiplication, fonction etc), il est naturel de penser que leur quantité seront toujours égales.
C'est le principe même des équations.

Cependant, au lieu d'utiliser des nombres comme dans une équation $5=5$ qui est tout à fait inutile, on introduit la notion d'inconnue/variable, qu'on note $x$. C'est le début de ce qu'on nomme l'algèbre.

Si on reprend l'exemple précédent, on peut écrire l'équation $x=5$ où $x$ vaut alors $5$ mais on peut complexifier celle-ci en ajoutant d'autres termes, par exemple :
$$x-4=5^2$$
Cela est équivalent à $x=25+4=29$
On a ajouté la même quantité donc les 2 membres de l'égalité sont toujours égaux.
Il y a évidemment d'autres manières de faire ici comme soustraire par $5^2$ des 2 côtés puis ajouter la somme des termes, mais cela est inutile ici car il y a alors plus de calculs.

Si on remplace $x$ par $29$ dans l'équation initiale on obtient $29-4=25$ ce qui vaut bien $5^2$
Ce qu'il faut comprendre est que nous avions 2 quantités égales et qu'elles le sont restées tout le long du processus de "résolution", c'est à dire trouver la (ou les, mais ici il n'y a qu'une réponse possible) valeur de $x$ et donc en remontant dans la résolution et en remplaçant $x$ par sa valeur, l'équation est correcte.

## Degré d'une équation
Nous avons résolu notre première équation, du premier ordre/de degré un car la puissance la plus grande de $x$ est $1$. La plus grande car on aurait pu mettre d'autres termes $x$ de puissances différentes, comme $x^2+x^4=2$ qui est une équation du $4^e$ degré, plus délicat à résoudre en général mais ici c'est simple : $x=1$ ou $x=-1$.

## Plusieurs inconnues
Une équation qui a plusieurs inconnues n'a pas de solution qu'on trouve "directement", par exemple
$x+y=3$ peut se résoudre par $x=3-y$ ou $y=3-x$ selon l'inconnue que l'on choisit d'isoler.
L'ensemble des solutions est alors : $\mathcal S=\{(x,y) \mid y\in \mathbb{R}, x=3-y \in \mathbb{R} \}=\{(x,y) \mid x\in \mathbb{R}, y=3-x \in \mathbb{R} \}$
Il y a donc ici une infinité de solutions (sous forme de couple) et différentes façons de décrire cet ensemble.

# Systèmes
Il est possible d'avoir plusieurs équations avec des liens entre elles.
Par exemple, si nous avons le problème suivant assez connu mais simple : 
"Si une raquette et une balle valent 1.10€ en tout, et que la raquette vaut 1€ de plus que la balle, combien vaut la balle ?"

La réponse la plus intuitive pour la plupart des gens serait que la balle vaut $0,10€$, la somme ferait bien $1.10€$ si la raquette valait $1€$.
Cependant la raquette vaut alors $1,10€$ selon l'hypothèse de l'énoncé (que la raquette vaut 1€ de plus que la balle) et donc la somme serait de $1,20€$, ce qui n'est pas la somme que nous devons payer.

Représentons cela sous forme d'équations. Notons $r$ la raquette et $b$ la balle.
$r+b=1.10$ pour "Si une raquette et une balle valent 1,10€ en tout"
$r=1+b$ pour "la raquette vaut 1€ de plus que la balle"

Nous avons ici affaire à un système car les 2 inconnues des 2 équations sont liées (elles ont les mêmes lettres notamment), nous représentons ainsi ce lien par un système de 2 équations:

$$
(S):
\begin{cases}
\begin{align*}
r+b&= 1.10 \\
r&= 1+b
\end{align*}
\end{cases}
$$

Pour résoudre un tel système plusieurs possibilités s'offrent à nous, la plus simple est d'"injecter" la 2ème équation dans la première, c'est-à-dire que l'on remplace $r$ dans la première équation par sa valeur dans la seconde (i.e. $1+b$) et on peut alors résoudre la première équation car il ne reste que $b$ comme inconnue :
$$
\begin{align*}
(S) &\Leftrightarrow

\begin{cases}
1+b+b&= 1.10 \\
r&= 1+b
\end{cases}\\

&\Leftrightarrow
\begin{cases}
1+2b&= 1.10 \\
r&= 1+b
\end{cases}\\

&\Leftrightarrow
\begin{cases}
2b&= 0.10 \\
r&= 1+b
\end{cases}\\

&\Leftrightarrow
\begin{cases}
b&= 0.05 \\
r&= 1+b=1.05
\end{cases}

\end{align*}
$$
On a alors la solution à notre problème, la balle doit coûter $5$ centimes.

On peut également souligner qu'un système à $n$ équations où chacune a au moins une inconnue différente et au plus $n$ possède un ensemble de solutions fini, ce qui n'est pas le cas s'il y a moins d'équations que d'inconnues.

# Equations du second degré
Nous allons expliquer et démontrer la résolution générale de ce type d'équation.

Soient $a,b,c\in \mathbb{R}$.
$$
(E):ax^2+bx+c=0
$$

Nous allons réécrire le membre de gauche.

Si $x=0$ on a $(E) \Leftrightarrow c=0$ donc il n'y a plus d'inconnue et l'équation n'est vraie que si $c$ est nul.

# Inéquations