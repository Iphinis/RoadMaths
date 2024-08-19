Soient $E,F$ des espaces vectoriels normés.
Soit $f : E \to F$ une application.
Soit $a \in E$.

![[Régularité 2024-06-12 11.05.45.excalidraw]]
## en un point
La limite de $f$ en $a$ est notée $\underset{x\to a}\lim \|f(x)\|_F$. On la définit par :
$$\forall \varepsilon > 0, \exists \eta > 0, \forall x \in E, \|x - a\|_E < \eta \Rightarrow \|f(a)-f(x)\|_F<\varepsilon$$

Cas divergent :
$\underset{x\to a}\lim \|f(x)\|_F=+\infty \Leftrightarrow \forall M \in \mathbb{R}, \exists \eta, \forall x \in E, \|x-a\|_E < \eta \Rightarrow \|f(x)\|_F > M$