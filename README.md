# 🦊 RudaStrona – Pełen poradnik Git w VS Code

Ten poradnik zawiera wszystkie komendy Git, których potrzebujesz do pracy nad projektem RudaStrona w zespole.  
Zakładamy, że Git jest zainstalowany i repo sklonowane.

---
```bash
# 1️⃣ Otwórz terminal w VS Code i przejdź do folderu projektu
cd RudaStrona
code .

# 2️⃣ Sprawdź status repozytorium
git status

# 3️⃣ Stwórz własną gałąź do pracy nad zadaniem
git checkout -b moja-gałąź
# (Zmień 'moja-gałąź' na nazwę zadania, np. dodaj-naglowek)

# 4️⃣ Dodaj zmienione pliki do commita
git add .

# 5️⃣ Zapisz zmiany w commicie z opisem
git commit -m "Dodano nagłówek i przycisk"

# 6️⃣ Wyślij swoją gałąź na GitHub
git push origin moja-gałąź

# 7️⃣ Tworzenie Pull Request (PR) na GitHubie
# - Otwórz repo w przeglądarce
# - Kliknij 'Compare & pull request' przy swojej gałęzi
# - Napisz opis zmian i kliknij 'Create Pull Request'
# - Po akceptacji PR zmiany trafią do main

# 8️⃣ Pobierz najnowsze zmiany z main przed rozpoczęciem pracy
git checkout main
git pull origin main

# 9️⃣ Wróć na swoją gałąź i zaktualizuj ją o zmiany z main
git checkout moja-gałąź
git merge main
# Jeśli wystąpią konflikty, VS Code podświetli je w plikach
# Po poprawkach:
git add .
git commit -m "Rozwiązano konflikty i zaktualizowano gałąź"

# 🔀 Merge swojej gałęzi do main lokalnie
git checkout main
git merge moja-gałąź
git push origin main

# 💡 Dobre praktyki:
# - Każda zmiana → nowa gałąź
# - Commituj często i opisowo
# - Zawsze pull przed rozpoczęciem pracy
# - Nigdy nie pracuj bezpośrednio na main
```