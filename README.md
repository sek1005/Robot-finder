## Let's start with React => Components, Props, State and filtering

Premièrement, clone le *repo* et execute npm install.

## Un petit tour d'horizon
Tu trouveras dans le dossier src, le fichier app.js (Point d'entrée de l'application). Celui ci importe le jeux de données que nous allons utiliser et qui est stocké dans un fichier *data.json* dans le dossier data. C'est un tableau de 10 fiches d'identité de robot.

## Affichons nos robots :
- 1/ Créer une carte simple de robot avec une ```<div>``` et un ```<h2>``` qui affichera le nom du robot directement dans le return de *app.js* avec la méthode `map()` à partir des datas récuperer via le fichier json.
  
- 2/ Complète le template avec le username, phone, email et website.
  
- 3/ Création d'un composant RobotCard avec le template dans *./components/RobotCard.jsx* et remplacement du template par la balise `<RobotCard />`. On pensera à importer le composant dans *App.js* et à ajouter les props `robot` pour le transfert de donnée
  
- 4/ Création d'un composant `<RobotAdress />` permettant d'afficher les informations de l'adresse (Suite, zipcode, city). Import et mise en place dans le `<RobotCard />`. Puis, on va ajouter un bouton *toggle* permettant d'afficher ou non l'adresse. Ajout d'un state [display, setDisplay] initialisé à false. Onclick sur le bouton, on inverse la valeur de display (** si true, alors false et si false alors true **). Puis on se sert de cette valeur pour afficher ou non les infos adresse avec un opérateur ternaire.
  
- 5/ Ajout d'une image de robot à partir de son id dans le composant `<RobotCard />`. On utilisera l'url *https://robohash.org/< L'id du robot >* comme source pour l'image.

## Récuperer les datas depuis une API :
- 1/ Dans le composant App : Ajout d'un state [robots, setRobots] qui prend en valeur initial un tableau vide []
  
- 2/ Dans le composant App : Mettre en place la methode `useEffect` qui affichera un console.log('rendu du composant'), le log ne doit s'afficher que 2 fois au maximum.
  
- 3/ Dans votre `useEffect` faite un appel a l'api (https://wild.creativebrain.fr/robots) via la méthode `fetch()` et faite un log pour verifier que vous récuperer bien les datas.
  
- 4/ Dans la methode `.then()` de votre fetch qui récupere les data faite appel à la methode `setRobots()` pour assigner les datas retourner par l'api a votre state `robots`
  
- 5/ Mettre à jours votre methode `map()` pour boucler sur votre state `robots` plutôt que sur les datas du fichier json.

## Filtrons nos robots (BONUS) :
- 6/ Ajout d'un input de recherche dans le *app.js*. On memorisera sa valeur dans un state crée pour l'occasion. (cf doc => https://fr.legacy.reactjs.org/docs/forms.html)
  
- 7/ Implementer le résultat de la recherche directement dans le *return* de *app.js* en ajoutant un  fonction `.filter()` (cf doc => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) et un includes (cf doc => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) dans votre conition.

## Restructurons notre code (BONUS) :
- 8/ Passons maintenant notre espace de filtre dans son propre composant. Pour cela il faudra lui passer la valeur du state, ainsi que sa méthode pour la mise à jour.

## Félicitations. Vous venez de faire votre premier moteur de recherche de Robot.


