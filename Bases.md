---
updated: 2024-06-09T20:01
succ:
  - "[[Opérations]]"
done: true
---

Les chiffres sont en base 10 : 0, ..., 9.
On peut écrire une infinité de nombres en mettant bout à bout ces chiffres.

Par exemple, $13 = 10^0*3+10^1*1$

On en déduit l'écriture en base $b$ :
$$
(x)_{b}= \sum\limits_{i=0}^{n} b^i*a_{i}=b^{0}*a_{0} + \dots b^{n}*a_{n}=(a_n\dots a_0)_b
$$
avec $n \in \mathbb{N}$ et $\forall i, a_i \in \{0,\dots,b-1\}$

$13$ peut donc s'écrire en base $2$ comme suit :
$(13)_{10}=10^1*1+10^0*3=2^3*1+2^2*1+2^1*0+2^0*1=(1101)_{2}$

# Comment passer d'une base à l'autre ?
Soient $b_1,b_2 \in \mathbb{N}^*\backslash{\{1\}}$ des bases. Supposons, sans perte de généralité, que $b_1 < b_2$

On a $b_2=b_1+k, k\in \mathbb{N}^*$
donc $b_1=b_2-k$

Soit $x=(a_n\dots a_0)_{b_1}=\sum\limits_{i=0}^{n_1}a_i {b_1}^i$

Alors
$$
\begin{align*}
x
&=\sum\limits_{i=0}^{n_1}a_i {(b_2-k)}^i\\
&=\sum\limits_{i=0}^{n_1}a_i\sum\limits_{j=0}^{i}\begin{pmatrix}i \\ j\end{pmatrix} {b_2}^{i-j} (-k)^j\\
&=\sum\limits_{i=0}^{n_1} \left( a_i \sum\limits_{j=0}^{i}{b_2}^{-j} \begin{pmatrix}i \\ j\end{pmatrix} (-k)^j \right) {b_2}^i\\
&=\sum\limits_{i=0}^{n_1}a_i' {b_2}^i\\
&=(a_{n_1}\dots a_0')_{b_2}
\end{align*}
$$
où $\forall i \in \{0,n_1\}, a_i' = a_i \sum\limits_{j=0}^{i}{b_2}^{-j} \begin{pmatrix}i \\ j\end{pmatrix} (-k)^j$

Exemple :
![[Bases 2024-06-09 19.22.39.excalidraw]]