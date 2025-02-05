# Dérivabilité dans $\mathbb{R}$
### Taux d'accroissement :
![[Régularité 2024-06-12 10.19.46.excalidraw]]
Soient $x,y \in E$
On définit le taux d'accroissement par :
$$
\tau_f(x,y)=\dfrac{f(x)-f(y)}{x-y}
$$
## Dérivée
Soit $h \in \mathbb{R}_*^+$.
![[Régularité 2024-06-12 10.47.52.excalidraw]]
La dérivée de $f$ en $a$ est :
$$f'(a)=\underset{h\to 0}\lim \dfrac{f(a)-f(a+h)}{a-(a+h)}=\underset{h\to 0}\lim \dfrac{f(a)-f(a+h)}{-h}=\underset{h\to 0}\lim \dfrac{f(a+h)-f(a)}{h}$$
On peut aussi écrire, de manière équivalente :
$$f'(a)=\underset{h\to 0}\lim \dfrac{f(a+h)-f(a)}{a+h-a}=\underset{h\to 0}\lim \dfrac{f(a+h)-f(a)}{h}$$

On peut également écrire :
$$f'(a)=\underset{h\to a}\lim \dfrac{f(a)-f(h)}{a-h}$$

## Dérivabilité
$f$ est dérivable en $a$ si $\underset{\substack{h\to a \\h<a}}\lim \underbrace{\dfrac{f(a)-f(h)}{a-h}}_{\tau_f(a,h)}=\underset{\substack{h\to a \\h>a}}\lim \underbrace{\dfrac{f(a)-f(h)}{a-h}}_{\tau_f(a,h)}$ et ces limites sont finies
$f$ est dérivable sur $I \subset E$ ssi $\forall a \in I,f\text{ est dérivable en }a$

## Dérivées usuelles
Dérivée de $f:x \mapsto c,c\in \mathbb{R}$ en $a$ :
$$
f'(a)=\underset{h\to 0}\lim \dfrac{f(a+h)-f(a)}{h}=0
$$

Dérivée de $f:x \mapsto x$ en $a$ :
$$
f'(a)=\underset{h\to 0}\lim \dfrac{f(a+h)-f(a)}{h}=1
$$

Dérivée de $f:x \mapsto x^2$ en $a$ :
$$
\begin{align*}
f'(a)&=\underset{h\to 0}\lim \dfrac{f(a+h)-f(a)}{h}\\
&=\underset{h\to 0}\lim\dfrac{(a+h)^2-a^2}{h}\\
&=\underset{h\to 0}\lim\dfrac{a^2+2ah+h^2-a^2}{h}\\
&=\underset{h\to 0}\lim\dfrac{2ah+h^2}{h}\\
&=\underset{h\to 0}\lim2a+h\\
&=2a
\end{align*}
$$

Dérivée de $f:x \mapsto x^n, n\in \mathbb{N}$ en $a$ :
$$
\begin{align*}
f'(a)&=\underset{h\to 0}\lim \dfrac{f(a+h)-f(a)}{h}\\
&=\underset{h\to 0}\lim\dfrac{(a+h)^n-a^n}{h}\\
&=\underset{h\to 0}\lim\dfrac{\sum\limits_{k=0}^n \begin{pmatrix}n \\ k\end{pmatrix} a^kh^{n-k}-a^n}{h}\\
&=\underset{h\to 0}\lim\dfrac{h^n+\begin{pmatrix}n \\ 1\end{pmatrix} ah^{n-1}+...+\begin{pmatrix}n \\ n-1\end{pmatrix} a^{n-1}h+a^n-a^n}{h}\\\\
&=\begin{pmatrix}n \\ n-1\end{pmatrix} a^{n-1}\\
&=n a^{n-1}
\end{align*}
$$

Dérivée de $f:x \mapsto uv, u,v \in \mathcal{F}(\mathbb{R},\mathbb{R})$ en $a$ :
$$
\begin{align*}
f'(a)&=\underset{h\to 0}\lim \dfrac{f(a+h)-f(a)}{h}\\
&=\underset{h\to 0}\lim\dfrac{u(a+h)v(a+h)-u(a)v(a)}{h}\\
&=\underset{h\to 0}\lim\dfrac{u(a+h)v(a+h)-u(a)v(a+h)+u(a)v(a+h)-u(a)v(a)}{h}\\
&=\underset{h\to 0}\lim\dfrac{[u(a+h)-u(a)]v(a+h)+u(a)[v(a+h)-v(a)]}{h}\\
&=u'(a)v(a)+u(a)v'(a)
\end{align*}
$$

Dérivée de $f:x \mapsto \frac{u}{v}, u,v \in \mathcal{F}(\mathbb{R},\mathbb{R})$ en $a$ :
$$
\begin{align*}
f'(a)&=\underset{h\to 0}\lim \dfrac{f(a+h)-f(a)}{h}\\
&=\underset{h\to 0}\lim\dfrac{\dfrac{u(a+h)}{v(a+h)}-\dfrac{u(a)}{v(a)}}{h}\\
&=\underset{h\to 0}\lim\dfrac{\dfrac{u(a+h)}{v(a+h)}-\dfrac{u(a)}{v(a+h)} + \dfrac{u(a)}{v(a+h)} -\dfrac{u(a)}{v(a)}}{h}\\
&=\underset{h\to 0}\lim\dfrac{\dfrac{u(a+h)-u(a)}{v(a+h)} + u(a)\dfrac{v(a)-v(a+h)}{v(a+h)v(a)}}{h}\\
&= \frac{u'(a)}{v(a)} + \frac{u(a)v'(a)}{v^2(a)}\\
&= \frac{u'(a)v(a)+u(a)v'(a)}{v^2(a)}\\
\end{align*}
$$

Dérivée de $f:x \mapsto \sqrt{x}$ en $a$ :
$$
\begin{align*}
f'(a)&=\underset{h\to 0}\lim \dfrac{f(a+h)-f(a)}{h}\\
&=\underset{h\to 0}\lim \dfrac{\sqrt{a+h}-\sqrt{a}}{h}\\
&=\underset{h\to 0}\lim \dfrac{\sqrt{a+h}-\sqrt{a}}{h}\times \dfrac{\sqrt{a+h}+\sqrt{a}}{\sqrt{a+h}+\sqrt{a}}\\
&=\underset{h\to 0}\lim \dfrac{(\sqrt{a+h}-\sqrt{a})(\sqrt{a+h}+\sqrt{a})}{h(\sqrt{a+h}+\sqrt{a})}\\
&=\underset{h\to 0}\lim \dfrac{a+h-a}{h(\sqrt{a+h}+\sqrt{a})}\\
&=\underset{h\to 0}\lim \dfrac{1}{\sqrt{a+h}+\sqrt{a}}\\
&=\dfrac{1}{2\sqrt{a}}\\
\end{align*}
$$
