# Guide de Mise à Jour du Site (Déploiement)

Ce guide explique comment mettre à jour le site `ContreCareDAMS` sur le serveur de production (`20.199.130.29`).

## Pré-requis
- Avoir accès au terminal (PowerShell ou CMD).
- Avoir le mot de passe de l'utilisateur `hugo` sur le serveur.

---

## Méthode Rapide (Script Automatisé)

J'ai créé un script `deploy.ps1` à la racine du projet qui automatise la plupart des tâches.

1. **Ouvrez un terminal PowerShell** dans le dossier du projet.
2. **Lancez le script** :
   ```powershell
   ./deploy.ps1
   ```
3. **Suivez les instructions** :
   - Le script va construire le site (`npm run build`).
   - Il va créer une archive `site.tar.gz`.
   - Il va vous demander votre mot de passe pour envoyer le fichier via `scp`.
   - Il vous affichera les **3 commandes à copier-coller** sur le serveur pour finaliser.

---

## Méthode Manuelle (Pas à pas)

Si vous préférez tout faire vous-même, voici les étapes :

### 1. Sur votre ordinateur (Local)

1. **Construction du site** :
   ```bash
   npm run build
   ```
2. **Création de l'archive** :
   ```bash
   tar -czf site.tar.gz -C build .
   ```
3. **Envoi sur le serveur** (remplacez par votre mot de passe quand demandé) :
   ```bash
   scp site.tar.gz hugo@20.199.130.29:~/
   ```

### 2. Sur le serveur (Distant)

Connectez-vous si ce n'est pas déjà fait :
```bash
ssh hugo@20.199.130.29
```

Puis lancez ces commandes pour remplacer l'ancienne version :

```bash
# 1. Nettoyer le dossier web (ATTENTION : supprime tout le site actuel)
sudo rm -rf /var/www/html/*

# 2. Extraire la nouvelle version
sudo tar -xzf ~/site.tar.gz -C /var/www/html/

# 3. Rétablir les permissions
sudo chown -R www-data:www-data /var/www/html
```

### 3. Vérification

Ouvrez [http://20.199.130.29](http://20.199.130.29) et rafraîchissez la page (Ctrl+F5) pour voir les changements.
