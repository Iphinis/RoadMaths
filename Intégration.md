---
updated: 2024-06-14T19:15
succ: 
done: true
---
NB: Toutes les mesures ne sont pas prises en compte ici pour le moment, on se restreint à la mesure de Lebesgue, enseignée au lycée et en début d'études supérieures.

Soit $f : \mathbb{R} \to \mathbb{R}$ une fonction continue.
Soient $a,b \in \mathbb{R}$ tels que $a < b$.
# Intégrale
On note l'intégrale de la fonction $f$ de $a$ à $b$ par $\int_a^b f(x) dx$.
C'est l'aire signée de la courbe de la fonction jusqu'à l'axe des abscisses de $a$ à $b$.

![[Intégration 2024-06-14 18.23.32.excalidraw]]

## Permutation des bornes
On remarque par relation de Chasles que
$$
\int_a^b f(x) dx+ \int_b^a f(x)dx = \int_a^a f(x) dx = 0
\Leftrightarrow \int_a^b f(x) dx = -\int_b^a f(x)dx
$$


## Théorème fondamental de l'analyse
On pose $$I : x \mapsto \int_a^x f(t) dt$$
Soit $h\in \mathbb{R}$.
On a comme taux d'accroissement de $I$ :
$$
\begin{align*}
\tau_I(x,x+h)&=\dfrac{I(x+h)-I(x)}{h}\\
&=\dfrac{\int_a^{x+h} f(t)dt-\int_a^x f(t)dt}{h}\\
&=\dfrac{\int_x^{x+h} f(t)dt}{h}\\
&=\dfrac{1}{(x+h)-x}\int_x^{x+h} f(t)dt \text{ (valeur moyenne de } f \text{ sur } [x,x+h] \text{)}
\end{align*}
$$

Si on suppose $f$ croissante sur $[x,x+h]$, alors $f(x)\leq\tau_I(x,x+h)\leq f(x+h)$.
En effet :
Soit $t \in [x,x+h]$. Alors :
$$
\begin{align*}
f(x)&\leq f(t)\leq f(x+h) \\
\Leftrightarrow \dfrac{\int_x^{x+h} f(x)dt}{h} &\leq \dfrac{\int_x^{x+h} f(t)dt}{h}\leq \dfrac{\int_x^{x+h} f(x+h)dt}{h}\\
\Leftrightarrow \dfrac{h\times f(x)}{h} &\leq \dfrac{\int_x^{x+h} f(t)dt}{h}\leq \dfrac{h\times f(x+h)}{h}\\
\Leftrightarrow f(x) &\leq \tau_I(x,x+h)\leq f(x+h)
\end{align*}
$$

De même, si on suppose $f$ décroissante sur $[x,x+h]$, alors $f(x)\geq\tau(x,x+h)\geq f(x+h)$

Dans les 2 cas, par théorème d'encadrement, $\underset{h \to 0}\lim \tau(x,x+h)=I'(x)=f(x)$

Donc $I : x \mapsto \int_a^x f(t) dt$ est une primitive de $f$, c'est-à-dire que $\boxed{\forall x \in \mathbb{R}, \forall a \in \mathbb{R}, \left(\int_a^x f(t) dt\right)'=f(x)}$

Soit $F$ une primitive quelconque de $f$.
Alors, par définition, $\exists!C\in \mathbb{R},F = I + C$

$$
F(b) - F(a) = I(b) + C - I(a) - C = I(b) - I(a) = \int_a^b f(t) dt - \int_a^a f(t) dt = \int_a^b f(t) dt
$$

Ainsi, $\boxed{\forall F \in \mathcal{F}(\mathbb{R},\mathbb{R}), \forall x \in \mathbb{R}, F'(x) = f(x) \Rightarrow \int_a^b f(x) dx = F(b) - F(a) }$


# Intégrale de Riemann
![[Intégration 2024-06-14 17.33.02.excalidraw]]
Soit $N \in \mathbb{N}^*$ le nombre de rectangles.

On peut approximer grâce à une subdivision infinie de rectangles définies par $a,b,N$ et $f$ :
$$
\int_a^b f(x) dx \approx \underset{N\to \infty}\lim\sum\limits_{i=0}^{N-1} \frac{b-a}{N} f\left(\frac{b-a}{N}i + a\right)
$$



