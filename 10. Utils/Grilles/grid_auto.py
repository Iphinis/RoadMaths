import grid

debut = int(input("Début : "))
fin = int(input("Fin : "))
for n in range(debut, fin+1):
    grid.create_grid(n)