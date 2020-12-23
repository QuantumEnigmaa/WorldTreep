GUIDE D'UTILISATION :
Pour lancer le site en local, veuillez utiliser un terminal powershell ou nodeJS. Une fois que vous serez dans le répertoire
contenant les node_modules ainsi que le répertoire src, lancez la commande "ng serve".

Accédez au site en localhost sur le port 4200.

Vous serez automatiquement redirigé vers la page d'accueil. Sur certaines machines, un bug d'affichage peut avoir lieu : les
diverses cartes peuvent déplacer sur le pied-de-page du site.

Vous pouvez naviguer sur les différentes pages du site en utilisant la barre de navigation du haut ou en vous rendant dans le
pied-de-page dans la catégorie "plan du site".

Les pages "Jardinage" et "A propos" ne sont présentes qu'à titre indicatif, pour donner un exemple des futurs pages qui auraient
pu être développées avec un peu plus de temps.

Les 4 pages principales sont les pages "continent". Une fois arrivé sur l'une d'entre elle, vous trouverez une brève description
du continent ainsi qu'un tableau de "statistiques". En bas de ces deux éléments, vous trouverez un bouton intitulé "Découvrir les
plantes" suivi du nom du continent actuel.

En cliquant sur ce bouton, la page sera automatiquement descendue à l'emplacement du premier thème : "les plus grands arbres".

Dans ce thème vous serons présenté 3 des plus grands arbres du continent, une photo d'eux ainsi que leur année de découverte et
leur nom scientifique. Un bouton "suite" vous emmènera au prochain thème en descendant une nouvelle fois la page.

Le deuxième thème est "les plantes comestibles" et présente de la manière que précédemment 3 plantes comestibles du continent.

N'essayez pas d'utiliser la barre de recherche, nous n'avons pas eu le temps de nous pencher dessus. Son existence sur la
version finale du site n'est là que pour donner un aperçu de notre vision du site : c'est un axe de développement de celui-ci.

Une section "Nous contacter" est disponible dans le pied-de-page, permettant aux utilisateurs de nous contacter par mail en
cliquant sur un de nos prénoms ou via des réseaux sociaux.


INFORMATIONS DIVERSES :
  - Style : Dans l'objectif de priviligier l'aspect "backend" du site et par manque de temps, nous n'avons pas pu soigner
            le style des pages autant que nous l'aurions souhaité. Ainsi, l'apparence générale des pages continent se trouve
            être très bancale. Cependant, il est certain qu'à notre stade d'avancement actuel, nous pourrions nous pencher sur
            ceproblème et donner une bien meilleure apparence à chaque page.

  - Problèmes divers : Nous avons renontré un certain nombre de problèmes avec notre API ce qui nous a énormément retardé dans
                       le développement de notre site. Grâce au discord, à la communauté de l'api et à une lecture intensive de
                       la documentation, nous avons pu finalement réaliser nos requêtes.

  - Choix des plantes affichées : Etant donné que nous ne pouvions pas réaliser de requêtes plus précises que celle que nous
                                  avons faites, chaque requête nous renvoyait une bonne quinzaine de résultats. Nous avons donc
                                  pris le parti de choisir aléatoirement les plantes affichées (ce qui peut se voir dans le
                                  switch)

  - Choix des zones géographiques : L'api ne donnant pas accès à des zones bien précises comme nous l'aurions souhaité, nous
                                    avons donc choisi des zones géographiques se rapprochant le plus de celles que nous
                                    souhaitions au départ.

  - Découpage du code : Pour des raisons de praticité de développement, nous avons choisi d'écrire le template html et css dans la
                        partie "template" du composant concerné plutôt que de créer des fichiers html et css pour chaque.

                        Nous avons également pris le parti d'écrire le style à l'intérieur des balises html pour plus de rapidité
                        de développement. Avec plus de temps, nous aurions pu séparer ceux-là pour plus de lisibilité.

                        Nous sommes également conscient qu'un découpage supplémentaire aurait pu être réalisé en créant de nouveaux
                        composants pour plus de réutilisation comme par exemple la partie de code contenant le switchcase. Cependant
                        du fait des modifications précises apportées selon la page concernée, nous avons préféré laissé cela tel quel.

  - Routing : Une redirection vers l'accueil a été paramétrée ce qui fait qu'en se connectant au site sans préciser
              de page en particulier l'utilisateur est redirigé vers l'accueil.

              Une page personnalisée a été créée pour tenir compte du cas d'erreur 404 au cas où un utilisateur
              essaierai d'accéder à une page n'existant pas.

  - Suivi de version : Nous avons poussé de nombreuses versions différentes de notre site dans un repository github dédié et avons
                       utilisé les commandes git pour pouvoir avoir un suivi de version efficace et pouvoir récupérer les modifications
                       de chacun.

  - Favicon : Malgré plusieurs tentatives pour changer le favicon du site, notamment avec "logo.ico", un problème d'
              affichage fait que nous avons décidé de laisser le favicon par défaut

  - Composant de service : Au départ, nous avions stocké notre token d'accès ainsi que l'adresse de l'api dans l'environnement.
                           Cependant, suite aux erreurs de CORS et à d'autres erreurs nées de la concaténation de plusieurs
                           bouts de requêtes http, nous avons pris le parti d'écrire les requêtes directement dans les appels à
                           la fonction get() pour éviter toute mauvaise surprise.

  - Images : toutes nos images se trouvent dans le dossier "assets"

  - Tests : Faute de temps et du fait des nombreuses difficultées que nous avons rencontré avec l'utilisation de l'api, nous
            n'avons malheureusement pas eu le temps de programmer des tests pour nos différents composants.

  - plant.ts : Ce fichier contient la structure de donnée accompagnée de son constructeur pour contenir les données que nous recevons
               de notre API.

  - Angular Material : Nous avons utilisé le composant "card" d'Angular material pour afficher nos données

  - Bootstrap : Nous avons utilisé divers composant de Bootstrap, notamment dans la barre de navigation et dans la structuration de
                certaines parties en html.

