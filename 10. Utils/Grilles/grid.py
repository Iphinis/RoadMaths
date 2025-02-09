import matplotlib.pyplot as plt
import os

def create_grid(n:int, save:bool=True, show:bool=False) -> None:
    """
    Crée une grille avec n lignes/colonnes sur chaque cadran du plan.
    """
    assert(n >= 0)
    # Création de la grille
    size = max(1, n*2)
    plt.figure(figsize=(size, size))
    lines = range(-n, n+1)
    for l in lines:
        a = 0.25 if l != 0 else 0.5
        plt.axhline(y = l, color="black", linestyle="-", alpha=a)
        plt.axvline(x = l, color="black", linestyle="-", alpha=a)
    # Axes à la même échelle
    plt.axis('square')
    # Suppression des valeurs des axes
    plt.axis('off')

    # Sauvegarde
    if save:
        os.makedirs("src", exist_ok=True)
        file_name = "src/grid" + str(n) + ".png"
        plt.savefig(file_name, bbox_inches="tight")
        print(f"{file_name} saved.")

    # Affichage
    if show:
        plt.show()
        print(f"{file_name} showed.")
    
    plt.close()