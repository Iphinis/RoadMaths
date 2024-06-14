---
updated: 2024-06-11T17:13
succ: 
done: 
---

# Binôme de Newton
Montrons que $\forall n \in \mathbb{N}, P_n : \forall a,b \in \mathbb{R}, (a+b)^n = \sum\limits_{k=0}^n \begin{pmatrix}n \\ k\end{pmatrix} a^kb^{n-k}$ 

## Initialisation
$n=0 \Rightarrow 1 = 1$

## Hérédité
Supposons que pour $n \in \mathbb{N}$ fixé, on ait $P_n$.
Fixons $a,b\in \mathbb{R}$.

$$
\begin{align*}
(a+b)^n = \sum\limits_{k=0}^n \begin{pmatrix}n \\ k\end{pmatrix} a^kb^{n-k}
\Leftrightarrow (a+b)^{n+1} = \sum\limits_{k=0}^n (a+b)\dfrac{n!}{k!(n-k)!} a^kb^{n-k}
\end{align*}
$$


![[Pasted image 20240611171302.png]]