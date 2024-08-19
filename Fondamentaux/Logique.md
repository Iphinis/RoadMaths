# Types d'assertion
## Axiome
Assertion que l’on considère vraie sans la démontrer.

## Définition
Énoncé d'un objet mathématique en spécifiant ses particularités.

## Propriété
Assertion qui peut être démontrée dans un système d'axiomes.

## Théorème
Propriété importante.

## Lemme
Propriété qui précède un théorème.

## Corollaire
Propriété découlant d'un théorème.

# Calcul propositionnel
Une proposition est une phrase qui peut être vraie ou fausse, elle a une valeur de vérité.

Les [Lois de De Morgan](https://fr.wikipedia.org/wiki/Lois_de_De_Morgan) permettent de définir les règles élémentaires de la logique propositionnelle.

Soient $P,Q$ deux propositions.
## Implication
$P \Rightarrow Q$ est un opérateur binaire qui est vrai si $Q$ est vraie ou si $P$ est fausse

| $P$    | $Q$    | $P \Rightarrow Q$ | $\neg P \vee Q$ |
| :----- | :----- | :---------------- | --------------- |
| $\top$ | $\top$ | $\top$            | $\top$          |
| $\bot$ | $\top$ | $\top$            | $\top$          |
| $\top$ | $\bot$ | $\bot$            | $\bot$          |
| $\bot$ | $\bot$ | $\top$            | $\top$          |
(Faux implique Vrai) qui est Vrai peut sembler contre-intuitif : [Pourquoi faux implique vrai ? Démonstration que p implique q équivaut à non p ou q - YouTube](https://www.youtube.com/watch?v=mKntY1S0dm8)
#todo
## Equivalence
$P \Leftrightarrow Q$ est un opérateur binaire qui est vrai si $P \Rightarrow Q$ et $Q \Rightarrow P$, autrement dit, si ($Q$ est vraie ou $P$ est fausse) et ($P$ est vraie ou $Q$ est fausse)

| $P$    | $Q$    | $P \Leftrightarrow Q$ | $P \Rightarrow Q$ | $Q \Rightarrow P$ |
| :----- | :----- | --------------------- | :---------------- | :---------------- |
| $\top$ | $\top$ | $\top$                | $\top$            | $\top$            |
| $\bot$ | $\top$ | $\bot$                | $\top$            | $\bot$            |
| $\top$ | $\bot$ | $\bot$                | $\bot$            | $\top$            |
| $\bot$ | $\bot$ | $\top$                | $\top$            | $\top$            |

## Réciproque
La réciproque de $P \Rightarrow Q$ est $Q \Rightarrow P$

## Contraposée
La contraposée de $P \Rightarrow Q$ est $\neg Q \Rightarrow \neg P$

$$
\begin{align*}
\neg Q \Rightarrow \neg P
&\Leftrightarrow Q \vee \neg P\\
&\Leftrightarrow \neg P \vee Q\\
&\Leftrightarrow P \Rightarrow Q
\end{align*}
$$

# Raisonnement
## par l'absurde
![[Logique 2024-06-11 16.20.54.excalidraw]]
## par analyse-synthèse
Pour trouver un tel $x \in E$ :
- Analyse: on suppose l'existence et on trouve des conditions sur un tel $x$
- Synthèse: on suppose les conditions trouvées et on montre que l'on a bien un tel $x$