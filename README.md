# Utwórz własną gałąź (branch) do pracy nad zadaniem
git checkout -b moja-gałąź

# Dodaj zmienione pliki do commita
git add .

# Zapisz zmiany w commicie z opisem
git commit -m "Opis zmian, np. dodano nagłówek"

# Wyślij swoją gałąź na GitHub
git push origin moja-gałąź

# Na GitHubie utwórz Pull Request, żeby połączyć zmiany do main

# Pobierz najnowsze zmiany od innych przed rozpoczęciem pracy
git checkout main
git pull origin main

# Wróć na swoją gałąź, jeśli chcesz kontynuować pracę
git checkout moja-gałąź